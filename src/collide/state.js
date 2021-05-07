import { createContext } from "react";
import { getRandom } from "./utils";

const BoardContext = createContext();
const initialState = { pairs: 2 };

let positions = [];
for (let i = 0; i < 5; i++) {
  const temp = `${getRandom(8)}/${getRandom(8)}`;
  if (!positions.includes(temp)) positions.push(temp);
}
positions = positions.map((a) => [Number(a[0]), Number(a[2])]);

initialState.player = positions[0];
initialState.blue = [];
initialState.green = [];

for (let i = 1; i < positions.length; i += 2) {
  initialState.blue.push(positions[i]);
  initialState.green.push(positions[i + 1]);
}

const reducer = (state, action) => {
  switch (action.type) {
    case "pairs":
      return { ...state, pairs: action.payload };
    case "newTurn":
      const newPlayer = action.payload;
      const prevBlue = [];
      const prevGreen = [];
      for (let blue of state.blue) {
        const row = newPlayer[0] - blue[0];
        const column = newPlayer[1] - blue[1];
        const rowAbs = Math.abs(row);
        const columnAbs = Math.abs(column);
        if (rowAbs === columnAbs) {
          prevBlue.push(blue);
        } else if (rowAbs > columnAbs && columnAbs !== 0) {
          //do col
          if (column > 0) {
            //player has higher value than enemy
            prevBlue.push([blue[0], blue[1] + 1]);
          } else {
            //enemy has higher value than player
            prevBlue.push([blue[0], blue[1] - 1]);
          }
        } else {
          //do row
          if (row > 0) {
            //player has higher value than enemy
            prevBlue.push([blue[0] + 1, blue[1]]);
          } else {
            //enemy has higher value than player
            prevBlue.push([blue[0] - 1, blue[1]]);
          }
        }
      }

      return { ...state };
    default:
      return state;
  }
};

export { BoardContext, initialState, reducer };
