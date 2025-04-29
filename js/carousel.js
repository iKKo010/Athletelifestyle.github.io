$(function(){
	var slideWidth;
	var slideNum;
	var slideSetWidth;
	var scrollNum;
	var maxPage;
	var slideCurrent;
	
	//ロード時に実行
	carousel();
	
	//リサイズ時の処理
	var timer = false;
	$(window).resize(function() {
		
		if (timer != false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function(){
			carousel();
		},200);
	});
	
	//カルーセルの設定
	function carousel() {
		slideCurrent = 0;
		$('.slideSet').css('left', '0');
		slideWidth = $('.slide').outerWidth(); // .slideの幅を取得して代入
		$('.slide img').css('width', $('.slide').width()); // 画像の幅を変更
		slideNum = $('.slide').length;  // .slideの数を取得して代入
		slideSetWidth = slideWidth * slideNum; // .slideの幅×数で求めた値を代入
		$('.slideSet').css('width', slideSetWidth); // .slideSetのスタイルシートにwidth: slideSetWidthを指定
		scrollNum = Math.floor($('.slider').width() / slideWidth);
		maxPage = Math.ceil(slideNum / scrollNum - 1);
		
		$('.slider-prev').css({
			'opacity':'0.5',
			'cursor':'default'
		});
		
		if (!maxPage) {
			$('.slider-next').css({
				'opacity':'0.5',
				'cursor':'default'
			});
		} else {
			$('.slider-next').css({
				'opacity':'1',
				'cursor':'pointer'
			});
		}
	}
	
	//アニメーションの実行
	function sliding() {
		//alert("slideCurrent:" + slideCurrent + "\nslideWidth:" + slideWidth + "\nscrollNum" + scrollNum + "\nsliderWidth:" + $('.slider').width());
		position = slideCurrent * -slideWidth * scrollNum;
		$('.slideSet').animate({
		left: slideCurrent * -slideWidth * scrollNum
		});
	}
	
	//前へボタンが押されたとき
	$('.slider-prev').click(function(e) {
		e.stopPropagation();
		if (slideCurrent) {
			if (slideCurrent == maxPage) {
				$('.slider-next').css({
					'opacity':'1',
					'cursor':'pointer'
				});
			}
			slideCurrent--;
			sliding();
			if (!slideCurrent) {
			$(this).css({
				'opacity':'0.5',
				'cursor':'default'
			});
		}
		}
	});
		
	//次へボタンが押されたとき
	$('.slider-next').click(function(e) {
		e.stopPropagation();
		if (slideCurrent != maxPage) {
			if (slideCurrent == 0) {
				$('.slider-prev').css({
					'opacity':'1',
					'cursor':'pointer'
				});
			}
			slideCurrent++;
			sliding();
			if (slideCurrent == maxPage) {
				$(this).css({
					'opacity':'0.5',
					'cursor':'default'
				});
			}
		}
	});
	
	//デバッグ用
	/*
	$('.slide').click(function(e) {
		e.stopPropagation();
		alert("current:" + slideCurrent + "\nmaxPage:" + maxPage);
	});
	*/
});