import { createContext } from "react";
import { locationNames } from "./assets";
import { elementGenerator, getRandom } from "./utils";

const BoardContext = createContext();

const initialState = {
  health: 100,
  questScore: 0,
  activeLocations: [],
  seenLocations: [],
  favor: { fire: 1, air: 1, water: 1, earth: 1 },
  shields: { fire: 0, air: 0, water: 0, earth: 0 },
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

      const { danger, reward } = elementGenerator(state.favor);
      tempActiveLocations.push({
        name: locationNames[newLocationIndex],
        danger,
        reward,
      });
      const tempShieldFavor = state.favor;
      for (let fav in tempShieldFavor) {
        tempShieldFavor[fav] *= 2;
      }

      let end = endGameTest(tempHealth, state.questScore);
      if (end) return initialState;
      return {
        ...state,
        health: tempHealth,
        activeLocations: tempActiveLocations,
        seenLocations: tempSeenLocations,
        favor: tempShieldFavor,
      };
    case "locationAction":
      let tempLocationHealth = state.health;
      const difference =
        action.danger - state.shields[action.dangerType.toLowerCase()];
      tempLocationHealth -= Math.max(0, difference);
      let tempLocationQuestScore = state.questScore;
      tempLocationQuestScore -= Math.min(0, difference);
      const tempLocationShields = { ...state.shields };
      tempLocationShields[action.rewardType.toLowerCase()] += action.reward;
      const locationEnd = endGameTest(
        tempLocationHealth,
        tempLocationQuestScore
      );
      if (locationEnd) return initialState;
      return {
        ...state,
        health: tempLocationHealth,
        questScore: tempLocationQuestScore,
        shields: tempLocationShields,
      };
    default:
      return state;
  }
};

export { BoardContext, initialState, reducer };
