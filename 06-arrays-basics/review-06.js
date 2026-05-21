const scores = [12, 45, 7, 89, 34, 56, 3];

function getTopScores(scores, limit = 3) {
  const sorted = [...scores].sort((a, b) => b -a);
  return sorted.slice(0, limit);
}

console.log(getTopScores(scores, 3));
