import { createContainer, addElement, addImg, applyProperties } from "../components/utils.js";

export function Fallout() {
	document.title = "JS | Fallout";

	const [container, navbar] = createContainer("160px");

	const header = addElement("font-header", container);
	header.style.textAlign = "center";
	header.innerHTML = "Fallout";

	const header1 = addElement("font-header-1", container);
	header1.innerHTML = "Menu (Helix | Nutscript)";

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	const img1 = addImg("hud-1", "./src/assets/projects/fallout/2_lowResolution.jpg", containerFlex);
	const img2 = addImg("hud-2", "./src/assets/projects/fallout/3_lowResolution.jpg", containerFlex);
	const img3 = addImg("hud-3", "./src/assets/projects/fallout/4_lowResolution.jpg", containerFlex);

	const header2 = addElement("font-header-1", container);
	header2.innerHTML = "HUD";

	const containerFlex1 = addElement("container-flex", container);
	containerFlex1.style.flexDirection = "row";
	containerFlex1.style.flexWrap = "wrap";

	const img4 = addImg("hud-4", "./src/assets/projects/fallout/1_lowResolution.jpg", containerFlex1);

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";

	applyProperties();
}