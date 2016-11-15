define(function(require, exports, module) {
    var Serve = {
        initPage: function() {
            this.serveF();

        },
        serveF: function() {
            var that = this;

            var _html = require('view/serve.html');
            var _htmlFn = _.template(_html);

            $.ajax({
                url: 'json/serve.json',
                success: function(res) {
                    var txtA = res.txtA;
                    var title = res.title;
                    $('#view').html(_htmlFn({
                        txtA: txtA,
                        title: title
                    }));


                    var _htmlA = require('view/header.html');
                    var _htmlFna = _.template(_htmlA);
                    $('.hd').html(_htmlFna);



                    var _htmlF = require('view/footer.html');
                    var _htmlFnn = _.template(_htmlF);
                    $('.fot').html(_htmlFnn);

                    that.clickFn();
                }
            });
        },
        clickFn: function() {
            $('.nav li').eq(3).addClass('active');
            var cont = 1;
            $('p.two').click(function() {
                cont++;
                var _index = $('p.two').index($(this));
                if (cont % 2 == 0) {
                    $(this).html('收起');
                } else {
                    $(this).html('了解更多');
                }
                $('.txt-b').eq(_index).toggle(400);
            })
        }
    }
    module.exports = Serve;
});
