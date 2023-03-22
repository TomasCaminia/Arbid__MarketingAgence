const scrollBtn = document.getElementById("backToStart-button");

export const scroll600 = () => {
  if (window.pageYOffset > 600) {
    scrollBtn.classList.remove("hidden");
  }

  if (window.pageYOffset < 600) {
    scrollBtn.classList.add("hidden");
  }
};

export const backToStart = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
