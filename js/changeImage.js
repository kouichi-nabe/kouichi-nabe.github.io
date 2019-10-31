$(function(){
  const headInner = $('.head__inner');

  // const images = [
  //   'url(../images/head_01.jpeg)',
  //   'url(../images/head_02.jpg)',
  //   'url(../images/head_03.jpg)',
  //   'url(../images/head_04.jpeg)',
  //   'url(../images/head_05.jpg)'
  // ];
  const images = [
    'url(/Users/watanabe_kouichi/kouichi-nabe.github.io/images/head_01.jpeg)',
    'url(/Users/watanabe_kouichi/kouichi-nabe.github.io/images/head_02.jpg)',
    'url(/Users/watanabe_kouichi/kouichi-nabe.github.io/images/head_03.jpg)',
    'url(/Users/watanabe_kouichi/kouichi-nabe.github.io/images/head_04.jpeg)',
    'url(/Users/watanabe_kouichi/kouichi-nabe.github.io/images/head_05.jpg)'
  ];

  let num = 1;

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
