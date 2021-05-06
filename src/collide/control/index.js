import { useContext } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { BoardContext } from "../state";
import "./control.css";

function Control() {
  const boardContext = useContext(BoardContext);
  const state = boardContext.state;
  const handlePairChange = (event) => {
    boardContext.dispatch({
      type: "pairs",
      payload: event.target.value,
    });
  };
  console.log("state", state);

  return (
    <div className="control">
      <div>Pairs: {state.pairs}</div>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        // open={open}
        // onClose={handleClose}
        // onOpen={handleOpen}
        // value={age}
        onChange={handlePairChange}
      >
        <MenuItem value={1}>One</MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Three</MenuItem>
      </Select>
    </div>
  );
}

export default Control;
