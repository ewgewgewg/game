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
    default:
      return state;
  }
};

export { BoardContext, initialState, reducer };
