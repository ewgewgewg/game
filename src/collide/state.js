import { createContext } from "react";
import { colorMove, generatePositions } from "./utils";

const BoardContext = createContext();
const initialState = { pairs: 2, enemyType: "Blue" };

const [player, blue, green] = generatePositions(initialState.pairs);
initialState.player = player;
initialState.blue = blue;
initialState.green = green;

const reducer = (state, action) => {
  switch (action.type) {
    case "pairs":
      const [player, blue, green] = generatePositions(action.payload);
      return { ...state, player, blue, green, pairs: action.payload };
    case "enemyType":
      return { ...state, enemyType: action.payload };
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
