/*===========================================================*/
/*讖溯�邱ｨ 6-1-3 繧�▲縺上ｊ繧ｺ繝ｼ繝�繧｢繧ｦ繝医＆縺帙↑縺後ｉ蜈ｨ逕ｻ髱｢縺ｧ隕九○繧�*/
/*===========================================================*/

//逕ｻ蜒上�險ｭ螳�

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC逕ｨ縺ｮ逕ｻ蜒�
				{ src: './img/bg_01.jpg'},
				{ src: './img/bg_02.jpg'},
				{ src: './img/bg_03.jpg'}
			];
		} else {
			var responsiveImage = [//繧ｿ繝悶Ξ繝�ヨ繧ｵ繧､繧ｺ��768px�我ｻ･荳狗畑縺ｮ逕ｻ蜒�
				{ src: './img/bg_sp01.jpg' },
				{ src: './img/bg_sp02.jpg' },
				{ src: './img/bg_sp03.jpg' }
			];
		}

//Vegas蜈ｨ菴薙�險ｭ螳�

$('#slider').vegas({
		overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.4/overlays/06.png',//逕ｻ蜒上�荳翫↓邯ｲ邱壹ｄ繝峨ャ繝医�繧ｪ繝ｼ繝舌�繝ｬ繧､繝代ち繝ｼ繝ｳ逕ｻ蜒上ｒ謖�ｮ壹�
		transition: 'blur',//蛻�ｊ譖ｿ繧上ｊ縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縲Ｉttp://vegas.jaysalvat.com/documentation/transitions/蜿ら�縲Ｇade縲’ade2縲《lideLeft縲《lideLeft2縲《lideRight縲《lideRight2縲《lideUp縲《lideUp2縲《lideDown縲《lideDown2縲】oomIn縲】oomIn2縲】oomOut縲】oomOut2縲《wirlLeft縲《wirlLeft2縲《wirlRight縲《wirlRight2縲｜urnburn2縲｜lurblur2縲’lash縲’lash2縺瑚ｨｭ螳壼庄閭ｽ縲�
		transitionDuration: 2000,//蛻�ｊ譖ｿ繧上ｊ縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ譎る俣繧偵Α繝ｪ遘貞腰菴阪〒險ｭ螳�
		delay: 10000,//繧ｹ繝ｩ繧､繝蛾俣縺ｮ驕�ｻｶ繧偵Α繝ｪ遘貞腰菴阪〒縲�
		animationDuration: 20000,//繧ｹ繝ｩ繧､繝峨い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ譎る俣繧偵Α繝ｪ遘貞腰菴阪〒險ｭ螳�
		animation: 'kenburns',//繧ｹ繝ｩ繧､繝峨い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ遞ｮ鬘槭Ｉttp://vegas.jaysalvat.com/documentation/transitions/蜿ら�縲Ｌenburns縲〔enburnsUp縲〔enburnsDown縲〔enburnsRight縲〔enburnsLeft縲〔enburnsUpLeft縲〔enburnsUpRight縲〔enburnsDownLeft縲〔enburnsDownRight縲〉andom縺瑚ｨｭ螳壼庄閭ｽ縲�
		slides: responsiveImage,//逕ｻ蜒剰ｨｭ螳壹ｒ隱ｭ繧
	});


/*===========================================================*/
/*讖溯�邱ｨ 9-6-3 繝ｪ繝ｳ繧ｯ繧偵け繝ｪ繝�け縺吶ｋ縺ｨ縲∬レ譎ｯ縺梧囓縺上↑繧雁虚逕ｻ繧�判蜒上ｄ繝�く繧ｹ繝医ｒ陦ｨ遉ｺ*/
/*===========================================================*/

//繝�く繧ｹ繝医ｒ蜷ｫ繧荳闊ｬ逧�↑繝｢繝ｼ繝繝ｫ
$(".btn-view2").modaal({
	overlay_close:true,//繝｢繝ｼ繝繝ｫ閭梧勹繧ｯ繝ｪ繝�け譎ゅ↓髢峨§繧九°
	before_open:function(){// 繝｢繝ｼ繝繝ｫ縺碁幕縺丞燕縺ｫ陦後≧蜍穂ｽ�
		$('html').css('overflow-y','hidden');/*邵ｦ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝舌�繧貞�縺輔↑縺�*/
        $.scrollify.disable();//scrollfy縺ｮ繝励Λ繧ｰ繧､繝ｳ繧堤┌蜉ｹ縺ｫ
	},
	after_close:function(){// 繝｢繝ｼ繝繝ｫ縺碁哩縺倥◆蠕後↓陦後≧蜍穂ｽ�
		$('html').css('overflow-y','scroll');/*邵ｦ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝舌�繧貞�縺�*/
        $.scrollify.enable();//scrollfy縺ｮ繝励Λ繧ｰ繧､繝ｳ繧呈怏蜉ｹ縺ｫ
	}
});


