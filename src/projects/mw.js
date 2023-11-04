import { createContainer, addElement, addTranslation, addImg } from "../components/utils.js";

export function MW() {
	document.title = "JS | MW";

	const [container, navbar] = createContainer("160px");

	const header = addElement("font-header", container);
	header.style.textAlign = "center";
	addTranslation(header, "Call of Duty: Modern Warfare");

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	const img1 = addImg("hud-1", "./src/assets/projects/mw/1_lowResolution.jpg", containerFlex);

	const font = addElement("font", container);
	font.style.marginBottom = "40px";
	addTranslation(font, "mw.text");

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";
}