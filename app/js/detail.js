define(function(require,exports,module){
	var Detail = {
		initPage:function(){
			this.contF();
		},
		contF:function(){
			var _html = require('view/detail.html');
            var _htmlFn = _.template(_html);
           

             var _htmlA = require('view/header.html');
            var _htmlFna = _.template(_htmlA);
            $('.hd').html(_htmlFna);
            $('.nav li').eq(2).addClass('active');

             var _htmlF = require('view/footer.html');
            var _htmlFnn = _.template(_htmlF);
            $('.fot').html(_htmlFnn);

            $.ajax({
            	url:'json/detail.json',
            	success:function(res){
            		var txtList = res.txtList;
            		var imgList = res.imgList;
            		$('#view').html(_htmlFn({
            			imgList:imgList,
            			txtList:txtList
            		}));
            	}
            });
		},
	}
	module.exports = Detail;
});