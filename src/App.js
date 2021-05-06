import { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Board from "./roots/board";
import Header from "./roots/header";
import ReturnHome from "./returnHome";
import { BoardContext, initialState, reducer } from "./roots/state";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Router>
      <Switch>
        <Route exact path="/game">
          <Home />
        </Route>
        <Route path="/game/roots">
          <BoardContext.Provider value={{ state, dispatch }}>
            <Header />
            <Board />
          </BoardContext.Provider>
          <ReturnHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
