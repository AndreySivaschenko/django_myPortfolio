$(function(){

	$('a[data-target^="anchor"').bind('click.smoothscroll',function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop:bl_top},1000);
		return false;
	});

});