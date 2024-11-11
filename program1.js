const getTotalIsles = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
      return;
    }

    grid[r][c] = 'W'; // Mark as visited
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L') {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};

module.exports = getTotalIsles;
