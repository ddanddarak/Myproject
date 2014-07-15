;$(function(){
	$('.btnEl').on('click', function(){
		var $titleHeight = $(this).height(),
			$contentHeight = $(this).next().height(),
			$tabHeight = $titleHeight + $contentHeight; 
		$(this).siblings().removeClass('current').end()
			.addClass('current').parent().css('height',$tabHeight).end()
			next().css('top',$titleHeight);

	}).eq(0).trigger('click');
});