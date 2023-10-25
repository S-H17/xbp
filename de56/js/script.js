/*===========================================================*/
/*讖溯�邱ｨ 5-1-25 繧ｯ繝ｪ繝�け縺励◆繧峨リ繝楢レ譎ｯ繧ｳ繝ｳ繝�Φ繝�′縺ｼ縺九＆繧後ｋ窶ｻIE11髱槫ｯｾ蠢�*/
/*===========================================================*/

$(".openbtn").click(function () {//繝懊ち繝ｳ縺後け繝ｪ繝�け縺輔ｌ縺溘ｉ
	$(this).toggleClass('active');//繝懊ち繝ｳ閾ｪ霄ｫ縺ｫ active繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ弱＠
    $("#g-nav").toggleClass('panelactive');//繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｫpanelactive繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
    $("#header,#container,#footer").toggleClass('mainblur');//縺ｼ縺九＠縺溘＞繧ｨ繝ｪ繧｢縺ｫmainblur繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
});

$("#g-nav a").click(function () {//繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繝ｪ繝ｳ繧ｯ縺後け繝ｪ繝�け縺輔ｌ縺溘ｉ
    $(".openbtn").removeClass('active');//繝懊ち繝ｳ縺ｮ active繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ縺�
    $("#g-nav").removeClass('panelactive');//繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮpanelactive繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ縺�
    $("#header,#container,#footer").removeClass('mainblur');//縺ｼ縺九＠縺ｦ縺�ｋ繧ｨ繝ｪ繧｢縺ｮmainblur繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ
});

/*===========================================================*/
/*讖溯�邱ｨ 8-1-4	繝壹�繧ｸ蜀�↓縺ゅｋ謖�ｮ壹�遽�峇蜀�〒荳九°繧牙�迴ｾ*/
/*===========================================================*/
//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆髫帙�蜍輔″繧帝未謨ｰ縺ｧ縺ｾ縺ｨ繧√ｋ
function setFadeElement(){
	var windowH = $(window).height();	//繧ｦ繧｣繝ｳ繝峨え縺ｮ鬮倥＆繧貞叙蠕�
	var scroll = $(window).scrollTop(); //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ蛟､繧貞叙蠕�
    
    //蜃ｺ迴ｾ遽�峇縺ｮ謖�ｮ�
	var contentsTop = Math.round($('#blog').offset().top);	//隕∫ｴ�縺ｾ縺ｧ縺ｮ鬮倥＆繧貞叙蠕�
	var contentsH = $('#blog').outerHeight(true);	//隕∫ｴ�縺ｮ鬮倥＆繧貞叙蠕�
    
    //2縺､逶ｮ縺ｮ蜃ｺ迴ｾ遽�峇縺ｮ謖�ｮ壺ｻ莉ｻ諢�
	var contentsTop2 = Math.round($('#footer').offset().top);	//隕∫ｴ�縺ｾ縺ｧ縺ｮ鬮倥＆繧貞叙蠕�
	var contentsH2 = $('#footer').outerHeight(true);//隕∫ｴ�縺ｮ鬮倥＆繧貞叙蠕�

    //蜃ｺ迴ｾ遽�峇蜀�↓蜈･縺｣縺溘°縺ｩ縺�°繧偵メ繧ｧ繝�け
	if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH){
		$("#page-top").addClass("UpMove");    //蜈･縺｣縺ｦ縺�◆繧蔚pMove繧偵け繝ｩ繧ｹ霑ｽ蜉�
		$("#page-top").removeClass("DownMove");   //DownMove繧貞炎髯､
		$(".hide-btn").removeClass("hide-btn");	  //hide-btn繧貞炎髯､
	}//2縺､逶ｮ縺ｮ蜃ｺ迴ｾ遽�峇縺ｫ蜈･縺｣縺溘°縺ｩ縺�°繧偵メ繧ｧ繝�け窶ｻ莉ｻ諢�
   else if(scroll+windowH >= contentsTop2 && scroll+windowH <= contentsTop2+contentsH2){       
		$("#page-top").addClass("UpMove");    //蜈･縺｣縺ｦ縺�◆繧蔚pMove繧偵け繝ｩ繧ｹ霑ｽ蜉�
		$("#page-top").removeClass("DownMove");   //DownMove繧貞炎髯､
	}//縺昴ｌ莉･螟悶�
    else{
        if(!$(".hide-btn").length){				//繧ｵ繧､繝郁｡ｨ遉ｺ譎ゅ↓DownMove繧ｯ繝ｩ繧ｹ繧剃ｸ迸ｬ莉倅ｸ弱＆縺帙↑縺�◆繧√�繧ｯ繝ｩ繧ｹ莉倥￠縲Ｉide-btn縺後↑縺代ｌ縺ｰ荳玖ｨ倥�蜍穂ｽ懊ｒ陦後≧
        $("#page-top").addClass("DownMove");  //DownMove繧偵け繝ｩ繧ｹ霑ｽ蜉�
		$("#page-top").removeClass("UpMove"); //UpMove繧貞炎髯､	
        }
	}
}

