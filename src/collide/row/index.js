import Space from "../space";
import "./row.css";

function Row({ rowNumber }) {
  const arr = new Array(8)
    .fill()
    .map((a, i) => <Space rowNumber={rowNumber} colNumber={i} />);

  return <div className="collideRow">{arr}</div>;
}

export default Row;
