import { addElement } from "./utils.js";

export function Preloader() {
	const preloader = addElement("preloader", document.body);
	preloader.style.opacity = 1.0;

	const img = addElement("img", preloader);
	img.src = "./src/assets/skills/skill-javascript.svg";
	img.className = "preloader-img";
	img.style.opacity = "0.0";

	const opacityInterval = setInterval(() => {
		const img = document.querySelector(".preloader-img");
		
		Number(img.style.opacity) < 1.0 ? img.style.opacity = Number(img.style.opacity) + 0.01 : clearInterval(opacityInterval);
	}, "10");

	setTimeout(() => {
		const opacityInterval1 = setInterval(() => {
			const preloader = document.querySelector("preloader");

			if (Number(preloader.style.opacity) == 0.0) {
				preloader.remove();
				clearInterval(opacityInterval1);
			} else {
				preloader.style.opacity = Number(preloader.style.opacity) - 0.01;
			} 
		}, "10");
	}, "1000")
}

