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
        const homeGoalieRef = gameData.references.playerReferences[0]
        const awayGoalieRef= gameData.references.playerReferences[1]
        const awayGoalie = gameData.teamLineups[1].actual.lineupPositions[0].player;
        const homeTeamElement = document.getElementById('homeTeam');
        console.log(homeTeamElement);
        const awayTeamElement = document.getElementById('awayTeam');
        const cardHome = document.createElement("div");
        const cardAway = document.createElement("div");
        cardHome.innerHTML = `<div>
        <h2>Starting Home Goalie : ${homeGoalie.firstName} ${homeGoalie.lastName} </h2>
        <br>
        <h3> Jersey Number : ${homeGoalieRef.jerseyNumber} </h3>
        <h3> Age : ${homeGoalieRef.age} </h3>
        <h3> Birthplace : ${homeGoalieRef.birthCity}, ${homeGoalieRef.birthCountry} </h3>
        <h3> Height : ${homeGoalieRef.height} </h3>
        <h3> Age : ${homeGoalieRef.age} </h3>

        </div>`;
        homeTeamElement.appendChild(cardHome);

        cardAway.innerHTML = `<div>
        <h2>Starting Away Goalie : ${awayGoalie.firstName} ${awayGoalie.lastName} </h2>
        <br>
        <h3> Jersey Number : ${awayGoalieRef.jerseyNumber} </h3>
        <h3> Age : ${awayGoalieRef.age} </h3>
        <h3> Birthplace : ${awayGoalieRef.birthCity}, ${awayGoalieRef.birthCountry} </h3>
        <h3> Height : ${awayGoalieRef.height} </h3>
        <h3> Age : ${awayGoalieRef.age} </h3>

        </div>`;
        awayTeamElement.appendChild(cardAway);
    }).catch(err =>{
      console.log(err);
    })
  }








