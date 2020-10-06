/* eslint-disable prettier/prettier */
import Navigo from "navigo";
import { capitalize } from "lodash";
// importing all as a Module object

import * as state from "./store";
// importing all by name
import { Header, Nav, Main, Footer } from "./components";

// add menu toggle to bars icon in nav bar

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.link)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();
}

render(state.Home);

const router = new Navigo(window.location.origin);

router.on({
  "/": () => (params) => {
    let page = capitalize(params.page);
    render(state[page]);
  },
});
