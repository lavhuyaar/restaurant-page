import "./style.css";
import { loadHomepage } from "./homepage";
import { loadContact } from "./contact";
import { loadMenu } from "./menu";

loadHomepage();

//Event Listener on home button
const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click", () => {
  content.innerHTML = ``;
  loadHomepage();
  homeBtn.style.backgroundColor = "#410e0a";
  contactBtn.style.backgroundColor = "#562723";
  menuBtn.style.backgroundColor = "#562723";
});

//Event Listener on menu button
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  content.innerHTML = ``;
  loadMenu();
  menuBtn.style.backgroundColor = "#410e0a";
  homeBtn.style.backgroundColor = "#562723";
  contactBtn.style.backgroundColor = "#562723";
});

//Event Listener on contact button
const contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click", () => {
  content.innerHTML = ``;
  loadContact();
  contactBtn.style.backgroundColor = "#410e0a";
  homeBtn.style.backgroundColor = "#562723";
  menuBtn.style.backgroundColor = "#562723";
});
