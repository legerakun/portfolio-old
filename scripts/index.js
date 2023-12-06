import { Navbar, Footer, Preloader } from "./components.js";
import { pages } from "./pages.js";

window.addEventListener("load", () => {
	Navbar();
	Footer();

	const url = new URL(document.location);

	if (url.search == "") {
		history.pushState({page: "home"}, "", "?page=home");
		pages["home"]();
	} else {
		pages[url.search.substring(6)]();
	}

	if (!localStorage.getItem("language")) {
		localStorage.setItem("language", "En");
	}

	if (!localStorage.getItem("theme")) {
		localStorage.setItem("theme", "Off");
	}

	Preloader();
});

window.addEventListener("scroll", () => 
	document.querySelector("hr").style.display = window.scrollY != 0 ? "block" : "none"
);

window.addEventListener("popstate", () => 
	pages[history.state.page]()
);