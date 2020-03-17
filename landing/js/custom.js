$(document).ready(function() {
  'use strict';

  /*-----------------------------------
    One Page Nav
    -----------------------------------*/
  $('#one-page-nav').onePageNav({
    currentClass: 'active'
  });

  /*-----------------------------------
    Mobile Navigation
    -----------------------------------*/
  function mobileNav() {
    if ($(window).width() < 992) {
      $('.navbar-toggle').slideDown();
      $('.navbar-collapse').slideUp();

      $('body').on('click', function() {
        if (
          $('.navbar-collapse').is(':visible') &&
          $('.navbar-toggle').is(':visible')
        ) {
          $('.navbar-collapse').collapse('hide');
        }
      });
    } else {
      $('.navbar-toggle').slideUp();
      $('.navbar-collapse').slideDown();
    }
  }

  mobileNav();

  /*-----------------------------------------
    Banner Slider
    -----------------------------------------*/
  $('#banner-slider').owlCarousel({
    singleItem: true,
    slideSpeed: 200,
    autoPlay: 5000,
    stopOnHover: false,
    navigation: true,
    navigationText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    pagination: false
  });

  /*-----------------------------------------
    Small home banners
    -----------------------------------------*/
  function smallHomeBanner() {
    if ($('.small-home #banner').length > 0) {
      $('.small-home #banner').css('height', $(window).height());
    }
  }

  smallHomeBanner();

  /*-----------------------------------
    Countdown
    -----------------------------------*/
  $('.countdown-time').each(function() {
    var endTime = $(this).data('time');
    $(this).countdown(endTime, function(tm) {
      $(this).html(
        tm.strftime(
          '<span class="section_count"><span class="tcount days">%D </span><span class="text">Days</span></span><span class="section_count"><span class="tcount hours">%H</span><span class="text">Hours</span></span><span class="section_count"><span class="tcount minutes">%M</span><span class="text">Mins</span></span><span class="section_count"><span class="tcount seconds">%S</span><span class="text">Secs</span></span>'
        )
      );
    });
  });

  /*-----------------------------------------
    Single Gallery Slider
    -----------------------------------------*/
  $('.single-gallery-slider').owlCarousel({
    singleItem: true,
    slideSpeed: 200,
    autoPlay: 3000,
    stopOnHover: true,
    navigation: true,
    navigationText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    pagination: false
  });

  /*-----------------------------------
    Magnific Popup
    -----------------------------------*/
  $('.image-large').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.play-video, .open-map, .play-trailer').magnificPopup({
    type: 'iframe'
  });
  $.extend(true, $.magnificPopup.defaults, {
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'http://www.youtube.com/embed/%id%?autoplay=1'
        }
      }
    }
  });

  /*-----------------------------------
    Youtube Video
    -----------------------------------*/
  plyr.setup();

  /*-----------------------------------
    Speech Slider
    -----------------------------------*/
  $('#speech-slider').owlCarousel({
    singleItem: true,
    slideSpeed: 200,
    autoPlay: 10000,
    stopOnHover: true,
    navigation: true,
    navigationText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    pagination: false,
    addClassActive: true
  });

  /*-----------------------------------
    Gallery-slider
    -----------------------------------*/
  $('#gallery-slider').owlCarousel({
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [991, 3],
    itemsTablet: [767, 2],
    itemsMobile: [479, 1],
    slideSpeed: 200,
    autoPlay: 3000,
    stopOnHover: true,
    navigation: false,
    pagination: false
  });

  /*-----------------------------------
    Subscription
    -----------------------------------*/
  $('.subscription').ajaxChimp({
    callback: mailchimpResponse,
    url:
      'http://codepassenger.us10.list-manage.com/subscribe/post?u=6b2e008d85f125cf2eb2b40e9&id=6083876991' // Replace your mailchimp post url inside double quote "".
  });

  function mailchimpResponse(resp) {
    if (resp.result === 'success') {
      $('.newsletter-success')
        .html(resp.msg)
        .fadeIn()
        .delay(3000)
        .fadeOut();
    } else if (resp.result === 'error') {
      $('.newsletter-error')
        .html(resp.msg)
        .fadeIn()
        .delay(3000)
        .fadeOut();
    }
  }

  /*-----------------------------------
    Contact Form
    -----------------------------------*/

  // Function for email address validation
  function isValidEmail(emailAddress) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    return pattern.test(emailAddress);
  }
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    var data = {
      name: $('#name').val(),
      email: $('#email').val(),
      subject: $('#subject').val(),
      phone: $('#phone').val(),
      message: $('#message').val()
    };

    if (
      isValidEmail(data['email']) &&
      data['message'].length > 1 &&
      data['name'].length > 1 &&
      data['subject'].length > 1
    ) {
      $.ajax({
        type: 'POST',
        url: 'sendmail.php',
        data: data,
        success: function() {
          $('#contactForm .input-success')
            .delay(500)
            .fadeIn(1000);
          $('#contactForm .input-error').fadeOut(500);
        }
      });
    } else {
      $('#contact-form .input-error')
        .delay(500)
        .fadeIn(1000);
      $('#contact-form .input-success').fadeOut(500);
    }

    return false;
  });

  /*-----------------------------------
    Scroll to Top
    -----------------------------------*/
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 400) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').on('click', function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      600
    );
    return false;
  });

  /*-----------------------------------
    Window Resize
    -----------------------------------*/
  $(window).on('resize orientationchange', function() {
    mobileNav();
    smallHomeBanner();
  });
});

/*-----------------------------------
Preloader
-----------------------------------*/
$(window).on('load', function() {
  $('.preloader-wrap')
    .delay(200)
    .fadeOut();
});
