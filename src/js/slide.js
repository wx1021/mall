$(function(){
    //左侧分类导航
	$('.category-option .cat-item').hover(function(){$(this).toggleClass('hover')})
	//图片轮播
	jQuery(".scroll-banner").slide({mainCell:".scroll-content",titCell:".scroll-btn span",titOnClassName:"current",effect:"fold",autoPlay:true,delayTime:1000,interTime:3500});

})
$(function(){
	//我的美鲜
	$('.fir').on({
		mouseenter : function(){
			$('.ul_li').css('display' , 'block');
			$(this).css('background' , '#fff');
		},
		mouseleave : function(){
			$('.ul_li').css('display' , 'none');
			$(this).css('background' , '');
		}
	}),
	//手机逛美鲜
	$('.phone').on({
		mouseenter : function(){
			$('.ph').css('display' , 'block');
		},
		mouseleave : function(){
			$('.ph').css('display' , 'none');
		}
	}),
	//侧边栏购物车
	$('.side_cart').on({
		mouseenter : function(){
			$(this).css('background' , ' #1EAA39');
		},
		mouseleave : function(){
			$(this).css('background' , '');
		}
	}),
   //客服qq
	$('.qq').on({
		mouseenter : function(){
			$(this).css('background' , ' #1EAA39');
			$('.service_qq').css('background' , ' #1EAA39');
			$('.service_qq').css('display' , ' block');
		},
		mouseleave : function(){
			$(this).css('background' , '');
			$('.service_qq').css('background' , '');
			$('.service_qq').css('display' , ' none');
		}
	}),
	//客服电话
	$('#side_phone').on({
		mouseenter : function(){
			$(this).css('background' , ' #1EAA39');
			$('.service_phone').css('background' , ' #1EAA39');
			$('.service_qq').css('background' , '');
			$('.service_phone').css('display' , ' block');
			$('.service_qq').css('display' , ' none');
		},
		mouseleave : function(){
			$(this).css('background' , '');
			$('.service_qq').css('display' , ' none');
			$('.service_phone').css('background' , '');
			$('.service_phone').css('display' , ' none');
		}
	}),
	//手机客户端
	$('.side_code').on({
		mouseenter : function(){
			$('.side_img').css('display' , ' block');
			$('.side_img').css('transition' , ' all 1s');
		},
		mouseleave : function(){
			$('.side_img').css('display' , 'none');
		}
	}),
	
	//
	// $('.lo_right').on({
	// 	click : function(){
	// 		$('bottom_code').css('display' , 'block');
	// 		$('.bottom_login').css('display','none');
	// 	}
	// })
	//特惠专区
	$('.special').on({
		mouseenter : function(){
			$('.seckill').css('display' , 'none');
			$(this).css('display' , 'block');
		},
		mouseleave : function(){
			$(this).css('display' , 'none');
			
		}
	}),
    //全部商品分类
	$('.all_product').on({
		mouseenter : function(){
			$('.category-option').css('display' , ' block');
		},
		mouseleave : function(){
			$('.category-option').css('display' , 'none');
		}
	})
})
// $(function(){
// 	$('.header').load('public.html nav');
// 	$('.seach').load('public.html .seacher');
//     $('.footer').load('public.html footer');
// })