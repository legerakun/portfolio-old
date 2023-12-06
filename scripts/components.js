import { Home, About, Projects } from "./pages.js";
import { addElement, addLanguage, addTheme, paintFooter, setLanguage } from "./utils.js";

function changeContainer(index) {
	const intervalContainer = setInterval(() => {
		const container = document.querySelector("container");

		const containerOpacity = Number(container.style.opacity);

		if (containerOpacity > 0.0) {
			container.style.opacity = containerOpacity - 0.03;
		} else {
			clearInterval(intervalContainer);
		}
	}, 10)

	setTimeout(() => {
		const pages = [
			Home,
			About,
			Projects
		]

		pages[index]();
		setLanguage();
	}, 300);
}

export function Navbar() {
	const navbar = addElement("navbar", document.body);
	const line = addElement("hr", document.body);

	const logo = addElement("img", navbar);
	logo.className = "logo";
	logo.src = "../assets/skills/skill-javascript.svg";
	logo.addEventListener("click", function() {
		if (history.state.page == 0) return; 
		
		history.pushState({page: 0}, "");
		changeContainer(0);
	}, false);

	const navbarMargin = addElement("navbar-margin", navbar);

	const home = addElement("navbar-item", navbar);
	home.setAttribute("t", "home.navbar");
	home.addEventListener("click", function() {
		if (history.state.page == 0) return; 

		history.pushState({page: 0}, "");
		changeContainer(0);
	}, false);

	const about = addElement("navbar-item", navbar);
	about.setAttribute("t", "about.navbar");
	about.addEventListener("click", function() {
		if (history.state.page == 1) return; 

		history.pushState({page: 1}, "");
		changeContainer(1);
	}, false);

	const projects = addElement("navbar-item", navbar);
	projects.setAttribute("t", "projects.navbar");
	projects.addEventListener("click", function() {
		if (history.state.page == 2) return; 

		history.pushState({page: 2}, "");
		changeContainer(2);
	}, false);
}

export function Footer() {
	const footer = addElement("footer", document.body);

	const footerLeft = addElement("footer-left", footer);
	footerLeft.style.position = "relative";
	footerLeft.style.left = "0";

	const fontFooter = addElement("font-footer", footerLeft);
	fontFooter.innerHTML = "Designed and Developed by Legera";

	const footerCenter = addElement("footer", footer);
	footerCenter.style.justifyContent = "space-around";
	footerCenter.style.position = "relative";
	footerCenter.style.left = "0";

	const linkGithub = addElement("img", footerCenter);
	linkGithub.className = "footer-item";
	linkGithub.src = "../assets/logo-github.svg";
	linkGithub.addEventListener("click", function() {
		window.open("https://github.com/legerakun", "_blank")
	}, false);

	const linkDiscord = addElement("img", footerCenter);
	linkDiscord.className = "footer-item";
	linkDiscord.src = "../assets/logo-discord.svg";
	linkDiscord.addEventListener("click", function() {
		window.open("https://discord.com/users/153491549995401216", "_blank")
	}, false);

	const linkSteam = addElement("img", footerCenter);
	linkSteam.className = "footer-item";
	linkSteam.src = "../assets/logo-steam.svg";
	linkSteam.addEventListener("click", function() {
		window.open("https://steamcommunity.com/id/legera_kun/", "_blank")
	}, false);

	const footerRight = addElement("footer", footer);
	footerRight.style.position = "relative";
	footerRight.style.left = "0";
	footerRight.style.justifyContent = "flex-end";

	addLanguage(footerRight, "En");
	addLanguage(footerRight, "Ru");

	addTheme(footerRight);

	paintFooter();
}

export function Preloader() {
	const preloader = addElement("preloader", document.body);
	preloader.style.opacity = "1.0";

	const img = addElement("img", preloader);
	img.src = "../assets/skills/skill-javascript.svg";
	img.className = "preloader-img";
	img.style.opacity = "0.0";

	const opacityInterval = setInterval(() => {
		const img = document.querySelector(".preloader-img");

		if (Number(img.style.opacity) < 1.0) {
			img.style.opacity = Number(img.style.opacity) + 0.01;
		} else {
			clearInterval(opacityInterval);
		}
	}, 10);

	setTimeout(() => {
		const opacityInterval1 = setInterval(() => {
			const preloader = document.querySelector("preloader");

			if (Number(preloader.style.opacity) == 0.0) {
				preloader.remove();
				clearInterval(opacityInterval1);
			} else {
				preloader.style.opacity = Number(preloader.style.opacity) - 0.01;
			} 
		}, 10);
	}, 1000)
}