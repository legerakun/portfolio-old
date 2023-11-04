import locales from "../data/locales.json" assert { type: "json" };

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
	if (localStorage.getItem("theme") == "On") {
		document.documentElement.style.setProperty("--main-color", "rgb(255, 120, 0)"); 
		document.documentElement.style.setProperty("--font-color", "rgb(0, 0, 0)");
		document.documentElement.style.setProperty("--bg-color", "rgb(255, 255, 255)");
		document.documentElement.style.setProperty("--navbar-color", "rgba(255, 255, 255, 0.9)");
		document.documentElement.style.setProperty("--main-filter", "invert(78%) sepia(59%) saturate(7435%) hue-rotate(0deg) brightness(102%) contrast(105%)");
		document.documentElement.style.setProperty("--shadow-color", "rgb(100, 100, 100)");

		if (history.state.page == 0) {
			const landing = document.querySelector(".landing");
			landing.src = "./src/assets/landing-on.svg";
		}
	} else {
		document.documentElement.style.setProperty("--main-color", "rgb(240, 220, 80)"); 
		document.documentElement.style.setProperty("--font-color", "rgb(210, 210, 210)");
		document.documentElement.style.setProperty("--bg-color", "rgb(20, 20, 20)");
		document.documentElement.style.setProperty("--navbar-color", "rgba(20, 20, 20, 0.9)");
		document.documentElement.style.setProperty("--main-filter", "invert(75%) sepia(54%) saturate(496%) hue-rotate(6deg) brightness(110%) contrast(88%)");
		document.documentElement.style.setProperty("--shadow-color", "blue");

		if (history.state.page == 0) {
			const landing = document.querySelector(".landing");
			landing.src = "./src/assets/landing-off.svg";
		}
	}
}

export { addElement, addTranslation, addLanguage, addTheme, addItem, addProject, addImg, createContainer, paintFooter, setTheme };