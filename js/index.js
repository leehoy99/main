$('body').css('overflow','hidden')

$(window).on('load', function() {
    setTimeout(function(){
        $(".loading").fadeOut();
        $('body').css('overflow-y','auto')
        $('html').animate({scrollTop: 0},0);
    }, 1000);
    setTimeout(function(){
        $(function() {
            $('.main .main-img-box').mouseover(function(){
                $('.main .main-img').css('animationPlayState','paused')
            })
            $('.main .main-img-box').mouseleave(function(){
                $('.main .main-img').css('animationPlayState','running')
            })
            $('.hover').hover(
                function() {
                $('.main .bg-img').addClass('down-move')
                $('.main .bg-img.down-move').css('animationPlayState','running')
                $('.main .hover div').addClass('main-hover')
                $('.main .hover div p').addClass('main-hover')
            }
            ,
                function() {
                    $('.main .bg-img.down-move').css('animationPlayState','paused')
                    $('.main .hover div').removeClass('main-hover')
                    $('.main .hover div p').removeClass('main-hover')
                    
            }
            )
        
            
        
            $('.grid-contents').hover(function() {
                $(this).addClass('grid-contents-hover')
                $(this).find('.grid-text').children('.title').addClass('grid-contents-hover')
                $(this).find('.grid-text').children('p').addClass('grid-contents-hover')
            },function() {
                $(this).removeClass('grid-contents-hover')
                $(this).find('.grid-text').children('.title').removeClass('grid-contents-hover')
                $(this).find('.grid-text').children('p').removeClass('grid-contents-hover')
            })
            $('.nav-box > ul > li').click(function(e){
                e.preventDefault();
                n = $(this).index();
        
                distance = $('.section').eq(n).offset().top;
                $('html').animate({scrollTop: distance - 100},600);
                // console.log(distance)
            })
        
            $('.grid-contents').click(function(e){
                e.preventDefault();
        
                n = $(this).index();
                distance = $('.section').eq(n).offset().top;
        
                $('html').animate({scrollTop: distance - 100},600);
                // console.log(distance)
            })
        
            // $('.grid-contents').hover(function() {
            //     $(this).children(1).css({'color':'var(--sub-color)'},{'transition': 'color .3s' })
            // }, function() {
            //     $(this).children(1).css({'color':'var(--main-color)'},{'transition': 'color .3s' })
            // })
        
        
        
            $(window).scroll(function() {
                const t = $(window).scrollTop()
                h= $(window).height();
                if(h <= 910) {h=910}
                else if (h >= 1100) {h=1100}
                else {
                    h= $(window).height();
                }
        
                if(t > $('.grid').offset().top - 800) {
                    $('.grid').addClass('moving');
                }
                
                var page1 = $('.section').eq(0).offset().top
                var page2 = $('.section').eq(1).offset().top
                var page3 = $('.section').eq(2).offset().top
                var page4 = $('.section').eq(3).offset().top
        
                // console.log(page1)
                // console.log($(window).scrollTop())
        
        
                if(t > page1 - 800) {
                    $('.section').eq(0).children('.box1').addClass('moving')
                    $('.section').eq(0).children('.box2').addClass('moving')
                }
                if(t > page2 - 800) {
                    $('.section').eq(1).children('.box1').addClass('moving')
                    $('.section').eq(1).children('.box2').addClass('moving')
                }
                if(t > page3 - 800) {
                    $('.section').eq(2).children('.box1').addClass('moving')
                    $('.section').eq(2).children('.box2').addClass('moving')
                }
                if(t > page4 - 800 ) {
                    $('.section').eq(3).children('.box').addClass('moving')
                }
        
                if(t <= h-200) {
                    $('nav').removeClass('move');
                    $('.nav-box > ul > li p').removeClass('move');
                }
                if(t > h-200) {
                    $('nav').addClass('move');
                    $('.nav-box > ul > li p').addClass('move');
                } 
                if (t < h) {
                    $('nav').removeClass('down');
                    $('.nav-box > ul > li p').removeClass('down');
                }
                if (t >= h-170) {
                    $('nav').addClass('down');
                    $('.nav-box > ul > li p').addClass('down');
                } 
            })
        })
    }, 1200);
});

