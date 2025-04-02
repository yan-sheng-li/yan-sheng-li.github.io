
# 常用API汇总

## wx.showToast

#### 1. **功能说明**

`wx.showToast` 用于在页面上显示一个轻量级的提示框，通常用于操作成功、失败或加载中的提示。

#### 2. **参数说明**

|   参数   |   类型   | 必填 |                             说明                             |
| :------: | :------: | :--: | :----------------------------------------------------------: |
|  title   |  string  |  是  |                         提示的内容。                         |
|   icon   |  string  |  否  | 提示的图标，支持 `success`、`loading`、`none`，默认为 `none`。 |
|  image   |  string  |  否  |            自定义图标的路径，优先级高于 `icon`。             |
| duration |  number  |  否  |          提示的显示时间，单位为毫秒，默认为 1500。           |
|   mask   | boolean  |  否  |       是否显示透明蒙层，防止触摸穿透，默认为 `false`。       |
| success  | function |  否  |                   接口调用成功的回调函数。                   |
|   fail   | function |  否  |                   接口调用失败的回调函数。                   |
| complete | function |  否  |      接口调用结束的回调函数（无论成功或失败都会执行）。      |

#### 3. **示例代码**

```javascript
Page({
  showToast() {
    wx.showToast({
      title: '操作成功',
      icon: 'success',
      duration: 2000,
      mask: true,
      success(res) {
        console.log('提示显示成功', res);
      },
      fail(err) {
        console.log('提示显示失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.showToast` 后，页面上会显示一个提示框，内容为“操作成功”，并带有成功图标。
2. 提示框会在 2 秒后自动消失。
3. 由于设置了 `mask: true`，提示框显示期间无法操作页面其他部分。

#### 5. **注意事项**

- `icon` 为 `loading` 时，提示框不会自动消失，需要手动调用 `wx.hideToast` 关闭。
- `title` 最多支持 7 个汉字，超出部分会被截断。

## wx.showModal

#### 1. **功能说明**

`wx.showModal` 用于显示一个模态对话框，通常用于确认操作或提示重要信息。

#### 2. **参数说明**

|    参数     |   类型   | 必填 |                             说明                             |
| :---------: | :------: | :--: | :----------------------------------------------------------: |
|    title    |  string  |  否  |                         提示的标题。                         |
|   content   |  string  |  是  |                         提示的内容。                         |
| showCancel  | boolean  |  否  |              是否显示取消按钮，默认为 `true`。               |
| cancelText  |  string  |  否  |                取消按钮的文字，默认为“取消”。                |
| confirmText |  string  |  否  |                确认按钮的文字，默认为“确定”。                |
|   success   | function |  否  | 接口调用成功的回调函数，返回 `res.confirm` 和 `res.cancel`。 |
|    fail     | function |  否  |                   接口调用失败的回调函数。                   |
|  complete   | function |  否  |      接口调用结束的回调函数（无论成功或失败都会执行）。      |

#### 3. **示例代码**

```javascript
Page({
  showModal() {
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      showCancel: true,
      cancelText: '取消',
      confirmText: '删除',
      success(res) {
        if (res.confirm) {
          console.log('用户点击了删除');
        } else if (res.cancel) {
          console.log('用户点击了取消');
        }
      },
      fail(err) {
        console.log('对话框显示失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.showModal` 后，页面上会显示一个模态对话框，标题为“提示”，内容为“确定要删除吗？”。
2. 对话框包含“取消”和“删除”两个按钮。
3. 用户点击“删除”后，控制台会输出“用户点击了删除”；点击“取消”后，控制台会输出“用户点击了取消”。

#### 5. **注意事项**

- `content` 支持多行文本，但建议控制内容长度，避免影响用户体验。
- 如果不需要取消按钮，可以将 `showCancel` 设置为 `false`。

## wx.showLoading

#### 1. **功能说明**

`wx.showLoading` 用于显示加载提示，通常用于需要等待的操作（如网络请求）。`wx.hideLoading` 用于隐藏加载提示。

#### 2. **参数说明**

**`wx.showLoading` 参数：**

|   参数   |   类型   | 必填 |                        说明                        |
| :------: | :------: | :--: | :------------------------------------------------: |
|  title   |  string  |  是  |                    提示的内容。                    |
|   mask   | boolean  |  否  |  是否显示透明蒙层，防止触摸穿透，默认为 `false`。  |
| success  | function |  否  |              接口调用成功的回调函数。              |
|   fail   | function |  否  |              接口调用失败的回调函数。              |
| complete | function |  否  | 接口调用结束的回调函数（无论成功或失败都会执行）。 |

