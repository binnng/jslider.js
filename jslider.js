/**
 * 基于jQuery的轮播图
 * 最近人人新项目真多，下载页基本都有轮播图的需要。
 * @time 2013/03/18
 * @author shibing.zhang
 */
(function($) {

	var jslider = function(conf) {

		this.id   = conf.id   || 'slider';
		this.type = conf.type || 'fade';

		this.autoplay = conf.init || true;

		this.autoplay && this.init();

		return this;

	};

	jslider.prototype.init = function() {

		var slider = $('#' + this.id).css('overflow', 'hidden'),
			sliderInner = (slider.html( '<div id="slider_inner">' + slider.html() + '</div>' ), $('#slider_inner')),

			imgs = sliderInner.children('img'),
			size = imgs.length,
			curImg = 0,
			nexImg;

		sliderInner.css({height:'100%'});

		this.timer = setInterval(function() {

			nexImg = nexImg === size - 1 ? 1:curImg + 1;

			console.log(curImg + ':' + nexImg);

			imgs.eq(curImg).css('z-index', 2).fadeOut();
			imgs.eq(nexImg).css('z-index', 1).fadeIn();

			curImg = nexImg;
			
		}, 1000);
		
	};

	jslider.prototype.clear = function() {
		clearInterval(this.timer);
	}

	window.JSlider = function(conf) {

		return new jslider(conf);

	}

})(jQuery);