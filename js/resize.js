(function () {
  function setFontSize () {
    var html = document.querySelector('html');
    var width = html.clientWidth;
    var fontSize = width / 150;

    fontSize = +fontSize.toFixed(2);

    html.setAttribute('style', 'font-size: '+ fontSize +'px')
  }

  window.onload(setFontSize);
  window.onresize(setFontSize);
});
