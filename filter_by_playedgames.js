var fs = require('fs');
const minimumGames = 40;

var arrData = JSON.parse(fs.readFileSync('./raw.json'));

var newData = arrData.data.filter(data => {
  return data.attributes.num_games > minimumGames;
});

fs.writeFileSync('./filtered_playedgames.json', JSON.stringify({ data: newData }));
