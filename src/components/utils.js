import locales from "../data/locales.json" assert { type: "json" };
import themes from "../data/themes.json" assert { type: "json" };

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function findKey(json, key){
	key = key.split(".");

	for (let i = 0; i < key.length; i++) {
		json = json[key[i]];
	}

	return json;
}
function addElement(element, parent) {
	const newElement = document.createElement(element);

	parent.appendChild(newElement);

	return newElement;
}

function addTranslation(element, key) {
	const language = localStorage.getItem("language") == "En" ? locales.en : locales.ru;

	element.innerHTML = findKey(language, key) ?? key;
	element.key = key;
}

function addLanguage(container, lang) {
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

function addTheme(container) {
	const img = addElement("img", container)
	img.className = "theme";
	img.addEventListener("click", function() {
		if (localStorage.getItem("theme") == "On") {
			localStorage.setItem("theme", "Off");
		} else {
			localStorage.setItem("theme", "On");
		}

		img.src = localStorage.getItem("theme") == "On" ? "./src/assets/theme-on.svg" : "./src/assets/theme-off.svg";
		setTheme();
		paintFooter();
	}, false);

	img.src = localStorage.getItem("theme") == "On" ? "./src/assets/theme-off.svg" : "./src/assets/theme-on.svg";
}

function addItem(alt, src) {
	const container = document.querySelector("container-flex");

	const skill = addElement("img", container);
	skill.className = "flex-item";
	skill.alt = alt;
	skill.src = src;
}

function addProject(alt, src, title, translationKey, navpage, func) {
	const container = document.querySelector("container-flex");

	const panel = addElement("container-flex-1", container);
	panel.addEventListener("click", function() {
		history.pushState({page: navpage}, "");
		func();
	}, false);

	const img = addElement("img", panel);
	img.className = "flex-item-1";
	img.alt = alt;
	img.src = src;

	const header = addElement("container-flex-title", panel);
	header.innerHTML = title;

	const font = addElement("container-flex-font", panel);
	addTranslation(font, translationKey);
}

function addImg(alt, src, container) {
	const img = addElement("img", container);
	img.className = "flex-item-2";
	img.alt = alt;
	img.src = src;
	img.addEventListener("click", function() {
		window.open(src.substring(0, src.length - 18) + ".jpg", "_blank")
	}, false);
}

function createContainer(marginTop) {
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

function paintFooter() {
	const ru = document.querySelector(".Ru");
	const en = document.querySelector(".En");
	const on = document.querySelector(".theme.On");
	const off = document.querySelector(".theme.Off");

	const mainColor = document.documentElement.style.getPropertyValue("--main-color"); 
	const fontColor = document.documentElement.style.getPropertyValue("--font-color");

	en.style.color = localStorage.getItem("language") == "En" ? mainColor : fontColor;
	ru.style.color = localStorage.getItem("language") == "En" ? fontColor : mainColor;
}

function setLanguage() {
	const allElements = Array.from(document.querySelectorAll("*"));

	allElements.filter((element) => element.key).forEach((element) => addTranslation(element, element.key));
}

function setTheme() {
	const theme = localStorage.getItem("theme") == "On" ? themes.on : themes.off;

	document.documentElement.style.setProperty("--main-color", findKey(theme, "main-color")); 
	document.documentElement.style.setProperty("--font-color", findKey(theme, "font-color"));
	document.documentElement.style.setProperty("--bg-color", findKey(theme, "bg-color"));
	document.documentElement.style.setProperty("--navbar-color", findKey(theme, "navbar-color"));
	document.documentElement.style.setProperty("--main-filter", findKey(theme, "main-filter"));
	document.documentElement.style.setProperty("--shadow-color", findKey(theme, "shadow-color"));

	if (history.state.page == 0) {
		const landing = document.querySelector(".landing");
		landing.src = localStorage.getItem("theme") == "On" ? "./src/assets/landing-on.svg" : "./src/assets/landing-off.svg";
	}

	paintFooter();
}

export { addElement, addTranslation, addLanguage, addTheme, addItem, addProject, addImg, createContainer, paintFooter, setTheme };