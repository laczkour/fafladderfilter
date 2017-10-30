var fs = require('fs');
var arrData = JSON.parse(fs.readFileSync('./filtered_final.json'));

var i = 0;
var ratingSum = 0;
arrData.data.forEach(data => {
  ratingSum += data.attributes.rating;
  data.attributes.filteredRanking = i + 1;
  i++;
});

var dataToCsv = arrData.data.map(data => {
  const attributes = data.attributes;
  return [
    attributes.id,
    attributes.login,
    attributes.rating,
    attributes.num_games,
    attributes.filteredRanking,
    attributes.ranking
  ].join(';');
});
dataToCsv.unshift(['id', 'login', 'rating', 'num_games', 'filteredRanking', 'ranking'].join(';'));

fs.writeFileSync('./filtered_final_addedFilteredRanking.json', JSON.stringify(arrData));
fs.writeFileSync('./filtered_final.csv', dataToCsv.join('\n'));

ratingMean = ratingSum / i;
console.log(ratingMean);
