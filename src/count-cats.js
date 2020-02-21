module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(x => {
    x.forEach(z => {
      z == '^^' ? count++ : count;
    });
  });

  return count;
};
