function countPositivesSumNegatives(input) {
  let countOfPositives = 0;
  let sumOfNegatives = 0;
  for (const n of input) {
    if(n < 0) sumOfNegatives += n;
    if (n > 0) countOfPositives += 1;
  }
  return [countOfPositives , sumOfNegatives]
  }