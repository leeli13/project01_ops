//mobile연결
$(document).ready(function(){
    var mobile_keys = new Array('iPhone','iPad','Android','BlackBerry','Windows Phone','Windows CE','LG','MOT','SAMSUNG','SonyEricsson','Nokia');

    if(document.URL.match('move_pc')){
        $('.mobile_btn').fadeIn(0);
    }else{
        for(var i in mobile_keys){
            if(navigator.userAgent.match(mobile_keys[i])){
                location.href = 'http://mops12.dothome.co.kr/'
            }
        }
    }
});


//popup
$(document).ready(function(){
    function setCookie(name,value,expiredays){
        var today = new Date();

        today.setDate(today.getDate() + expiredays);

        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + today.toGMTString() + ';';
    }
    var popup = '.popup';
    var chk = '#today_chk';

    $(popup).find('form a').click(function(e){
        e.preventDefault();

        var chkValue = $(chk).prop('checked');
        if(chkValue){
            setCookie('exCookie','yes',1);
        }

        $(popup).stop().fadeOut(0);
        $('html,body').css('overflow','visible');
    });

    var cookieData = document.cookie;
    if(cookieData.indexOf('exCookie=yes') < 0){
        $(popup).fadeIn(0);
        $('html,body').css('overflow','hidden');
    }else{
        $(popup).fadeOut(0)
        $('html,body').css('overflow','visible');
    }



});


//main
$(document).ready(function(){
    var swiper = new Swiper("main .swiper", {
        navigation: {
          nextEl: "main .swiper-button-next",
          prevEl: "main .swiper-button-prev",
        },
        pagination: {
            el: "main .swiper-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
});

//menu
$(document).ready(function(){
    var swiper = new Swiper(".menu .swiper", {
        slidesPerView: '3',
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: ".menu .swiper-button-next",
            prevEl: ".menu .swiper-button-prev",
        },
        pagination: {
            el: ".menu .swiper-pagination",
            type: "progressbar",
          },
    });
});

//event
$(document).ready(function(){
    var btn = '.event_board .event_text a';
    var contents = '.event > .event_img > div';
    
    $(btn).first().addClass('active');
    $(contents).first().fadeIn(0);

    $(btn).hover(function(){
        $(btn).removeClass('active');
        $(this).addClass('active');
        
        var index = $(this).parents().index()

        $(contents).stop().fadeOut(0)
        $(contents).eq(index).stop().fadeIn(0);

    },function(){
    });

    
});

//magazine
$(document).ready(function(){
    var swiper = new Swiper(".magazine .swiper", {
        navigation: {
          nextEl: ".magazine .swiper-button-next",
          prevEl: ".magazine .swiper-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
      });
});