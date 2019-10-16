$(function(){
  // $('.trans-cover__left').mouseover(function(){
  //   $('.app-name-1').fadeOut(150)
  //   $('.app-name-1').addClass('active');
  //   $('.app-name-1').fadeIn(150)
  //
  //   $('.app-name-2').fadeOut(150)
  //   $('.app-name-2').addClass('active');
  //   $('.app-name-2').fadeIn(150)
  // }).mouseout(function(){
  //   $('.app-name-1').fadeOut(150)
  //   $('.app-name-1').removeClass('active');
  //   $('.app-name-1').fadeIn(150)
  //
  //   $('.app-name-2').fadeOut(150)
  //   $('.app-name-2').removeClass('active');
  //   $('.app-name-2').fadeIn(150)
  // });

  $('.trans-cover__left').mouseover(function(){
    $('.app-name-1').addClass('active');
    $('.app-name-2').addClass('active');
  }).mouseout(function(){
    $('.app-name-1').removeClass('active');
    $('.app-name-2').removeClass('active');
  });


$(window).scroll(function(){
   var windowHeight = $(window).height(),
       topWindow = $(window).scrollTop();
    $(".app-image,.app-desc__inner,.app-found__title,.app-found").each(function(){
      var targetPosition = $(this).offset().top;
      if(topWindow > targetPosition - windowHeight + 200){
       $(this).addClass("is-show");
      } else {
        $(this).removeClass("is-show");
      }
    });
    if(topWindow > windowHeight - 70){
      $('.link-btn').addClass("active");
    } else {
      $('.link-btn').removeClass("active");
    }
  });
})
