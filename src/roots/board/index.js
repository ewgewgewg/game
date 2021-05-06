import Row from "../row";
import "./board.css";

function Board() {
  const arr = new Array(8).fill().map((a, i) => <Row rowNumber={i} />);

  return arr;
}

export default Board;
