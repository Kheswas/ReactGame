// logic.vue
export function getWordsFound(highlightedChars, wordList, grid) {
  const directions = [
    [0, 1],   // Horizontal
    [1, 0],   // Vertical
    [1, 1],   // Diagonal (top-left to bottom-right)
    [1, -1]   // Diagonal (bottom-left to top-right)
  ];

  const found = [];

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      for (const [dr, dc] of directions) {
        let currSelectedWord = '';
        let newRow = r;
        let newCol = c;

        while (
          newRow >= 0 &&
          newRow < grid.length &&
          newCol >= 0 &&
          newCol < grid[0].length
        ) {
          const letter = grid[newRow][newCol];
          const highlightedIndex = "r" + newRow + "-c" + newCol;
          const isHighlighted = highlightedChars.hasOwnProperty(highlightedIndex);

          if (isHighlighted) {
            currSelectedWord = currSelectedWord + letter;
          } else {
            break;
          }

          if (wordList.includes(currSelectedWord.toUpperCase())) {
            found.push(currSelectedWord.toUpperCase());
          }

          newRow += dr;
          newCol += dc;
        }
      }
    }
  }

  console.log(found + " is found");
  return found;
}
