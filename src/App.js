import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import ReturnHome from "./returnHome";
import Roots from "./roots";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/game">
          <Home />
        </Route>
        <Route path="/game/roots">
          <Roots />
        </Route>
        <Route path="/game/collide">
          <div>Collide Stub</div>
          <ReturnHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
