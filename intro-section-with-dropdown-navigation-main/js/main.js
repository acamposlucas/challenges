const btn = document.querySelector(".header__btn");
const nav = document.querySelector(".main-navigation");
const feat = document.getElementById("feat");
const company = document.getElementById("company");

btn.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility == "false") {
    nav.setAttribute("data-visible", "true");
  } else {
    nav.setAttribute("data-visible", "false");
  }
});

feat.addEventListener("click", () => {
  const list = document.querySelector(".features__list");
  const visibility = list.getAttribute("data-visible");

  if (visibility == "false") {
    list.setAttribute("data-visible", "true");
  } else {
    list.setAttribute("data-visible", false);
  }
});

company.addEventListener("click", () => {
  const list = document.querySelector(".company__list");
  const visibility = list.getAttribute("data-visible");

  if (visibility == "false") {
    list.setAttribute("data-visible", "true");
  } else {
    list.setAttribute("data-visible", false);
  }
});
