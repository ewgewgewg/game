import { useReducer } from "react";
import Board from "./board";
import ReturnHome from "../returnHome";
import { BoardContext, initialState, reducer } from "./state";

function Collide() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <BoardContext.Provider value={{ state, dispatch }}>
        <Board />
      </BoardContext.Provider>
      <ReturnHome />
    </>
  );
}

export default Collide;
