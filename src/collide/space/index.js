import { useContext } from "react";
import { BoardContext } from "../state";
import { checkPlayerNear } from "../utils";
import "./space.css";

function Space({ rowNumber, colNumber }) {
  const boardContext = useContext(BoardContext);
  const { player, blue, green } = boardContext.state;
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
  if (rowNumber === player[0] && colNumber === player[1]) {
    return <span className="player collideSpace">PLAYER</span>;
  }
  return (
    <span
      className="collideSpace"
      onClick={() => {
        const playerNear = checkPlayerNear(player, rowNumber, colNumber);
        if (playerNear) {
          boardContext.dispatch({
            type: "newTurn",
            payload: [rowNumber, colNumber],
          });
        }
      }}
    >{`R: ${rowNumber}, C: ${colNumber}`}</span>
  );
}

export default Space;
