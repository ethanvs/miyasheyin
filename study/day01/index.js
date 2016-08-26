define(function (require, exports, module){
	var Index = {
		init: function (){
			var me = this;
			me.events();
			me.$el = $('.app');
		},
		events: function(){
			var me = this;

			$('li', me.$el ).on('addOne',function(e){
				alert( $(e.currentTarget).index() );
			});
			// document.getElementById('h1').addEventListener('click',function(){alert('by id');},true);
			document.getElementsByTagName('h1')[0].addEventListener('click',function(){alert('by tag name');},true);
			// $('h1', me.$el ).click(function(e){
			// 	alert( "弹出" + $(e.currentTarget).html() );
			// });

			$('h2', me.$el ).click(function(e){
				var aEl = document.createElement('li');
				aEl.style.color = "red";
				aEl.innerText = '测试';
				var $ael = $('<div style="color: red;"><a>这是一个a标签</a></div>');
				$ael.css({'color': 'green'});
				alert( $ael.html() );
				$('ul', me.$el ).append( $ael );
				// $('ul', me.$el ).append( '<li>自动生成的li标签</li>' );
				$(e.currentTarget).off();
				e.stopPropagation();
			});

			// $('ul li').click(function(e){
			// 	alert( "弹出" + $(e.currentTarget).html() );
			// });

			$('ul', me.$el ).on('click','li',function(e){
				alert( "弹出" + $(e.currentTarget).html() );
			});

			// $('#h1').css({position: 'relative','transition':'transform 2s'}).css({'transform':'rotate(10deg)'})
			// $('ul li').not(':eq(2)').click(function(e){
			// 	alert( "弹出" + $(e.currentTarget).html() );
			// });
		}
	};
	module.exports = Index;
});