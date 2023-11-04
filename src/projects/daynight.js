import { createContainer, addElement, addTranslation, addImg } from "../components/utils.js";

export function Daynight() {
	document.title = "JS | DayNight";

	const [container, navbar] = createContainer("160px");

	const header = addElement("font-header", container);
	header.style.textAlign = "center";
	addTranslation(header, "Day & Night Trader");

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	const img1 = addImg("hud-1", "./src/assets/projects/daynight/1_lowResolution.jpg", containerFlex);

	const font = addElement("font", container);
	font.style.marginBottom = "40px";
	addTranslation(font, "daynight.text");

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";
}