**`wx.hideLoading` 参数：**
无参数。

#### 3. **示例代码**

javascript

Copy

```javascript
Page({
  showLoading() {
    wx.showLoading({
      title: '加载中',
      mask: true,
      success(res) {
        console.log('加载提示显示成功', res);
      },
      fail(err) {
        console.log('加载提示显示失败', err);
      }
    });

    // 模拟异步操作
    setTimeout(() => {
      wx.hideLoading();
      console.log('加载完成');
    }, 2000);
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.showLoading` 后，页面上会显示一个加载提示，内容为“加载中”。
2. 由于设置了 `mask: true`，加载提示显示期间无法操作页面其他部分。
3. 2 秒后，调用 `wx.hideLoading` 隐藏加载提示。

#### 5. **注意事项**

- `wx.showLoading` 不会自动消失，需要手动调用 `wx.hideLoading` 关闭。
- `title` 最多支持 7 个汉字，超出部分会被截断。

------

## wx.showActionSheet

#### 1. **功能说明**

`wx.showActionSheet` 用于在页面底部显示一个操作菜单，用户可以选择菜单项进行操作。

#### 2. **参数说明**

|   参数   |   类型   | 必填 |                             说明                             |
| :------: | :------: | :--: | :----------------------------------------------------------: |
| itemList |  Array   |  是  |               菜单项列表，最多支持 6 个选项。                |
| success  | function |  否  | 接口调用成功的回调函数，返回 `res.tapIndex`（用户点击的菜单项索引）。 |
|   fail   | function |  否  |                   接口调用失败的回调函数。                   |
| complete | function |  否  |      接口调用结束的回调函数（无论成功或失败都会执行）。      |

#### 3. **示例代码**

```javascript
Page({
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['保存', '分享', '删除'],
      success(res) {
        const index = res.tapIndex; // 用户点击的菜单项索引
        switch (index) {
          case 0:
            console.log('用户点击了保存');
            break;
          case 1:
            console.log('用户点击了分享');
            break;
          case 2:
            console.log('用户点击了删除');
            break;
          default:
            console.log('未知操作');
        }
      },
      fail(err) {
        console.log('操作菜单显示失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.showActionSheet` 后，页面底部会显示一个操作菜单，包含“保存”、“分享”、“删除”三个选项。
2. 用户点击某个选项后，控制台会输出对应的操作。

#### 5. **注意事项**

- `itemList` 最多支持 6 个选项，超出部分会被截断。
- 如果用户点击了菜单以外的区域（即取消操作），`success` 回调不会执行。

## wx.setNavigationBarTitle

#### 1. **功能说明**

`wx.setNavigationBarTitle` 用于动态设置当前页面的导航栏标题。

#### 2. **参数说明**

|   参数   |   类型   | 必填 |                        说明                        |
| :------: | :------: | :--: | :------------------------------------------------: |
|  title   |  string  |  是  |                    导航栏标题。                    |
| success  | function |  否  |              接口调用成功的回调函数。              |
|   fail   | function |  否  |              接口调用失败的回调函数。              |
| complete | function |  否  | 接口调用结束的回调函数（无论成功或失败都会执行）。 |

#### 3. **示例代码**

```javascript
Page({
  setTitle() {
    wx.setNavigationBarTitle({
      title: '新标题',
      success(res) {
        console.log('导航栏标题设置成功', res);
      },
      fail(err) {
        console.log('导航栏标题设置失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.setNavigationBarTitle` 后，当前页面的导航栏标题会变为“新标题”。

#### 5. **注意事项**

- `title` 支持动态设置，但建议控制标题长度，避免影响导航栏布局。



## wx.pageScrollTo

#### 1. **功能说明**

`wx.pageScrollTo` 用于将页面滚动到指定位置，支持滚动到目标位置或指定滚动距离。

#### 2. **参数说明**

|   参数    |   类型   | 必填 |                        说明                        |
| :-------: | :------: | :--: | :------------------------------------------------: |
| scrollTop |  number  |  是  |         滚动到页面的目标位置，单位为 px。          |
| duration  |  number  |  否  |      滚动动画的时长，单位为 ms，默认为 300。       |
|  success  | function |  否  |              接口调用成功的回调函数。              |
|   fail    | function |  否  |              接口调用失败的回调函数。              |
| complete  | function |  否  | 接口调用结束的回调函数（无论成功或失败都会执行）。 |

