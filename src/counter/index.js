import { useContext } from "react";
import { BoardContext } from "../state";

function Counter() {
  const boardContext = useContext(BoardContext);
  if (boardContext.state.counter === 64) {
    boardContext.dispatch({
      type: "reset",
    });
    alert("All is below!");
  }
  return (
    <div>
      <div>Root Size: {JSON.stringify(boardContext.state.counter)}</div>
      <div>Seen: {JSON.stringify(boardContext.state.seen)}</div>
    </div>
  );
}

export default Counter;
