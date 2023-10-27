import { createContainer, addElement, addText, applyProperties } from "./components/utils.js";
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
	addText(homeHeader, 
		"Hi, welcome to my JavaScript portfolio!",
		"Привет, добро пожаловать в мое JavaScript портфолио!"
	);

	const home = addElement("font", containerLeft);
	addText(home, 
		`This is a single-page website created from scratch. 
		Here I'm testing some opportunities in HTML, CSS, and JavaScript.
		Feel free to use the <a href="https://github.com/legerakun/portfolio-js" target="_blank" class="font-link">source code</a>.`,
		`Это одностраничный сайт созданный с нуля.
		Здесь я тестирую различные возможности HTML, CSS и JavaScript.
		Здесь вы можете найти <a href="https://github.com/legerakun/portfolio-js" target="_blank" class="font-link">исходный код</a>.`
	);

	const landing = addElement("img", containerRight);
	landing.className = "landing";

	applyProperties();

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";
}