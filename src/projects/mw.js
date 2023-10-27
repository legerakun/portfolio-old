import { createContainer, addElement, addText, addImg, applyProperties } from "../components/utils.js";

export function MW() {
	document.title = "JS | MW";

	const [container, navbar] = createContainer("160px");

	const header = addElement("font-header", container);
	header.style.textAlign = "center";
	header.innerHTML = "Call of Duty: Modern Warfare";

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	const img1 = addImg("hud-1", "/src/assets/projects/mw/1_lowResolution.jpg", containerFlex);

	const font = addElement("font", container);
	font.style.marginBottom = "40px";
	addText(font,
		`Objective system. Commands to create and delete objectives. The description of the objective can be changed.<br>
		Ammo, grenades, and flashbangs counter.<br>
		Command to create an announcement.<br>
		Command to create a subtitle.<br>
		2D Radar. Can show checkpoints.<br>
		Crouch and standing indicators.`,
		`Система контрольных точек. Команды для создания и удаления контрольных точек. Возможность изменить описание контрольной точки.<br>
		Счетчик боеприпасов, гранат и ослепляющих гранат.<br>
		Команда для создания объявления.<br>
		Команда для создания субтитров.<br>
		2D Радар. Отображает контрольные точки.<br>
		Индикатор положения игрока.`
	);

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";

	applyProperties();
}