import { createContext } from "react";
import { getRandom } from "./utils";

const BoardContext = createContext();
const initialBoard = new Array(8).fill().map((a) => new Array(8).fill(false));
initialBoard[getRandom(8)][getRandom(8)] = true;
let counter = 1;
const initialState = { initialBoard, counter, seen: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "act":
      const [rowNumber, colNumber] = action.payload;
      const newBoard = state.initialBoard.slice();
      newBoard[rowNumber][colNumber] = true;
      const newState = {
        ...state,
        counter: state.counter + 1,
        initialBoard: newBoard,
      };
      return newState;
    case "memory":
      const newSeen = [...state.seen, action.payload];
      return { ...state, seen: newSeen };
    case "reset":
      const resetBoard = new Array(8)
        .fill()
        .map((a) => new Array(8).fill(false));
      resetBoard[getRandom(8)][getRandom(8)] = true;
      return { counter: 1, initialBoard: resetBoard, seen: [] };
    default:
      return state;
  }
};

export { BoardContext, initialState, reducer };
