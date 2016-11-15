define(function(require,exports,module){
	var Contect = {
		initPage:function(){
			this.ctFn();
		},
		ctFn:function(){
			var _html = require('view/contect.html');
			var _htmlFn = _.template(_html);
			$('#view').html(_htmlFn);


			var _htmlA = require('view/header.html');
			var _htmlFna = _.template(_htmlA);
			$('.hd').html(_htmlFna);
			$('.nav li').eq(5).addClass('active');

			var _htmlF = require('view/footer.html');
			var _htmlFnn = _.template(_htmlF);
			$('.fot').html(_htmlFnn);


		}
	}
	module.exports = Contect;
});