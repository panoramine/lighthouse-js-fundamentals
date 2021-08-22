const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  let winnerCandidate = vegetables[0][metric];
  let winnerIndex = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > winnerCandidate) {
      winnerCandidate = vegetables[i][metric];
      winnerIndex = i;
    }
  }
  let winner = vegetables[winnerIndex].submitter;
  return winner; 
}








console.log(judgeVegetable(vegetables, metric))