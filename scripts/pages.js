import { Stalker, Fallout, MW, Daynight } from "./projects.js";
import { createContainer, addElement, addTranslation, addItem, addProject } from "./utils.js";
import skills from "../data/skills.json" assert { type: "json" };

export function About() {
	document.title = "JS | About";

	const [container, navbar] = createContainer("160px");

	const aboutHeader = addElement("font-header", container);
	aboutHeader.style.textAlign = "center";
	addTranslation(aboutHeader, "about.header");

	const about = addElement("font", container);
	about.style.textAlign = "center";
	addTranslation(about, "about.text");

	const containerMarginCenter = addElement("container-margin", container);
	containerMarginCenter.style.minHeight = "80px";

	const aboutHeader1 = addElement("font-header", container);
	aboutHeader1.style.textAlign = "center";
	addTranslation(aboutHeader1, "about.skillset");

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	Object.entries(skills).forEach(([key, value]) => addItem(key, value));

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";
}

export function Home() {
	document.title = "JS | Home";

	const [container, navbar] = createContainer("160px");

	const containerFlex = addElement("container-flex", container);
	containerFlex.className = "resize";

	const containerLeft = addElement("container-flex", containerFlex);
	containerLeft.style.flexDirection = "column";

	const containerRight = addElement("container-flex", containerFlex);

	const homeHeader = addElement("font-header", containerLeft);
	addTranslation(homeHeader, "home.header");

	const home = addElement("font", containerLeft);
	addTranslation(home, "home.text");

	const landing = addElement("img", containerRight);
	landing.className = "landing";
	landing.src = localStorage.getItem("theme") == "On" ? "../assets/landing-on.svg" : "../assets/landing-off.svg";

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";
}

export function Projects() {
	document.title = "JS | Projects";

	const [container, navbar] = createContainer("160px");

	const projectsHeader = addElement("font-header", container);
	addTranslation(projectsHeader, "Garry's Mod");
	projectsHeader.style.textAlign = "center";

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	addProject("project-stalker", 
		"../assets/projects/stalker/stalker.svg",
		"S.T.A.L.K.E.R.",
		"projects.stalker",
		3,
		Stalker
	);

	addProject("project-fallout", 
		"../assets/projects/fallout/fallout.svg",
		"Fallout",
		"projects.fallout",
		4,
		Fallout
	);

	addProject("project-modernwarfare", 
		"../assets/projects/mw/mw.svg",
		"COD: Modern Warfare",
		"projects.mw",
		5,
		MW
	);

	addProject("project-daynight", 
		"../assets/projects/daynight/daynight.svg",
		"Day & Night Trader",
		"projects.daynight",
		6,
		Daynight
	);

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";
}