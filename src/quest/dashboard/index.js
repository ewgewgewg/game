import { useContext } from "react";
import { Button } from "@material-ui/core";
import { BoardContext } from "../state";
import "./dashboard.css";

function Dashboard() {
  const boardContext = useContext(BoardContext);
  const { health, questScore, activeLocations, shields } = boardContext.state;

  const discoverAction = () => {
    boardContext.dispatch({
      type: "discoverAction",
    });
  };

  const locationAction = (loc) => {
    boardContext.dispatch({
      type: "locationAction",
      dangerType: loc.danger[0],
      danger: loc.danger[1],
      rewardType: loc.reward[0],
      reward: loc.reward[1],
    });
  };

  const displayLocations = () => {
    return activeLocations.map((loc) => (
      <div className="singleLocation" onClick={() => locationAction(loc)}>
        <div>{loc.name}</div>
        <div>
          Danger: {loc.danger[0]} {loc.danger[1]}
        </div>
        <div>
          Reward: {loc.reward[0]} {loc.reward[1]}
        </div>
      </div>
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
      <div>
        <div>Shields:</div>
        <div>Air: {shields.air}</div>
        <div>Earth: {shields.earth}</div>
        <div>Fire: {shields.fire}</div>
        <div>Water: {shields.water}</div>
      </div>
      <Button color="primary" onClick={discoverAction}>
        Discover (costs 5 health)
      </Button>
    </div>
  );
}

export default Dashboard;
