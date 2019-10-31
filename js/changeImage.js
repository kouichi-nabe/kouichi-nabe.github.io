$(function(){
  const headInner = $('.head__inner');

  const images = [
    'url(file:///Users/watanabe_kouichi/kouichi-nabe.github.io/images/head_01.jpeg)',
    'url(file:///Users/watanabe_kouichi/kouichi-nabe.github.io/images/head_02.jpg)',
    'url(file:///Users/watanabe_kouichi/kouichi-nabe.github.io/images/head_03.jpg)',
    'url(file:///Users/watanabe_kouichi/kouichi-nabe.github.io/images/head_04.jpeg)',
    'url(file:///Users/watanabe_kouichi/kouichi-nabe.github.io/images/head_05.jpg)'
  ];

  headInner.css({ backgroundImage: 'url(file:///Users/watanabe_kouichi/kouichi-nabe.github.io/images/head_03.jpg)' });

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
