import { 
  Stalker, 
  Fallout, 
  MW, 
  Daynight 
} from "./projects.ts";
import {
  createContainer,
  addElement,
  addItem,
  setLanguage,
  setTheme,
} from "./utils.ts";

interface Skills {
  skill: string;
}

const skills: Skills = await fetch("./data/skills.json")
  .then((r) => r.json())
  .then((d) => d);

export const setPage = (page: string): void => {
  const fn = pages.get(page);

  if (fn === undefined) return;

  fn();
};

export const changeContainer = (page: string): void => {
  const intervalContainer = setInterval(() => {
    const container = <HTMLElement>document.querySelector(".container");

    if (container === null) return;

    const containerOpacity = Number(container.style.opacity);

    if (containerOpacity > 0.0) {
      container.style.opacity = (containerOpacity - 0.03).toString();
    } else {
      clearInterval(intervalContainer);
    }
  }, 10);

  setTimeout(() => {
    setPage(page);
    setLanguage();
  }, 300);
};

export const Home = (): void => {
  document.title = "JS | Home";

  const container = createContainer();

  const containerFlex = addElement("div", container);
  containerFlex.className = "container-flex";
  containerFlex.style.flexDirection = "row";

  const containerLeft = addElement("div", containerFlex);
  containerLeft.className = "container-flex";
  containerLeft.style.flexDirection = "column";

  const containerRight = addElement("div", containerFlex);
  containerRight.className = "container-flex";

  const header = addElement("font", containerLeft);
  header.className = "font-header";
  header.setAttribute("t", "home.header");

  addElement("font", containerLeft).setAttribute("t", "home.text");

  const landing = <HTMLImageElement>addElement("img", containerRight);
  landing.className = "landing";
  landing.src = localStorage.getItem("theme") === "On"
    ? "./assets/landing-on.svg"
    : "./assets/landing-off.svg";

  setLanguage();
  setTheme();
};

export const About = (): void => {
  document.title = "JS | About";

  const container = createContainer();

  const aboutHeader = addElement("font", container);
  aboutHeader.className = "font-header";
  aboutHeader.style.textAlign = "center";
  aboutHeader.setAttribute("t", "about.header");

  const about = addElement("font", container);
  about.style.textAlign = "center";
  about.setAttribute("t", "about.text");

  const aboutHeader1 = addElement("font", container);
  aboutHeader1.className = "font-header";
  aboutHeader1.style.textAlign = "center";
  aboutHeader1.setAttribute("t", "about.skillset");

  const containerFlex = addElement("div", container);
  containerFlex.className = "container-flex";
  containerFlex.style.flexDirection = "row";
  containerFlex.style.flexWrap = "wrap";

  Object.entries(skills).forEach(([alt, image]) =>
    addItem(<string>alt, <string>image)
  );

  setLanguage();
  setTheme();
};

export const Projects = (): void => {
  document.title = "JS | Projects";

  const container = createContainer();

  const projectsHeader = addElement("font", container);
  projectsHeader.className = "font-header";
  projectsHeader.setAttribute("t", "Garry's Mod");
  projectsHeader.style.textAlign = "center";

  const containerFlex = addElement("div", container);
  containerFlex.className = "container-flex";
  containerFlex.style.flexDirection = "row";
  containerFlex.style.flexWrap = "wrap";

  const addProject = (
    alt: string,
    image: string,
    title: string,
    translationKey: string,
    navpage: string
  ): void => {
    const container = <HTMLElement>document.querySelector(".container-flex");

    const panel = addElement("div", container);
    panel.className = "project";
    panel.addEventListener("click", () => {
      history.pushState({ page: navpage }, "", "?page=" + navpage);
      changeContainer(navpage);
    });

    const img = <HTMLImageElement>addElement("img", panel);
    img.className = "flex-item-1";
    img.alt = alt;
    img.src = image;

    const header = addElement("font", panel);
    header.className = "project-title";
    header.innerHTML = title;

    const font = addElement("font", panel);
    font.className = "project-font";
    font.setAttribute("t", translationKey);
  };

  addProject(
    "project-stalker",
    "./assets/projects/stalker/stalker.svg",
    "S.T.A.L.K.E.R.",
    "projects.stalker",
    "stalker"
  );

  addProject(
    "project-fallout",
    "./assets/projects/fallout/fallout.svg",
    "Fallout",
    "projects.fallout",
    "fallout"
  );

  addProject(
    "project-modernwarfare",
    "./assets/projects/mw/mw.svg",
    "COD: Modern Warfare",
    "projects.mw",
    "mw"
  );

  addProject(
    "project-daynight",
    "./assets/projects/daynight/daynight.svg",
    "Day & Night Trader",
    "projects.daynight",
    "daynight"
  );

  setLanguage();
  setTheme();
};

const pages: Map<string, Function> = new Map();
pages.set("home", Home);
pages.set("about", About);
pages.set("projects", Projects);
pages.set("stalker", Stalker);
pages.set("fallout", Fallout);
pages.set("mw", MW);
pages.set("daynight", Daynight);