#### 3. **示例代码**

```javascript
Page({
  scrollToTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 500,
      success(res) {
        console.log('页面滚动成功', res);
      },
      fail(err) {
        console.log('页面滚动失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.pageScrollTo` 后，页面会滚动到顶部，滚动动画时长为 500ms。

#### 5. **注意事项**

- `scrollTop` 为 0 时，表示滚动到页面顶部。
- `duration` 设置为 0 时，页面会立即滚动到目标位置，没有动画效果。



## wx.setStorageSync

#### 1. **功能说明**

`wx.setStorageSync` 和 `wx.getStorageSync` 用于以同步方式存储和获取本地缓存数据。

#### 2. **参数说明**

**`wx.setStorageSync` 参数：**

| 参数 |  类型  | 必填 |        说明        |
| :--: | :----: | :--: | :----------------: |
| key  | string |  是  | 本地缓存中的 key。 |
| data |  any   |  是  |  需要存储的内容。  |

**`wx.getStorageSync` 参数：**

| 参数 |  类型  | 必填 |        说明        |
| :--: | :----: | :--: | :----------------: |
| key  | string |  是  | 本地缓存中的 key。 |

#### 3. **示例代码**

```javascript
Page({
  setStorage() {
    wx.setStorageSync('name', '小明');
    console.log('数据存储成功');
  },

  getStorage() {
    const name = wx.getStorageSync('name');
    console.log('获取的数据', name);
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.setStorageSync` 后，会将 `name` 和 `小明` 存储到本地缓存中。
2. 调用 `wx.getStorageSync` 后，会从本地缓存中获取 `name` 的值，并输出“小明”。

#### 5. **注意事项**

- `wx.setStorageSync` 和 `wx.getStorageSync` 是同步方法，会阻塞后续代码执行。
- 本地缓存的最大容量为 10MB，建议合理使用。

## wx.request

#### 1. **功能说明**

`wx.request` 用于发起 HTTP 请求，通常用于与服务器交互。

#### 2. **参数说明**

|   参数   |   类型   | 必填 |                        说明                        |
| :------: | :------: | :--: | :------------------------------------------------: |
|   url    |  string  |  是  |                    请求的 URL。                    |
|  method  |  string  |  否  | 请求的方法，支持 `GET`、`POST` 等，默认为 `GET`。  |
|   data   |  object  |  否  |                    请求的参数。                    |
|  header  |  object  |  否  |                  请求的 header。                   |
| success  | function |  否  |     接口调用成功的回调函数，返回 `res.data`。      |
|   fail   | function |  否  |              接口调用失败的回调函数。              |
| complete | function |  否  | 接口调用结束的回调函数（无论成功或失败都会执行）。 |

#### 3. **示例代码**

```javascript
Page({
  getData() {
    wx.request({
      url: 'https://example.com/api/data',
      method: 'GET',
      success(res) {
        console.log('请求成功', res.data);
      },
      fail(err) {
        console.log('请求失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.request` 后，会向 `https://example.com/api/data` 发起 GET 请求。
2. 请求成功后，控制台会输出服务器返回的数据。

#### 5. **注意事项**

- `url` 必须是 HTTPS 协议，不支持 HTTP。
- `data` 参数会根据 `method` 自动转换为查询字符串或请求体。

## wx.chooseImage

#### 1. **功能说明**

`wx.chooseImage` 用于从相册或相机选择图片，通常用于上传图片或编辑头像。

#### 2. **参数说明**

|    参数    |   类型   | 必填 |                             说明                             |
| :--------: | :------: | :--: | :----------------------------------------------------------: |
|   count    |  number  |  否  |              最多可以选择的图片数量，默认为 9。              |
|  sizeType  |  Array   |  否  | 图片尺寸类型，支持 `original`（原图）和 `compressed`（压缩图）。 |
| sourceType |  Array   |  否  |     图片来源，支持 `album`（相册）和 `camera`（相机）。      |
|  success   | function |  否  | 接口调用成功的回调函数，返回 `res.tempFilePaths`（图片临时路径）。 |
|    fail    | function |  否  |                   接口调用失败的回调函数。                   |
|  complete  | function |  否  |      接口调用结束的回调函数（无论成功或失败都会执行）。      |

