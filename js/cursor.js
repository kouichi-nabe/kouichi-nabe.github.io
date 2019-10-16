// window.onload=function(){
//   // マウス移動時のイベントをBODYタグに登録する
//   document.body.addEventListener("mousemove", function(e){
//
//     //座標を取得する
//     var mX = e.pageX;  //X座標
//     var mY = e.pageY;  //Y座標
//
//     //座標を表示する
//     $('.cursor').css({'top': mY, 'left': mX});
//
//     $('.cursor-follower').css({'top': mY, 'left': mX});
//   });
// }

$(function(){
  $("a").addClass('link')
})

var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });

    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});
