//gnb
$(document).ready(function(){
    var gnb = '.h_bottom';
    var main = '.mainnav';
    var sub = '.subnav';

    var bg = $('<div class="subbg"></div>');
    $('header').append(bg);

    $(gnb).hover(function(){
        $(sub).add(bg).stop().slideDown(300);
    },function(){
        $(sub).add(bg).stop().slideUp(300);
    });


    $(main).first().focus(function(){
        $(gnb).trigger('mouseenter');
    });
    $(main).focus(function(){
        $(main).removeClass('active');
        $(this).addClass('active');
    });
    $(sub).find('li:last a').focus(function(){
        $(main).removeClass('active');
        $(this).parents(sub).prev().addClass('active');
    });
    $(sub).last().find('a:last').keydown(function(e){
        if(e.keyCode == 9){ 
            if(!e.shiftKey){
                $(gnb).trigger('mouseleave');
            }
        }
    });
    $(main).first().keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(gnb).trigger('mouseleave');
            }
        }
    });
});


//gnb fixed
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();

        if(top > 0){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });
});


//scroll_btn
$(document).ready(function(){
    var btn = '.scroll_btn'
    var btnTop = '.scroll_btn .scroll_top';
    var btnDown = '.scroll_btn .scroll_down';

    var speed = 2000;
    var easing = 'easeOutQuart';
    var minWidth = 1280;
    var btnWidth = $(btn).width();
    var w = minWidth + (2 * btnWidth) + 20;

    $(window).scroll(function(){
        var top = $(window).scrollTop();
        var wWidth = $(window).width();

        if(top < 150 || wWidth < w){
            $(btn).fadeOut(400);
        }else{
            $(btn).fadeIn(400);
        }
    });

    $(window).trigger('scroll');

    $(window).resize(function(){
        $(window).trigger('scroll');
    });

    $(btnTop).click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },speed,easing);
    });
    $(btnDown).click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 5000
        },speed,easing);
    });

});

//family_site
$(document).ready(function(){
    var dropDown = '.family_site'

    $(dropDown).find('button').click(function(){
        $(this).next().slideToggle('fast');
        $(this).toggleClass('active');
    });
});