#### 3. **示例代码**

```javascript
Page({
  chooseImage() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        console.log('选择的图片路径', tempFilePaths);
      },
      fail(err) {
        console.log('选择图片失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.chooseImage` 后，会弹出选择图片的界面，用户可以从相册或相机选择图片。
2. 选择成功后，控制台会输出图片的临时路径。

#### 5. **注意事项**

- `tempFilePaths` 是图片的临时路径，可以用于上传或预览。
- 如果需要上传图片，可以结合 `wx.uploadFile` 使用。

------

## wx.previewImage

#### 1. **功能说明**

`wx.previewImage` 用于全屏预览图片，支持多张图片切换。

#### 2. **参数说明**

|  参数   |   类型   | 必填 |                     说明                     |
| :-----: | :------: | :--: | :------------------------------------------: |
| current |  string  |  否  | 当前显示的图片链接，默认为 `urls` 的第一张。 |
|  urls   |  Array   |  是  |           需要预览的图片链接列表。           |
| success | function |  否  |           接口调用成功的回调函数。           |

继续继续

好的！我们继续学习微信小程序中常用的 API，并结合实际示例帮助你更好地理解和掌握。

------

## wx.getLocation

#### 1. **功能说明**

`wx.getLocation` 用于获取用户的当前地理位置，支持返回经纬度、速度、高度等信息。

#### 2. **参数说明**

|   参数   |   类型   | 必填 |                             说明                             |
| :------: | :------: | :--: | :----------------------------------------------------------: |
|   type   |  string  |  否  |       返回的坐标类型，支持 `wgs84`（默认）和 `gcj02`。       |
| altitude | boolean  |  否  |              是否返回高度信息，默认为 `false`。              |
| success  | function |  否  | 接口调用成功的回调函数，返回 `res.latitude` 和 `res.longitude`。 |
|   fail   | function |  否  |                   接口调用失败的回调函数。                   |
| complete | function |  否  |      接口调用结束的回调函数（无论成功或失败都会执行）。      |

#### 3. **示例代码**

```javascript
Page({
  getLocation() {
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success(res) {
        console.log('纬度', res.latitude);
        console.log('经度', res.longitude);
        console.log('速度', res.speed);
        console.log('高度', res.altitude);
      },
      fail(err) {
        console.log('获取位置失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.getLocation` 后，会获取用户的当前地理位置。
2. 控制台会输出纬度、经度、速度、高度等信息。

#### 5. **注意事项**

- 需要在小程序管理后台配置位置权限。
- 用户需要授权地理位置权限，否则会调用失败。

------

## wx.openLocation

#### 1. **功能说明**

`wx.openLocation` 用于打开微信内置地图，查看指定位置，并支持导航功能。

#### 2. **参数说明**

|   参数    |   类型   | 必填 |                        说明                        |
| :-------: | :------: | :--: | :------------------------------------------------: |
| latitude  |  number  |  是  |        纬度，范围为 -90~90，负数表示南纬。         |
| longitude |  number  |  是  |       经度，范围为 -180~180，负数表示西经。        |
|   name    |  string  |  否  |             位置名称，默认为空字符串。             |
|  address  |  string  |  否  |             详细地址，默认为空字符串。             |
|   scale   |  number  |  否  |       地图缩放级别，范围为 3~28，默认为 18。       |
|  success  | function |  否  |              接口调用成功的回调函数。              |
|   fail    | function |  否  |              接口调用失败的回调函数。              |
| complete  | function |  否  | 接口调用结束的回调函数（无论成功或失败都会执行）。 |

#### 3. **示例代码**

javascript

Copy

```javascript
Page({
  openLocation() {
    wx.openLocation({
      latitude: 39.90469, // 北京市的纬度
      longitude: 116.40717, // 北京市的经度
      name: '北京市', // 位置名称
      address: '北京市东城区', // 详细地址
      scale: 18, // 地图缩放级别
      success(res) {
        console.log('打开地图成功', res);
      },
      fail(err) {
        console.log('打开地图失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.openLocation` 后，会打开微信内置地图，显示北京市的位置。
2. 地图中会显示位置名称（“北京市”）和详细地址（“北京市东城区”）。
3. 用户可以通过地图进行缩放、拖动等操作，并支持导航功能。

#### 5. **注意事项**

- 经纬度范围：纬度 -90~90，经度 -180~180。
- 缩放级别范围为 3~28，数值越大，地图显示越详细。

