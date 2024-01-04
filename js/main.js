// Title font design
let typing = new Typed(".text", {
  strings: ["", "Youtuber", "Freelancer", "Web Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

// Navbar on scrolling
const navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 56) {
    navEl.classList.remove("navbar-scrolled");
  }
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".container-card", {
  selectors: {
    target: ".card-items",
  },
  animation: {
    duration: 500,
  },
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

// project preview card

let preveiwContainer = document.querySelector(".project-preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");

document.querySelectorAll(".container-card .card-items").forEach((product) => {
  product.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services-modal"),
  modelBtns = document.querySelectorAll(".services-card-btn"),
  modalCloses = document.querySelectorAll(".services-modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalclose) => {
  modalclose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/

let swiper = new Swiper(".testimonials__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
