import { createContainer, addElement, addText, addProject, applyProperties } from "./components/utils.js";
import { Stalker } from "./projects/stalker.js";
import { Fallout } from "./projects/fallout.js";
import { MW } from "./projects/mw.js";
import { Daynight } from "./projects/daynight.js";

export function Projects() {
	document.title = "JS | Projects";

	const [container, navbar] = createContainer("160px");

	const projectsHeader = addElement("font-header", container);
	addText(projectsHeader, "Garry's Mod");
	projectsHeader.style.textAlign = "center";

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	addProject("project-stalker", 
		"./src/assets/projects/stalker/stalker.svg",
		"S.T.A.L.K.E.R.",
		`A few Garry's Mod plugins are designed like the "S.T.A.L.K.E.R." game trilogy.`,
		`Несколько плагинов для Garry's Mod разработанных в стиле трилогии "S.T.A.L.K.E.R.".`,
		4,
		Stalker
	);

	addProject("project-fallout", 
		"./src/assets/projects/fallout/fallout.svg",
		"Fallout",
		`A few Garry's Mod plugins are designed like the "Fallout" game series.`,
		`Несколько плагинов для Garry's Mod разработанных в стиле серии игр "Fallout".`,
		5,
		Fallout
	);

	addProject("project-modernwarfare", 
		"./src/assets/projects/mw/mw.svg",
		"COD: Modern Warfare",
		`Garry's Mod plugin is designed like the "Call of Duty: Modern Warfare" game.`,
		`Плагин для Garry's Mod разработанный в стиле игры "Call of Duty: Modern Warfare".`,
		6,
		MW
	);

	addProject("project-daynight", 
		"./src/assets/projects/daynight/daynight.svg",
		"Day & Night Trader",
		`A Garry's Mod plugin adds a special trader and some light entities.`,
		`Плагин для Garry's Mod добавляющий специального торговца и несколько новых источников света.`,
		7,
		Daynight
	);

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";

	applyProperties();
}