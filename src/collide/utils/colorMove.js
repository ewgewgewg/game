const colorMove = (newPlayer, color) => {
  const newArray = [];
  for (let item of color) {
    const row = newPlayer[0] - item[0];
    const column = newPlayer[1] - item[1];
    const rowAbs = Math.abs(row);
    const columnAbs = Math.abs(column);
    console.log("rowAbs", rowAbs, "columnAbs", columnAbs);
    if (rowAbs === columnAbs) {
      newArray.push(item);
    } else if ((rowAbs > columnAbs && columnAbs !== 0) || rowAbs === 0) {
      //do col
      if (column > 0) {
        //player has higher value than enemy
        newArray.push([item[0], item[1] + 1]);
      } else {
        //enemy has higher value than player
        newArray.push([item[0], item[1] - 1]);
      }
    } else {
      //do row
      if (row > 0) {
        //player has higher value than enemy
        newArray.push([item[0] + 1, item[1]]);
      } else {
        //enemy has higher value than player
        newArray.push([item[0] - 1, item[1]]);
      }
    }
  }
  return newArray;
};

export default colorMove;
