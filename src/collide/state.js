import { createContext } from "react";

const BoardContext = createContext();
const initialBoard = new Array(8).fill().map((a) => new Array(8).fill(false));
const initialState = { initialBoard };

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { BoardContext, initialState, reducer };
