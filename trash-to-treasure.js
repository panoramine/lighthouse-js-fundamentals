const smartGarbage = function (trash, bins) {
  bins[trash] += 1;
  return bins
}

console.log(smartGarbage("waste", {waste: 4, recycling: 2, compost: 5}));
