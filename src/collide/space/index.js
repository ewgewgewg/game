import { useContext } from "react";
import { BoardContext } from "../state";
import { checkPlayerNear } from "../utils";
import "./space.css";

function Space({ rowNumber, colNumber }) {
  const boardContext = useContext(BoardContext);
  const { player, blue, green } = boardContext.state;
  if (rowNumber === player[0] && colNumber === player[1]) {
    return <span className="player collideSpace">PLAYER</span>;
  }
  for (let point of blue) {
    if (rowNumber === point[0] && colNumber === point[1]) {
      return <span className="blue collideSpace">BLUE</span>;
    }
  }
  for (let point of green) {
    if (rowNumber === point[0] && colNumber === point[1]) {
      return <span className="green collideSpace">GREEN</span>;
    }
  }
  return (
    <span
      className="collideSpace"
      onClick={() => {
        const playerNear = checkPlayerNear(player, rowNumber, colNumber);
        if (playerNear) alert("space");
        // if (!boardState[rowNumber][colNumber]) {
        //   const add = expand(boardState);
        //   boardContext.dispatch({
        //     type: "memory",
        //     payload: [rowNumber, colNumber],
        //   });
        //   boardContext.dispatch({
        //     type: "act",
        //     payload: add,
        //   });
        // } else {
        //   alert("You have found the roots!");
        //   boardContext.dispatch({
        //     type: "reset",
        //   });
        // }
      }}
    >{`R: ${rowNumber}, C: ${colNumber}`}</span>
  );
}

export default Space;
