import { addElement, addLanguage, addTheme, paintFooter, changeContainer } from "./utils.js";

export function Navbar() {
	const navbar = addElement("navbar", document.body);
	addElement("hr", document.body);

	const logo = addElement("img", navbar);
	logo.className = "logo";
	logo.src = "./assets/skills/skill-javascript.svg";
	logo.addEventListener("click", () => {
		history.pushState({page: "home"}, "", "?page=home");
		changeContainer("home");
	});

	addElement("navbar-margin", navbar);

	const home = addElement("navbar-item", navbar);
	home.setAttribute("t", "home.navbar");
	home.addEventListener("click", () => {
		history.pushState({page: "home"}, "", "?page=home");
		changeContainer("home");
	});

	const about = addElement("navbar-item", navbar);
	about.setAttribute("t", "about.navbar");
	about.addEventListener("click", () => {
		history.pushState({page: "about"}, "", "?page=about");
		changeContainer("about");
	});

	const projects = addElement("navbar-item", navbar);
	projects.setAttribute("t", "projects.navbar");
	projects.addEventListener("click", () => {
		history.pushState({page: "projects"}, "", "?page=projects");
		changeContainer("projects");
	});
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
	linkGithub.src = "./assets/logo-github.svg";
	linkGithub.addEventListener("click", () => 
		window.open("https://github.com/legerakun", "_blank")
	);

	const linkDiscord = addElement("img", footerCenter);
	linkDiscord.className = "footer-item";
	linkDiscord.src = "./assets/logo-discord.svg";
	linkDiscord.addEventListener("click", () => 
		window.open("https://discord.com/users/153491549995401216", "_blank")
	);

	const linkSteam = addElement("img", footerCenter);
	linkSteam.className = "footer-item";
	linkSteam.src = "./assets/logo-steam.svg";
	linkSteam.addEventListener("click", () => 
		window.open("https://steamcommunity.com/id/legera_kun/", "_blank")
	);

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
	img.src = "./assets/skills/skill-javascript.svg";
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