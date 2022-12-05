$(document).ready(function(){
    
    $('#c1').hover(function(){
        if($(this).hasClass("active")){
            $('#c1 .bott').slideUp(function(){
                $('#c1 ').removeClass("active");    
            });
        }
        else{
            $('#c1 ').addClass("active");    
            $('#c1 .bott').stop().slideDown();
       }
    });

    $('#c2').hover(function(){
        if($(this).hasClass("active")){
            $('#c2 .bott').slideUp(function(){
                $('#c2 ').removeClass("active");    
            });
        }
        else{
            $('#c2 ').addClass("active");    
            $('#c2 .bott').stop().slideDown();
       }
    });

    $('#c3').hover(function(){
        if($(this).hasClass("active")){
            $('#c3 .bott').slideUp(function(){
                $('#c3').removeClass("active");    
            });
        }
        else{
            $('#c3 ').addClass("active");    
            $('#c3 .bott').stop().slideDown();
       }
    });


    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "smooth");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Developer !", "Programmer !"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer !", "Programmer !"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
