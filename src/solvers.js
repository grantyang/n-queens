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
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutions = [];
  var startingBoard = new Board(0);





  //inner recursion function(inputBoard)
    // base case is if inputBoard.get('n') = n;
      //then we have found a solution.
      //add solution board to solutions array
    // for each cell in the row
      //add row to board - creates a new board
      //set n
      //toggle piece
      //check to see if there is a column conflict
        //if no,
          //recurse with new board

  //return solutions.length


var findRookSolution = function (inputBoard) {
  if (inputBoard.get('n') === n) {
    solutions.push(inputBoard)
  } else {
    for(var cell = 0; cell < n; cell++) {
      
    }
  }
}





  // for (var i = 0; i < n; i++) {
  //   var findRookSolution = function (boardInput) {
  //     if (boardInput.get('n') === n){
  //       solutionCount++;
  //     } else {
  //       //create a new board with the contents of the input board;
  //       //for each cell in the row, we want to check to see if there will be a column conflict
  //         //if there isn't a col conflict, 
  //           //place a rook there 
  //           //recurse on new board 
  //     }
  //     for (var cell = 0; cell < n; cell++) {
  //       if (!this.hasColConflictAt(cell)) {
  //         this.togglePiece(row, cell);
  //       }
  //     }
  //   }
  //   //inner recursion function
  //   //base case: if we place on the last row, increment solutionCount;
  //   //else
  //   //check each cell of a row, and if there are no col conflicts, place on that cell, recurse on next row;
  // }
  console.log('Number of solutions for ' + n + ' rooks:', solutions.length);
  return solutions.length;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
