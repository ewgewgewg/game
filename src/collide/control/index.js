import { useContext } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { BoardContext } from "../state";
import "./control.css";

function Control() {
  const boardContext = useContext(BoardContext);
  const { pairs, enemyType } = boardContext.state;
  const handlePairChange = (event) => {
    boardContext.dispatch({
      type: "pairs",
      payload: event.target.value,
    });
  };
  const handleEnemyTypeChange = (event) => {
    boardContext.dispatch({
      type: "enemyType",
      payload: event.target.value,
    });
  };

  return (
    <div className="control">
      <div>Number of Starting Pairs: {pairs}</div>
      <div>RESTART GAME: Change Starting Pairs to Restart</div>
      <Select
        // open={open}
        // onClose={handleClose}
        // onOpen={handleOpen}
        value={pairs}
        onChange={handlePairChange}
      >
        <MenuItem value={1}>One</MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Three</MenuItem>
        <MenuItem value={4}>Four</MenuItem>
        <MenuItem value={5}>Five</MenuItem>
      </Select>
      <div>Current Color Movement: {enemyType}</div>
      <div>Choose Active Color: </div>
      <Select value={enemyType} onChange={handleEnemyTypeChange}>
        <MenuItem value={"Blue"}>Blue</MenuItem>
        <MenuItem value={"Green"}>Green</MenuItem>
      </Select>
    </div>
  );
}

export default Control;
