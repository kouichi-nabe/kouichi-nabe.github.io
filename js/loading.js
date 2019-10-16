// $(window).load(function() {
//   // 消えるタイミングはお好みで
//   $('.loading').delay(400).fadeOut(300);
// });

$(window).on('load', stopload());

// 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト

// var stopload = function(){
//   $('.loading').delay(400).fadeOut(300);
// }
function stopload(){
  $('.loading').delay(400).fadeOut(300);
}

setTimeout(stopload() ,1500);
