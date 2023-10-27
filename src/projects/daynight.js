import { createContainer, addElement, addText, addImg, applyProperties } from "../components/utils.js";

export function Daynight() {
	document.title = "JS | DayNight";

	const [container, navbar] = createContainer("160px");

	const header = addElement("font-header", container);
	header.style.textAlign = "center";
	header.innerHTML = "Day & Night Trader";

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	const img1 = addImg("hud-1", "/src/assets/projects/daynight/1_lowResolution.jpg", containerFlex);

	const font = addElement("font", container);
	font.style.marginBottom = "40px";
	addText(font, 
		`Based on <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1614964558" target="_blank" class="font-link">Addon</a>.<br>
		Light entities that turn on only at night and turn off when the day comes.<br>
		Vendor that appears only at night at random places. disappears when the day comes.`,
		`Основан на <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1614964558" target="_blank" class="font-link">аддоне</a>.<br>
		Источники света, которые включаются только ночью, и выключаются с наступлением дня.<br>
		Торговец, который появляется только ночью в случайных местах, и исчезает с наступлением дня.`
	);

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";

	applyProperties();
}