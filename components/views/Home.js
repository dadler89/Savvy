export default () => `<main>
<div class="container">

        <div id="sidebar">
        <h2>Game Stats</h2>
        <div id="scoreHome"></div>
        <div id="scoreAway"></div>
  </div>


    <div class="mainTop">

    <div>
    <input type="date" id="game-date" name="game-date" value='2020-09-07'
    min="2019-10-01" max="2020-09-28">
 <select id="chooseSeason">
 <option value="">--Please choose a Season--</option>
 <option value="2020-playoff" >2020 Playoffs</option>
 <option value="2019-2020-regular" >2019-2020 Season</option>

 </select>
 <select id="chooseHome">
 <option value="">--Please choose a Home Team--</option>
 <option value="NYI" >New York Islanders</option>
 <option value="TBL" >Tampa Bay Lightning</option>
 <option value="ANA" >Anaheim Ducks</option>
 <option value="ARI" >Arizona Coyotes</option>
 <option value="BOS" >Boston Bruins</option>
 <option value="BUF" >Buffalo Sabers</option>
 <option value="CAR" >Carolina Hurricanes</option>
 <option value="CGY" >Calgary Flames</option>
 <option value="CHI" >Chicago Blackhawks</option>
 <option value="CBJ" >Columbus Blue Jackets</option>
 <option value="COL" >Colorado Avalanche</option>
 <option value="DAL" >Dallas Stars</option>
 <option value="DET" >Detroit Red Wings</option>
 <option value="EDM" >Edmonton Oilers</option>
 <option value="FLA" >Florida Panthers</option>
 <option value="LAK" >Los Angeles Kings</option>
 <option value="MIN" >Minnesota Wild</option>
 <option value="MTL" >Montreal Canadiens</option>
 <option value="NSH" >Nashville Predators</option>
 <option value="NJD" >New Jersey Devils</option>
 <option value="NYR" >New York Rangers</option>
 <option value="OTT" >Ottawa Senators</option>
 <option value="PHI" >Philadelphia Flyers</option>
 <option value="PIT" >Pittsburgh Penguins</option>
 <option value="SJS" >San Jose Sharks</option>
 <option value="STL" >St. Louis Blues</option>
 <option value="TOR" >Toronto Maple Leafs</option>
 <option value="VAN" >Vancouver Canucks</option>
 <option value="VGK" >Vegas Golden Knights</option>
 <option value="WPG" >Winnipeg Jets</option>
 <option value="WSH" >Washington Capitols</option>
 </select>
 <select id="chooseAway">
 <option value="">--Please choose Away Team--</option>
 <option value="TBL" >Tampa Bay Lightning</option>
 <option value="NYI" >New York Islanders</option>
 <option value="ANA" >Anaheim Ducks</option>
 <option value="ARI" >Arizona Coyotes</option>
 <option value="BOS" >Boston Bruins</option>
 <option value="BUF" >Buffalo Sabers</option>
 <option value="CAR" >Carolina Hurricanes</option>
 <option value="CGY" >Calgary Flames</option>
 <option value="CHI" >Chicago Blackhawks</option>
 <option value="CBJ" >Columbus Blue Jackets</option>
 <option value="COL" >Colorado Avalanche</option>
 <option value="DAL" >Dallas Stars</option>
 <option value="DET" >Detroit Red Wings</option>
 <option value="EDM" >Edmonton Oilers</option>
 <option value="FLA" >Florida Panthers</option>
 <option value="LAK" >Los Angeles Kings</option>
 <option value="MIN" >Minnesota Wild</option>
 <option value="MTL" >Montreal Canadiens</option>
 <option value="NSH" >Nashville Predators</option>
 <option value="NJD" >New Jersey Devils</option>
 <option value="NYR" >New York Rangers</option>
 <option value="OTT" >Ottawa Senators</option>
 <option value="PHI" >Philadelphia Flyers</option>
 <option value="PIT" >Pittsburgh Penguins</option>
 <option value="SJS" >San Jose Sharks</option>
 <option value="STL" >St. Louis Blues</option>
 <option value="TOR" >Toronto Maple Leafs</option>
 <option value="VAN" >Vancouver Canucks</option>
 <option value="VGK" >Vegas Golden Knights</option>
 <option value="WPG" >Winnipeg Jets</option>
 <option value="WSH" >Washington Capitols</option>
 </select>
 <div>
 <button id="submitButton">Submit</button>


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
