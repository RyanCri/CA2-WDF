window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("main-nav").style.backgroundColor = "#495E63";
  } else {
    document.getElementById("main-nav").style.backgroundColor = "transparent";
  }
}

// function toggleLocation(){
//   var location = document.getElementById("location");

//   if (location.style.display === "none") {
//     location.style.display = "block";
//   } else {
//     location.style.display = "none";
//   }

//   console.log(location.style.display);
// }

function toggleLocationRath(){
  document.getElementById("location-rath").classList.toggle("d-none");

  document.getElementById("loc-head-rath").classList.toggle("d-none");

  document.getElementById("location-inch").classList.toggle("d-none");

  document.getElementById("loc-head-inch").classList.toggle("d-none");

  // console.log(document.getElementById("loc-head-inch"));
}

function toggleLocationInch(){
  document.getElementById("location-rath").classList.toggle("d-none");

  document.getElementById("loc-head-rath").classList.toggle("d-none");

  document.getElementById("location-inch").classList.toggle("d-none");

  document.getElementById("loc-head-inch").classList.toggle("d-none");
}