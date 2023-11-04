import { createContainer, addElement, addTranslation } from "./components/utils.js";
import { About } from "./about.js";

export function Home() {
	document.title = "JS | Home";

	const [container, navbar] = createContainer("160px");

	const containerFlex = addElement("container-flex", container);
	containerFlex.className = "resize";

	const containerLeft = addElement("container-flex", containerFlex);
	containerLeft.style.flexDirection = "column";

	const containerRight = addElement("container-flex", containerFlex);

	const homeHeader = addElement("font-header", containerLeft);
	addTranslation(homeHeader, "home.header");

	const home = addElement("font", containerLeft);
	addTranslation(home, "home.text");

	const landing = addElement("img", containerRight);
	landing.className = "landing";
	landing.src = localStorage.getItem("theme") == "On" ? "./src/assets/landing-on.svg" : "./src/assets/landing-off.svg";

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";
}