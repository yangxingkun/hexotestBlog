$(function () {
	$(".s_show").barrager()
});
(function () {
	var Barrager = function (ele,options) {
		var defaults = {
			// color:["#ff9999","#35d2f4","#9ee353","#9d77ff","#4785d9","#ff9333","#5bdea8","#51befc"],
			color:"#c8ad51",
			wrap:ele
		};
		settings = $.extend({},defaults,options||{});  //通过 $.extend() 函数 将一个或多个对象的内容合并到目标对象
		this._init();
	};
	Barrager.prototype = {  //通过 prototype 属性-->向Barrager对象添加方法
		_init:function () {  //初始化方法
			var item = $(settings.wrap).find("div");
			for(var i = 0;i<item.length;i++){
				item.eq(i).css({
					top:this.getReandomTop()+"px",
					// color:this.getReandomColor(),
					// fontSize:this.getReandomSize()+"px"
				});
				item.eq(i).css({
					right:-item.eq(i).width()
				})
			}
			this.randomTime(0);
		},
		// getReandomColor:function () {  //生成随机的颜色
		// 	var max = settings.color.length;
		// 	var randomNum = Math.floor(Math.random()*max);
		// 	return settings.color[randomNum];
		// },
		getReandomTop:function () {   //距离顶部随机值
			var top = (Math.random()*250).toFixed(1);
			return top;
		},
		// getReandomSize:function () {  //距离随机的大小
		// 	var size = (12+Math.random()*28);
		// 	return size;
		// },
		getReandomTime:function () {    //生成随机值-》出现的时间
			var time = Math.floor((8+Math.random()*10));
			return time*1000;
		},
		randomTime:function (n) {  
			var obj = $(settings.wrap).find("div");
			var _this = this;
			var len = obj.length;
			if(n>=len){
				n=0;
			}
			setTimeout(function () {
				n++;
				_this.randomTime(n)
			},800);
			var item = obj.eq(n),_w = item.outerWidth(!0);
			item.animate({
				left:-_w
			},_this.getReandomTime(),"linear",function () {
				item.css({right:-_w,left:""});
				_this.randomTime(n)
			});
		},
	};
	$.fn.barrager = function (opt) {
		var bger = new Barrager(this,opt);
	}
})(jQuery);