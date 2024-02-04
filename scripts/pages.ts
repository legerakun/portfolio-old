import { 
  Stalker, 
  Fallout, 
  MW, 
  Daynight, 
  ReactMarket
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
  document.title = "TS | Home";

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
  landing.src = "./assets/landing.svg";

  setLanguage();
  setTheme();
};

export const About = (): void => {
  document.title = "TS | About";

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
  aboutHeader1.style.marginTop = "40px";
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

const addProject = (
  container: HTMLElement,
  alt: string,
  image: string,
  title: string,
  translationKey: string,
  navpage: string
): void => {
  const panel = addElement("button", container);
  panel.className = "project";
  panel.addEventListener("click", () => {
    history.pushState({ page: navpage }, "", "?page=" + navpage);
    changeContainer(navpage);
  });

  const img = <HTMLImageElement>addElement("img", panel);
  img.className = "flex-item-1";
  img.alt = alt;
  img.src = image + "logo.svg";

  const header = addElement("font", panel);
  header.className = "project-title";
  header.innerHTML = title;

  const font = addElement("font", panel);
  font.className = "project-font";
  font.setAttribute("t", translationKey);
};

export const Projects = (): void => {
  document.title = "TS | Projects";

  const container = createContainer();

  const projectsWeb = addElement("font", container);
  projectsWeb.className = "font-header";
  projectsWeb.setAttribute("t", "Web");
  projectsWeb.style.textAlign = "center";

  const containerFlexWeb = addElement("div", container);
  containerFlexWeb.className = "container-flex";
  containerFlexWeb.style.flexDirection = "row";
  containerFlexWeb.style.flexWrap = "wrap";

  addProject(
    containerFlexWeb,
    "project-react-market",
    "./assets/projects/react-market/",
    "React Market",
    "projects.react-market",
    "react-market"
  );

  const projectsGarrys = addElement("font", container);
  projectsGarrys.className = "font-header";
  projectsGarrys.setAttribute("t", "Garry's Mod");
  projectsGarrys.style.textAlign = "center";

  const containerFlexGarrys = addElement("div", container);
  containerFlexGarrys.className = "container-flex";
  containerFlexGarrys.style.flexDirection = "row";
  containerFlexGarrys.style.flexWrap = "wrap";

  addProject(
    containerFlexGarrys,
    "project-stalker",
    "./assets/projects/stalker/",
    "S.T.A.L.K.E.R.",
    "projects.stalker",
    "stalker"
  );

  addProject(
    containerFlexGarrys,
    "project-fallout",
    "./assets/projects/fallout/",
    "Fallout",
    "projects.fallout",
    "fallout"
  );

  addProject(
    containerFlexGarrys,
    "project-modernwarfare",
    "./assets/projects/mw/",
    "COD: Modern Warfare",
    "projects.mw",
    "mw"
  );

  addProject(
    containerFlexGarrys,
    "project-daynight",
    "./assets/projects/daynight/",
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
pages.set("react-market", ReactMarket);