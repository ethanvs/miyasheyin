define(function(require,exports,module){
	var Works = {
		initPage:function(){
			this.workF();
			this.maskFn();
			this.clickFn();
		},
		workF:function(){
			var _html = require('view/works.html');
            var _htmlFn = _.template(_html);
            $('#view').html(_htmlFn);
            

             var _htmlA = require('view/header.html');
            var _htmlFna = _.template(_htmlA);
            $('.hd').html(_htmlFna);
            $('.nav li').eq(2).addClass('active');

             var _htmlF = require('view/footer.html');
            var _htmlFnn = _.template(_htmlF);
            $('.fot').html(_htmlFnn);


		},
		clickFn:function(){
			$('.show').eq(0).show().siblings().hide();

			$('.left a').click(function(){
				console.log('111');
				$(this).addClass('active').siblings().removeClass('active');
				$('.show-box .show').eq($(this).index()).show().siblings().hide();
			})
		},
		maskFn:function(){
			$('.img-list').hover(function(){
				$('.mask').eq($(this).index()).stop().slideDown(300);
			},function(){
				$('.mask').eq($(this).index()).stop().slideUp(300);
			});
		}
	}
	module.exports = Works;
});