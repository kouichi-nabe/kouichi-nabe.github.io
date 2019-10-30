// $(function(){
//
//   // function toggleActiveInner(content){
//   //   content.classList.remove('active');
//   // }
//
//   function toggleActive(){
//     var number = 0;
//     var contentBoxs = $('.content-box');
//     console.log(contentBoxs)
//     while(true){
//       var target = contentBoxs[number];
//       // contentBoxs.forEach(content){
//       //   content.classList.remove('active');
//       // };
//       $('.content-box').each(function(content){
//         console.log(content)
//         content.removeClass('active');
//       })
//       target.addClass('active');
//       if(number <= 3){
//         numder += 1;
//       } else if(number > 3){
//         numder = 0;
//       }
//     }
//   }
//
//   setInterval(toggleActive(), 5000);
// })

$(function(){
  var contentBoxs = $('.content-box');
  var number = 1;

  var removeActive = function(){
    contentBoxs.removeClass('active');
    contentBoxs.fadeOut(300);
  }

  var addActive = function(){

    var target = `.content-box:nth-of-type(${number})`;
    var content = $(target);

    content.fadeIn(300);
    content.addClass('active');
      // contentBoxs[i].addClass('active')

    if(number <= 3){
      number += 1;
    } else if(number > 3){
      number = 1;
    }
    console.log(number);
  }

  var toggleActive = function(){
    removeActive();
    addActive();
    setTimeout(removeActive, 3000);
  }

  setInterval(toggleActive, 3900);
})
