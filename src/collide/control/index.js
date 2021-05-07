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
  const handleClose = () => {
    alert("close");
  };

  return (
    <div className="control">
      <div>Change Pairs to Restart: {pairs}</div>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        // open={open}
        onClose={handleClose}
        // onOpen={handleOpen}
        // value={age}
        onChange={handlePairChange}
      >
        <MenuItem value={1}>One</MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Three</MenuItem>
      </Select>
      <div>Current Color Movement: {enemyType}</div>
    </div>
  );
}

export default Control;
