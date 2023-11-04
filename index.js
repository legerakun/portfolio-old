import { Preloader } from "./src/components/preloader.js";
import { Navbar } from "./src/components/navbar.js";
import { Footer } from "./src/components/footer.js";
import { Home } from "./src/home.js";
import { About } from "./src/about.js";
import { Projects } from "./src/projects.js";
import { Stalker } from "./src/projects/stalker.js";
import { Fallout } from "./src/projects/fallout.js";
import { MW } from "./src/projects/mw.js";
import { Daynight } from "./src/projects/daynight.js";
import { setTheme } from "./src/components/utils.js";

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