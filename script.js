// navbar transition
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.navbar-hook');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-custom").css({'background-color': 'white', 'border-bottom': '1px solid black'});
          $(".navbar-custom .navbar-nav li a").css('background-color', 'white');
          $(".navbar-custom .container .navbar-header .navbar-brand").html('John Rudell');
       } else {
          $('.navbar-custom').css({'background-color': 'transparent', 'border-bottom': ''});
          $(".navbar-custom .navbar-nav li a").css('background-color', 'transparent');
          $(".navbar-custom .container .navbar-header .navbar-brand").html('');
       }
   });
    }
});

// smooth scrolling
$('.link-goto').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
