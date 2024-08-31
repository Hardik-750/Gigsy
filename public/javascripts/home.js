document.getElementById("get-about-us").addEventListener("click", function () {
  document.getElementById("about-us").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("goto-service").addEventListener("click", function () {
  document.getElementById("our-servise").scrollIntoView({ behavior: "smooth" });
});

gsap.from(".navbar-icons", {
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
  position: "relative",
  top: "0px",
  left: "35px",
});

// gsap.from(".main-contant-container-foabout-us-page-first-heaidng", {
//   scrollTrigger: {
//     trigger: ".main-contant-container-foabout-us-page-first-heaidng",
//     start: "top 50%",
//     opacity: 1,
//     y: 10,
//     duration: 0.3,
//   },
// });

document.querySelector('.main-our-rating-sliding-container-first').style.animationDuration = '15s'; // Speed control
