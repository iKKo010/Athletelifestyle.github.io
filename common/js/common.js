

/*---- PC、タブレットグローバルナビゲーション ----*/

$(function(){
	
	if (window.matchMedia('(min-width: 700px)').matches) {

		$("#glnav .outline > li").hover(function(){
			$(this).find("ul:not(:animated)").slideDown("1500");
		},
		function(){
			$(this).find("ul").slideUp("1500");
		})

	}

});

/*---- SPグローバルナビゲーション ----*/

$(function(){
	
	if (window.matchMedia('(max-width: 699px)').matches) {
		
		//ハンバーガーメニューとグローバルナビゲーション
		$("#header .menu a").click(function(){
			$("#glnav > ul").slideToggle("1500");
			$(".open_close_btn").toggleClass("close");
			$("#header .search").hide();
			$("#header .search_btn .open_close_btn").removeClass("close");
		});
		
		//サブメニュー展開
		/*$("#glnav .outline > li > a.sub").hover(function(){
				$(this).parent("li").toggleClass("on");
				$(this).next("ul:not(:animated)").slideToggle("1500");
		})*/
		
		$("#glnav .outline > li > a").click(function(){
			if($(this).next("ul").get(0)){
				$(this).parent("li").toggleClass("on");
				$(this).next("ul:not(:animated)").slideToggle("1500");
				return false;
			}
		});
		
		//検索
		$(".search_btn a").click(function(){
			$("#header .search").slideToggle("1500");
			$(".search_btn .open_close_btn").toggleClass("close");
			$("#glnav > ul").hide();
			$(".menu .open_close_btn").removeClass("close");
		});
	}
		
})


/*-------------- スムーズスクロール -----------------*/

//ページトップへ

$(function(){
	var $btnTop = $('#pagetop a');
	var flagTop = true;
	$btnTop.hide();

$(window).scroll(function () {
	if($(this).scrollTop() > 200){
		if(flagTop){
			$btnTop.stop(true,true).fadeIn();
			flagTop = false;
			}
		} else {
			if(!flagTop){
				$btnTop.stop(true,true).fadeOut();
				flagTop = true;
			}
		}
	});

$("#pagetop a").click(function(){
    $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top });
    return false;
  })

	//スムーズスクロール
	
	$(".smooth").click(function(){
		$('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 200);
	 });

});


/*-------------- よくある質問 -----------------*/

$(function(){
	$(".dl2 > dt").click(function(){
		if($(this).hasClass("on")){
			$(this).next().slideUp();
			$(this).removeClass("on");
		} else {
			$(this).next().slideDown();
			$(this).addClass("on");
		}
	});
	
	$(".dl2 > dd .close").click(function(){
			$(this).parent().slideUp();
			$(this).parent().prev().removeClass("on");
	});
});

/*-------------- スライド一覧・コラム -----------------*/

$(function(){
	$("#slidemenu a").on('click', function(){
		var idName = $(this).attr('href');
		$('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top });
		// aをクリックしたらaのhrefと同じIDのとなりのddをslideDown
		$(idName).addClass('on').next().slideDown();
	});
});

// コラムに他のページから飛んだ時
$(function(){
	var hash = location.hash;

	if(hash == "#01"){
		$('#01').addClass('on').next().show();
	} else if(hash == "#02"){
		$('#02').addClass('on').next().show();
	} else if(hash == "#03"){
		$('#03').addClass('on').next().show();
	} else if(hash == "#04"){
		$('#04').addClass('on').next().show();
	}
});
	

/*-------------- ココロエ 3つの分野で考える -----------------*/

$(function(){
	$(".tab_index a").on('click', function(){

		var tabId = $(this).attr('href');

		$(this).parent().removeClass('alpha').siblings().addClass('alpha');
		if(tabId == "#athletic"){
			$('#athletic').fadeIn(1200,'linear').siblings('.tab_contents').hide();
		} else if(tabId == "#social"){
			$('#social').fadeIn(1200,'linear').siblings('.tab_contents').hide();
		} else if(tabId == "#life"){
			$('#life').fadeIn(1200,'linear').siblings('.tab_contents').hide();
		}
		// $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top });
	
		return false;
	});
});

	// ココロエに「アスリートライフスタイルとは？」から飛んだ時
$(function(){
	var hash = location.hash;

	$('.tab_index').find("[href='" + hash + "']").parent().removeClass('alpha').siblings().addClass('alpha');
	if(hash == "#athletic"){
		$('#athletic').show();
	} else if(hash == "#social"){
		$('#social').show();
		$('#athletic').hide();
	} else if(hash == "#life"){
		$('#life').show();
		$('#athletic').hide();
	}
});

/*-------------- NF向け　先進事例 -----------------*/

$("#case .frame > a").on('click', function(){
	if($(this).next().is(':visible')){
		$(this).next().slideUp();
	} else {
		$(this).next().slideDown();
		$(this).parent().siblings().children('.case_frame_inner').css({'display':'none'});
	}
});

$(window).on('load resize',function(){
	let caseWidth = $('#case').innerWidth();
	$('.case_frame_inner').css({'width': caseWidth});
});


/* apsページ追従バナー */
//$(window).scroll(function() {
//  scrollHeight = $(document).height();
//  scrollPosition = $(window).height() + $(window).scrollTop();     
//  footHeight = $("#star").innerHeight(); 
    
    
//  if ( scrollHeight - scrollPosition  <= footHeight ) { 
//    $("#aps_banner").css({
//      "position":"static", 
//      "margin-bottom": "3rem"        
//    });
//  } else if(window.matchMedia('(min-width: 700px)').matches) { 
//    $("#aps_banner").css({
//        "position":"fixed", 
//        "bottom": "1.5em",
//        "right": "4em"
//    });
//    } else {
//    $("#aps_banner").css({
//        "position":"fixed", 
//        "bottom": "1.5em",
//        "right": "4em"
//    });
//  }
//});

