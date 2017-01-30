$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#portfolio');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-custom").css('background-color', '#403D3C');
          $(".navbar-custom .navbar-nav li a").css('color', 'white');
          $(".navbar-custom .container .navbar-header .navbar-brand").html('John Rudell');
       } else {
          $('.navbar-custom').css('background-color', 'transparent');
          $(".navbar-custom .navbar-nav li a").css('color', '#403D3C');
          $(".navbar-custom .container .navbar-header .navbar-brand").html('');
       }
   });
    }
});