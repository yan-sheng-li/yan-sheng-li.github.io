# map三级下钻
> 可返回上级，下钻丝滑，精简
## 参考案例
```vue
<template>
    <div>

        <div ref="mapContainer" style="width: 100%; height: 600px;"></div>
        <button @click="goBack">返回上一级</button>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios';
import router from '../router';

export default {
    name: 'ChinaMap',
    data() {
        return {
            currentLevel: 'china',  // 当前显示的地图层级
            levelStack: [],          // 地图层级栈
            coordinates: [          // 标记点坐标
                { name: '北京', value: [116.405285, 39.904989] },
                { name: '上海', value: [121.473701, 31.230416] }
            ]
        };
    },
    mounted() {
        this.loadMapData();
    },
    watch: {
        '$route.query.code': function () {
            // 当路由参数变化时重新加载地图数据
            this.loadMapData();
        }
    },
    methods: {
        goBack() {
            router.push({ query: { code: this.$route.query.fromCode } });
        },
        async loadMapData() {
            try {
                const adcode = this.$route.query.code || '100000';  // 默认加载中国地图

                // 获取 geoJSON 数据
                const response = await axios.get(`https://geo.datav.aliyun.com/areas_v3/bound/${adcode}_full.json`);
                const chinaGeoJson = response.data;

                // 注册地图
                echarts.registerMap(adcode, chinaGeoJson);

                // 提取 adcode 映射表
                const adcodeMap = this.extractAdcodeMap(chinaGeoJson);

                // 初始化 ECharts 实例
                const chart = echarts.init(this.$refs.mapContainer);

                // 配置项
                const option = {
                    title: {
                        text: '中国地图',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            const adcode = adcodeMap[params.name] || '未知';
                            return `${params.name}<br>adcode: ${adcode}`;
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: 100000,
                        text: ['High', 'Low'],
                        calculable: true
                    },
                    series: [
                        {
                            name: '数值',
                            type: 'map',
                            map: adcode,  // 使用 adcode 作为地图名称
                            roam: true,
                            itemStyle: {
                                areaColor: '#d3d3d3',  // 默认区域颜色
                                borderColor: '#111',   // 边框颜色
                                borderWidth: 1         // 边框宽度
                            },
                            emphasis: {
                                focus: 'self',
                                itemStyle: {
                                    areaColor: '#f4e925'  // 高亮颜色
                                }
                            },
                            data: [
                                { name: '北京市', value: 500, adcode: '110000' },
                                { name: '上海市', value: 11300, adcode: '310000' },
                                { name: '云南省', value: 300, adcode: '530000' },
                                { name: '广东省', value: 300, adcode: '440000' },
                                // 其他省份的数据
                            ]
                        },
                    ]
                };

                // 使用配置项设置图表
                chart.setOption(option);

                // 监听点击事件
                chart.on('click', (params) => {
                    const adcode = adcodeMap[params.name];
                    if (adcode) {
                        this.levelStack.push(this.currentLevel);  // 记录当前层级
                        this.currentLevel = adcode;  // 更新当前层级
                        router.push({ query: { code: adcode, fromCode: this.$route.query.code } });
                    }
                });
            } catch (error) {
                console.error('Failed to load map data:');
            }
        },

        extractAdcodeMap(geoJson) {
            const adcodeMap = {};
            geoJson.features.forEach(feature => {
                const name = feature.properties.name;
                const adcode = feature.properties.adcode;
                if (name && adcode) {
                    adcodeMap[name] = adcode;
                }
            });
            return adcodeMap;
        }
    }
}
</script>
```

## 效果
省级

![](http://cdn.qiniu.liyansheng.top/img/20240812132313.png)

市级

![](http://cdn.qiniu.liyansheng.top/img/20240812132347.png)

县级

![](http://cdn.qiniu.liyansheng.top/img/20240812132417.png)