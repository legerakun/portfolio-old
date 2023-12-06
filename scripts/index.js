import { Navbar, Footer, Preloader } from "./components.js";
import { Home, About, Projects } from "./pages.js";
import { Stalker, Fallout, MW, Daynight } from "./projects.js";
import { setTheme } from "./utils.js";

function onLoad() {
	if (history.state == null) {
		history.replaceState({page: 0}, "");
	}

	if (!localStorage.getItem("language")) {
		localStorage.setItem("language", "En");
	}

	if (!localStorage.getItem("theme")) {
		localStorage.setItem("theme", "Off");
	}

	Navbar();
	onPopstate();
	Footer();
	Preloader();
	setTheme();
}

function onScroll() {
	const line = document.querySelector("hr");

	line.style.display = window.scrollY != 0 ? "block" : "none";
}

function onPopstate() {
	const pages = [
		Home, 
		About, 
		Projects,
		Stalker, 
		Fallout, 
		MW, 
		Daynight
	]

	pages[history.state.page]();
}

window.addEventListener("load", (event) => onLoad());
window.addEventListener("scroll", (event) => onScroll());
window.addEventListener("popstate", (event) => onPopstate());