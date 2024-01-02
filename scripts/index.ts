import { setPage, changeContainer } from "./pages.ts";
import { Navbar, Footer, Preloader } from "./components.ts";

const resize = (): void => {
  const url = new URL(document.location.href);

  console.log(url.search === "?page=home", window.innerWidth)

  if (url.search === "?page=home") {
    const container = <HTMLElement>document.querySelector(".container-flex");
  
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
  resize();
});

window.addEventListener("scroll", () => {
  const hr = document.querySelector("hr");

  if (hr === null) return;

  hr.style.display = window.scrollY !== 0 ? "block" : "none";
});

window.addEventListener("popstate", () => setPage(history.state.page));

window.addEventListener("resize", resize);

window.dispatchEvent(new Event("load"));