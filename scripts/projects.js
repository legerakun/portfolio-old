import { createContainer, addElement, addImg } from "./utils.js";

export function Stalker() {
	document.title = "JS | STALKER";

	const [container, navbar] = createContainer("160px");

	const header = addElement("font-header", container);
	header.innerHTML = "S.T.A.L.K.E.R.";
	header.style.textAlign = "center";

	const header1 = addElement("font-header-1", container);
	header1.setAttribute("t", "PDA");

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	const img1 = addImg("hud-1", "./assets/projects/stalker/6_lowResolution.jpg", containerFlex);
	const img2 = addImg("hud-2", "./assets/projects/stalker/7_lowResolution.jpg", containerFlex);
	const img3 = addImg("hud-3", "./assets/projects/stalker/8_lowResolution.jpg", containerFlex);
	const img4 = addImg("hud-4", "./assets/projects/stalker/9_lowResolution.jpg", containerFlex);
	const img5 = addImg("hud-5", "./assets/projects/stalker/10_lowResolution.jpg", containerFlex);
	const img6 = addImg("hud-6", "./assets/projects/stalker/11_lowResolution.jpg", containerFlex);

	const center = addElement("font-center", container);
	center.setAttribute("t", "Info");

	const font = addElement("font", container);
	font.setAttribute("t", "stalker.ranks");

	const center1 = addElement("font-center", container);
	center1.setAttribute("t", "stalker.tasks-header");

	const font1 = addElement("font", container);
	font1.setAttribute("t", "stalker.tasks-text");

	const center2 = addElement("font-center", container);
	center2.setAttribute("t", "stalker.diary-header");

	const font2 = addElement("font", container);
	font2.style.marginBottom = "40px";
	font2.setAttribute("t", "stalker.diary-text");

	const header2 = addElement("font-header-1", container);
	header2.setAttribute("t", "HUD");

	const containerFlex1 = addElement("container-flex", container);
	containerFlex1.style.flexDirection = "row";
	containerFlex1.style.flexWrap = "wrap";

	const img7 = addImg("hud-7", "./assets/projects/stalker/1_lowResolution.jpg", containerFlex1);
	const img8 = addImg("hud-8", "./assets/projects/stalker/2_lowResolution.jpg", containerFlex1);
	const img9 = addImg("hud-9", "./assets/projects/stalker/3_lowResolution.jpg", containerFlex1);

	const center3 = addElement("font-center", container);
	center3.setAttribute("t", "Minimap");

	const font3 = addElement("font", container);
	font3.setAttribute("t", "stalker.minimap");

	const center4 = addElement("font-center", container);
	center4.setAttribute("t", "stalker.ammo-header");

	const font4 = addElement("font", container);
	font4.setAttribute("t", "stalker.ammo-text");

	const center5 = addElement("font-center", container);
	center5.setAttribute("t", "stalker.hotkey-header");

	const font5 = addElement("font", container);
	font5.style.marginBottom = "40px";
	font5.setAttribute("t", "stalker.hotkey-text");

	const header3 = addElement("font-header-1", container);
	header3.setAttribute("t", "stalker.inventory-header");

	const containerFlex2 = addElement("container-flex", container);
	containerFlex2.style.flexDirection = "row";
	containerFlex2.style.flexWrap = "wrap";

	const img10 = addImg("hud-10", "./assets/projects/stalker/4_lowResolution.jpg", containerFlex2);
	const img11 = addImg("hud-11", "./assets/projects/stalker/5_lowResolution.jpg", containerFlex2);

	const font6 = addElement("font", container);
	font6.setAttribute("t", "stalker.inventory-text");

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";
}

export function Fallout() {
	document.title = "JS | Fallout";

	const [container, navbar] = createContainer("160px");

	const header = addElement("font-header", container);
	header.style.textAlign = "center";
	header.setAttribute("t", "Fallout");

	const header1 = addElement("font-header-1", container);
	header1.setAttribute("t", "Menu (Helix | Nutscript)");

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	const img1 = addImg("hud-1", "./assets/projects/fallout/2_lowResolution.jpg", containerFlex);
	const img2 = addImg("hud-2", "./assets/projects/fallout/3_lowResolution.jpg", containerFlex);
	const img3 = addImg("hud-3", "./assets/projects/fallout/4_lowResolution.jpg", containerFlex);

	const header2 = addElement("font-header-1", container);
	header2.setAttribute("t", "HUD");

	const containerFlex1 = addElement("container-flex", container);
	containerFlex1.style.flexDirection = "row";
	containerFlex1.style.flexWrap = "wrap";

	const img4 = addImg("hud-4", "./assets/projects/fallout/1_lowResolution.jpg", containerFlex1);

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";
}

export function MW() {
	document.title = "JS | MW";

	const [container, navbar] = createContainer("160px");

	const header = addElement("font-header", container);
	header.style.textAlign = "center";
	header.setAttribute("t", "Call of Duty: Modern Warfare");

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	const img1 = addImg("hud-1", "./assets/projects/mw/1_lowResolution.jpg", containerFlex);

	const font = addElement("font", container);
	font.style.marginBottom = "40px";
	font.setAttribute("t", "mw.text");

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";
}

export function Daynight() {
	document.title = "JS | DayNight";

	const [container, navbar] = createContainer("160px");

	const header = addElement("font-header", container);
	header.style.textAlign = "center";
	header.setAttribute("t", "Day & Night Trader");

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	const img1 = addImg("hud-1", "./assets/projects/daynight/1_lowResolution.jpg", containerFlex);

	const font = addElement("font", container);
	font.style.marginBottom = "40px";
	font.setAttribute("t", "daynight.text");

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";
}