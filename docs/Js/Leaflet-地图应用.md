# Leaflet-地图应用

## 定位

![image-20240719184132902](http://cdn.qiniu.liyansheng.top/img/image-20240719184132902.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>点击定位</title>
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <!-- Leaflet LocateControl CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet.locatecontrol/dist/L.Control.Locate.min.css" />
</head>
<body>
    <div id="map" style="height: 400px;"></div>

    <!-- Leaflet JavaScript -->
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <!-- Leaflet LocateControl JavaScript -->
    <script src="https://unpkg.com/leaflet.locatecontrol/dist/L.Control.Locate.min.js"></script>
    <script>
        // 创建地图实例
        var map = L.map('map').setView([51.505, -0.09], 13);

        // 添加地图图层
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // 添加定位控件
        L.control.locate().addTo(map);
    </script>
</body>
</html>

```



## 点击地图获取坐标

![image-20240719184307104](http://cdn.qiniu.liyansheng.top/img/image-20240719184307104.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>地图选点-输出标记位置</title>
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <style>
        #map { height: 800px; }
    </style>
</head>
<body>
    <div id="map"></div>

    <!-- Leaflet JavaScript -->
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script>
        // 创建地图实例
        var map = L.map('map').setView([51.505, -0.09], 13);

        // 添加地图图层
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // 创建一个标记层
        var markerLayer = L.layerGroup().addTo(map);

        // 定义地图点击事件处理程序
        function onMapClick(e) {
            // 清除之前的标记
            markerLayer.clearLayers();
            // 添加新的标记
            var marker = L.marker(e.latlng).addTo(markerLayer);
            // 输出点击位置的经纬度信息
            alert("You clicked the map at " + e.latlng);
        }
        // 添加地图点击事件监听器
        map.on('click', onMapClick);
    </script>
</body>
</html>

```

## 标注点连线

![image-20240719184402069](http://cdn.qiniu.liyansheng.top/img/image-20240719184402069.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>点与点路线标记</title>
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <!-- Leaflet JavaScript -->
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
</head>
<body>
    <div id="map" style="height: 400px;"></div>

    <script>
        // 创建地图实例
        var map = L.map('map').setView([51.505, -0.09], 13);

        // 添加地图图层
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // 绘制路线
        var latlngs = [
            [51.505, -0.09],
            [51.51, -0.1],
            [51.51, -0.12]
        ];

        var polyline = L.polyline(latlngs, { color: 'red' }).addTo(map);

        // 添加标记点
        L.marker(latlngs[0]).addTo(map).bindPopup('起点');
        L.marker(latlngs[latlngs.length - 1]).addTo(map).bindPopup('终点');
    </script>
</body>
</html>

```