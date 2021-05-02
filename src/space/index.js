import { useContext } from "react";
import { BoardContext } from "../state";
import { expand } from "../utils";
import "./space.css";

function Space({ rowNumber, colNumber }) {
  const boardContext = useContext(BoardContext);
  const boardState = boardContext.state.initialBoard;
  return (
    <span
      className="space"
      onClick={() => {
        if (!boardState[rowNumber][colNumber]) {
          const add = expand(boardState);
          boardContext.dispatch({
            type: "memory",
            payload: [rowNumber, colNumber],
          });
          boardContext.dispatch({
            type: "act",
            payload: add,
          });
        } else {
          alert("You have found the roots!");
          boardContext.dispatch({
            type: "reset",
          });
        }
      }}
    >
      {`R: ${rowNumber}, C: ${colNumber}`}
    </span>
  );
}

export default Space;
