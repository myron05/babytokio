

(function($) {
    "use strict";
    jQuery(document).on("ready", function() {

    //logo acrousel active
    $(".logo-carousel").owlCarousel({
       loop:true,
        nav:false,
        margin:30,
        autoplay:true,
        autoplayspeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
    //single blog quite area  acrousel active
    $(".quite-area").owlCarousel({
       loop:true,
        nav:false,
        margin:30,
        autoplay:true,
        autoplayspeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

        
    //roadmap carosusel active
    $(".roadmap-carousel").owlCarousel({
       loop:true,
       nav:true,
       margin:30,
       autoplay:true,
       autoplayspeed:1000,
        navText:['<i class="fa fa-long-arrow-left">','<i class="fa fa-long-arrow-right">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
 //faq area carousel active
    $(".faq-carousel").owlCarousel({
       loop:true,
       nav:true,
       margin:30,
       autoplay:true,
       autoplayspeed:1000,
        navText:['<i class="fa fa-long-arrow-left">','<i class="fa fa-long-arrow-right">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
        //animation active
    new WOW().init();
    //menu scrollr    
    $('.main-menu li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top - 60;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

  $('.bar').click(function(){
    $('.m-menu').toggleClass('added')
    $('.bar').toggleClass('added')
  })

    //scrolling menu adding active class 
    var scrolllink = $('.scroll');
    
    $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();
        scrolllink.each(function(){
            var sectionOffset = $(this.hash).offset().top - 140
            if (sectionOffset <= scrollbarLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })
      //mobile-menu
     $("#slick-nav").slicknav({
        prependTo:'.mobile-menu',
        allowParentlinks:true
    });
     // Set the date we're counting down to
      var countDownDate = new Date("Apr 26, 2021 16:00:00").getTime();
      var lcountDownDate = new Date("Aug 2, 2021 10:37:25").getTime();

      // Update the count down every 1 second
      var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        var ldistance = lcountDownDate - now;

        // Time calculations for days, hours, minutes and seconds
      
      
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // document.getElementById("days").innerHTML = days;
        // document.getElementById("hours").innerHTML = hours;
        // document.getElementById("minutes").innerHTML = minutes;
        // document.getElementById("seconds").innerHTML = seconds;

        // var ldays = Math.floor(ldistance / (1000 * 60 * 60 * 24));
        // var lhours = Math.floor((ldistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // var lminutes = Math.floor((ldistance % (1000 * 60 * 60)) / (1000 * 60));
        // var lseconds = Math.floor((ldistance % (1000 * 60)) / 1000);

        // // Display the result in the element with id="demo"
        // document.getElementById("ldays").innerHTML = ldays;
        // document.getElementById("lhours").innerHTML = lhours;
        // document.getElementById("lminutes").innerHTML = lminutes;
        // document.getElementById("lseconds").innerHTML = lseconds;

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("counter").innerHTML = "SOLD OUT";
        }
      }, 1000);

      //welcome particles

      particlesJS('particles-js',

      {
      "particles": {
        "number": {
          "value": 66,
          "density": {
            "enable": true,
            "value_area": 1025.908125981517
          }
        },
        "color": {
          "value": "#024ADD"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 6
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.3083770200778445,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 8.33451405615796,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 116.68319678621143,
          "color": "#ffffff",
          "opacity": 0.35838410441479224,
          "width": 0.833451405615796
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 1166.8319678621144,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }

    );

  });
    jQuery(window).on("load", function() { 
    
    //skroll active
    skrollr.init({
      forceHeight: false
    });
  
    
    });

})(jQuery);



document.addEventListener('scroll',function () { 
  let elem= $('.header-area')
  window.scrollY > 200 ? elem.addClass('added') : elem.removeClass('added');
})


    // Gsap
    
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.welcome-text',1,{y:50})
    gsap.from('.welcome-btn',1,{x:-50})

    
    gsap.from(".featuere-card", {
      scrollTrigger:{
          trigger:'.featuere-card',
          toggleActions:"restart none none reverse"
        },
      stagger: 0.3,
      y: 100,
      ease:'back',
    });

    // gsap.from(".rm ul.left", {
    //   scrollTrigger:{
    //       trigger:'.rm ul',
    //       toggleActions:"restart none none reverse"
    //     },
    //   stagger: 0.3,
    //   scale:0,
    //   ease:'back',
    // });

    gsap.from(".rm ul", {
      scrollTrigger:{
          trigger:'.rm ul',
          toggleActions:"restart none none reverse"
        },
      stagger: 0.3,
      scale: 0,
      duration:1,
      ease:'back',
    });
      
    gsap.from(".right", {
      scrollTrigger:{
          trigger:'.right',
          toggleActions:"restart none none reverse"
        },
      stagger: 0.3,
      x: 200,
      ease:'back',
    });

      
    gsap.from(".left", {
      scrollTrigger:{
          trigger:'.left',
          toggleActions:"restart none none reverse"
        },
      stagger: 0.3,
      x: -200,
      ease:'back',
    });

      
    gsap.from(".center", {
      scrollTrigger:{
          trigger:'.center',
          toggleActions:"restart none none reverse"
        },
      stagger: 0.3,
      y: 100,
      ease:'back',
    });
    

    


/*================================ End ====================================*/