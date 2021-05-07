import { createContext } from "react";
import { colorMove, getRandom } from "./utils";

const BoardContext = createContext();
const initialState = { pairs: 2, enemyType: "Blue" };

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
      const prevBlue =
        state.enemyType === "Blue"
          ? colorMove(newPlayer, state.blue)
          : state.blue;
      const prevGreen =
        state.enemyType === "Green"
          ? colorMove(newPlayer, state.green)
          : state.green;
      const midBlue = prevBlue.map((a) => `${a[0]}/${a[1]}`);
      const midGreen = prevGreen.map((a) => `${a[0]}/${a[1]}`);
      const remove = {};
      for (let i = 0; i < midBlue.length; i++) {
        if (midGreen.indexOf(midBlue[i]) !== -1) remove[midBlue[i]] = true;
      }
      const finalBlue = [];
      const finalGreen = [];

      for (let blue of midBlue) {
        if (!remove[blue]) {
          finalBlue.push([Number(blue[0]), Number(blue[2])]);
        }
      }
      for (let green of midGreen) {
        if (!remove[green]) {
          finalGreen.push([Number(green[0]), Number(green[2])]);
        }
      }

      return {
        ...state,
        player: newPlayer,
        blue: finalBlue,
        green: finalGreen,
      };
    default:
      return state;
  }
};

export { BoardContext, initialState, reducer };
