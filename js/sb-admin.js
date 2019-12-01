window.eh = ace.edit("editor_python");
eh.setTheme("ace/theme/cobalt");
eh.session.setMode("ace/mode/python");

window.ec = ace.edit("editor_js");
ec.setTheme("ace/theme/cobalt");
ec.session.setMode("ace/mode/javascript");

window.eh = ace.edit("editor_ruby");
eh.setTheme("ace/theme/cobalt");
eh.session.setMode("ace/mode/ruby");

window.eh = ace.edit("editor_java");
eh.setTheme("ace/theme/cobalt");
eh.session.setMode("ace/mode/java");

window.eh = ace.edit("editor_css");
eh.setTheme("ace/theme/cobalt");
eh.session.setMode("ace/mode/css");

window.eh = ace.edit("editor_swift");
eh.setTheme("ace/theme/cobalt");
eh.session.setMode("ace/mode/swift");

(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle").on('click', function(e) {
    e.preventDefault();
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });

})(jQuery); // End of use strict
