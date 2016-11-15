define(function(require, exports, module) {
    var About = {
        initPage: function() {
            this.aboutCon();
        },
        aboutCon: function() {
            var that = this;
            var _html = require('view/about.html');
            var _htmlFn = _.template(_html);

            var _htmlA = require('view/header.html');
            var _htmlFna = _.template(_htmlA);
            $('.hd').html(_htmlFna);

            var _htmlF = require('view/footer.html');
            var _htmlFnn = _.template(_htmlF);
            $('.fot').html(_htmlFnn);

            $.ajax({
                url: 'json/about.json',
                success: function(res) {
                    var abArr = res.about;
                    var txt1 = res.txt1;
                    var txt2 = res.txt2;
                    var txt3 = res.txt3;
                    var txt4 = res.txt4;
                    var imgArr = res.imgArr;
                    $('#view').append(_htmlFn({
                        abArr: abArr,
                        txt1: txt1,
                        txt2: txt2,
                        txt3: txt3,
                        txt4: txt4,
                        imgArr: imgArr
                    }));
                    that.slideImg();

                }
            });
        },
        slideImg: function() {
            $('.nav li').eq(1).addClass('active');

            $('.icon span').eq(2).addClass('active');
            
            var showIndex = 2;
            var timer = setInterval(sImg, 2000);

            function sImg() {
                $('.showImg li').eq(showIndex).fadeIn(300).siblings().fadeOut(300);
                $('.icon span').eq(showIndex).addClass('active').siblings().removeClass('active');
                if (showIndex < 0) {
                    showIndex = 2;
                    $('.showImg li').eq(2).fadeIn(300).siblings().fadeOut(300);
                    $('.icon span').eq(2).addClass('active').siblings().removeClass('active');
                }
                showIndex--;
            };
            // 鼠标点击span

            $('.icon span').click(function(){
                console.log("1111");
                clearInterval(timer);
                showIndex = $(this).index();

                $('.showImg li').eq(showIndex).stop(true, true).fadeIn().siblings().fadeOut();
                $(this).addClass('active').siblings().removeClass('active');
                timer = setInterval(sImg, 2000);

            });
        }

    }
    module.exports = About;
});
