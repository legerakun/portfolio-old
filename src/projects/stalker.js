import { createContainer, addElement, addText, addImg, applyProperties } from "../components/utils.js";

export function Stalker() {
	document.title = "JS | STALKER";

	const [container, navbar] = createContainer("160px");

	const header = addElement("font-header", container);
	header.style.textAlign = "center";
	header.innerHTML = "S.T.A.L.K.E.R.";

	const header1 = addElement("font-header-1", container);
	header1.innerHTML = "PDA";

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	const img1 = addImg("hud-1", "/src/assets/projects/stalker/6_lowResolution.jpg", containerFlex);
	const img2 = addImg("hud-2", "/src/assets/projects/stalker/7_lowResolution.jpg", containerFlex);
	const img3 = addImg("hud-3", "/src/assets/projects/stalker/8_lowResolution.jpg", containerFlex);
	const img4 = addImg("hud-4", "/src/assets/projects/stalker/9_lowResolution.jpg", containerFlex);
	const img5 = addImg("hud-5", "/src/assets/projects/stalker/10_lowResolution.jpg", containerFlex);
	const img6 = addImg("hud-6", "/src/assets/projects/stalker/11_lowResolution.jpg", containerFlex);

	const center = addElement("font-center", container);
	center.innerHTML = "Info";

	const font = addElement("font", container);
	addText(font, 
		`Time (Helix | NutScript).<br>
		Rank and faction relationship system.`,
		`Время (Helix | NutScript).<br>
		Система ранга и отношения к фракции.`
	);

	const center1 = addElement("font-center", container);
	addText(center1,
		"Tasks Page",
		"Вкладка задачи"
	)

	const font1 = addElement("font", container);
	addText(font1, 
		`It is impossible to ensure compatibility for every map that exists, so background images need to be created by hand for every map. 
		<a href="https://developer.valvesoftware.com/w/index.php?title=Creating_a_working_mini-map_for_CS:GO&amp;uselang=en" target="_blank" class="font-link">Guide</a>.<br>
		Displayed items can be changed.`,
		`Невозможно сделать автоматическую поддержку для всех существующих карт, 
		поэтому изображение карты необходимо создавать вручную. 
		<a href="https://developer.valvesoftware.com/wiki/Creating_a_working_mini-map:ru" target="_blank" class="font-link">Инструкция</a>.<br>
		Можно изменять отображаемые предметы.`
	)

	const center2 = addElement("font-center", container);
	addText(center2,
		"Diary & Encyclopedia Pages",
		"Вкладки Журнал И Справка"
	)

	const font2 = addElement("font", container);
	font2.style.marginBottom = "40px";
	addText(font2, 
		`Pages can be grouped by categories.<br>
		A page can contain text and image.`,
		`Вкладки могут быть сгруппированы в категории.<br>
		Вкладки могут содержать текст и изображение.`
	)

	const header2 = addElement("font-header-1", container);
	addText(header2, "HUD");

	const containerFlex1 = addElement("container-flex", container);
	containerFlex1.style.flexDirection = "row";
	containerFlex1.style.flexWrap = "wrap";

	const img7 = addImg("hud-7", "/src/assets/projects/stalker/1_lowResolution.jpg", containerFlex1);
	const img8 = addImg("hud-8", "/src/assets/projects/stalker/2_lowResolution.jpg", containerFlex1);
	const img9 = addImg("hud-9", "/src/assets/projects/stalker/3_lowResolution.jpg", containerFlex1);

	const center3 = addElement("font-center", container);
	addText(center3, "Minimap");

	const font3 = addElement("font", container);
	addText(font3, 
		`It is impossible to ensure compatibility for every map that exists, so background images need to be created by hand for every map. 
		<a href="https://developer.valvesoftware.com/w/index.php?title=Creating_a_working_mini-map_for_CS:GO&amp;uselang=en" target="_blank" class="font-link">Guide</a>.<br>
		People, NPCs, and vendor counters.<br>
		Compas.<br>
		Time (Helix | NutScript).`,
		`Невозможно сделать автоматическую поддержку для всех существующих карт, 
		поэтому изображение карты необходимо создавать вручную. 
		<a href="https://developer.valvesoftware.com/wiki/Creating_a_working_mini-map:ru" target="_blank" class="font-link">Инструкция</a>.<br>
		Счетчик людей, НПС и торговцев.<br>
		Компас.<br>
		Время (Helix | NutScript).`
	);

	const center4 = addElement("font-center", container);
	addText(center4,
		"Ammo",
		"Аммуниция"
	);

	const font4 = addElement("font", container);
	addText(font4,
		`Clip, primary, and secondary ammo counters.<br>
		Picture of ammo.`,
		`Счетчик патронов в магазине, основных и дополнительных патронов.<br>
		Изображение используемого типа патронов.`
	);

	const center5 = addElement("font-center", container);
	addText(center5,
		"Hot-Key Binds (Helix | NutScript)",
		"Горячие Клавиши (Helix | NutScript)"
	);

	const font5 = addElement("font", container);
	font5.style.marginBottom = "40px";
	addText(font5,
		`Picture for every item. <br>
		Sound and label on use.`,
		`Изображение для каждого предмета.<br>
		Звук и надпись использования.`
	);

	const header3 = addElement("font-header-1", container);
	addText(header3,
		"Inventory",
		"Инвентарь"
	);

	const containerFlex2 = addElement("container-flex", container);
	containerFlex2.style.flexDirection = "row";
	containerFlex2.style.flexWrap = "wrap";

	const img10 = addImg("hud-10", "/src/assets/projects/stalker/4_lowResolution.jpg", containerFlex2);
	const img11 = addImg("hud-11", "/src/assets/projects/stalker/5_lowResolution.jpg", containerFlex2);

	const font6 = addElement("font", container);
	addText(font6,
		`Separate slots for armor, weapons, and hot-key binds. There's a table of allowed items. Auto-equip when an item is in a slot.<br>
		Player pictures depend on player armor.<br>
		Weight system (credits to neon, DrodA).`,
		`Отдельные слоты для брони, оружия и горячих клавиш. Таблица предметов, которые можно разместить в слот. Автоматическая экипировка предметов размещенных в слоте.<br>
		Изображение игрока зависит от модели его брони.<br>
		Система веса снаряжения (авторы neon, DrodA).`
	);

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";

	applyProperties();
}