------

## wx.scanCode

#### 1. **功能说明**

`wx.scanCode` 用于调起扫码功能，支持扫描二维码、条形码等。

#### 2. **参数说明**

|      参数      |   类型   | 必填 |                            说明                            |
| :------------: | :------: | :--: | :--------------------------------------------------------: |
| onlyFromCamera | boolean  |  否  |            是否只能从相机扫码，默认为 `false`。            |
|    scanType    |  Array   |  否  | 扫码类型，支持 `qrCode`（二维码）、`barCode`（条形码）等。 |
|    success     | function |  否  |  接口调用成功的回调函数，返回 `res.result`（扫码结果）。   |
|      fail      | function |  否  |                  接口调用失败的回调函数。                  |
|    complete    | function |  否  |     接口调用结束的回调函数（无论成功或失败都会执行）。     |

#### 3. **示例代码**

```javascript
Page({
  scanCode() {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode', 'barCode'],
      success(res) {
        console.log('扫码结果', res.result);
      },
      fail(err) {
        console.log('扫码失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.scanCode` 后，会调起扫码界面，用户可以通过相机扫描二维码或条形码。
2. 扫码成功后，控制台会输出扫码结果。

#### 5. **注意事项**

- `onlyFromCamera` 为 `true` 时，只能通过相机扫码，无法从相册选择图片扫码。
- `scanType` 可以指定扫码类型，默认支持所有类型。

------

## wx.makePhoneCall

#### 1. **功能说明**

`wx.makePhoneCall` 用于拨打电话。

#### 2. **参数说明**

|    参数     |   类型   | 必填 |                        说明                        |
| :---------: | :------: | :--: | :------------------------------------------------: |
| phoneNumber |  string  |  是  |                需要拨打的电话号码。                |
|   success   | function |  否  |              接口调用成功的回调函数。              |
|    fail     | function |  否  |              接口调用失败的回调函数。              |
|  complete   | function |  否  | 接口调用结束的回调函数（无论成功或失败都会执行）。 |

#### 3. **示例代码**

javascript

Copy

```javascript
Page({
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: '10086',
      success(res) {
        console.log('拨打电话成功', res);
      },
      fail(err) {
        console.log('拨打电话失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.makePhoneCall` 后，会拨打电话号码 `10086`。
2. 控制台会输出拨打电话的结果。

#### 5. **注意事项**

- 需要用户授权拨打电话权限。



## wx.setClipboardData

#### 1. **功能说明**

- `wx.setClipboardData`：设置剪贴板内容。
- `wx.getClipboardData`：获取剪贴板内容。

#### 2. **参数说明**

**`wx.setClipboardData` 参数：**

|   参数   |   类型   | 必填 |                        说明                        |
| :------: | :------: | :--: | :------------------------------------------------: |
|   data   |  string  |  是  |              需要设置到剪贴板的内容。              |
| success  | function |  否  |              接口调用成功的回调函数。              |
|   fail   | function |  否  |              接口调用失败的回调函数。              |
| complete | function |  否  | 接口调用结束的回调函数（无论成功或失败都会执行）。 |

**`wx.getClipboardData` 参数：**

|   参数   |   类型   | 必填 |                          说明                           |
| :------: | :------: | :--: | :-----------------------------------------------------: |
| success  | function |  否  | 接口调用成功的回调函数，返回 `res.data`（剪贴板内容）。 |
|   fail   | function |  否  |                接口调用失败的回调函数。                 |
| complete | function |  否  |   接口调用结束的回调函数（无论成功或失败都会执行）。    |

#### 3. **示例代码**

```javascript
Page({
  setClipboard() {
    wx.setClipboardData({
      data: 'Hello, World!',
      success(res) {
        console.log('设置剪贴板成功', res);
      },
      fail(err) {
        console.log('设置剪贴板失败', err);
      }
    });
  },

  getClipboard() {
    wx.getClipboardData({
      success(res) {
        console.log('剪贴板内容', res.data);
      },
      fail(err) {
        console.log('获取剪贴板失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.setClipboardData` 后，会将 `Hello, World!` 设置到剪贴板。
2. 调用 `wx.getClipboardData` 后，会获取剪贴板内容，并输出到控制台。

#### 5. **注意事项**

- 剪贴板内容会在小程序关闭后清空。

------

## wx.vibrateShort

#### 1. **功能说明**

