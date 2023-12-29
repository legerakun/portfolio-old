import { addElement, addLanguage, addTheme, paintFooter } 
  from "./utils.js";

export const Navbar = (changeContainer) => {
  const navbar = addElement("nav", document.body);
  addElement("hr", document.body);

  const logo = addElement("img", navbar);
  logo.className = "logo";
  logo.src = "./assets/skills/skill-javascript.svg";
  logo.addEventListener("click", () => {
    const url = new URL(document.location);

    if (url.search.substring(6) === "home") return;

    history.pushState({ page: "home" }, "", "?page=home");
    changeContainer("home");
  });

  const home = addElement("span", navbar);
  home.className = "navbar-item";
  home.setAttribute("t", "home.navbar");
  home.addEventListener("click", () => {
    const url = new URL(document.location);

    if (url.search.substring(6) === "home") return;

    history.pushState({ page: "home" }, "", "?page=home");
    changeContainer("home");
  });

  const about = addElement("span", navbar);
  about.className = "navbar-item";
  about.setAttribute("t", "about.navbar");
  about.addEventListener("click", () => {
    const url = new URL(document.location);

    if (url.search.substring(6) === "about") return;

    history.pushState({ page: "about" }, "", "?page=about");
    changeContainer("about");
  });

  const projects = addElement("span", navbar);
  projects.className = "navbar-item";
  projects.setAttribute("t", "projects.navbar");
  projects.addEventListener("click", () => {
    const url = new URL(document.location);

    if (url.search.substring(6) === "projects") return;

    history.pushState({ page: "projects" }, "", "?page=projects");
    changeContainer("projects");
  });
};

export const Footer = () => {
  const footer = addElement("footer", document.body);

  const footerLeft = addElement("span", footer);
  footerLeft.className = "footer-container";
  footerLeft.style.position = "relative";
  footerLeft.style.left = "0";

  const fontFooter = addElement("font", footerLeft);
  fontFooter.className = "font-footer";
  fontFooter.innerHTML = "Designed and Developed by Legera";

  const footerCenter = addElement("span", footer);
  footerCenter.className = "footer-container";
  footerCenter.style.justifyContent = "space-around";
  footerCenter.style.position = "relative";
  footerCenter.style.left = "0";

  const linkGithub = addElement("img", footerCenter);
  linkGithub.className = "footer-item";
  linkGithub.src = "./assets/logo-github.svg";
  linkGithub.addEventListener("click", () =>
    window.open("https://github.com/legerakun", "_blank")
  );

  const linkDiscord = addElement("img", footerCenter);
  linkDiscord.className = "footer-item";
  linkDiscord.src = "./assets/logo-discord.svg";
  linkDiscord.addEventListener("click", () =>
    window.open("https://discord.com/users/153491549995401216", "_blank")
  );

  const linkSteam = addElement("img", footerCenter);
  linkSteam.className = "footer-item";
  linkSteam.src = "./assets/logo-steam.svg";
  linkSteam.addEventListener("click", () =>
    window.open("https://steamcommunity.com/id/legera_kun/", "_blank")
  );

  const footerRight = addElement("span", footer);
  footerRight.className = "footer-container";
  footerRight.style.position = "relative";
  footerRight.style.left = "0";
  footerRight.style.justifyContent = "flex-end";

  addLanguage(footerRight, "En");
  addLanguage(footerRight, "Ru");

  addTheme(footerRight);

  paintFooter();
};

export const Preloader = () => {
  const preloader = addElement("div", document.body);
  preloader.className = "preloader";
  preloader.style.opacity = "1.0";

  const img = addElement("img", preloader);
  img.className = "preloader-img";
  img.src = "./assets/skills/skill-javascript.svg";
  img.style.opacity = "0.0";

  const opacityInterval = setInterval(() => {
    const img = document.querySelector(".preloader-img");

    if (Number(img.style.opacity) < 1.0) {
      img.style.opacity = Number(img.style.opacity) + 0.01;
    } else {
      clearInterval(opacityInterval);
    }
  }, 10);

  setTimeout(() => {
    const opacityInterval1 = setInterval(() => {
      const preloader = document.querySelector(".preloader");

      if (Number(preloader.style.opacity) === 0.0) {
        preloader.remove();
        clearInterval(opacityInterval1);
      } else {
        preloader.style.opacity = Number(preloader.style.opacity) - 0.01;
      }
    }, 10);
  }, 1000);
};