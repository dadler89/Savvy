export default () => `<main>
<div class="container">
        <div id="sidebar">
    <p>Score Board <br> No <br> Games <br> Tonight</p>
  </div>

    <div class="mainTop">
    <input type="date" id="game-date" name="game-date" value='2020-09-07'
       min="2019-10-01" max="2020-09-28">
    <select id="chooseSeason">
    <option value="">--Please choose a Season--</option>
    <option value="2020-playoff" selected>2020 Playoffs</option>
    <option value="2019-2020-regular" >2019-2020 Season</option>

    </select>
    <select id="chooseHome">
    <option value="">--Please choose a Home Team--</option>
    <option value="NYI" selected>New York Islanders</option>
    <option value="TBL" >Tampa Bay Lightening</option>
    </select>
    <select id="chooseAway">
    <option value="">--Please choose Away Team--</option>
    <option value="TBL" selected>Tampa Bay Lightening</option>
    <option value="NYI">New York Islanders</option>
    </select>
    <button id="submitButton">Submit</button>



    </div>


  <div id="homeTeam">
1
  </div>
  <div id="awayTeam">
    2
  </div>

</main>`;