// #page-top繧偵け繝ｪ繝�け縺励◆髫帙�險ｭ螳�
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//繝壹�繧ｸ繝医ャ繝励∪縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
    }, 500);//繝壹�繧ｸ繝医ャ繝励せ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ騾溘＆縲よ焚蟄励′螟ｧ縺阪＞縺ｻ縺ｩ驕�￥縺ｪ繧�
    return false;//繝ｪ繝ｳ繧ｯ閾ｪ菴薙�辟｡蜉ｹ蛹�
});

/*===========================================================*/
/*讖溯�邱ｨ 6-1-6 隍�焚逕ｻ蜒上ｒ荳ｦ蛻励↓隕九○繧�*/
/*===========================================================*/

	$('.slider').slick({
		autoplay: true,//閾ｪ蜍慕噪縺ｫ蜍輔″蜃ｺ縺吶°縲ょ�譛溷､縺ｯfalse縲�
		infinite: true,//繧ｹ繝ｩ繧､繝峨ｒ繝ｫ繝ｼ繝励＆縺帙ｋ縺九←縺�°縲ょ�譛溷､縺ｯtrue縲�
		slidesToShow: 4,//繧ｹ繝ｩ繧､繝峨ｒ逕ｻ髱｢縺ｫ3譫夊ｦ九○繧�
		slidesToScroll: 4,//1蝗槭�繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｧ3譫壹�蜀咏悄繧堤ｧｻ蜍輔＠縺ｦ隕九○繧�
		prevArrow: '<div class="slick-prev"></div>',//遏｢蜊ｰ驛ｨ蛻�Preview縺ｮHTML繧貞､画峩
		nextArrow: '<div class="slick-next"></div>',//遏｢蜊ｰ驛ｨ蛻�Next縺ｮHTML繧貞､画峩
		dots: true,//荳矩Κ繝峨ャ繝医リ繝薙ご繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ陦ｨ遉ｺ
		responsive: [
            {
			breakpoint: 1200,//繝｢繝九ち繝ｼ縺ｮ讓ｪ蟷�′1200px莉･荳九�隕九○譁ｹ
			settings: {
				slidesToShow: 3,//繧ｹ繝ｩ繧､繝峨ｒ逕ｻ髱｢縺ｫ2譫夊ｦ九○繧�
				slidesToScroll: 3,//1蝗槭�繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｧ2譫壹�蜀咏悄繧堤ｧｻ蜍輔＠縺ｦ隕九○繧�
			}
		},
			{
			breakpoint: 769,//繝｢繝九ち繝ｼ縺ｮ讓ｪ蟷�′769px莉･荳九�隕九○譁ｹ
			settings: {
				slidesToShow: 2,//繧ｹ繝ｩ繧､繝峨ｒ逕ｻ髱｢縺ｫ2譫夊ｦ九○繧�
				slidesToScroll: 2,//1蝗槭�繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｧ2譫壹�蜀咏悄繧堤ｧｻ蜍輔＠縺ｦ隕九○繧�
			}
		},
		{
			breakpoint: 426,//繝｢繝九ち繝ｼ縺ｮ讓ｪ蟷�′426px莉･荳九�隕九○譁ｹ
			settings: {
				slidesToShow: 1,//繧ｹ繝ｩ繧､繝峨ｒ逕ｻ髱｢縺ｫ1譫夊ｦ九○繧�
				slidesToScroll: 1,//1蝗槭�繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｧ1譫壹�蜀咏悄繧堤ｧｻ蜍輔＠縺ｦ隕九○繧�
			}
		}
	]
	});

