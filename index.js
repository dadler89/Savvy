import Navigo from "navigo";
import { capitalize } from "lodash";
import * as state from "./store";
import { Header, Nav, Main, Footer } from "./components";
import axios from "axios";
import "./env"
import "cors"

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





axios.get(`http://localhost:8675/api/teams`)
.then(response => console.log(response.data))
.catch(err => console.log(err));

//   axios.get(`https://statsapi.web.nhl.com/api/v1/teams`)
// .then(response => console.log(response.data))









function updateName() {
	putData('http://localhost:8675/api/updateName', { id: 1, name: 'brandon' }) // url and body of the PUT request
		.then(res => res.json()) // not using axios so i have to .json() the response/ axios does this for you
		.then(response => console.log(response)) // what i wanna do with the response. for now, just console.log it.
		.catch(err => console.log(err)); // catches error in case something screws up
}
