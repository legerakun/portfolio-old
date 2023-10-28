import { addElement } from "./utils.js";
import { Home } from "../home.js";
import { About } from "../about.js";
import { Projects } from "../projects.js";

function changeContainer(index) {
	const intervalContainer = setInterval(() => {
		const container = document.querySelector("container");

		Number(container.style.opacity) > 0.0 ? container.style.opacity = Number(container.style.opacity) - 0.03 : clearInterval(intervalContainer);
	}, "10")

	setTimeout(() => {
		switch(index) {
			case 1:
				Home();
				break;
			case 2:
				About();
				break;
			case 3:
				Projects();
				break;
		}
	}, "300");
}

export function Navbar() {
	const navbar = addElement("navbar", document.body);
	const line = addElement("hr", document.body);

	const logo = addElement("img", navbar);
	logo.className = "logo";
	logo.src = "./src/assets/skills/skill-javascript.svg";
	logo.addEventListener("click", function() {
		if (history.state.page != 1) {
			history.pushState({page: 1}, "");
			changeContainer(1);
		}
	}, false);

	const navbarMargin = addElement("navbar-margin", navbar);

	const home = addElement("navbar-item", navbar);
	home.en = "Home";
	home.ru = "Главная";
	home.addEventListener("click", function() {
		if (history.state.page != 1) {
			history.pushState({page: 1}, "");
			changeContainer(1);
		}
	}, false);

	const about = addElement("navbar-item", navbar);
	about.en = "About";
	about.ru = "Автор";
	about.addEventListener("click", function() {
		if (history.state.page != 2) {
			history.pushState({page: 2}, "");
			changeContainer(2);
		}
	}, false);

	const projects = addElement("navbar-item", navbar);
	projects.en = "Projects";
	projects.ru = "Проекты";
	projects.addEventListener("click", function() {
		if (history.state.page != 3) {
			history.pushState({page: 3}, "");
			changeContainer(3);
		}
	}, false);
}

