$(function(){
  const headInner = $('.head__inner');

  const images = [
    'url(../images/head_01.jpeg)',
    'url(../images/head_02.jpg)',
    'url(../images/head_03.jpg)',
    'url(../images/head_04.jpeg)',
    'url(../images/head_05.jpg)'
  ];

  let num = 0;

  var chagneImage = function(){
    if(num <= 4){
      let imageUrl = images[num]
      headInner.css({ backgroundImage: imageUrl });
      num = num + 1;
    } else {
      num = 0;
    }
  }

  setInterval(chagneImage, 5000);

})
