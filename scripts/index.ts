import { setPage, changeContainer } from "./pages.ts";
import { Navbar, Footer, Preloader } from "./components.ts";

window.addEventListener("load", () => {
  Navbar(changeContainer);
  Footer();

  const url = new URL(document.location.href);

  if (url.search === "") {
    setPage("home");
    history.pushState({ page: "home" }, "", "?page=home");
  } else {
    setPage(url.search.substring(6));
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

  if (hr === null) return;

  hr.style.display = window.scrollY !== 0 ? "block" : "none";
});

window.addEventListener("popstate", () => setPage(history.state.page));

window.dispatchEvent(new Event("load"));