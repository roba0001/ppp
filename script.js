window.addEventListener("load", siteInit);

const allTLDR = document.querySelectorAll(".tldr");

function siteInit() {
  console.log("side init");
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
  console.log("tldr displayed");
  document.querySelector(".tldr_button").removeEventListener("click", displayTLDR);
  allTLDR.forEach((tldr) => {
    tldr.classList.remove("hide");
  });
  document.querySelector(".tldr_button").addEventListener("click", hideTLDR);
}

function hideTLDR() {
  console.log("tldr hidden");
  allTLDR.forEach((tldr) => {
    tldr.classList.add("hide");
  });
  document.querySelector(".tldr_button").addEventListener("click", displayTLDR);
}

// rotate animation

function beginSpinAnimation() {
  document.querySelector(".my_logo").classList.add("dead");
  document.querySelector(".my_logo").addEventListener("animationend", resetAnimation);
}

function resetAnimation() {
  document.querySelector(".my_logo").classList.remove("dead");
  document.querySelector(".spin_btn").addEventListener("click", beginSpinAnimation);
}