/*===========================================================*/
/*蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″/
/*===========================================================*/

// 蜍輔″縺ｮ縺阪▲縺九￠縺ｮ襍ｷ轤ｹ縺ｨ縺ｪ繧九い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ蜷榊燕繧貞ｮ夂ｾｩ
function fadeAnime(){
    // 4-1 縺ｵ繧上▲�医◎縺ｮ蝣ｴ縺ｧ��
	$('.fadeInTrigger').each(function(){ //fadeInTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
		var elemPos = $(this).offset().top-50;//隕∫ｴ�繧医ｊ縲�50px荳翫�
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeIn');// 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉfadeIn縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
		}else{
		$(this).removeClass('fadeIn');// 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉfadeIn縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
		}
		});
    
    // 4-4 繝懊Φ繝�ｼ域僑螟ｧ��
	$('.zoomOutTrigger').each(function(){ //zoomOutTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
		var elemPos = $(this).offset().top;//隕∫ｴ�荳翫�
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('zoomOut');// 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉzoomOut縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
		}else{
		$(this).removeClass('zoomOut');// 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉzoomOut縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
		}
		});	
    
}

/*===========================================================*/
/*蜊ｰ雎｡邱ｨ 8-2 繝�く繧ｹ繝医′豬√ｌ繧九ｈ縺�↓蜃ｺ迴ｾ�亥ｷｦ縺九ｉ蜿ｳ��/
/*===========================================================*/

function slideAnime(){
	//====蟾ｦ蜿ｳ縺ｫ蜍輔￥繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺薙％縺九ｉ===
		$('.leftAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//蟾ｦ縺九ｉ蜿ｳ縺ｸ陦ｨ遉ｺ縺吶ｋ繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
				//繝�く繧ｹ繝郁ｦ∫ｴ�繧呈検繧隕ｪ隕∫ｴ��亥ｷｦ蛛ｴ�峨→繝�く繧ｹ繝郁ｦ∫ｴ�繧貞�菴咲ｽｮ縺ｧ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧偵♀縺薙↑縺�
				$(this).addClass("slideAnimeLeftRight"); //隕∫ｴ�繧貞ｷｦ譫�螟悶↓縺ｸ遘ｻ蜍輔＠CSS繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｧ蟾ｦ縺九ｉ蜈��菴咲ｽｮ縺ｫ遘ｻ蜍�
				$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //蟄占ｦ∫ｴ�縺ｯ隕ｪ隕∫ｴ�縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｫ蠖ｱ髻ｿ縺輔ｌ縺ｪ縺�ｈ縺�↓騾��謖�ｮ壹ｒ縺怜�縺ｮ菴咲ｽｮ繧偵く繝ｼ繝励☆繧九い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧偵♀縺薙↑縺�
			}else{
				//蟾ｦ縺九ｉ蜿ｳ縺ｸ陦ｨ遉ｺ縺吶ｋ繧ｯ繝ｩ繧ｹ繧貞叙繧企勁縺�
				$(this).removeClass("slideAnimeLeftRight");
				$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
				
			}
		});
		
		$('.rightAnime').each(function(){
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//蜿ｳ縺九ｉ蟾ｦ縺ｸ陦ｨ遉ｺ縺吶ｋ繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�
				//繝�く繧ｹ繝郁ｦ∫ｴ�繧呈検繧隕ｪ隕∫ｴ��亥承蛛ｴ�峨→繝�く繧ｹ繝郁ｦ∫ｴ�繧貞�菴咲ｽｮ縺ｧ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧偵♀縺薙↑縺�
				$(this).addClass("slideAnimeRightLeft");//隕∫ｴ�繧貞承譫�螟悶↓縺ｸ遘ｻ蜍輔＠CSS繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｧ蜿ｳ縺九ｉ蜈��菴咲ｽｮ縺ｫ遘ｻ蜍�
				$(this).children(".rightAnimeInner").addClass("slideAnimeLeftRight");//蟄占ｦ∫ｴ�縺ｯ隕ｪ隕∫ｴ�縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｫ蠖ｱ髻ｿ縺輔ｌ縺ｪ縺�ｈ縺�↓騾��謖�ｮ壹ｒ縺怜�縺ｮ菴咲ｽｮ繧偵く繝ｼ繝励☆繧九い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧偵♀縺薙↑縺�
			}else{
				//蜿ｳ縺九ｉ蟾ｦ縺ｸ陦ｨ遉ｺ縺吶ｋ繧ｯ繝ｩ繧ｹ繧貞叙繧企勁縺�
				$(this).removeClass("slideAnimeRightLeft");
				$(this).children(".rightAnimeInner").removeClass("slideAnimeLeftRight");
				
			}
		});
    //====蟾ｦ蜿ｳ縺ｫ蜍輔￥繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺薙％縺ｾ縺ｧ===
}

