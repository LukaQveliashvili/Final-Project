document.addEventListener("DOMContentLoaded", function () {
  const arrowButton = document.querySelector(".smooth-scroll");
  const targetSection = document.querySelector("#scroll-target");

  arrowButton.addEventListener("click", function (event) {
    event.preventDefault();

    setTimeout(function () {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }, 300);
  });
});
