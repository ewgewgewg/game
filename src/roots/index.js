import { useReducer } from "react";
import Board from "./board";
import Header from "./header";
import ReturnHome from "../returnHome";
import { BoardContext, initialState, reducer } from "./state";

function Roots() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <BoardContext.Provider value={{ state, dispatch }}>
        <Header />
        <Board />
      </BoardContext.Provider>
      <ReturnHome />
    </>
  );
}

export default Roots;
