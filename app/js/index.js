$(function(){
        $('#dowebok').fullpage({
            navigation: true,
            afterRender: function(){
                $('.nav li').eq(0).addClass('active');
                $('.section1').find('.text').delay(500).animate({
                        left: '15%'
                    }, 1500, 'easeOutExpo');
                 },
            afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.section1').find('.text').delay(500).animate({
					left: '15%'
				}, 1500, 'easeOutExpo');
			}
            if(index == 2){
                $('.section2').find('.text').delay(500).animate({
                    left: '15%'
                }, 1500, 'easeOutExpo');
            }
			if(index == 3){
				$('.section3').find('.text').delay(500).animate({
                    left: '15%'
                }, 1500, 'easeOutExpo');
			}
		},
		onLeave: function(index, direction){
			if(index == '1'){
				$('.section1').find('.text').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
            if(index == '2'){
                $('.section2').find('.text').delay(500).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
            }
			if(index == '3'){
				$('.section3').find('.text').delay(500).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
			}
		}
        });


        $('.nav li').click(function(){
            $(this).addClass('active');
        });


        $(".t-b").hover(function() {
            $(this).stop().animate({
                "margin-top": "0px"
            }, 300);
            $(this).find(' a .del').stop(true, true).fadeIn(1000);
        },function(){
            $(this).stop().animate({
                "margin-top": "20px"
            }, 300);
            $(this).find('a .del').stop(true, true).fadeOut(1000);
        });
        
        $('.icon a').hover(function(){
        	$(this).animate({backgroundPositionY:"0px"},200).siblings().animate({backgroundPositionY:"-32px"});
        },function(){
        	$(this).stop(true,true).animate({backgroundPositionY:"-32px"},200);
        })

    });