/*===========================================================*/
/*讖溯�邱ｨ 6-2-6 繧ｵ繝�繝阪う繝ｫ繧偵け繝ｪ繝�け縺吶ｋ縺ｨ繧ｰ繝ｫ繝ｼ繝怜喧縺輔ｌ縺溽判蜒丈ｸ隕ｧ繧定｡ｨ遉ｺ縺吶ｋ*/
/*===========================================================*/

//逕ｻ蜒上ｒ繧ｯ繝ｪ繝�け縺励◆繧臥樟繧後ｋ逕ｻ髱｢縺ｮ險ｭ螳�	
$(".btn-view").modaal({
	fullscreen:'true', //繝輔Ν繧ｹ繧ｯ繝ｪ繝ｼ繝ｳ繝｢繝ｼ繝峨↓縺吶ｋ
	before_open:function(){// 繝｢繝ｼ繝繝ｫ縺碁幕縺丞燕縺ｫ陦後≧蜍穂ｽ�
		$('html').css('overflow-y','hidden');/*邵ｦ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝舌�繧貞�縺輔↑縺�*/
        $.scrollify.disable();//scrollfy縺ｮ繝励Λ繧ｰ繧､繝ｳ繧堤┌蜉ｹ縺ｫ
	},
	after_close:function(){// 繝｢繝ｼ繝繝ｫ縺碁哩縺倥◆蠕後↓陦後≧蜍穂ｽ�
		$('html').css('overflow-y','scroll');/*邵ｦ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝舌�繧貞�縺�*/
        $.scrollify.enable();//scrollfy縺ｮ繝励Λ繧ｰ繧､繝ｳ繧呈怏蜉ｹ縺ｫ
	}
});


/*===========================================================*/
/* 蜊ｰ雎｡邱ｨ 6-1 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ縺ｨ1逕ｻ髱｢遘ｻ蜍�*/
/*===========================================================*/

$.scrollify({
	section : ".box",//1繝壹�繧ｸ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺輔○縺溘＞繧ｨ繝ｪ繧｢繧ｯ繝ｩ繧ｹ蜷�
	scrollbars:"false",//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝舌�陦ｨ遉ｺ繝ｻ髱櫁｡ｨ遉ｺ險ｭ螳�
	interstitialSection : "#header",//繝倥ャ繝繝ｼ繧定ｪ崎ｭ倥＠縲�1繝壹�繧ｸ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺輔○縺夊｡ｨ遉ｺ縺輔ｌ繧九ｈ縺�↓險ｭ螳�
	easing: "swing", // 莉悶↓繧Ｍinear繧�easeOutExpo縺ｨ縺�▲縺殍Query縺ｮeasing謖�ｮ壼庄閭ｽ
    scrollSpeed: 300, // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ譎ゅ�騾溷ｺｦ
	
	//莉･荳九√�繝ｼ繧ｸ繝阪�繧ｷ繝ｧ繝ｳ險ｭ螳�
	before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
      $(".pagination .active").removeClass("active");
      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".box").each(function(i) {//1繝壹�繧ｸ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺輔○縺溘＞繧ｨ繝ｪ繧｢繧ｯ繝ｩ繧ｹ蜷阪ｒ謖�ｮ�
        activeClass = "";
        if(i===$.scrollify.currentIndex()) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });
      pagination += "</ul>";

      $("#box1").append(pagination);//縺ｯ縺倥ａ縺ｮ繧ｨ繝ｪ繧｢縺ｫ繝壹�繧ｸ繝阪�繧ｷ繝ｧ繝ｳ繧定｡ｨ遉ｺ
      $(".pagination a").on("click",$.scrollify.move);
    }

  });

/*===========================================================*/
/* 蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″*/
/*===========================================================*/

// 蜍輔″縺ｮ縺阪▲縺九￠縺ｮ襍ｷ轤ｹ縺ｨ縺ｪ繧九い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ蜷榊燕繧貞ｮ夂ｾｩ
function fadeAnime(){
    // 4-6縲縺倥ｏ縺｣�医⊂縺九＠縺九ｉ蜃ｺ迴ｾ��
	
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
/* 蜊ｰ雎｡邱ｨ 8-11繝�く繧ｹ繝医′1譁�ｭ励▼縺､蜃ｺ迴ｾ*/
/*===========================================================*/

// eachTextAnime縺ｫappeartext縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ莉倥￠繧句ｮ夂ｾｩ
function EachTextAnimeControl() {
	$('.eachTextAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("appeartext");

		} else {
			$(this).removeClass("appeartext");
		}
	});
}

/*===========================================================*/
/* 髢｢謨ｰ繧偵∪縺ｨ繧√ｋ*/
/*===========================================================*/

// 逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).scroll(function () {
	EachTextAnimeControl();//蜊ｰ雎｡邱ｨ 8-11繝�く繧ｹ繝医′1譁�ｭ励▼縺､蜃ｺ迴ｾ縺ｮ髢｢謨ｰ繧貞他縺ｶ
    fadeAnime();//蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″縺ｮ髢｢謨ｰ繧貞他縺ｶ
});

