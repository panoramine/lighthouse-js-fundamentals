const finalPosition = function (moves) {
  let presentPosition = [0, 0];
  for (let move of moves) {
    if (move === "north") {
      presentPosition[1] += 1;
    } else if (move === "south") {
      presentPosition[1] -= 1;
    } else if (move === "east") {
      presentPosition[0] += 1;
    } else {
      presentPosition[0] -= 1;
    }
  }
  return presentPosition;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

console.log(finalPosition(moves));