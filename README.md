## 描述
**jslider.js** 是一个基于jQuery的图片轮播器插件。

### 使用示例

```html
<div id="slider">
	<img src="http://bobobo.tietu.com/img/index/$1.jpg"/>
	<img src="http://bobobo.tietu.com/img/index/$2.jpg" />
	<img src="http://bobobo.tietu.com/img/index/$3.jpg" />
</div>
```

```javascript
JSlider({
	id: 'slider',
	type: 'fade', 
	interval: 5
});
```

### 参数
* **id**: `String` 容器的id，可以不指定，默认为slider
* **type**: `String` 轮播器切换效果，有`none`无效果切换，`slide`普通滑动，`infinite`无限滑动和`fade`淡入淡出四种类型。
* **interval**: `Number` 轮播器切换的间隔时间，以秒为单位。