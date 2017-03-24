$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#portfolio');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-custom").css('background-color', 'white');
          $(".navbar-custom .navbar-nav li a").css('color', '#403D3C');
          $(".navbar-custom .navbar-nav li a").css('background-color', 'white');
          $(".navbar-custom .container .navbar-header .navbar-brand").html('John Rudell');
          $(".navbar-custom").css('border-bottom', '1px solid black');
       } else {
          $('.navbar-custom').css('background-color', 'transparent');
          $(".navbar-custom .navbar-nav li a").css('color', '#403D3C');
          $(".navbar-custom .navbar-nav li a").css('background-color', 'transparent');
          $(".navbar-custom .container .navbar-header .navbar-brand").html('');
          $(".navbar-custom").css('border-bottom', '');
       }
   });
    }
});
