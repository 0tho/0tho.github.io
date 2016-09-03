(function () {
  window.onload(function () {
    var html = document.querySelector('html');
    var logo_container = document.getElementsByClassName('logo_container')[0];
    var width = logo_container.clientWidth;
    var fontSize = width / 150;

    fontSize = +fontSize.toFixed(2);

    html.setAttribute('style', 'font-size: '+ fontSize +'px')

    window.onresize(function() {
      var html = document.querySelector('html');
      var logo_container = document.getElementsByClassName('logo_container')[0];
      var width = logo_container.clientWidth;
      var fontSize = width / 150;

      fontSize = +fontSize.toFixed(2);

      html.setAttribute('style', 'font-size: '+ fontSize +'px')
    });
  });
});
