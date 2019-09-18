
cart();
reserch();
// reserch()
//购物车交互功能
//1获取元素
	function cart(){
		var oTopShop = document.querySelector('.top .top-shop');
		var oShopBottom = document.querySelector('.top .top-shop .shop-bottom');
		var hideTime = 0;
		//2绑定事件
		oTopShop.onmouseenter = function(){
			oShopBottom.style.display = 'block';
			animation(oShopBottom,{opacity:100})
		}
		oTopShop.onmouseleave = function(){
			//oShopBottom.style.display = 'none';
			handleHide();
		}
		oShopBottom.onmouseenter = function(){
			clearTimeout(hideTime);
		}
		oShopBottom.onmouseleave = function(){
			handleHide();
		}
		function handleHide(){
			hideTime = setTimeout(function(){
				animation(oShopBottom,{opacity:0},true,function(){
					oShopBottom.style.display = 'none';
				})
			},500)
		}
	}


//搜索框点击事件
 function reserch(){
 	var oTxt = document.getElementById('txt');
 	var oSearchList = document.querySelector('.header .head-right .search-list')
 	var oReachRight = document.querySelector('.head-right .reach-right');
 	

 	oTxt.onfocus = function(){
 		oSearchList.style.display = 'block';
 		oReachRight.style.display = 'none';
 		oTxt.placeholder="请输入您搜索的商品";

 	}
 	oTxt.onblur = function(){
 		oSearchList.style.display = 'none';
 		oReachRight.style.display = 'block';
 		oTxt.placeholder="";
 	}
 }