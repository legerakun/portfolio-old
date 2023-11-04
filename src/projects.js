import { createContainer, addElement, addTranslation, addProject } from "./components/utils.js";
import { Stalker } from "./projects/stalker.js";
import { Fallout } from "./projects/fallout.js";
import { MW } from "./projects/mw.js";
import { Daynight } from "./projects/daynight.js";

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
		"./src/assets/projects/stalker/stalker.svg",
		"S.T.A.L.K.E.R.",
		"projects.stalker",
		3,
		Stalker
	);

	addProject("project-fallout", 
		"./src/assets/projects/fallout/fallout.svg",
		"Fallout",
		"projects.fallout",
		4,
		Fallout
	);

	addProject("project-modernwarfare", 
		"./src/assets/projects/mw/mw.svg",
		"COD: Modern Warfare",
		"projects.mw",
		5,
		MW
	);

	addProject("project-daynight", 
		"./src/assets/projects/daynight/daynight.svg",
		"Day & Night Trader",
		"projects.daynight",
		6,
		Daynight
	);

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";
}