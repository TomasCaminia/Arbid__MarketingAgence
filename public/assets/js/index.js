import { appearMenu } from "./modules/menu.js";
import { scroll600, backToStart } from "./modules/backToStart.js";
import { navOptions } from "./modules/nav.js";
import { toOtherPage } from "./modules/otherPage.js";
//
//

// ! Al apretar el icono de menu: se despliega el nav
const menu = document.getElementById("menu");
menu.addEventListener("click", appearMenu);

//
//

// ? Al scrollear 600px en el eje Y: aparece el boton para regresar al principio
window.addEventListener("scroll", scroll600);

const scrollBtn = document.getElementById("backToStart-button");
scrollBtn.addEventListener("click", backToStart);

//
//

// ! Al apretar las opciones del nav: te lleva a aquella seccion
const optionsNav = document.querySelectorAll("#nav-principal ul li");

const services = document.getElementById("quoate-services");
const services_position = services.offsetTop;

optionsNav[0].addEventListener("click", () => {
  navOptions(services_position);
  appearMenu();
});

//

const arbidGoal = document.getElementById("arbid-goal");
const arbidGoal_position = arbidGoal.offsetTop;

optionsNav[1].addEventListener("click", () => {
  navOptions(arbidGoal_position);
  appearMenu();
});

//
//

// ! Al apretar el boton Empieza ahora: te lleva al video
const callToActions = document.querySelectorAll(".cta-buttons");

//
//

// ? Empieza ahora boton
const videoArbid =
  "https://drive.google.com/file/d/1Yo_2pK9Hjkta3RJUeV0MrG3Oo4cDTYL4/view?ts=641cdb49";
callToActions[0].addEventListener("click", () => toOtherPage(videoArbid));

//

// ! Servicios boton
callToActions[1].addEventListener("click", () => navOptions(servicesScroll));

//

// ? Conoce arbid boton
const instagramLink = "https://www.instagram.com/arbid.co/";
callToActions[2].addEventListener("click", () => toOtherPage(instagramLink));

//

// ! Cotizar servicios boton
const whatsappLink =
  "https://wa.me/541130077251?text=Hola%20arbid,%20quiero%20cotizar%20una%20sus%20servicios%20😁%20Gracias%20🧘🏻‍♂";
callToActions[3].addEventListener("click", () => toOtherPage(whatsappLink));
//
//
