import { pages, changeContainer } from "./pages.js";
import { Navbar, Footer, Preloader } from "./components.js";

const resize = () => {
  const url = new URL(document.location.href);

  console.log(url.search === "?page=home", window.innerWidth)

  if (url.search === "?page=home") {
    const container = document.querySelector(".container-flex");
  
    if (container === null) return;

    console.log("a");

    container.style.flexDirection = window.innerWidth <= 1030
      ? "column"
      : "row";
  }
};

window.addEventListener("load", () => {
  Navbar(changeContainer);
  Footer();

  const url = new URL(document.location);

  if (url.search === "") {
    history.pushState({ page: "home" }, "", "?page=home");
    pages["home"]();
  } else {
    pages[url.search.substring(6)]();
  }

  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "En");
  }

  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "Off");
  }

  Preloader();
  resize();
});

window.addEventListener("scroll", () => {
  const hr = document.querySelector("hr");

  hr.style.display = window.scrollY !== 0 ? "block" : "none";
});

window.addEventListener("popstate", () => pages[history.state.page]());

window.addEventListener("resize", resize);

window.dispatchEvent(new Event("load"));