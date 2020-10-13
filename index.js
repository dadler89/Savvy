import Navigo from "navigo";
import { capitalize } from "lodash";
import "./env"
import * as state from "./store";
import { Header, Nav, Main, Footer } from "./components";


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
      .querySelector(".fa-hockey-puck")
      .addEventListener("click", () =>
        document.querySelector("nav > ul").classList.toggle("hidden--mobile")
      );
  }


  import "./env"

axios.get(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`,
{
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
})
.then(response => console.log(response.data));
