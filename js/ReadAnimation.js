$(function(){
	var array = new Array();
	$(window).scroll(function (){
		$('.effect').each(function(){
			var imgPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > imgPos - windowHeight + windowHeight / 5){
				var imgPath = $(this).children('img').attr('src');
				if (array.indexOf(imgPath) == -1) {
					imgPath = imgPath.replace(/jpg/, 'gif');
					$(this).children('img').attr('src', imgPath);
					array.push(imgPath);
				}
			}
		});
	});
});
