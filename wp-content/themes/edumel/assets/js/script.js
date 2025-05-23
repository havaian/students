(function ($) {
  "use strict";
  
  //  Main Menu Offcanvas
  $('.primary-menu').find('li a').each(function () {
    if ($(this).next().length > 0) {
      $(this).parent('li').append('<span class="menu-trigger"><i class="fal fa-angle-down"></i></span>');
    }
  });

 

    // expands the dropdown menu on each click
    $('.primary-menu').find('li .menu-trigger').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('open').parent('li').children('ul').stop(true, true).slideToggle(350);
      $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
    });

  // YouTubePopUp		
	jQuery("a.video-icon").YouTubePopUp({ autoplay: 0 });

  // check browser width in real-time
  function breakpointCheck() {
    var windoWidth = window.innerWidth;

    if (windoWidth <= 991) {
      $('.header-navbar').addClass('mobile-menu');
    } else {
      $('.header-navbar').removeClass('mobile-menu');
    }
  }

  breakpointCheck();
  $(window).on('resize', function () {
    breakpointCheck();
  });


  $('.nav-toggler').on('click', function (e) {
    $('.site-navbar').toggleClass('menu-on');
    e.preventDefault();
  });

  // Close menu on toggler click
  $('.nav-close').on('click', function (e) {
    $('.site-navbar').removeClass('menu-on');
    e.preventDefault();
  });


  // Offcanvas Info menu

  $('.offcanvas-icon').on('click', function (e) {
    $('.offcanvas-info').toggleClass('offcanvas-on');
    e.preventDefault();
  });

  // Close menu on toggler click
  $('.info-close').on('click', function (e) {
    $('.offcanvas-info').removeClass('offcanvas-on');
    e.preventDefault();
  });

 //Search Box addClass removeClass
 $('.header_search_btn > a').on('click', function(){
  $('.page_search_box').addClass('active')
  });
  $('.search_close > i').on('click', function(){
      $('.page_search_box').removeClass('active')
  });





  /* ---------------------------------------------
      Sticky Fixed Menu
  --------------------------------------------- */

  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.fixed-btm-top').addClass('reveal');
    } else {
      $('.fixed-btm-top').removeClass('reveal');
    }
  });


  /* ---------------------------------------------
     Bottom To Top hide
  --------------------------------------------- */

  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.fixed-btm-top').addClass('reveal');
    } else {
      $('.fixed-btm-top').removeClass('reveal');
    }
  });

  //  Sticky Menu

$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.navbar-sticky').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.navbar-sticky').removeClass('menu_fixed animated fadeInDown');
    }
  });
 
  
  

// Testimonial layout 1
$('.testimonials-slides').owlCarousel({
  loop: true,
  dots:false,
  nav: false,
  margin: 10,
  autoplayHoverPause: true,
  autoplay: false,
  navContainer: '#carousel-arrow',
  navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  // center: true,
  responsiveClass:true,
  responsive: {
      0: {
          items: 1,
          dots:true,
          nav:false
      },
      576: {
          items: 1,
          dots:true,
          nav:false
      },
      768: {
          items: 2,
      },
      1000: {
          items:2,
      },
      1200: {
          items: 3,
      }
  }
});


// Testimonial layout 2
$('.testimonials-slides-2').owlCarousel({
    loop: true,
    dots: true,
    nav:false,
    autoplayHoverPause: true,
    autoplay: false,
    responsiveClass:true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1000: {
            items:2,
        },
        1200: {
            items:2,
        }
    }
});



// Testimonial layout 2
$('.testimonials-slides-3').owlCarousel({
  loop: true,
  dots:true,
  nav: false,
  margin: 10,
  autoplayHoverPause: true,
  autoplay: false,
  navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  // center: true,
  responsiveClass:true,
  responsive: {
      0: {
          items: 1,
          dots:true,
          nav:false
      },
      576: {
          items: 1,
          dots:true,
          nav:false
      },
      768: {
          items: 1,
      },
      1000: {
          items:3,
      },
      1200: {
          items: 4,
      }
  }
});


//  Lightbox
$('.popup').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    },
    removalDelay: 300,
  });

  



	// Counter

	$('.counter').counterUp({
	      delay: 10,
	      time: 1000
	  });

	    
  /* ---------------------------------------------
        Course filtering
  --------------------------------------------- */
  var $courses = $('.course-gallery');
   if ($.fn.imagesLoaded && $courses.length > 0) {
      imagesLoaded($courses, function () {
          $courses.isotope({
              itemSelector: '.course-item',
              filter: '*'
          });
          $(window).trigger("resize");
      });
  }

  $('.course-filter').on('click', 'a', function (e) {
      e.preventDefault();
      $(this).parent().addClass('active').siblings().removeClass('active');
      var filterValue = $(this).attr('data-filter');
      $courses.isotope({filter: filterValue});
  });


//Scroll back to top
$(document).ready(function(){"use strict";
	
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	

})(jQuery);