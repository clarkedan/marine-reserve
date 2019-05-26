console.log("it works");

$(document).ready(function(){
  $("#navWho").click(function(){
    $('html, body').animate({
      scrollTop: $("#hiddenWho").offset().top
    }, 1000);
  });
  $("#navGet").click(function(){
    $('html, body').animate({
      scrollTop: $("#hiddenGet").offset().top
    }, 1000);
  });
  $("#navOcean").click(function(){
    $('html, body').animate({
      scrollTop: $("#hiddenOcean").offset().top
    }, 1000);
  });
  $("#navContact").click(function(){
    $('html, body').animate({
      scrollTop: $("#hiddenContact").offset().top
    }, 1000);
  });
  $("#logo").click(function(){
    $('html, body').animate({
      scrollTop: $("#banner").offset().top
    }, 1000);
  });


});