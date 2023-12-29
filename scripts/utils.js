const locales = await fetch("./data/locales.json")
  .then((r) => r.json())
  .then((d) => d);

const themes = await fetch("./data/themes.json")
  .then((r) => r.json())
  .then((d) => d);

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const findValue = (json, value) =>
  value.split(".").reduce((newValue, key) => newValue[key], json);

const paintThemeButton = () =>
  localStorage.getItem("theme") == "On"
    ? "./assets/theme-on.svg"
    : "./assets/theme-off.svg";

const setTranslation = (key) =>
  findValue(
    localStorage.getItem("language") == "En" ? locales.en : locales.ru,
    key
  ) ?? key;

export const setLanguage = () =>
  document
    .querySelectorAll("[t]")
    .forEach(
      (element) =>
        (element.innerHTML = setTranslation(element.getAttribute("t")))
    );

export const addElement = (element, parent) =>
  parent.appendChild(document.createElement(element));

export const addLanguage = (container, lang) => {
  const button = addElement("div", container);
  button.className = "language";
  button.innerHTML = lang;
  button.classList.add(lang);
  button.addEventListener("click", () => {
    if (localStorage.getItem("language") == lang) return;

    localStorage.setItem("language", lang);
    setLanguage();
    paintFooter();
  });
};

export const addTheme = (container) => {
  const img = addElement("img", container);
  img.className = "theme";
  img.src = paintThemeButton();
  img.addEventListener("click", () => {
    if (localStorage.getItem("theme") == "On") {
      localStorage.setItem("theme", "Off");
    } else {
      localStorage.setItem("theme", "On");
    }

    setTheme();
    paintFooter();
  });
};

export const addItem = (alt, src) => {
  const container = document.querySelector(".container-flex");

  const skill = addElement("img", container);
  skill.className = "flex-item";
  skill.alt = alt;
  skill.src = src;
};

export const addImg = (alt, src, container) => {
  const img = addElement("img", container);
  img.className = "flex-item-2";
  img.alt = alt;
  img.src = src;
  img.addEventListener("click", () =>
    window.open(src.substring(0, src.length - 18) + ".jpg", "_blank")
  );
};

export const createContainer = () => {
  const oldContainer = document.querySelector(".container");

  if (oldContainer !== null) oldContainer.remove();

  const container = addElement("div", document.body);
  container.className = "container";
  container.style.opacity = "0.0";

  const intervalContainer = setInterval(() => {
    const container = document.querySelector(".container");

    if (Number(container.style.opacity) < 1.0) {
      container.style.opacity = clamp(
        Number(container.style.opacity) + 0.03,
        0.0,
        1.0
      );
    } else {
      clearInterval(intervalContainer);
    }
  }, 10);

  document.querySelector("nav").before(container);

  return container;
};

export const paintFooter = () => {
  const ru = document.querySelector(".Ru");
  const en = document.querySelector(".En");
  const theme = document.querySelector(".theme");

  theme.src = paintThemeButton();

  const mainColor =
    document.documentElement.style.getPropertyValue("--main-color");
  const fontColor =
    document.documentElement.style.getPropertyValue("--font-color");

  en.style.color = localStorage.getItem("language") == "En" 
		? mainColor 
		: fontColor;

  ru.style.color = localStorage.getItem("language") == "En" 
		? fontColor 
		: mainColor;
};

export const setTheme = () => {
  const url = new URL(document.location);
  const theme = localStorage.getItem("theme") == "On" ? themes.on : themes.off;
  const img = localStorage.getItem("theme") == "On"
    ? "./assets/landing-on.svg"
    : "./assets/landing-off.svg";

  if (url.search.substring(6) === "home") {
    const landing = document.querySelector(".landing");
    landing.src = img;
  }

  document.documentElement.style.setProperty(
    "--main-color",
    findValue(theme, "main-color")
  );

  document.documentElement.style.setProperty(
    "--font-color",
    findValue(theme, "font-color")
  );

  document.documentElement.style.setProperty(
    "--bg-color",
    findValue(theme, "bg-color")
  );

  document.documentElement.style.setProperty(
    "--navbar-color",
    findValue(theme, "navbar-color")
  );

  document.documentElement.style.setProperty(
    "--main-filter",
    findValue(theme, "main-filter")
  );

  document.documentElement.style.setProperty(
    "--shadow-color",
    findValue(theme, "shadow-color")
  );

  paintFooter();
};