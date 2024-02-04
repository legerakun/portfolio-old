interface Locales {
  en: Record<string, Record<string, string>>;
  ru: Record<string, Record<string, string>>;
};

interface Themes {
  on: Record<string, string>;
  off: Record<string, string>;
};

const locales: Locales = await fetch("./data/locales.json")
  .then((r) => r.json())
  .then((d) => d);

const themes: Themes = await fetch("./data/themes.json")
  .then((r) => r.json())
  .then((d) => d);

const clamp = (num: number, min: number, max: number): number =>
  Math.min(Math.max(num, min), max);

const findValue = (json: Record<string, any>, value: string): string => {
  const split = value.split(".");

  const key = split.length === 1 ? json[split[0]] : json[split[0]][split[1]];

  return key === undefined ? value : key;
};

const paintThemeButton = (): string =>
  localStorage.getItem("theme") === "On"
    ? "./assets/theme-on.svg"
    : "./assets/theme-off.svg";

const setTranslation = (key: string): string =>
  findValue(
    localStorage.getItem("language") === "En" ? locales.en : locales.ru,
    key
  ) ?? key;

export const setLanguage = (): void =>
  document
    .querySelectorAll<HTMLElement>("[t]")
    .forEach((element) =>
      (element.innerHTML = setTranslation(<string>element.getAttribute("t")))
    );

export const addElement = (
  element: string,
  parent: HTMLElement
): HTMLElement | HTMLImageElement =>
  parent.appendChild(document.createElement(element));

export const addLanguage = (container: HTMLElement, lang: string): void => {
  const button = addElement("button", container);
  button.className = "language";
  button.innerHTML = lang;
  button.classList.add(lang);
  button.addEventListener("click", () => {
    if (localStorage.getItem("language") === lang) return;

    localStorage.setItem("language", lang);
    setLanguage();
    paintFooter();
  });
};

export const addTheme = (container: HTMLElement): void => {
  const button = <HTMLElement>addElement("button", container);
  button.className = "theme-button";
  button.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "On") {
      localStorage.setItem("theme", "Off");
    } else {
      localStorage.setItem("theme", "On");
    }

    setTheme();
    paintFooter();
  });

  const img = <HTMLImageElement>addElement("img", button);
  img.className = "theme";
  img.src = paintThemeButton();
};

export const addItem = (alt: string, src: string): void => {
  const container = <HTMLElement>document.querySelector(".container-flex");

  const skill = <HTMLImageElement>addElement("img", container);
  skill.className = "flex-item";
  skill.alt = alt;
  skill.src = src;
};

export const addImg = (
  alt: string,
  src: string,
  container: HTMLElement,
  png: boolean = false,
): void => {
  const type = png ? ".png" : ".jpg";

  const button = <HTMLElement>addElement("button", container);
  button.className = "flex-item-2-button";
  button.addEventListener("click", () =>
    window.open(src.substring(0, src.length - 18) + type, "_blank")
  );

  const img = <HTMLImageElement>addElement("img", button);
  img.className = "flex-item-2";
  img.alt = alt;
  img.src = src;
};

export const createContainer = (): HTMLElement => {
  const oldContainer = document.querySelector(".container");

  if (oldContainer !== null) oldContainer.remove();

  const container = addElement("div", document.body);
  container.className = "container";
  container.style.opacity = "0.0";

  const intervalContainer = setInterval(() => {
    const container = <HTMLElement>document.querySelector(".container");

    if (container === null) return;

    if (Number(container.style.opacity) < 1.0) {
      container.style.opacity = clamp(
        Number(container.style.opacity) + 0.03,
        0.0,
        1.0
      ).toString();
    } else {
      clearInterval(intervalContainer);
    }
  }, 10);

  const nav = document.querySelector("nav");

  if (nav !== null) {
    nav.before(container);
  }

  return container;
};

export const paintFooter = (): void => {
  const ru = <HTMLElement>document.querySelector(".Ru");
  const en = <HTMLElement>document.querySelector(".En");
  const theme = <HTMLImageElement>document.querySelector(".theme");

  if (ru === null) return;
  if (en === null) return;
  if (theme === null) return;

  theme.src = paintThemeButton();

  const mainColor =
    document.documentElement.style.getPropertyValue("--main-color");
  const fontColor =
    document.documentElement.style.getPropertyValue("--font-color");

  en.style.color = localStorage.getItem("language") === "En" 
    ? mainColor 
    : fontColor;

  ru.style.color = localStorage.getItem("language") === "En" 
    ? fontColor 
    : mainColor;
};

export const setTheme = (): void => {
  const theme = localStorage.getItem("theme") === "On" 
    ? themes.on 
    : themes.off;

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