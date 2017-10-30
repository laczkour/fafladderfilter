var fs = require('fs');
var request = require('sync-request');

/*
example return from get
{
  "data": {
    "attributes": {
      "history": {
        "1505569102": [
          647.561, 
          60.5541
        ], 
      }
    }, 
    "id": "52483", 
    "type": "history"
  }
}

*/

//console.log(request('GET', 'https://papi.faforever.com/players/52483/ratings/1v1/history').getBody('UTF-8'));

const minimumTimeStamp = 1504224000;
// 'https://papi.faforever.com/players/${playerNum}/ratings/1v1/history';
const url0 = 'https://papi.faforever.com/players/';
const url1 = '/ratings/1v1/history';

var arrData = JSON.parse(fs.readFileSync('./filtered_playedgames.json'));

var i = 1;
var max = arrData.data.length + 1;

var newData = arrData.data.filter(data => {
  const historyRoot = getPlayer1v1History(data.attributes.id);
  const historyArr = historyRoot.data.attributes.history;
  for (oneTimeStamp in historyArr) {
    if (oneTimeStamp > minimumTimeStamp) {
      console.log(`${i++}/${max} ACTIVE   ${data.attributes.login} `);
      return true;
    }
  }
  console.log(`${i++}/${max} INACTIVE ${data.attributes.login} `);
  return false;
});

fs.writeFileSync('./filtered_final.json', JSON.stringify({ data: newData }));

function getPlayer1v1History(playerId) {
  return JSON.parse(request('GET', url0 + playerId + url1).getBody('UTF-8'));
}
