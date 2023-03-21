const header = document.getElementById("header-principal");
const nav = document.getElementById("nav-principal");

let menuStatus = false;

export const appearMenu = () => {
  if (!menuStatus) {
    nav.style.top = "4em";

    setTimeout(() => {
      header.style.boxShadow = "none";
    }, 270);

    menuStatus = true;
    return;
  }

  if (menuStatus) {
    nav.style.top = "-20em";

    setTimeout(() => {
      header.style.boxShadow = "0 .1rem .6rem -.3rem black";
    }, 270);

    menuStatus = false;
  }
};
