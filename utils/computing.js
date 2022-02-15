const math = require("mathjs");

exports.computing = (m) => {
  const len = Object.keys(m).length;
  let matrix = [];
  let coefficientMatrix = [];
  let listMatrixVariable = [];
  let results = [];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= len; j++) {
      m[i][j] = math.evaluate(m[i][j]);
    }
    matrix.push(m[i]);
  }

  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[i].length - 1; j++) {
      row.push(matrix[i][j]);
    }
    coefficientMatrix.push(row);
  }

  let detCoefficientMatrix = math.det(coefficientMatrix);

  for (let i = 0; i < matrix.length; i++) {
    let mat = [];
    for (let j = 0; j < matrix.length; j++) {
      let row = [];
      for (let k = 0; k < matrix.length; k++) {
        if (k == i) {
          row.push(matrix[j][matrix.length]);
        } else {
          row.push(matrix[j][k]);
        }
      }
      mat.push(row);
    }
    listMatrixVariable.push(mat);
  }

  for (let i = 0; i < listMatrixVariable.length; i++) {
    let detMatrix = math.det(listMatrixVariable[i]);
    results.push(+(detMatrix / detCoefficientMatrix).toFixed(3))
  }

  return results;
};