// 繝壹�繧ｸ縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).on('load', function () {
    
/*===========================================================*/
/*讖溯�邱ｨ  4-1-3繝励Ο繧ｰ繝ｬ繧ｹ繝舌��区焚蟄励き繧ｦ繝ｳ繝医い繝���狗判髱｢縺碁幕縺�*/
/*===========================================================*/

//繝�く繧ｹ繝医�繧ｫ繧ｦ繝ｳ繝医い繝��+繝舌�縺ｮ險ｭ螳�
var bar = new ProgressBar.Line(splash_text, {//id蜷阪ｒ謖�ｮ�
	easing: 'easeInOut',//繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ蜉ｹ譫徑inear縲‘aseIn縲‘aseOut縲‘aseInOut縺梧欠螳壼庄閭ｽ
	duration: 1000,//譎る俣謖�ｮ�(1000��1遘�)
	strokeWidth: 0.2,//騾ｲ謐励ご繝ｼ繧ｸ縺ｮ螟ｪ縺�
	color: '#fff',//騾ｲ謐励ご繝ｼ繧ｸ縺ｮ繧ｫ繝ｩ繝ｼ
	trailWidth: 0.2,//繧ｲ繝ｼ繧ｸ繝吶�繧ｹ縺ｮ邱壹�螟ｪ縺�
	trailColor: '#bbb',//繧ｲ繝ｼ繧ｸ繝吶�繧ｹ縺ｮ邱壹�繧ｫ繝ｩ繝ｼ
	text: {//繝�く繧ｹ繝医�蠖｢迥ｶ繧堤峩謗･謖�ｮ�				
		style: {//螟ｩ蝨ｰ荳ｭ螟ｮ縺ｫ驟咲ｽｮ
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//繝舌�繧医ｊ荳翫↓驟咲ｽｮ
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false //閾ｪ蜍穂ｻ倅ｸ弱�繧ｹ繧ｿ繧､繝ｫ繧貞�繧�
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //繝�く繧ｹ繝医�謨ｰ蛟､
	}
});

//繝励Ο繧ｰ繝ｬ繧ｹ繝舌�縺ｮ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧ｹ繧ｿ繝ｼ繝�
bar.animate(1.0, function () {//繝舌�繧呈緒逕ｻ縺吶ｋ蜑ｲ蜷医ｒ謖�ｮ壹＠縺ｾ縺� 1.0 縺ｪ繧�100%縺ｾ縺ｧ謠冗判縺励∪縺�
	$("#splash_text").fadeOut(10);//繝輔ぉ繝ｼ繝峨い繧ｦ繝医〒繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繝�く繧ｹ繝医ｒ蜑企勁
	$(".loader_cover-up").addClass("coveranime");//繧ｫ繝舌�縺御ｸ翫↓荳翫′繧九け繝ｩ繧ｹ霑ｽ蜉�
	$(".loader_cover-down").addClass("coveranime");//繧ｫ繝舌�縺御ｸ九↓荳九′繧九け繝ｩ繧ｹ霑ｽ蜉�
    
    //=====縺薙％縺九ｉ繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ    
	$("#splash").fadeOut('slow',function(){//#splash繧ｨ繝ｪ繧｢繧偵ヵ繧ｧ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧貞ｮ溯｡�
        
    /* 蜊ｰ雎｡邱ｨ 8-11繝�く繧ｹ繝医′1譁�ｭ励▼縺､蜃ｺ迴ｾ*/
	//span繧ｿ繧ｰ繧定ｿｽ蜉�縺吶ｋ
	var element = $(".eachTextAnime");
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

	EachTextAnimeControl();//蜊ｰ雎｡邱ｨ 8-11繝�く繧ｹ繝医′1譁�ｭ励▼縺､蜃ｺ迴ｾ縺ｮ髢｢謨ｰ繧貞他縺ｶ        
    fadeAnime();//蜊ｰ雎｡邱ｨ 4 譛菴朱剞縺翫⊂縺医※縺翫″縺溘＞蜍輔″縺ｮ髢｢謨ｰ繧貞他縺ｶ
        
    }); //=====縺薙％縺ｾ縺ｧ繝ｭ繝ｼ繝�ぅ繝ｳ繧ｰ繧ｨ繝ｪ繧｢��splash繧ｨ繝ｪ繧｢�峨ｒ0.8遘偵〒繝輔ぉ繝ｼ繝峨い繧ｦ繝医＠縺溷ｾ後↓蜍輔°縺励◆縺ЙS繧偵∪縺ｨ繧√ｋ
    });//=====縺薙％縺ｾ縺ｧ繝励Ο繧ｰ繝ｬ繧ｹ繝舌�陦ｨ遉ｺ
    
});// 縺薙％縺ｾ縺ｧ繝壹�繧ｸ縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