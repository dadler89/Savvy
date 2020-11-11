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

  addEventListener();
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

function addEventListener(){
  document.getElementById('submitButton')
  .addEventListener("click", () => getData());
}


// axios.get(`http://localhost:8675/hockey`).then(response => {
//   console.log(response.data.info)});
  // loop over data and display each game in html
  // for each game create click handler that passes in game id
  // click handler should display roster using game id to fetch data from msf

let gameList = []

function getData(){
  const selectedHomeTeam = document.getElementById('chooseHome').value;
  console.log(selectedHomeTeam);
  const selectedAwayTeam = document.getElementById('chooseAway').value;
  console.log(selectedAwayTeam);
  const selectedDate = document.getElementById('game-date').value.split("-").join("");
  console.log(selectedDate);
  const selectedSeason = document.getElementById('chooseSeason').value;
  console.log(selectedSeason);



    axios.get(`https://api.mysportsfeeds.com/v2.1/pull/nhl/${selectedSeason}/games/${selectedDate}-${selectedHomeTeam}-${selectedAwayTeam}/lineup.json`,
      {
        headers: {
          Authorization: `Basic ${process.env.MSFAPI}`
          },
        params: {
          position: 'Goalie-Starter'
          }
      }

      )
      .then(response => {
        console.log(response.data)
        /// hide the error if request is valid
        const gameData = response.data;
        const homeGoalie = gameData.teamLineups[0].actual.lineupPositions[0].player;
        const awayGoalie = gameData.teamLineups[1].actual.lineupPositions[0].player;
        const homeTeamElement = document.getElementById('homeTeam');
        console.log(homeTeamElement);
        const awayTeamElement = document.getElementById('awayTeam');
        homeTeamElement.innerText = `${homeGoalie.firstName} ${homeGoalie.lastName}`

        awayTeamElement.innerText = `${awayGoalie.firstName} ${awayGoalie.lastName}`

    }).catch(err =>{
      console.log(err);
      // create error element for html set display === none
      // get element by id for error element
      // set display to === block
      // hide error if selection is valid

    })
  }








