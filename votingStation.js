const chooseStations = function (stations) {
  let numCandidates = stations.length;
  let eligibleStations = [];
  for (let x = 0; x < numCandidates; x += 1) {
    if (stations[x][1] >= 20 && (stations[x][2] == "school" || stations[x][2] == "community centre")) {
      eligibleStations.push(stations[x][0]);      
    }
  }
  return eligibleStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));
