const checkPlayerNear = (player, rowNumber, colNumber) => {
  if (player[0] + 1 === rowNumber && player[1] === colNumber) return true;
  if (player[0] - 1 === rowNumber && player[1] === colNumber) return true;
  if (player[0] === rowNumber && player[1] + 1 === colNumber) return true;
  if (player[0] === rowNumber && player[1] - 1 === colNumber) return true;
  return false;
};

export default checkPlayerNear;