- `wx.vibrateShort`：触发短振动（15ms）。
- `wx.vibrateLong`：触发长振动（400ms）。

#### 2. **参数说明**

无参数。

#### 3. **示例代码**

```javascript
Page({
  vibrateShort() {
    wx.vibrateShort();
    console.log('触发短振动');
  },

  vibrateLong() {
    wx.vibrateLong();
    console.log('触发长振动');
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.vibrateShort` 后，设备会触发短振动。
2. 调用 `wx.vibrateLong` 后，设备会触发长振动。

#### 5. **注意事项**

- 振动功能在部分设备上可能不支持。

------

## wx.getSystemInfoSync

#### 1. **功能说明**

`wx.getSystemInfoSync` 用于同步获取设备系统信息，如屏幕宽高、系统版本等。

#### 2. **参数说明**

无参数。

#### 3. **示例代码**

```javascript
Page({
  getSystemInfo() {
    const systemInfo = wx.getSystemInfoSync();
    console.log('设备系统信息', systemInfo);
  }
});
```

#### 4. **运行效果**

1. 调用`wx.getSystemInfoSync`后，会返回设备系统信息，包括：
   - `brand`：设备品牌。
   - `model`：设备型号。
   - `pixelRatio`：设备像素比。
   - `screenWidth`：屏幕宽度。
   - `screenHeight`：屏幕高度。
   - `windowWidth`：可使用窗口宽度。
   - `windowHeight`：可使用窗口高度。
   - `statusBarHeight`：状态栏高度。
   - `system`：操作系统版本。
   - `platform`：客户端平台。

#### 5. **注意事项**

- `wx.getSystemInfoSync` 是同步方法，会阻塞后续代码执行。

------

## wx.createCanvasContext

#### 1. **功能说明**

`wx.createCanvasContext` 用于创建画布上下文，用于绘制图形。

#### 2. **参数说明**

|   参数   |  类型  | 必填 |    说明     |
| :------: | :----: | :--: | :---------: |
| canvasId | string |  是  | 画布的 ID。 |

#### 3. **示例代码**

```html
<canvas canvas-id="myCanvas" style="width: 300px; height: 200px;"></canvas>
```

```javascript
Page({
  onReady() {
    const ctx = wx.createCanvasContext('myCanvas');
    ctx.setFillStyle('red');
    ctx.fillRect(10, 10, 100, 50);
    ctx.draw();
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.createCanvasContext` 后，会创建一个画布上下文。
2. 使用 `ctx.fillRect` 绘制一个红色矩形。
3. 调用 `ctx.draw` 后，画布上会显示绘制的图形。

#### 5. **注意事项**

- 画布的宽高需要在 `style` 中设置，而不是在 `canvas` 标签的属性中设置。

------

## wx.canvasToTempFilePath

#### 1. **功能说明**

`wx.canvasToTempFilePath` 用于将画布内容导出为图片，并返回临时文件路径。

#### 2. **参数说明**

|   参数   |   类型   | 必填 |                             说明                             |
| :------: | :------: | :--: | :----------------------------------------------------------: |
| canvasId |  string  |  是  |                         画布的 ID。                          |
| success  | function |  否  | 接口调用成功的回调函数，返回 `res.tempFilePath`（临时文件路径）。 |
|   fail   | function |  否  |                   接口调用失败的回调函数。                   |
| complete | function |  否  |      接口调用结束的回调函数（无论成功或失败都会执行）。      |

#### 3. **示例代码**

```javascript
Page({
  exportCanvas() {
    wx.canvasToTempFilePath({
      canvasId: 'myCanvas',
      success(res) {
        console.log('临时文件路径', res.tempFilePath);
      },
      fail(err) {
        console.log('导出画布失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.canvasToTempFilePath` 后，会将画布内容导出为图片。
2. 控制台会输出临时文件路径。

#### 5. **注意事项**

- 导出的图片是临时文件，小程序关闭后会被清除。

------

## wx.shareAppMessage

#### 1. **功能说明**

`wx.createAnimation` 用于创建动画对象，支持设置动画属性（如位移、旋转、缩放等）。

#### 2. **参数说明**

|      参数       |  类型  | 必填 |                             说明                             |
| :-------------: | :----: | :--: | :----------------------------------------------------------: |
|    duration     | number |  否  |              动画时长，单位为 ms，默认为 400。               |
| timingFunction  | string |  否  | 动画效果，支持 `linear`、`ease`、`ease-in` 等，默认为 `linear`。 |
|      delay      | number |  否  |             动画延迟时间，单位为 ms，默认为 0。              |
| transformOrigin | string |  否  |             动画的变换原点，默认为 `50% 50% 0`。             |

