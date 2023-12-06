import { Stalker, Fallout, MW, Daynight } from "./projects.js";
import { createContainer, addElement, addItem, addProject, setLanguage, setTheme } from "./utils.js";
import skills from "../data/skills.json" assert { type: "json" };

export function Home() {
	document.title = "JS | Home";

	const container = createContainer();

	const containerFlex = addElement("container-flex", container);
	containerFlex.className = "resize";

	const containerLeft = addElement("container-flex", containerFlex);
	containerLeft.style.flexDirection = "column";

	const containerRight = addElement("container-flex", containerFlex);

	addElement("font-header", containerLeft).setAttribute("t", "home.header");

	addElement("font", containerLeft).setAttribute("t", "home.text");

	const landing = addElement("img", containerRight);
	landing.className = "landing";
	landing.src = localStorage.getItem("theme") == "On" ? "./assets/landing-on.svg" : "./assets/landing-off.svg";

	addElement("container-margin", container);

	setLanguage();
	setTheme();
}

export function About() {
	document.title = "JS | About";

	const container = createContainer();

	const aboutHeader = addElement("font-header", container);
	aboutHeader.style.textAlign = "center";
	aboutHeader.setAttribute("t", "about.header");

	const about = addElement("font", container);
	about.style.textAlign = "center";
	about.setAttribute("t", "about.text");

	addElement("container-margin", container).style.minHeight = "80px";

	const aboutHeader1 = addElement("font-header", container);
	aboutHeader1.style.textAlign = "center";
	aboutHeader1.setAttribute("t", "about.skillset");

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	Object.entries(skills).forEach(([alt, image]) => addItem(alt, image));

	addElement("container-margin", container);

	setLanguage();
	setTheme();
}

export function Projects() {
	document.title = "JS | Projects";

	const container = createContainer();

	const projectsHeader = addElement("font-header", container);
	projectsHeader.setAttribute("t", "Garry's Mod");
	projectsHeader.style.textAlign = "center";

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	addProject("project-stalker", 
		"./assets/projects/stalker/stalker.svg",
		"S.T.A.L.K.E.R.",
		"projects.stalker",
		"stalker"
	);

	addProject("project-fallout", 
		"./assets/projects/fallout/fallout.svg",
		"Fallout",
		"projects.fallout",
		"fallout"
	);

	addProject("project-modernwarfare", 
		"./assets/projects/mw/mw.svg",
		"COD: Modern Warfare",
		"projects.mw",
		"mw"
	);

	addProject("project-daynight", 
		"./assets/projects/daynight/daynight.svg",
		"Day & Night Trader",
		"projects.daynight",
		"daynight"
	);

	addElement("container-margin", container);

	setLanguage();
	setTheme();
}

export const pages = {
	"home":Home,
	"about":About,
	"projects":Projects,
	"stalker":Stalker,
	"fallout":Fallout,
	"mw":MW,
	"daynight":Daynight
};