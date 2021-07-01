console.log('%c ( ͡° ͜ʖ ͡°) ¿Chusmeando?', 'color: #9900ff;');

window.onload = function() {

  //NavBotón
  var navButton = document.querySelector(".nav__menu-button");
  var navList = document.querySelector(".nav__menu-list");
  // var navLogo = document.querySelector("#logo");
  var hamb = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"currentColor\" class=\"bi bi-list\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\"/></svg>";
  var cross = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" class=\"bi bi-x-lg\" viewBox=\"0 0 16 16\"><path d=\"M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z\"/></svg>";

  navButton.addEventListener('click', function () {
      if (navList.style.display == "flex" || navList.style.display == "block") {
          navList.style.display = "none";
          navButton.className = "bi bi-list";
          navButton.innerHTML = hamb;
          navButton.style.paddingRight = "0";
      } else {
          navList.style.display = "flex";
          navButton.className = "bi bi-x-lg";
          navButton.innerHTML = cross;
          navButton.style.paddingRight = "6px";
      }
    }
  );

  //Checkear ancho de ventana
  $(window).resize(function() {
    var winWidth = $(window).width();
    // console.log(winWidth);
    if (winWidth >= "768") {
      navList.style.display = "flex";
      navButton.style.display = "none";
      // console.log("grande");
    } else {
      navList.style.display = "none";
      navButton.style.display = "block";
      navButton.className = "bi bi-list";
      navButton.innerHTML = hamb;
      navButton.style.paddingRight = "0";
      // console.log("chico");
    }
  });

};
