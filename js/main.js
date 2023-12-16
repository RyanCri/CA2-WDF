window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("main-nav").style.backgroundColor = "#495E63";
  } else {
    document.getElementById("main-nav").style.backgroundColor = "transparent";
  }
}