export default () => `<main>
<div class="container">

        <div id="sidebar">
        <h2>Game Stats</h2>
        <div id="scoreHome"></div>
        <div id="scoreAway"></div>
  </div>


    <div class="mainTop">

    <div>

    <div>
    <input id="playerNumber" type="number" value="000" min="0" max="1047">
<button id="submitLineupButton">Submit</button>
</div>
</div>

</div>




  <div id="homeTeam">

  </div>
  <div id="awayTeam">

  </div>
  <div id="selectedPlayerStat">


  </div>
  <template id="homeCard">

  </template>
  <template id="scoreHome">

  </template>

</main>`;
