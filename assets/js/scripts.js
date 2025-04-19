// تنشيط التنقل السلس
(function($) {
    "use strict";

    // التنقل السلس باستخدام jQuery
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // إغلاق القائمة عند النقر على عنصر في القائمة (للأجهزة الصغيرة)
    $('.js-scroll-trigger').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // تفعيل scrollspy لإبراز العنصر النشط في شريط التنقل
    $('body').scrollspy({
        target: '#sideNav'
    });

})(jQuery);