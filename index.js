/* eslint-disable prettier/prettier */
import Navigo from "navigo";
import { capitalize } from "lodash";
// importing all as a Module object

import * as state from "./store";
// importing all by name
import { Header, Nav, Main, Footer } from "./components";

// add menu toggle to bars icon in nav bar
const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();
  addNavEventListeners();
}

render(state.Home);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)]),
  })
  .resolve();


  function addNavEventListeners() {
    // add menu toggle to bars icon in nav bar
    document
      .querySelector(".fa-bars")
      .addEventListener("click", () =>
        document.querySelector("nav > ul").classList.toggle("hidden--mobile")
      );
  }
