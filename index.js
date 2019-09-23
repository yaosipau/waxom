$('.bars').click(function() {
  $('ul').slideToggle();
});

$('ul li').click(function() {
  $(this).find('ul').slideToggle();
  $(this).siblings().find('ul').slideUp();

});

$(window).resize(function() {
  if ($(window).width() > 768) {
    $("ul").removeAttr('style');
  }
});

$(document).ready(function(){
    $('.header-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  });
});
$(function () {
  $('.button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    var value = $(this).attr("data-filter");
    if (value == "all"){
      $('.filter').show("1000");
    }
    else {
      $('.filter').not("."+value).hide("1000");
      $('.filter').filter("."+value).show("1000");
    }
  })
});