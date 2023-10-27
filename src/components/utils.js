const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const setText = (element) => localStorage.getItem("language") == "En" ? element.innerHTML = element.en : element.innerHTML = element.ru;

function addElement(element, parent) {
	const newElement = document.createElement(element);

	parent.appendChild(newElement);

	return newElement;
}

function addText(element, textEn, textRu = "") {
	if (textRu == "") {
		element.innerHTML = textEn;
	} else {
		element.lang = "en";
		element.en = textEn;
		element.ru = textRu;
	}
}

function addLanguage(container, lang) {
	const button = addElement("language", container);
	button.innerHTML = lang;
	button.className = lang;
	button.addEventListener("click", function() {
		if (localStorage.getItem("language") != lang) {
			localStorage.setItem("language", lang);
			setLanguage();
			paintFooter();
		}
	}, false);
}

function addTheme(container) {
	const img = addElement("img", container)
	img.className = "theme";
	img.addEventListener("click", function() {
		localStorage.getItem("theme") == "On" ? img.src = "./src/assets/theme-on.svg" : img.src = "./src/assets/theme-off.svg";
		localStorage.getItem("theme") == "On" ? localStorage.setItem("theme", "Off") : localStorage.setItem("theme", "On");
		setTheme();
		paintFooter();
	}, false);

	localStorage.getItem("theme") == "On" ? img.src = "./src/assets/theme-off.svg" : img.src = "./src/assets/theme-on.svg";
}

function addItem(alt, src) {
	const container = document.querySelector("container-flex");

	const skill = addElement("img", container);
	skill.className = "flex-item";
	skill.alt = alt;
	skill.src = src;
}

function addProject(alt, src, title, en, ru, navpage, func) {
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
	font.lang = "en";
	font.en = en;
	font.ru = ru;
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
	container != null ? container.remove() : null;
	container = addElement("container", document.body);
	container.style.opacity = 0.0;

	const intervalContainer = setInterval(() => {
		const container = document.querySelector("container");

		Number(container.style.opacity) < 1.0 ? container.style.opacity = clamp(Number(container.style.opacity) + 0.03, 0.0, 1.0) : clearInterval(intervalContainer);
	}, "10")

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

	if (localStorage.getItem("language") == "En") {
		en.style.color = mainColor;

		ru.style.color = fontColor;
	} else {
		ru.style.color = mainColor;

		en.style.color = fontColor;
	}
}

function applyProperties() {
	setLanguage();

	setTheme();
}

function setLanguage() {
	let elements = Array.from(document.querySelectorAll("navbar-item"));

	elements.forEach((element) => setText(element));

	elements = Array.from(document.querySelectorAll("*"));

	elements = elements.filter((element) => element.lang);

	elements.forEach((element) => setText(element));
}

function setTheme() {
	if (localStorage.getItem("theme") == "On") {
		document.documentElement.style.setProperty("--main-color", "rgb(255, 120, 0)"); 
		document.documentElement.style.setProperty("--font-color", "rgb(0, 0, 0)");
		document.documentElement.style.setProperty("--bg-color", "rgb(255, 255, 255)");
		document.documentElement.style.setProperty("--navbar-color", "rgba(255, 255, 255, 0.9)");
		document.documentElement.style.setProperty("--main-filter", "invert(78%) sepia(59%) saturate(7435%) hue-rotate(0deg) brightness(102%) contrast(105%)");
		document.documentElement.style.setProperty("--shadow-color", "rgb(100, 100, 100)");

		if (history.state.page == 1) {
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

		if (history.state.page == 1) {
			const landing = document.querySelector(".landing");
			landing.src = "./src/assets/landing-off.svg";
		}
	}
}

export { addElement, addText, addLanguage, addTheme, addItem, addProject, addImg, createContainer, paintFooter, applyProperties };