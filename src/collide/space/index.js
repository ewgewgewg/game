import { useContext } from "react";
import { BoardContext } from "../state";
import "./space.css";

function Space({ rowNumber, colNumber }) {
  const boardContext = useContext(BoardContext);
  const boardState = boardContext.state.initialBoard;
  return <span className="space">{`R: ${rowNumber}, C: ${colNumber}`}</span>;
}

export default Space;
