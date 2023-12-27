import { pages, changeContainer } from "./pages.js";
import { Navbar, Footer, Preloader } from "./components.js";

window.addEventListener("load", () => {
  Navbar(changeContainer);
  Footer();

  const url = new URL(document.location);

  if (url.search == "") {
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
});

window.addEventListener("scroll", () => {
  const hr = document.querySelector("hr");

  hr.style.display = window.scrollY != 0 ? "block" : "none";
});

window.addEventListener("popstate", () => pages[history.state.page]());

dispatchEvent(new Event("load"));