import { createContainer, addElement, addImg, setLanguage, setTheme } from "./utils.js";

export function Stalker() {
	document.title = "JS | STALKER";

	const container = createContainer();

	const header = addElement("font-header", container);
	header.innerHTML = "S.T.A.L.K.E.R.";
	header.style.textAlign = "center";

	addElement("font-header-1", container).setAttribute("t", "PDA");

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	addImg("pda-1", "./assets/projects/stalker/6_lowResolution.jpg", containerFlex);
	addImg("pda-2", "./assets/projects/stalker/7_lowResolution.jpg", containerFlex);
	addImg("pda-3", "./assets/projects/stalker/8_lowResolution.jpg", containerFlex);
	addImg("pda-4", "./assets/projects/stalker/9_lowResolution.jpg", containerFlex);
	addImg("pda-5", "./assets/projects/stalker/10_lowResolution.jpg", containerFlex);
	addImg("pda-6", "./assets/projects/stalker/11_lowResolution.jpg", containerFlex);

	addElement("font-center", container).setAttribute("t", "Info");

	addElement("font", container).setAttribute("t", "stalker.ranks");

	addElement("font-center", container).setAttribute("t", "stalker.tasks-header");

	addElement("font", container).setAttribute("t", "stalker.tasks-text");

	addElement("font-center", container).setAttribute("t", "stalker.diary-header");

	const font = addElement("font", container);
	font.style.marginBottom = "40px";
	font.setAttribute("t", "stalker.diary-text");

	addElement("font-header-1", container).setAttribute("t", "HUD");

	const containerFlex1 = addElement("container-flex", container);
	containerFlex1.style.flexDirection = "row";
	containerFlex1.style.flexWrap = "wrap";

	addImg("hud-1", "./assets/projects/stalker/1_lowResolution.jpg", containerFlex1);
	addImg("hud-2", "./assets/projects/stalker/2_lowResolution.jpg", containerFlex1);
	addImg("hud-3", "./assets/projects/stalker/3_lowResolution.jpg", containerFlex1);

	addElement("font-center", container).setAttribute("t", "Minimap");

	addElement("font", container).setAttribute("t", "stalker.minimap");

	addElement("font-center", container).setAttribute("t", "stalker.ammo-header");

	addElement("font", container).setAttribute("t", "stalker.ammo-text");

	addElement("font-center", container).setAttribute("t", "stalker.hotkey-header");

	const font1 = addElement("font", container);
	font1.style.marginBottom = "40px";
	font1.setAttribute("t", "stalker.hotkey-text");

	addElement("font-header-1", container).setAttribute("t", "stalker.inventory-header");

	const containerFlex2 = addElement("container-flex", container);
	containerFlex2.style.flexDirection = "row";
	containerFlex2.style.flexWrap = "wrap";

	addImg("inventory-1", "./assets/projects/stalker/4_lowResolution.jpg", containerFlex2);
	addImg("inventory-2", "./assets/projects/stalker/5_lowResolution.jpg", containerFlex2);

	addElement("font", container).setAttribute("t", "stalker.inventory-text");

	addElement("container-margin", container);

	setLanguage();
	setTheme();
}

export function Fallout() {
	document.title = "JS | Fallout";

	const container = createContainer();

	const header = addElement("font-header", container);
	header.style.textAlign = "center";
	header.setAttribute("t", "Fallout");

	addElement("font-header-1", container).setAttribute("t", "Menu (Helix | Nutscript)");

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	addImg("menu-1", "./assets/projects/fallout/2_lowResolution.jpg", containerFlex);
	addImg("menu-2", "./assets/projects/fallout/3_lowResolution.jpg", containerFlex);
	addImg("menu-3", "./assets/projects/fallout/4_lowResolution.jpg", containerFlex);

	addElement("font-header-1", container).setAttribute("t", "HUD");

	const containerFlex1 = addElement("container-flex", container);
	containerFlex1.style.flexDirection = "row";
	containerFlex1.style.flexWrap = "wrap";

	addImg("hud-1", "./assets/projects/fallout/1_lowResolution.jpg", containerFlex1);

	addElement("container-margin", container);

	setLanguage();
	setTheme();
}

export function MW() {
	document.title = "JS | MW";

	const container = createContainer();

	const header = addElement("font-header", container);
	header.style.textAlign = "center";
	header.setAttribute("t", "Call of Duty: Modern Warfare");

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	addImg("mw-1", "./assets/projects/mw/1_lowResolution.jpg", containerFlex);

	const font = addElement("font", container);
	font.style.marginBottom = "40px";
	font.setAttribute("t", "mw.text");

	addElement("container-margin", container);

	setLanguage();
	setTheme();
}

export function Daynight() {
	document.title = "JS | DayNight";

	const container = createContainer();

	const header = addElement("font-header", container);
	header.style.textAlign = "center";
	header.setAttribute("t", "Day & Night Trader");

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	addImg("daynight-1", "./assets/projects/daynight/1_lowResolution.jpg", containerFlex);

	const font = addElement("font", container);
	font.style.marginBottom = "40px";
	font.setAttribute("t", "daynight.text");

	addElement("container-margin", container);

	setLanguage();
	setTheme();
}