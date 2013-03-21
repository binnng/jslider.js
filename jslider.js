/**
 * 基于jQuery的轮播图
 * 最近人人新项目真多，下载页基本都有轮播图的需要。
 * @time 2013/03/18
 * @author shibing.zhang
 */
(function($) {

	var jslider = function(conf) {

		this.id       = conf.id       || 'slider';
		this.type     = conf.type     || 'infinite';
		this.interval = conf.interval || 5000;

		this.init();

		return this;

	};

	jslider.prototype.init = function() {

		var slider      = $('#' + this.id).css('overflow', 'hidden'),
			width       = slider.width(),
			sliderInner = (slider.html( '<div id="slider_inner">' + slider.html() + '</div>' ), $('#slider_inner')),

			imgs        = sliderInner.children('img'),
			size        = imgs.length,
			curImg      = 0,
			nexImg,

			fn;

		sliderInner.css({height:'100%'});

		if ( this.type === 'fade' ) {
			imgs.css({position: 'absolute', display: 'none'});
			imgs.eq(0).css({zIndex: 2, display: 'block'});
		} else {
			sliderInner.css('width', width * size);
			imgs.css({display: 'block', float: 'left'});
		}

		switch ( this.type ) {
			case 'none' : fn = function() {
				sliderInner.css({marginLeft:- width * nexImg});
			};
			break;
			case 'fade' : fn = function() {

				imgs.eq(nexImg).css('z-index', 2).fadeIn();
				imgs.eq(curImg).css('z-index', 1).fadeOut();
				
			};
			break;
			case 'slide' : fn = function() {

				sliderInner.animate({marginLeft:- width * nexImg});

			};
			break;
			case 'infinite' : fn = function() {
fn
				sliderInner.animate({marginLeft:- width}, function() {
					imgs.eq(curImg - 1).appendTo(sliderInner.css('margin-left', 0));
				});


			}
		}

		this.timer = setInterval(function() {

			nexImg = nexImg === size - 1 ? 0 : curImg + 1;
			fn();
			curImg = nexImg;

		}, this.interval);
		
	};

	jslider.prototype.clear = function() {
		clearInterval(this.timer);
	}

	window.JSlider = function(conf) {

		return new jslider(conf);

	}

})(jQuery);