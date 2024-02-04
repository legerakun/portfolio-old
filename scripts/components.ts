import { 
  addElement, 
  addLanguage,
  addTheme, 
  paintFooter 
} from "./utils.ts";

export const Navbar = (changeContainer: Function): void => {
  const navbar = addElement("nav", document.body);
  addElement("hr", document.body);

  const listener = (page: string): void => {
    const url = new URL(document.location.href);

    if (url.search.substring(6) === page) return;

    history.pushState({ page: page }, "", "?page=" + page);
    changeContainer(page);
  };

  const createNavbarItem = (
    translation: string,
    page: string
  ): HTMLElement | HTMLImageElement => {
    const item = addElement("button", navbar);
    item.className = "navbar-item";
    item.setAttribute("t", translation);
    item.addEventListener("click", () => {
      listener(page);
    });

    return item;
  };

  const logoButton = <HTMLElement>addElement("button", navbar);
  logoButton.className = "logo-button";
  logoButton.addEventListener("click", () => {
    listener("home");
  });

  const logo = <HTMLImageElement>addElement("img", logoButton);
  logo.className = "logo";
  logo.src = "./assets/skills/skill-javascript.svg";

  const firstButton = createNavbarItem("home.navbar", "home");
  firstButton.style.marginLeft = "auto";

  createNavbarItem("about.navbar", "about");
  createNavbarItem("projects.navbar", "projects");
};

export const Footer = (): void => {
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

  const linkGithubButton = <HTMLElement>addElement("button", footerCenter);
  linkGithubButton.className = "footer-button";

  const linkGithub = <HTMLImageElement>addElement("img", linkGithubButton);
  linkGithub.className = "footer-item";
  linkGithub.src = "./assets/logo-github.svg";
  linkGithub.addEventListener("click", () =>
    window.open("https://github.com/legerakun", "_blank")
  );

  const linkDiscordButton = <HTMLElement>addElement("button", footerCenter);
  linkDiscordButton.className = "footer-button";

  const linkDiscord = <HTMLImageElement>addElement("img", linkDiscordButton);
  linkDiscord.className = "footer-item";
  linkDiscord.src = "./assets/logo-discord.svg";
  linkDiscord.addEventListener("click", () =>
    window.open("https://discord.com/users/153491549995401216", "_blank")
  );

  const linkSteamButton = <HTMLElement>addElement("button", footerCenter);
  linkSteamButton.className = "footer-button";

  const linkSteam = <HTMLImageElement>addElement("img", linkSteamButton);
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

export const Preloader = (): void => {
  const preloader = addElement("div", document.body);
  preloader.className = "preloader";
  preloader.style.opacity = "1.0";

  const img = <HTMLImageElement>addElement("img", preloader);
  img.className = "preloader-img";
  img.src = "./assets/skills/skill-javascript.svg";
  img.style.opacity = "0.0";

  const opacityInterval = setInterval(() => {
    const img = <HTMLImageElement>document.querySelector(".preloader-img");

    if (img === null) return;

    if (Number(img.style.opacity) < 1.0) {
      img.style.opacity = (Number(img.style.opacity) + 0.01).toString();
    } else {
      clearInterval(opacityInterval);
    }
  }, 10);

  setTimeout(() => {
    const opacityInterval1 = setInterval(() => {
      const preloader = <HTMLElement>document.querySelector(".preloader");

      if (preloader === null) return;

      if (Number(preloader.style.opacity) === 0.0) {
        preloader.remove();
        clearInterval(opacityInterval1);
      } else {
        preloader.style.opacity = (
          Number(preloader.style.opacity) - 0.01
        ).toString();
      }
    }, 10);
  }, 1000);
};
