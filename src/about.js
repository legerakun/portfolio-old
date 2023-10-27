import { createContainer, addElement, addText, addItem, applyProperties } from "./components/utils.js";

export function About() {
	document.title = "JS | About";

	const [container, navbar] = createContainer("160px");

	const aboutHeader = addElement("font-header", container);
	aboutHeader.style.textAlign = "center";
	addText(aboutHeader,
		"Let me introduce myself",
		"Позвольте представиться"
	);

	const about = addElement("font", container);
	about.style.textAlign = "center";
	addText(about, 
		`Hi, call me Legera. I'm a multidirectional developer. <br>
		I'm a bachelor of physical sciences in radiophysics. <br>
		Programming is my favorite hobby. I've been programming for over <span style="color: var(--main-color); display: inline-block"> 10 years </span>. <br>
		At this moment, I'm studying at the university and getting a master's degree. <br>`,
		`Привет, меня зовут Legera. Я разносторонний разработчик. <br>
		У меня степень бакалавра по физике по направлении радиофизика. <br>
		Мое любимое хобби это программирование. Я программирую на протяжении <span style="color: var(--main-color); display: inline-block"> 10 лет </span>. <br>
		В данный момент я обучаюсь в университете и получаю степень магистра. <br>`
	);

	const containerMarginCenter = addElement("container-margin", container);
	containerMarginCenter.style.minHeight = "80px";

	const aboutHeader1 = addElement("font-header", container);
	aboutHeader1.style.textAlign = "center";
	addText(aboutHeader1,
		"Skillset",
		"Навыки"
	);

	const containerFlex = addElement("container-flex", container);
	containerFlex.style.flexDirection = "row";
	containerFlex.style.flexWrap = "wrap";

	addItem("skill-cpp", "/src/assets/skills/skill-cpp.svg");
	addItem("skill-lua", "/src/assets/skills/skill-lua.svg");
	addItem("skill-javascript", "/src/assets/skills/skill-javascript.svg");
	addItem("skill-nodejs", "/src/assets/skills/skill-nodejs.svg");
	addItem("skill-reactjs", "/src/assets/skills/skill-reactjs.svg");
	addItem("skill-python", "/src/assets/skills/skill-python.svg");
	addItem("skill-windows", "/src/assets/skills/skill-windows.svg");
	addItem("skill-office", "/src/assets/skills/skill-office.svg");
	addItem("skill-visualstudio", "/src/assets/skills/skill-visualstudio.svg");
	addItem("skill-photoshop", "/src/assets/skills/skill-photoshop.svg");
	addItem("skill-arch", "/src/assets/skills/skill-arch.svg");
	addItem("skill-bash", "/src/assets/skills/skill-bash.svg");
	addItem("skill-git", "/src/assets/skills/skill-git.svg");
	addItem("skill-docker", "/src/assets/skills/skill-docker.svg");
	addItem("skill-nginx", "/src/assets/skills/skill-nginx.svg");
	addItem("skill-opencv", "/src/assets/skills/skill-opencv.svg");

	const containerMarginBottom = addElement("container-margin", container);
	containerMarginBottom.style.minHeight = "140px";

	applyProperties();
}