/*===========================================================*/
/*蜊ｰ雎｡邱ｨ 8-17 繝�く繧ｹ繝医′縺ｻ縺ｮ縺九↓蜈峨ｊ縺ｪ縺後ｉ蜃ｺ迴ｾ*/
/*===========================================================*/

// glowAnime縺ｫglow縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ莉倥￠繧句ｮ夂ｾｩ
function GlowAnimeControl() {
	$('.glowAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("glow");

		} else {
			$(this).removeClass("glow");
		}
	});
}



/*===========================================================*/
/*蜊ｰ雎｡邱ｨ 8-9 繝�く繧ｹ繝医′縺倥ｏ縺｣縺ｨ蜃ｺ迴ｾ*/
/*===========================================================*/

// blurTrigger縺ｫblur縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ莉倥￠繧句ｮ夂ｾｩ

function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){ //blurTrigger縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′
		var elemPos = $(this).offset().top-50;//隕∫ｴ�繧医ｊ縲�50px荳翫�
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');// 逕ｻ髱｢蜀�↓蜈･縺｣縺溘ｉblur縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ霑ｽ險�
		}else{
		$(this).removeClass('blur');// 逕ｻ髱｢螟悶↓蜃ｺ縺溘ｉblur縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ螟悶☆
		}
		});
}


/*===========================================================*/
/*蜊ｰ雎｡邱ｨ 6-7 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ縺ｨ繝倥ャ繝繝ｼ閭梧勹逕ｻ蜒上′諡｡螟ｧ*/
/*===========================================================*/
$(window).scroll(function() {
        var scroll = $(window).scrollTop();//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ蛟､繧貞ｮ夂ｾｩ
    //header-img縺ｮ閭梧勹
	$('#header-img').css({
			transform: 'scale('+(100 + scroll/10)/100+')',//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ蛟､繧剃ｻ｣蜈･縺励※scale1縺九ｉ諡｡螟ｧ.scroll/10縺ｮ蛟､繧貞ｰ上＆縺上☆繧九→諡｡螟ｧ蛟､縺悟､ｧ縺阪￥縺ｪ繧�
			top: -(scroll/50)  + "%",//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ蛟､繧剃ｻ｣蜈･縺励※top縺ｮ菴咲ｽｮ繧偵�繧､繝翫せ縺ｫ縺壹ｉ縺�
        });
    });

/*===========================================================*/
/*髢｢謨ｰ繧偵∪縺ｨ繧√ｋ*/
/*===========================================================*/


