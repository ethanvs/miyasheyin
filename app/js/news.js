define(function(require,exports,module){
	var News = {
		initPage:function(){
			this.newF();
		},
		newF:function(){
            var that = this;
			var _html = require('view/news.html');
            var _htmlFn = _.template(_html);
            

             var _htmlA = require('view/header.html');
            var _htmlFna = _.template(_htmlA);
            $('.hd').html(_htmlFna);

             var _htmlF = require('view/footer.html');
            var _htmlFnn = _.template(_htmlF);
            $('.fot').html(_htmlFnn);

            $.ajax({
            	url:'json/news.json',
            	success:function(res){
            		var news = res.news;
            		var title = res.title;
            		console.log('ooo');
            		$('#view').html(_htmlFn({
            			news:news,
            			title:title
            		}));
                    that.clickFn();
            	}
            })
		},
		clickFn:function(){
            $('.nav li').eq(4).addClass('active');
            var cont = 1;
			$('p.two').click(function(){
                cont++;
                var _index = $('p.two').index( $(this) );
                if( cont % 2 == 0){
                    $(this).html('收起');
                }else{
                    $(this).html('点击了解更多');
                }
				$('.txt-b').eq(_index).toggle(400);
			})
		}
	}
	module.exports = News;
});