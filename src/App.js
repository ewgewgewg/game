import { useReducer } from "react";
import "./App.css";
import Board from "./board";
import Counter from "./counter";
import { BoardContext, initialState, reducer } from "./state";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <BoardContext.Provider value={{ state, dispatch }}>
        <Counter />
        <Board />
      </BoardContext.Provider>
    </div>
  );
}

export default App;
