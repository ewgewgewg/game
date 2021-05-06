import { createContext } from "react";
import { getRandom } from "./utils";

const BoardContext = createContext();
const initialBoard = new Array(8).fill().map((a) => new Array(8).fill(false));
const initialState = { initialBoard, pairs: 2 };

let positions = [];
for (let i = 0; i < 5; i++) {
  const temp = `${getRandom(8)}/${getRandom(8)}`;
  if (!positions.includes(temp)) positions.push(temp);
}
positions = positions.map((a) => [Number(a[0]), Number(a[2])]);
initialState.positions = positions;

const reducer = (state, action) => {
  switch (action.type) {
    case "pairs":
      return { ...state, pairs: action.payload };
    default:
      return state;
  }
};

export { BoardContext, initialState, reducer };
