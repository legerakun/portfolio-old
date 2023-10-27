import { addLanguage, addTheme, addElement, paintFooter} from "./utils.js";

export function Footer() {
	const footer = addElement("footer", document.body);

	const footerLeft = addElement("footer", footer);
	footerLeft.style.position = "relative";
	footerLeft.style.left = "0";

	const fontFooter = addElement("font-footer", footerLeft);
	fontFooter.innerHTML = "Designed and Developed by Legera";

	const footerCenter = addElement("footer", footer);
	footerCenter.style.justifyContent = "space-around";
	footerCenter.style.position = "relative";
	footerCenter.style.left = "0";

	const linkGithub = addElement("img", footerCenter);
	linkGithub.className = "footer-item";
	linkGithub.src = "/src/assets/logo-github.svg";
	linkGithub.addEventListener("click", function() {
		window.open("https://github.com/legerakun", "_blank")
	}, false);

	const linkDiscord = addElement("img", footerCenter);
	linkDiscord.className = "footer-item";
	linkDiscord.src = "/src/assets/logo-discord.svg";
	linkDiscord.addEventListener("click", function() {
		window.open("https://discord.com/users/153491549995401216", "_blank")
	}, false);

	const linkSteam = addElement("img", footerCenter);
	linkSteam.className = "footer-item";
	linkSteam.src = "/src/assets/logo-steam.svg";
	linkSteam.addEventListener("click", function() {
		window.open("https://steamcommunity.com/id/legera_kun/", "_blank")
	}, false);

	const footerRight = addElement("footer", footer);
	footerRight.style.position = "relative";
	footerRight.style.left = "0";
	footerRight.style.justifyContent = "flex-end";

	addLanguage(footerRight, "En");
	addLanguage(footerRight, "Ru");

	addTheme(footerRight);

	paintFooter();
}