#### 3. **示例代码**

```html
<view class="box" animation="{{animationData}}"></view>
```

```javascript
Page({
  data: {
    animationData: {}
  },
  onReady() {
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    animation.translateX(100).rotate(45).step();
    this.setData({
      animationData: animation.export()
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.createAnimation` 后，会创建一个动画对象。
2. 使用 `animation.translateX` 和 `animation.rotate` 设置动画效果。
3. 调用 `animation.step` 后，动画会应用到页面元素上。

#### 5. **注意事项**

- 动画效果需要通过 `animation.export` 导出，并绑定到页面元素的 `animation` 属性上。



------

## wx.getUserProfile

#### 1. **功能说明**

`wx.getUserProfile` 用于获取用户信息，包括昵称、头像等，需要用户授权。

#### 2. **参数说明**

|   参数   |   类型   | 必填 |                           说明                            |
| :------: | :------: | :--: | :-------------------------------------------------------: |
|   desc   |  string  |  是  |                 获取用户信息的用途描述。                  |
| success  | function |  否  | 接口调用成功的回调函数，返回 `res.userInfo`（用户信息）。 |
|   fail   | function |  否  |                 接口调用失败的回调函数。                  |
| complete | function |  否  |    接口调用结束的回调函数（无论成功或失败都会执行）。     |

#### 3. **示例代码**

```javascript
Page({
  getUserProfile() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success(res) {
        console.log('用户信息', res.userInfo);
      },
      fail(err) {
        console.log('获取用户信息失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.getUserProfile` 后，会弹出授权窗口，用户可以选择授权或拒绝。
2. 用户授权后，控制台会输出用户信息（如昵称、头像等）。

#### 5. **注意事项**

- 需要在小程序管理后台配置用户信息权限。
- 用户授权后，可以在 `res.userInfo` 中获取用户信息。

------

## wx.requestPayment

#### 1. **功能说明**

`wx.login` 用于获取用户的登录凭证，通常用于与服务器交互，获取用户的唯一标识。

#### 2. **参数说明**

|   参数   |   类型   | 必填 |                         说明                          |
| :------: | :------: | :--: | :---------------------------------------------------: |
| success  | function |  否  | 接口调用成功的回调函数，返回 `res.code`（登录凭证）。 |
|   fail   | function |  否  |               接口调用失败的回调函数。                |
| complete | function |  否  |  接口调用结束的回调函数（无论成功或失败都会执行）。   |

#### 3. **示例代码**

```javascript
Page({
  login() {
    wx.login({
      success(res) {
        console.log('登录凭证', res.code);
      },
      fail(err) {
        console.log('登录失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.login` 后，会获取用户的登录凭证。
2. 控制台会输出登录凭证（`res.code`）。

#### 5. **注意事项**

- `res.code` 是临时的登录凭证，需要与服务器交互，换取用户的唯一标识。

------

## wx.requestPayment

#### 1. **功能说明**

`wx.checkSession` 用于检查用户的登录态是否过期。

#### 2. **参数说明**

|   参数   |   类型   | 必填 |                        说明                        |
| :------: | :------: | :--: | :------------------------------------------------: |
| success  | function |  否  |              接口调用成功的回调函数。              |
|   fail   | function |  否  |              接口调用失败的回调函数。              |
| complete | function |  否  | 接口调用结束的回调函数（无论成功或失败都会执行）。 |

#### 3. **示例代码**

```javascript
Page({
  checkSession() {
    wx.checkSession({
      success() {
        console.log('登录态未过期');
      },
      fail() {
        console.log('登录态已过期');
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.checkSession` 后，会检查用户的登录态是否过期。
2. 如果登录态未过期，控制台会输出“登录态未过期”；如果登录态已过期，控制台会输出“登录态已过期”。

#### 5. **注意事项**

- 如果登录态已过期，需要重新调用 `wx.login` 获取新的登录凭证。

------

## wx.requestPayment

#### 1. **功能说明**

`wx.requestPayment` 用于发起微信支付，通常用于在小程序中完成支付功能。

#### 2. **参数说明**

