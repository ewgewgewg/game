import getRandom from "./getRandom";

const expand = (board) => {
  const roots = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j]) roots.push([i, j]);
    }
  }
  let add;
  while (true) {
    let [i, j] = roots[getRandom(roots.length)];
    const dir = getRandom(4);
    if (dir === 0) i++;
    else if (dir === 1) j++;
    else if (dir === 2) i--;
    else j--;
    if (
      i > -1 &&
      j > -1 &&
      i < board.length &&
      j < board[0].length &&
      !board[i][j]
    ) {
      add = [i, j];
      break;
    }
  }
  return add;
};

export default expand;
