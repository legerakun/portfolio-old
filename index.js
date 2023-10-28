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
}

function onScroll() {
	const line = document.querySelector("hr");

	window.scrollY != 0 ? line.style.display = "block" : line.style.display = "none";
}

function onPopstate() {
	switch (history.state.page){
		case 1:
			Home();
			break;
		case 2:
			About();
			break;
		case 3:
			Projects();
			break;
		case 4:
			Stalker();
			break;
		case 5:
			Fallout();
			break;
		case 6:
			MW();
			break;
		case 7:
			Daynight();
			break;
	}
}

window.addEventListener("load", (event) => onLoad());
window.addEventListener("scroll", (event) => onScroll());
window.addEventListener("popstate", (event) => onPopstate());