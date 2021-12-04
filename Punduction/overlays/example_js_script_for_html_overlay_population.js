// Read JSON file
var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.open("GET", "../../output/outputObject.json", true);
xobj.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {   
    processJson(this);
	
  }
};
xobj.send();


function processJson(jsonRequest) {

  var teamBasePath = "../../assets/teams/";
  var flagBasePath = "../../assets/flags/";
  var characterImagePath = "../../assets/characterImages/";
  var json = JSON.parse(jsonRequest.responseText);
  
  var player1="", player2=""; 
  var p1score="", p2score="";
  var p1logo="", p2logo="";
  var p1team="", p2team="";
  var p1country="", p2country="";
  var p1image="", p2image="";
  var p1twitter= "", p2twitter= "";
  var p1twitch= "", p2twitch= "";
  var p1Pronouns= "", p2Pronouns= "";
  var caster1="", caster2="", caster3="", caster4="";
  var casterTwitter1="", casterTwitter2="", casterTwitter3="", casterTwitter4="";
  var round="", bestof="";
  
  var p1averagePlacement="", p1placement1="", p1placement2="", p1placement3="", p1placement4="", p1placement5="";
  var p2averagePlacement="", p2placement1="", p2placement2="", p2placement3="", p2placement4="", p2placement5="";
  var h2hP1SetWins = "", h2hP2SetWins = "";
  var h2hP1SetWinRate = "", h2hP2SetWinRate = "";
  
  
  //Player1
  player1 = json["player1"]["name"];
  p1logo = teamBasePath + json["player1"]["team"];
  p1team = json["player1"]["prefix"];
  p1country = "background: url(" + flagBasePath + json["player1"]["country"] + ");";
  p1score = json["player1"]["score"];
  p1image = "background-image: url(" + characterImagePath + json["player1"]["image"] + ");";  
  p1twitter = json["player1"]["twitter"];
  p1twitch = json["player1"]["twitch"];
  p1Pronouns = json["player1"]["pronouns"];
  
  //RecentPlacementPlayer1
  p1averagePlacement = json["placement1"]["AveragePlacement"];
  p1placement1 = json["placement1"]["RecentPlacement1"];
  p1placement2 = json["placement1"]["RecentPlacement2"];
  p1placement3 = json["placement1"]["RecentPlacement3"];
  p1placement4 = json["placement1"]["RecentPlacement4"];
  p1placement5 = json["placement1"]["RecentPlacement5"];
 
  //Player2
  player2 = json["player2"]["name"];
  p2logo = teamBasePath + json["player2"]["team"];
  p2team = json["player2"]["prefix"];
  p2country = "background: url(" + flagBasePath + json["player2"]["country"] + ");";
  p2score = json["player2"]["score"];
  p2image = "background-image: url(" + characterImagePath + json["player2"]["image"] + ");";  
  p2twitter = json["player2"]["twitter"];
  p2twitch = json["player2"]["twitch"];
  p2Pronouns = json["player2"]["pronouns"];

  //RecentPlacementPlayer2
  p2averagePlacement = json["placement2"]["AveragePlacement"];
  p2placement1 = json["placement2"]["RecentPlacement1"];
  p2placement2 = json["placement2"]["RecentPlacement2"];
  p2placement3 = json["placement2"]["RecentPlacement3"];
  p2placement4 = json["placement2"]["RecentPlacement4"];
  p2placement5 = json["placement2"]["RecentPlacement5"];
  
  //Casters
  caster1 = json["commentator1"]["name"];
  casterTwitter1 = json["commentator1"]["twitter"];
  caster2 = json["commentator2"]["name"];
  casterTwitter2 = json["commentator2"]["twitter"];
  caster3 = json["commentator3"]["name"];
  casterTwitter3 = json["commentator3"]["twitter"];
  caster4 = json["commentator4"]["name"];
  casterTwitter4 = json["commentator4"]["twitter"];

  //MatchInfo
  round = json["match"]["round"];
  bestof = json["match"]["firstTo"];
   
  //H2H
  p1SetWins = json["h2h"]["p1SetWins"];
  p2SetWins = json["h2h"]["p2SetWins"];
  h2hP1SetWinRate = json["h2h"]["p1SetWinRate"];
  h2hP2SetWinRate = json["h2h"]["p2SetWinRate"];

  switch (n) {
    case 0:
      document.getElementById("player1").innerHTML = player1;    
      document.getElementById("p1team").innerHTML = p1team;
      document.getElementById("p1logo").src = p1logo;
      break;
    case 1:
      document.getElementById("player2").innerHTML = player2;
      document.getElementById("p2team").innerHTML = p2team;
      document.getElementById("p2logo").src = p2logo;
      break;
    case 2:
      document.getElementById("caster1").innerHTML = caster1;
      document.getElementById("twitter1").innerHTML = casterTwitter1;
      break;
    case 3:
      document.getElementById("caster2").innerHTML = caster2;
      document.getElementById("twitter2").innerHTML = casterTwitter2;
      break;
    case 4:
      document.getElementById("caster3").innerHTML = caster3;
      document.getElementById("twitter3").innerHTML = casterTwitter3;
      break;
    case 5:
      document.getElementById("caster3").innerHTML = caster3;
      document.getElementById("twitter3").innerHTML = casterTwitter3;
      break;
    case 6:
      document.getElementById("p1score").innerHTML = p1score;
      break;
    case 7:
      document.getElementById("p2score").innerHTML = p2score;
      break;
    case 8:
      document.getElementById("round").innerHTML = round;
      document.getElementById("bestof").innerHTML = bestof;
      break;
    case 9:
      document.getElementById("player1").innerHTML = player1;
      document.getElementById("player2").innerHTML = player2;
      document.getElementById("p1team").innerHTML = p1team;
      document.getElementById("p2team").innerHTML = p2team;
      document.getElementById("p1score").innerHTML = p1score;
      document.getElementById("p2score").innerHTML = p2score;
      break;
    case 10:
      document.getElementById("player1").innerHTML = player1;
      document.getElementById("player2").innerHTML = player2;
      document.getElementById("p1team").innerHTML = p1team;
      document.getElementById("p2team").innerHTML = p2team;
      document.getElementById("p1country").style = p1country;
      document.getElementById("p2country").style = p2country;
      document.getElementById("p1score").innerHTML = p1score;
      document.getElementById("p2score").innerHTML = p2score;
      document.getElementById("p1logo").src = p1logo;
      document.getElementById("p2logo").src = p2logo;
      break;
    case 11:
      document.getElementById("player1").innerHTML = player1;
      document.getElementById("player2").innerHTML = player2;
      document.getElementById("p1team").innerHTML = p1team;
      document.getElementById("p2team").innerHTML = p2team;
      document.getElementById("p1twitter").innerHTML = p1twitter;
      document.getElementById("p2twitter").innerHTML = p2twitter;
      document.getElementById("p1twitch").innerHTML = p1twitch;
      document.getElementById("p2twitch").innerHTML = p2twitch;
      document.getElementById("p1image").style = p1image; 
      document.getElementById("p2image").style = p2image; 
      document.getElementById("p1averagePlacement").innerHTML = p1averagePlacement;
      document.getElementById("p2averagePlacement").innerHTML = p2averagePlacement;  
      document.getElementById("p1placement1").innerHTML = p1placement1;
      document.getElementById("p1placement2").innerHTML = p1placement2;  
      document.getElementById("p1placement3").innerHTML = p1placement3;
      document.getElementById("p1placement4").innerHTML = p1placement4; 
      document.getElementById("p1placement5").innerHTML = p1placement5; 
      document.getElementById("p2placement1").innerHTML = p2placement1;
      document.getElementById("p2placement2").innerHTML = p2placement2;  
      document.getElementById("p2placement3").innerHTML = p2placement3;
      document.getElementById("p2placement4").innerHTML = p2placement4; 
      document.getElementById("p2placement5").innerHTML = p2placement5; 
      document.getElementById("p2placement4").innerHTML = p2placement4; 
      document.getElementById("p2placement5").innerHTML = p2placement5; 
      document.getElementById("p1SetWins").innerHTML = p1SetWins; 
      document.getElementById("p2SetWins").innerHTML = p2SetWins; 
      document.getElementById("h2hP1SetWinRate").innerHTML = h2hP1SetWinRate; 
      document.getElementById("h2hP2SetWinRate").innerHTML = h2hP2SetWinRate; 
    break;
	case 12:
	  document.getElementById("player1").innerHTML = player1;
      document.getElementById("player2").innerHTML = player2;
	  break;
  case 13:
      document.getElementById("player1").innerHTML = player1;
      document.getElementById("player2").innerHTML = player2;
      document.getElementById("p1team").innerHTML = p1team;
      document.getElementById("p2team").innerHTML = p2team;
      document.getElementById("p1country").style = p1country;
      document.getElementById("p2country").style = p2country;
      document.getElementById("p1score").innerHTML = p1score;
      document.getElementById("p2score").innerHTML = p2score;
      document.getElementById("p1logo").src = p1logo;
      document.getElementById("p2logo").src = p2logo;
      document.getElementById("p1pronouns").innerHTML = p1Pronouns;
      document.getElementById("p2pronouns").innerHTML = p2Pronouns;
    break;
	default:
    break;
  }
}
