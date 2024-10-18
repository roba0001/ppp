window.addEventListener("load", siteInit);

const allTLDR = document.querySelectorAll(".tldr");

function siteInit() {
  // too long didnt read
  document.querySelector(".tldr_button").addEventListener("click", displayTLDR);
  allTLDR.forEach((tldr) => {
    tldr.classList.add("hide");
  });
  // rotate animation
  document.querySelector(".spin_btn").addEventListener("click", beginSpinAnimation);
  // animation img hover
  document.querySelector(".animation_grid").addEventListener("mouseover", animationImgHover);
}

// too long didnt read
function displayTLDR() {
  console.log("hu,l igennem");
  allTLDR.forEach((tldr) => {
    tldr.classList.remove("hide");
  });
  document.querySelector(".tldr_button").addEventListener("click", siteInit);
}

// rotate animation

function beginSpinAnimation() {
  document.querySelector(".my_logo").classList.add("dead");
  document.querySelector(".my_logo").addEventListener("animationend", resetAnimation);
}

function resetAnimation() {
  console.log("animation over");
  document.querySelector(".my_logo").classList.remove("dead");
  document.querySelector(".spin_btn").addEventListener("click", beginSpinAnimation);
}
