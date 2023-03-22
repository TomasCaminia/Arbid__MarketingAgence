import { appearMenu } from "./modules/menu.js";
import { scroll600, backToStart } from "./modules/backToStart.js";

const menu = document.getElementById("menu");
menu.addEventListener("click", appearMenu);

window.addEventListener("scroll", scroll600);

const scrollBtn = document.getElementById("backToStart-button");
scrollBtn.addEventListener("click", backToStart);