|   参数    |   类型   | 必填 |                         说明                          |
| :-------: | :------: | :--: | :---------------------------------------------------: |
| timeStamp |  string  |  是  |  时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数。   |
| nonceStr  |  string  |  是  |              随机字符串，不长于 32 位。               |
|  package  |  string  |  是  |         统一下单接口返回的 prepay_id 参数值。         |
| signType  |  string  |  是  | 签名算法，支持 `MD5` 和 `HMAC-SHA256`，默认为 `MD5`。 |
|  paySign  |  string  |  是  |        签名，具体签名算法请参考微信支付文档。         |
|  success  | function |  否  |               接口调用成功的回调函数。                |
|   fail    | function |  否  |               接口调用失败的回调函数。                |
| complete  | function |  否  |  接口调用结束的回调函数（无论成功或失败都会执行）。   |

#### 3. **示例代码**

```javascript
Page({
  requestPayment() {
    wx.requestPayment({
      timeStamp: '1621234567',
      nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
      package: 'prepay_id=wx201410272009395522657a690389285100',
      signType: 'MD5',
      paySign: 'C380BEC2BFD727A4B6845133519F3AD6',
      success(res) {
        console.log('支付成功', res);
      },
      fail(err) {
        console.log('支付失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.requestPayment` 后，会调起微信支付界面，用户可以选择支付或取消。
2. 支付成功后，控制台会输出“支付成功”；支付失败后，控制台会输出“支付失败”。

#### 5. **注意事项**

- 需要在小程序管理后台配置微信支付权限。
- `timeStamp`、`nonceStr`、`package`、`signType`、`paySign` 等参数需要与服务器交互生成。

------

## wx.shareAppMessage

#### 1. **功能说明**

`wx.shareAppMessage` 用于设置分享信息，通常用于分享小程序页面。

#### 2. **参数说明**

|   参数   |   类型   | 必填 |                        说明                        |
| :------: | :------: | :--: | :------------------------------------------------: |
|  title   |  string  |  否  |         分享标题，默认为当前小程序的名称。         |
|   path   |  string  |  否  |           分享路径，默认为当前页面路径。           |
| imageUrl |  string  |  否  |       分享图片的 URL，默认为当前页面的截图。       |
| success  | function |  否  |              接口调用成功的回调函数。              |
|   fail   | function |  否  |              接口调用失败的回调函数。              |
| complete | function |  否  | 接口调用结束的回调函数（无论成功或失败都会执行）。 |

#### 3. **示例代码**

```javascript
Page({
  onShareAppMessage() {
    return {
      title: '分享标题',
      path: '/pages/index/index',
      imageUrl: 'https://example.com/share.jpg',
      success(res) {
        console.log('分享成功', res);
      },
      fail(err) {
        console.log('分享失败', err);
      }
    };
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.shareAppMessage` 后，会弹出分享界面，用户可以选择分享到微信好友或朋友圈。
2. 分享成功后，控制台会输出“分享成功”；分享失败后，控制台会输出“分享失败”。

#### 5. **注意事项**

- 需要在小程序管理后台配置分享权限。
- `path` 参数可以指定分享的页面路径，默认为当前页面路径。

## wx.updateShareMenu

#### 1. **功能说明**

`wx.updateShareMenu` 用于更新分享菜单，通常用于动态设置分享内容。

#### 2. **参数说明**

|      参数       |   类型   | 必填 |                        说明                        |
| :-------------: | :------: | :--: | :------------------------------------------------: |
| withShareTicket | boolean  |  否  |  是否使用带 shareTicket 的转发，默认为 `false`。   |
|     success     | function |  否  |              接口调用成功的回调函数。              |
|      fail       | function |  否  |              接口调用失败的回调函数。              |
|    complete     | function |  否  | 接口调用结束的回调函数（无论成功或失败都会执行）。 |

#### 3. **示例代码**

```javascript
Page({
  updateShareMenu() {
    wx.updateShareMenu({
      withShareTicket: true,
      success(res) {
        console.log('更新分享菜单成功', res);
      },
      fail(err) {
        console.log('更新分享菜单失败', err);
      }
    });
  }
});
```

#### 4. **运行效果**

1. 调用 `wx.updateShareMenu` 后，会更新分享菜单。
2. 更新成功后，控制台会输出“更新分享菜单成功”；更新失败后，控制台会输出“更新分享菜单失败”。

#### 5. **注意事项**

- `withShareTicket` 为 `true` 时，分享时会带上 `shareTicket`，用于获取群信息。
