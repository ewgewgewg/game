import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Roots from "./roots";
import Collide from "./collide";

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
          <Collide />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
