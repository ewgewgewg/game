import { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Board from "./board";
import Header from "./header";
import { BoardContext, initialState, reducer } from "./state";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <BoardContext.Provider value={{ state, dispatch }}>
            <Header />
            <Board />
          </BoardContext.Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
