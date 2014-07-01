$(document).ready(function(){
	$.fn.feslide = function(options){
		var _default = {
			vartical: false,
			naviBtn: true,
			paginBtn:true,
			circular: true,
			itemIdxfix: "slideItem",
			pagingTxt: "slide",
			prevBtnTxt: "prev",
			nextBtnTxt: "next",
			stopBtnTxt: "stop",
			autoBtnTxt: "auto"

		},
		_options = $.extend( {} , _default , options);
		return this.each(function(){
			var $this = $(this).addClass('feSlide')
							.wrapInner('<div class="feSlMask">'
								+ '<div class="feSlWrap"></div></div>' ),
				$feSlItem = $this.find('.feSlItem')
							.css('float', 'left')
							.each(function(idx){
								$(this)
									.after('<li><a href="#'+ _options.itemIdxfix + (idx + 1) +'">'
										+ _options.pagingTxt + (idx + 1) + '</a></li>')
									.attr({
										id: _options.itemIdxfix  + (idx + 1)
							});
				}),
				itemSize = $feSlItem.size(),
				itemWidth = $feSlItem.outerWidth(true),
				itemHeight = $feSlItem.outerHeight(true),
				$feSlWrap = $this.find(".feSlWrap")
				$feSlMask = $this
								.find(".feSlMask")
									.css('overflow', 'hidden')
									.find($feSlItem)
										.next('li')
										.wrapAll('<ul class="feSlPaging"/>').end().end(),
				$feSlPaging =$this.find(".feSlPaging").appendTo($this),
				currentIdx = 1,
				circularDir = "next",
				//playState, playTimer, dirPosX, dirPosY,
				feSlMethod = {
					init: function(){
						$feSlItem.not(':nth-child( '+ currentIdx +')')
							.css('position', 'absolute');
						$feSlWrap.css('position','relative');
						$(window).on('resize',function(){
							itemWidth = $feSlItem.outerWidth(true),
							itemHeight = $feSlItem.outerHeight(true);
						}).trigger('resize');

						if ( _options.vertical ){
							$feSlWrap.css({
								width: itemHeight*itemSize,
								height: itemWidth
							}),
							$feSlMask.css({
								width: itemHeight,
								height: itemWidth
							})
						} else {
							$feSlWrap.css({
								width: itemWidth,
								height: itemHeight *itemSize
							}),
							$feSlMask.css({
								width: itemWidth,
								height: itemHeight
							})
						}
					},
					niviEvent: function(){
						if( _options.naviBtn == false ) return false
						niviHTML = '<div class="feSlNavi">'
							+ '<button class="btnPrev">' + _options.prevBtnTxt + '</button>'
							+ '<button class="btnAuto">' + _options.autoBtnTxt + '</button>'
							+ '<button class="btnStop">' + _options.stopBtnTxt + '</button>'
							+ '<button class="btnNext">' + _options.nextBtnTxt + '</button>';
						$this.after(niviHTML)
					}
				};
			feSlMethod.init();
			feSlMethod.niviEvent();
		})
	}; //fn.feslide
	$(".div").feslide({
		vartical: false
	});
	$(".div2").feslide({
		vartical: true
	});
});