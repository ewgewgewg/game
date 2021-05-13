import { createContext } from "react";
import { locationNames } from "./assets";
import { getRandom } from "./utils";

const BoardContext = createContext();

const initialState = {
  health: 100,
  questScore: 0,
  activeLocations: [],
  seenLocations: [],
};

const endGameTest = (health, questScore) => {
  if (health < 1) {
    alert("You have no more health!");
    return true;
  } else if (questScore >= 100) {
    alert("You have completed your quest!");
    return true;
  }
  return false;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "discoverAction":
      if (state.seenLocations.length === locationNames.length) {
        alert("You have seen all locations!");
        return state;
      }
      const tempHealth = state.health - 5;

      let newLocationIndex = getRandom(locationNames.length);

      while (state.seenLocations.includes(newLocationIndex)) {
        newLocationIndex = getRandom(locationNames.length);
      }
      const tempSeenLocations = state.seenLocations.slice();
      tempSeenLocations.push(newLocationIndex);
      const tempActiveLocations = state.activeLocations.slice();
      tempActiveLocations.push({ name: locationNames[newLocationIndex] });

      const end = endGameTest(tempHealth, action.questScore);
      if (end) return initialState;
      return {
        ...state,
        health: tempHealth,
        activeLocations: tempActiveLocations,
        seenLocations: tempSeenLocations,
      };
    default:
      return state;
  }
};

export { BoardContext, initialState, reducer };
