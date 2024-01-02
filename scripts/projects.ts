import { createContainer, addElement, addImg, setLanguage, setTheme } 
  from "./utils.js";

export const Stalker = () => {
  document.title = "TS | STALKER";

  const container = createContainer();

  const header = addElement("font", container);
  header.className = "font-header";
  header.innerHTML = "S.T.A.L.K.E.R.";
  header.style.textAlign = "center";

  const header1 = addElement("font", container);
  header1.className = "font-header-1";
  header1.setAttribute("t", "PDA");

  const containerFlex = addElement("div", container);
  containerFlex.className = "container-flex";
  containerFlex.style.flexDirection = "row";
  containerFlex.style.flexWrap = "wrap";

  addImg(
    "pda-1",
    "./assets/projects/stalker/6_lowResolution.jpg",
    containerFlex
  );
	
  addImg(
    "pda-2",
    "./assets/projects/stalker/7_lowResolution.jpg",
    containerFlex
  );

  addImg(
    "pda-3",
    "./assets/projects/stalker/8_lowResolution.jpg",
    containerFlex
  );

  addImg(
    "pda-4",
    "./assets/projects/stalker/9_lowResolution.jpg",
    containerFlex
  );

  addImg(
    "pda-5",
    "./assets/projects/stalker/10_lowResolution.jpg",
    containerFlex
  );

  addImg(
    "pda-6",
    "./assets/projects/stalker/11_lowResolution.jpg",
    containerFlex
  );

  const font2 = addElement("font", container);
  font2.className = "font-center";
  font2.setAttribute("t", "Info");

  addElement("font", container).setAttribute("t", "stalker.ranks");

  const font3 = addElement("font", container);
  font3.className = "font-center";
  font3.setAttribute("t", "stalker.tasks-header");

  addElement("font", container).setAttribute("t", "stalker.tasks-text");

  const font4 = addElement("font", container);
  font4.className = "font-center";
  font4.setAttribute("t", "stalker.diary-header");

  const font = addElement("font", container);
  font.style.marginBottom = "40px";
  font.setAttribute("t", "stalker.diary-text");

  const header2 = addElement("font", container);
  header2.className = "font-header-1";
  header2.setAttribute("t", "HUD");

  const containerFlex1 = addElement("div", container);
  containerFlex1.className = "container-flex";
  containerFlex1.style.flexDirection = "row";
  containerFlex1.style.flexWrap = "wrap";

  addImg(
    "hud-1",
    "./assets/projects/stalker/1_lowResolution.jpg",
    containerFlex1
  );

  addImg(
    "hud-2",
    "./assets/projects/stalker/2_lowResolution.jpg",
    containerFlex1
  );

  addImg(
    "hud-3",
    "./assets/projects/stalker/3_lowResolution.jpg",
    containerFlex1
  );

  addElement("font", container).setAttribute("t", "stalker.minimap");

  const font5 = addElement("font", container);
  font5.className = "font-center";
  font5.setAttribute("t", "stalker.ammo-header");

  addElement("font", container).setAttribute("t", "stalker.ammo-text");

  const font6 = addElement("font", container);
  font6.className = "font-center";
  font6.setAttribute("t", "stalker.hotkey-header");

  const font1 = addElement("font", container);
  font1.style.marginBottom = "40px";
  font1.setAttribute("t", "stalker.hotkey-text");

  addElement("font-header-1", container).setAttribute(
    "t",
    "stalker.inventory-header"
  );

  const containerFlex2 = addElement("div", container);
  containerFlex2.className = "container-flex";
  containerFlex2.style.flexDirection = "row";
  containerFlex2.style.flexWrap = "wrap";

  addImg(
    "inventory-1",
    "./assets/projects/stalker/4_lowResolution.jpg",
    containerFlex2
  );

  addImg(
    "inventory-2",
    "./assets/projects/stalker/5_lowResolution.jpg",
    containerFlex2
  );

  addElement("font", container).setAttribute("t", "stalker.inventory-text");

  setLanguage();
  setTheme();
};

export const Fallout = () => {
  document.title = "TS | Fallout";

  const container = createContainer();

  const header = addElement("font", container);
  header.className = "font-header";
  header.style.textAlign = "center";
  header.setAttribute("t", "Fallout");

  const header1 = addElement("font", container)
  header1.className = "font-header-1";
  header1.setAttribute("t", "Menu (Helix | Nutscript)");

  const containerFlex = addElement("div", container);
  containerFlex.className = "container-flex";
  containerFlex.style.flexDirection = "row";
  containerFlex.style.flexWrap = "wrap";

  addImg(
    "menu-1",
    "./assets/projects/fallout/2_lowResolution.jpg",
    containerFlex
  );

  addImg(
    "menu-2",
    "./assets/projects/fallout/3_lowResolution.jpg",
    containerFlex
  );

  addImg(
    "menu-3",
    "./assets/projects/fallout/4_lowResolution.jpg",
    containerFlex
  );

  const header2 = addElement("font", container);
  header2.className = "font-header-1";
  header2.setAttribute("t", "HUD");

  const containerFlex1 = addElement("div", container);
  containerFlex1.className = "container-flex";
  containerFlex1.style.flexDirection = "row";
  containerFlex1.style.flexWrap = "wrap";

  addImg(
    "hud-1",
    "./assets/projects/fallout/1_lowResolution.jpg",
    containerFlex1
  );

  setLanguage();
  setTheme();
};

export const MW = () => {
  document.title = "TS | MW";

  const container = createContainer();

  const header = addElement("font", container);
  header.className = "font-header";
  header.style.textAlign = "center";
  header.setAttribute("t", "Call of Duty: Modern Warfare");

  const containerFlex = addElement("div", container);
  containerFlex.className = "container-flex";
  containerFlex.style.flexDirection = "row";
  containerFlex.style.flexWrap = "wrap";

  addImg("mw-1", "./assets/projects/mw/1_lowResolution.jpg", containerFlex);

  const font = addElement("font", container);
  font.style.marginBottom = "40px";
  font.setAttribute("t", "mw.text");

  setLanguage();
  setTheme();
};

export const Daynight = () => {
  document.title = "TS | DayNight";

  const container = createContainer();

  const header = addElement("font", container);
  header.className = "font-header";
  header.style.textAlign = "center";
  header.setAttribute("t", "Day & Night Trader");

  const containerFlex = addElement("div", container);
  containerFlex.className = "container-flex";
  containerFlex.style.flexDirection = "row";
  containerFlex.style.flexWrap = "wrap";

  addImg(
    "daynight-1",
    "./assets/projects/daynight/1_lowResolution.jpg",
    containerFlex
  );

  const font = addElement("font", container);
  font.style.marginBottom = "40px";
  font.setAttribute("t", "daynight.text");

  setLanguage();
  setTheme();
};