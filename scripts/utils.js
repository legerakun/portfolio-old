import locales from "../data/locales.json" assert { type: "json" };
import themes from "../data/themes.json" assert { type: "json" };

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const findValue = (json, value) => value.split(".").reduce((newValue, key) => newValue[key], json);

const paintThemeButton = () => localStorage.getItem("theme") == "On" ? "../assets/theme-on.svg" : "../assets/theme-off.svg";

const paintLanding = () => localStorage.getItem("theme") == "On" ? "../assets/landing-on.svg" : "../assets/landing-off.svg";



export function addTranslation(element, key) {
	const language = localStorage.getItem("language") == "En" ? locales.en : locales.ru;

	element.innerHTML = findKey(language, key) ?? key;
	element.key = key;
}
export const addElement = (element, parent) => parent.appendChild(document.createElement(element));

export function addLanguage(container, lang) {
	const button = addElement("language", container);
	button.innerHTML = lang;
	button.className = lang;
	button.addEventListener("click", function() {
		if (localStorage.getItem("language") == lang) return;
		
		localStorage.setItem("language", lang);
		setLanguage();
		paintFooter();
	}, false);
}

export function addTheme(container) {
	const img = addElement("img", container)
	img.className = "theme";
	img.src = paintThemeButton();
	img.addEventListener("click", function() {
		if (localStorage.getItem("theme") == "On") {
			localStorage.setItem("theme", "Off");
		} else {
			localStorage.setItem("theme", "On");
		}

		setTheme();
		paintFooter();
	}, false);
}

export function addItem(alt, src) {
	const container = document.querySelector("container-flex");

	const skill = addElement("img", container);
	skill.className = "flex-item";
	skill.alt = alt;
	skill.src = src;
}

export function addProject(alt, src, title, translationKey, navpage, func) {
	const container = document.querySelector("container-flex");

	const panel = addElement("container-flex-1", container);
	panel.addEventListener("click", function() {
		history.pushState({page: navpage}, "");
		func();
		setLanguage();
	}, false);

	const img = addElement("img", panel);
	img.className = "flex-item-1";
	img.alt = alt;
	img.src = src;

	const header = addElement("container-flex-title", panel);
	header.innerHTML = title;

	const font = addElement("container-flex-font", panel);
	font.setAttribute("t", translationKey);
}

export function addImg(alt, src, container) {
	const img = addElement("img", container);
	img.className = "flex-item-2";
	img.alt = alt;
	img.src = src;
	img.addEventListener("click", function() {
		window.open(src.substring(0, src.length - 18) + ".jpg", "_blank")
	}, false);
}

export function createContainer(marginTop) {
	let container = document.querySelector("container");
	if (container ?? null) container.remove();
	container = addElement("container", document.body);
	container.style.opacity = "0.0";

	const intervalContainer = setInterval(() => {
		const container = document.querySelector("container");

		if (Number(container.style.opacity) < 1.0) { 
			container.style.opacity = clamp(Number(container.style.opacity) + 0.03, 0.0, 1.0);
		} else {
			clearInterval(intervalContainer);
		}
	}, 10)

	const navbar = document.querySelector("navbar");
	navbar.before(container);

	const containerMarginTop = addElement("container-margin", container);
	containerMarginTop.style.minHeight = marginTop;

	return [container, navbar];
}

export function paintFooter() {
	const ru = document.querySelector(".Ru");
	const en = document.querySelector(".En");
	const theme = document.querySelector(".theme");

	theme.src = paintThemeButton();

	const mainColor = document.documentElement.style.getPropertyValue("--main-color"); 
	const fontColor = document.documentElement.style.getPropertyValue("--font-color");

	en.style.color = localStorage.getItem("language") == "En" ? mainColor : fontColor;
	ru.style.color = localStorage.getItem("language") == "En" ? fontColor : mainColor;
}

export function setTheme() {
	const theme = localStorage.getItem("theme") == "On" ? themes.on : themes.off;

	document.documentElement.style.setProperty("--main-color", findValue(theme, "main-color")); 
	document.documentElement.style.setProperty("--font-color", findValue(theme, "font-color"));
	document.documentElement.style.setProperty("--bg-color", findValue(theme, "bg-color"));
	document.documentElement.style.setProperty("--navbar-color", findValue(theme, "navbar-color"));
	document.documentElement.style.setProperty("--main-filter", findValue(theme, "main-filter"));
	document.documentElement.style.setProperty("--shadow-color", findValue(theme, "shadow-color"));

	if (history.state.page == 0) {
		const landing = document.querySelector(".landing");
		landing.src = paintLanding();
	}

	paintFooter();
}