// 逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).scroll(function () {
	setFadeElement();//讖溯�邱ｨ  8-1-4繝壹�繧ｸ蜀�↓縺ゅｋ謖�ｮ壹�遽�峇蜀�〒荳九°繧牙�迴ｾ縺ｮ髢｢謨ｰ繧貞他縺ｶ
    fadeAnime();// 蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″縺ｮ髢｢謨ｰ繧貞他縺ｶ
    slideAnime();// 蜊ｰ雎｡邱ｨ 8-2 繝�く繧ｹ繝医′豬√ｌ繧九ｈ縺�↓蜃ｺ迴ｾ�亥ｷｦ縺九ｉ蜿ｳ�峨�髢｢謨ｰ繧貞他縺ｶ
	GlowAnimeControl();//蜊ｰ雎｡邱ｨ 8-17 繝�く繧ｹ繝医′縺ｻ縺ｮ縺九↓蜈峨ｊ縺ｪ縺後ｉ蜃ｺ迴ｾ縺ｮ髢｢謨ｰ繧貞他縺ｶ
	BlurTextAnimeControl();//蜊ｰ雎｡邱ｨ 8-9 繝�く繧ｹ繝医′縺倥ｏ縺｣縺ｨ蜃ｺ迴ｾ縺ｮ髢｢謨ｰ繧貞他縺ｶ
});// 縺薙％縺ｾ縺ｧ逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ

// 繝壹�繧ｸ縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).on('load',function(){
    
    $("#splash-logo").delay(1200).fadeOut('slow');//繝ｭ繧ｴ繧�1.2遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医☆繧玖ｨ倩ｿｰ 
    
    //=====縺薙％縺九ｉ繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ1.5遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ

    $("#splash").delay(1500).fadeOut('slow',function(){//繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ1.5遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医☆繧玖ｨ倩ｿｰ
    $('body').addClass('appear');//繝輔ぉ繝ｼ繝峨い繧ｦ繝亥ｾ恵ody縺ｫappear繧ｯ繝ｩ繧ｹ莉倅ｸ�
     
    /* 蜊ｰ雎｡邱ｨ 8-17 繝�く繧ｹ繝医′縺ｻ縺ｮ縺九↓蜈峨ｊ縺ｪ縺後ｉ蜃ｺ迴ｾ*/  
	//span繧ｿ繧ｰ繧定ｿｽ蜉�縺吶ｋ
	var element = $(".glowAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
				} else {
					var n = i / 10;
					textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});
	GlowAnimeControl(); 
	
    });
    //=====縺薙％縺ｾ縺ｧ繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ1.5遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ
  
    /*===========================================================*/
    /*讖溯�邱ｨ 4-2-5閭梧勹濶ｲ縺御ｼｸ縺ｳ繧具ｼ井ｸｭ螟ｮ縺九ｉ螟厄ｼ�*/
    /*===========================================================*/
    
    //=====縺薙％縺九ｉ閭梧勹縺御ｼｸ縺ｳ縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ
    $('.splashbg1').on('animationend', function() {
	setFadeElement();//讖溯�邱ｨ 8-1-4繝壹�繧ｸ蜀�↓縺ゅｋ謖�ｮ壹�遽�峇蜀�〒荳九°繧牙�迴ｾ縺ｮ髢｢謨ｰ繧貞他縺ｶ
    fadeAnime();// 蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″縺ｮ髢｢謨ｰ繧貞他縺ｶ
    slideAnime();//蜊ｰ雎｡邱ｨ 8-2 繝�く繧ｹ繝医′豬√ｌ繧九ｈ縺�↓蜃ｺ迴ｾ�亥ｷｦ縺九ｉ蜿ｳ�峨�髢｢謨ｰ繧貞他縺ｶ
	BlurTextAnimeControl();//蜊ｰ雎｡邱ｨ 8-9 繝�く繧ｹ繝医′縺倥ｏ縺｣縺ｨ蜃ｺ迴ｾ縺ｮ髢｢謨ｰ繧貞他縺ｶ  
	});
    //=====縺薙％縺ｾ縺ｧ閭梧勹縺御ｼｸ縺ｳ縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ

});// 縺薙％縺ｾ縺ｧ繝壹�繧ｸ縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