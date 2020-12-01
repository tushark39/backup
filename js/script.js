$(document).ready(function(){
    'use strict';
    $(window).scroll(function() { 
        'use strict';
        if($(window).scrollTop() < 80 ) {
            $('.navbar').css ({
               'margin-top': '-100px',
                'opacity': '0'
            });
            $('.navbar-custom').css({
                'background-color': 'rgba(59, 59 , 59, 0)'
            });
        } else {
            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'
            });
            $('.navbar-custom').css({
                'background-color': 'rgba(59, 59 , 59, 0.7)',
                'border-color': '#444'
            });
            $('.navbar-brand img').css({
                'height': '35px',
                 'padding-top': '0px'
             });
             $('.navbar-nav > li > a ').css({
                'padding-top': '15px'
            });
        }
    });
});
///////////////////
$(document).ready(function() {
    'use strict';
    $('.navbar-nav li a').click(function(){
        'use strict';
        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});
/////////////
$(document).ready(function() {
    'use strict';
    $(window).scroll( function() {
        'use strict';
        $("section").each(function()  {
            'use strict';
            var bb = $(this).attr("id");  // ABOUT, CONTACT, DOWNLOAD
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
    });
});
//////////////////////////
  $(document).ready(function() {
    $('.bxslider').bxSlider({
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 250,
        auto: true,
        minSlides: 1, 
        maxSlides: 3, 
        slideMargin: 50
    }); 
});
$(document).ready(function() {
    $('.counter-num').counterUp({
        delay: 10,
        time: 3000
    });
});
new WOW().init();
