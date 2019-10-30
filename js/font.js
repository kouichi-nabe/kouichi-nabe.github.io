$(function(){
  function sleep(waitMsec){
    var startMsec = new Date();
    while (new Date() - startMsec < waitMsec);
  }
  const titleFont = Array.from($('.anime-font'));

  function fontColorChange(titleFont){
    titleFont.forEach(function(font){
      font.classList.add('anime-color');
    })
  }

  fontColorChange(titleFont);

})
