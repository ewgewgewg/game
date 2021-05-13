import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Roots from "./roots";
import Collide from "./collide";
import Quest from "./quest";

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
        <Route path="/game/quest">
          <Quest />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
