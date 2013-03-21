## 描述
**jslider.js** 是一个基于jQuery的图片轮播器插件。

### 使用示例

```javascript
JSlider({
	id: 'slider',
	type: 'fade', 
	interval: 1000
});
```

### 参数
* **id**: `String` 容器的id，可以不指定，默认为slider
* **type**: `String` 轮播器切换效果，有`none`不切换，`slide`普通滑动，`infinite`无限滑动和`fade`淡入淡出四种类型。
* **interval**: `Number` 轮播器切换的间隔时间。