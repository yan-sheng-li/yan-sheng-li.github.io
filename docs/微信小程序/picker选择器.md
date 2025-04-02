# picker选择器

## 1. **普通选择器（mode = selector）**

普通选择器允许用户从你提供的选项列表中选择一个值。

### 示例代码

```html
<view>
  <picker mode="selector" range="{{options}}" bindchange="handlePickerChange">
    <input placeholder="请选择" value="{{selectedValue}}" disabled />
  </picker>
</view>
```

```javascript
Page({
  data: {
    options: ['选项1', '选项2', '选项3'], // 选项列表
    selectedValue: '' // 用户选择的值
  },
  handlePickerChange(e) {
    const index = e.detail.value; // 用户选择的选项索引
    const selectedValue = this.data.options[index]; // 获取选项值
    this.setData({
      selectedValue: selectedValue // 更新选择的值
    });
  }
});
```

### 运行效果

1. 用户点击输入框后，会弹出一个选择器，显示 `options` 中的选项。
2. 用户选择某个选项后，输入框中会显示选中的值。

------

## 2. **多列选择器（mode = multiSelector）**

如果需要用户从多列选项中选择，可以使用多列选择器。

### 示例代码

```html
<view>
  <picker mode="multiSelector" range="{{multiOptions}}" bindchange="handleMultiPickerChange">
    <input placeholder="请选择" value="{{selectedMultiValue}}" disabled />
  </picker>
</view>
```

```javascript
Page({
  data: {
    multiOptions: [
      ['选项1-1', '选项1-2', '选项1-3'],
      ['选项2-1', '选项2-2', '选项2-3']
    ], // 多列选项
    selectedMultiValue: '' // 用户选择的值
  },
  handleMultiPickerChange(e) {
    const values = e.detail.value; // 用户选择的每列索引
    const selectedValue = values.map((index, i) => this.data.multiOptions[i][index]).join(', ');
    this.setData({
      selectedMultiValue: selectedValue // 更新选择的值
    });
  }
});
```

### 运行效果

1. 用户点击输入框后，会弹出一个多列选择器。
2. 用户选择每列的选项后，输入框中会显示选中的值（如“选项1-1, 选项2-2”）。

------

## 3. **时间选择器（mode = time）**

如果需要用户选择时间，可以使用时间选择器。

### 示例代码

```html
<view>
  <picker mode="time" bindchange="handleTimePickerChange">
    <input placeholder="请选择时间" value="{{selectedTime}}" disabled />
  </picker>
</view>
```

```javascript
Page({
  data: {
    selectedTime: '' // 用户选择的时间
  },
  handleTimePickerChange(e) {
    const selectedTime = e.detail.value; // 用户选择的时间
    this.setData({
      selectedTime: selectedTime // 更新选择的时间
    });
  }
});
```

### 运行效果

1. 用户点击输入框后，会弹出一个时间选择器。
2. 用户选择时间后，输入框中会显示选中的时间。

------

## 4. **日期选择器（mode = date）**

如果需要用户选择日期，可以使用日期选择器。

### 示例代码

```html
<view>
  <picker mode="date" bindchange="handleDatePickerChange">
    <input placeholder="请选择日期" value="{{selectedDate}}" disabled />
  </picker>
</view>
```

```javascript
Page({
  data: {
    selectedDate: '' // 用户选择的日期
  },
  handleDatePickerChange(e) {
    const selectedDate = e.detail.value; // 用户选择的日期
    this.setData({
      selectedDate: selectedDate // 更新选择的日期
    });
  }
});
```

### 运行效果

1. 用户点击输入框后，会弹出一个日期选择器。
2. 用户选择日期后，输入框中会显示选中的日期。

------

## 总结

- 如果你只需要简单的选项选择，可以使用 **`mode="selector"`** 的普通选择器。
- 如果需要更复杂的选择（如多列、时间、日期等），可以根据需求选择对应的 `picker` 模式。
- `picker` 组件非常灵活，适合各种选择场景，且用户体验良好。