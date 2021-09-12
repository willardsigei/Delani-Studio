
$(document).ready(function(){
    $(".design").click(function(){
      $("#sign-img").toggle();
      $("#sign").toggle();
    });
    $(".development").click(function(){
      $("#development-image").toggle();
      $("#development").toggle();
    });
    $(".product").click(function(){
      $("#prod").toggle();
      $("#product").toggle();
    });
});