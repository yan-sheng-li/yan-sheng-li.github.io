<template>
    <div id="app">
        <h1>code</h1>
        <input v-model="query" placeholder="请输入key..." />
        <ul v-if="query && filteredResources.length">
            <li v-for="resource in filteredResources" :key="resource.name">
                <h4 style="color: blueviolet;">{{ resource.name }}</h4>
                <h4>{{ resource.link }}</h4>
                <button @click="copyToClipboard(resource)">复制链接</button>
            </li>
        </ul>
        <p v-if="query && !filteredResources.length">没有找到匹配的资源</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: '', // 输入框的绑定值
            resources: [
                { name: '体育器材管理系统报告', link: 'sport66' },
                { name: '游戏信息报告', link: '20230705' },
                { name: '学籍管理系统报告', link: 'xueji0618' },
                { name: '歌曲管理系统报告', link: 'keshe-song' },
                { name: '图书借阅win版报告', link: '20221204' },
                { name: '毕业设计全套资料', link: '20220606' },
                { name: '会议预约报告', link: '20220603' },
                { name: '图书借阅系统告', link: '20220629' },
                { name: '超市信息系统报告', link: '20220627' },
                { name: '图书进销系统报告', link: '20220624' },
                { name: '选座管理报告', link: 'xuanzuo1224' },
                { name: '微友圈报告', link: 'weiyou0109' },
                { name: '停车场报告', link: 'parking0108' },
                { name: 'ATM报告', link: 'atm-demo0110' },
                { name: '考勤报告', link: 'kaoqin0201' },
                { name: 'py银行源码', link: 'bank0327' },
                { name: 'pyFlight源码', link: 'flight03271' },
                { name: 'py图书源码', link: 'book032710' },
                { name: '人事管理系统报告', link: 'renshi0608' },
                //   2.0
                { name: '运动器材借还管理报告', link: '链接：https://pan.baidu.com/s/1OdZtiGGNBCWCuTrhcXsdsw 提取码：prst' },
                { name: '图书资源管理系统GUI报告', link: '链接：https://pan.baidu.com/s/1-paLCgLONVyRe4jF7x9PsA?pwd=d0go 提取码：d0go' },
                { name: '选课管理系统GUI报告', link: '链接：https://pan.baidu.com/s/1O22lYpkdtH3Bh0pWEXcK7g?pwd=elr3 提取码：elr3' },
                { name: '二手车（GUI）报告', link: '链接: https://pan.baidu.com/s/1hb66nnQHfx_Pg78rEqJE3g?pwd=ep9j 提取码: ep9j' },
                { name: '人事管理系统（GUI）', link: '链接：https://pan.baidu.com/s/1eKjJ8_UjFPJqGZuXhEmsBw 提取码：xhab' },
                { name: '图书借阅（Web）', link: '链接：https://pan.baidu.com/s/1ALQtkWFpm3rExDIKC4mm_Q 提取码：hcww' },
                { name: '商场人员管理（GUI）', link: '链接：https://pan.baidu.com/s/1fan6NAbZpy4rGhJnXu-dSA 提取码：6ip3' },
                { name: '考勤打卡管理（GUI）', link: '链接：https://pan.baidu.com/s/10AWhaK5PwJMrdZAdzEmrgQ 提取码：mshj' },
                { name: '爬虫-豆瓣数据-分析（Python）', link: '链接：https://pan.baidu.com/s/1i3hnwHYqCr7ObtiydXj_Eg 提取码：yabh' },
                { name: '运动会信息管理(Web)', link: '链接：https://pan.baidu.com/s/1hx7iSgavs9YQ1aiInUNj_w 提取码：hes7' },
                { name: '运动器材借还管理（GUI）', link: '链接：https://pan.baidu.com/s/1p4pV5T3bGPC8VyTiaCsmjw 提取码：ufnl' },
                { name: '微友圈（Web）', link: '链接：https://pan.baidu.com/s/1acRvN_Iop7A7Y4_lNQgb2Q 提取码：n0gq' },
                { name: '人脸识别（Web）', link: '链接：https://pan.baidu.com/s/1BcGGse8poJ_9q2yu-mSsXw 提取码：mzd2' },
                { name: '就诊预约（小程序）', link: '链接：https://pan.baidu.com/s/1KaNYCJymSddpq-kfz7lVtg 提取码：e08f' },
                { name: '租车行者（Web）', link: '链接：https://pan.baidu.com/s/1HR2SUwLsU3JGgQrejjnliQ 提取码：xcsh' },
                { name: '图书管理（Python）', link: '链接：https://pan.baidu.com/s/11gTI993TR1bERHFuGX-4Zw 提取码：fxrd' },
                { name: '航空订票（Python）', link: '链接：https://pan.baidu.com/s/1iQRH5S_2CWiDKvfhf9jLoA 提取码：ywtv' },
                { name: '银行ATM（Python）', link: '链接：https://pan.baidu.com/s/1uBHeYc0R3CQWCFZpRxbv3w 提取码：43b9' },
                { name: '选座系统（Web）', link: '链接：https://pan.baidu.com/s/1JMVwdGztz8OYXA9AjKoPNA 提取码：9zsv' },
                { name: '党务信息管理（Web）', link: '链接: https://pan.baidu.com/s/1RyFxyZtdB2J_8Cwq9X_diQ?pwd=2hj5 提取码: 2hj5' },
                { name: '小说分词统计-数据可视化（Python）', link: '链接：https://pan.baidu.com/s/1q336UFoqTxWJsVlDK3hryA 提取码：xxz7' },
                { name: '班级通讯录GUI', link: '链接：https://pan.baidu.com/s/1VtmH51xJO4chcjkbgrjlbg 提取码：z655' },
                { name: '酒店管理GUI-plus', link: '链接：https://pan.baidu.com/s/11_lpfg0cj5ojQ69x707zwQ 提取码：dloj' },
                { name: '图书资源管理系统GUI', link: '链接：https://pan.baidu.com/s/1RNuo5syxHHYFLQfYHAnr1g 提取码：rbys' },
                { name: '工资管理GUI', link: '链接：https://pan.baidu.com/s/1s6cKn5O6Bkdf4e63jQx52w?pwd=8q98 提取码：8q98' },
                { name: '二手车（GUI）', link: '链接: https://pan.baidu.com/s/1mPaa_rEI7-jI_w23XELSIA?pwd=wqr3 提取码: wqr3' },
                { name: '模拟物业管理GUI', link: '链接: https://pan.baidu.com/s/1UC9J2SmFZkPk0ghlL0rVOw?pwd=3mxk 提取码: 3mxk' },
                { name: '选课管理GUI', link: '链接: https://pan.baidu.com/s/1pQCbRiVxBNRxgc2iniQpiw?pwd=edcg 提取码: edcg' },
                { name: '人事管理系统Web', link: '链接: https://pan.baidu.com/s/128GNoKBy_C8w9YZvBypb8g?pwd=iks5 提取码: iks5' },
                { name: '图书管理web简单版', link: '链接: https://pan.baidu.com/s/1j-dTMeHsMQ99tNeZTZ60qQ?pwd=bmwi 提取码: bmwi' },
                { name: '简历模板批量采集-Python', link: '链接: https://pan.baidu.com/s/1Nnui88KhNBxYEZvH3pL5ew?pwd=a636 提取码: a636' },
                { name: '图书借阅-控制台版-源码', link: '链接: https://pan.baidu.com/s/1TRPdfKdLvhOSwZN1QWOftg?pwd=gedf 提取码: gedf' },
                {name:'在线聊天室-源码',link:'链接: https://pan.baidu.com/s/1iBkgxvmCpgA4d9aenrz2_Q?pwd=v6i7 提取码: v6i7'},
                {name:'在线聊天室2.0-源码',link:'链接: https://pan.baidu.com/s/1PA8vBBqQ-1pjftJWfFpupg?pwd=bq6z 提取码: bq6z'}

            ], // 资源对象数组
        };
    },
    computed: {
        filteredResources() {
            return this.resources.filter(resource =>
                resource.name.toLowerCase().includes(this.query.toLowerCase())
            );
        },
    },
    methods: {
        copyToClipboard(resource) {
            console.log(resource);
            var text = "资源：" + resource.name + "\n" + "地址或解压秘钥：" + resource.link + "\n项目合集：http://www.liyansheng.top/project/" +
                "\n需要可联系QQ：1761724207"
            console.log(text);
            navigator.clipboard.writeText(text).then(
                () => {
                    // alert('链接已复制到剪贴板！');
                },
                err => {
                    alert('复制失败，请手动复制。');
                    console.error('Failed to copy: ', err);
                }
            );
        },
    },
};
</script>

<style>
input {
    padding: 10px;
    font-size: 16px;
    width: 300px;
    margin-bottom: 20px;
}

button {
    margin-top: 5px;
    padding: 5px 10px;
    font-size: 14px;
    color: white;
    background-color: #42b983;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #3a8e7d;
}
</style>