import { useContext } from "react";
import { Button } from "@material-ui/core";
import { BoardContext } from "../state";
import "./dashboard.css";

function Dashboard() {
  const boardContext = useContext(BoardContext);
  const { health, questScore, activeLocations } = boardContext.state;

  const discoverAction = () => {
    boardContext.dispatch({
      type: "discoverAction",
    });
  };

  const displayLocations = () => {
    return activeLocations.map((loc) => (
      <div className="singleLocation">{loc.name}</div>
    ));
  };

  return (
    <div className="dashboard">
      <div>Locations:</div>
      <div className="locationHolder">
        {activeLocations.length
          ? displayLocations()
          : "No Locations Visited Yet"}
      </div>
      <div>Health: {health}</div>
      <div>Quest Score: {questScore}</div>
      <Button color="primary" onClick={discoverAction}>
        Discover (costs 5 health)
      </Button>
    </div>
  );
}

export default Dashboard;
