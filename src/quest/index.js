import { useReducer } from "react";
import ReturnHome from "../returnHome";
import Dashboard from "./dashboard";
import { BoardContext, initialState, reducer } from "./state";

function Collide() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <BoardContext.Provider value={{ state, dispatch }}>
        <Dashboard />
      </BoardContext.Provider>
      <ReturnHome />
    </>
  );
}

export default Collide;
