/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  var solution = new Board({ n });
  // for each row in the board
  //for each cell in row
  //if it does not have anyRookConflicts
  //place rook there 
  //return board

  var temp = new Board({ n });
  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
      temp.togglePiece(row, col)
      if (!temp.hasRowConflictAt(row) && !temp.hasColConflictAt(col)) {
        solution.togglePiece(row, col)
      } else {
        temp.togglePiece(row, col)
      }
    }
  }
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (inputN) {
  var solutions = [];
  var startingBoard = new Board({ n: 0 });
  startingBoard.attributes.n = inputN;
  var findRookSolution = function (inputBoard) {
    // debugger
    let numRows = inputBoard.rows().filter(row => row !== undefined).length;
    if (numRows === inputN) {
      solutions.push(inputBoard)
    } else {
      for (var col = 0; col < inputN; col++) {
        var copy = new Board({ n: 0 })
        //for each row in inputBoard
        for (var i = 0; i < numRows; i++) {
          //make copy row same as inputBoard row
          copy.set(i, inputBoard.get(i));
        }
        var newRow = new Array(inputN);
        //for loop that populates the new row with 0's and a 1 in the right place
        for (var j = 0; j < newRow.length; j++) {
          if (j === col) {
            newRow[j] = 1;
          } else {
            newRow[j] = 0
          }
        }
        copy.set(numRows, newRow)
        copy.attributes.n = inputBoard.attributes.n;
        //if no conflicts, recurse on the new copy of the board
        if (!copy.hasAnyColConflicts()) {
          findRookSolution(copy);
        }
      }
    }
  }
  findRookSolution(startingBoard)
  // console.log('Number of solutions for ' + inputN + ' rooks:', solutions.length);
  return solutions.length;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (inputN) {
  var solutions = [];
  if (inputN === 0) {
    return [];
  } else if (inputN === 2) {
    let solution = new Board({n:2})
    return solution.rows();
  } else if (inputN === 3) {
    let solution = new Board({n:3})
    return solution.rows();
  }
  var startingBoard = new Board({ n: 0 });
  startingBoard.attributes.n = inputN;
  var findQueenSolution = function (inputBoard) {
    let numRows = inputBoard.rows().filter(row => row !== undefined).length;
    if (numRows === inputN) {
      solutions.push(inputBoard)
    } else {
      for (var col = 0; col < inputN; col++) {
        var copy = new Board({ n: 0 })
        //for each row in inputBoard
        for (var i = 0; i < numRows; i++) {
          //make copy row same as inputBoard row
          copy.set(i, inputBoard.get(i));
        }
        var newRow = new Array(inputN);
        //for loop that populates the new row with 0's and a 1 in the right place
        for (var j = 0; j < newRow.length; j++) {
          if (j === col) {
            newRow[j] = 1;
          } else {
            newRow[j] = 0
          }
        }
        copy.set(numRows, newRow)
        copy.attributes.n = inputBoard.attributes.n;
        //if no conflicts, recurse on the new copy of the board
        if (!copy.hasAnyColConflicts() && !copy.hasAnyMajorDiagonalConflicts() && !copy.hasAnyMinorDiagonalConflicts()) {
          findQueenSolution(copy);
        }
      }
    }
  }
  findQueenSolution(startingBoard)

  console.log('Single solution for ' + inputN + ' queens:', JSON.stringify(solutions[0]));
  console.log( solutions[0].rows())
  return solutions[0].rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (inputN) {
  var solutions = [];
  if (inputN === 0) {
    return 1;
  }
  if (inputN === 1) {
    return 1;
  }
  var startingBoard = new Board({ n: 0 });
  startingBoard.attributes.n = inputN;
  var findQueenSolution = function (inputBoard) {
    let numRows = inputBoard.rows().filter(row => row !== undefined).length;
    if (numRows === inputN) {
      solutions.push(inputBoard)
    } else {
      for (var col = 0; col < inputN; col++) {
        var copy = new Board({ n: 0 })
        //for each row in inputBoard
        for (var i = 0; i < numRows; i++) {
          //make copy row same as inputBoard row
          copy.set(i, inputBoard.get(i));
        }
        var newRow = new Array(inputN);
        //for loop that populates the new row with 0's and a 1 in the right place
        for (var j = 0; j < newRow.length; j++) {
          if (j === col) {
            newRow[j] = 1;
          } else {
            newRow[j] = 0
          }
        }
        copy.set(numRows, newRow)
        copy.attributes.n = inputBoard.attributes.n;
        //if no conflicts, recurse on the new copy of the board
        if (!copy.hasAnyColConflicts() && !copy.hasAnyMajorDiagonalConflicts() && !copy.hasAnyMinorDiagonalConflicts()) {
          findQueenSolution(copy);
        }
      }
    }
  }
  findQueenSolution(startingBoard)
  return solutions.length;
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
};
