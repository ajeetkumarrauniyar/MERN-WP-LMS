// CommonHeader.js
import { useState } from "react";
import { MenuItem, Select, FormControl } from "@mui/material";

const CommonHeader = ({ onSelectView }) => {
  const [selectedView, setSelectedView] = useState("month"); // Initial view

  const handleChange = (event) => {
    const view = event.target.value;
    setSelectedView(view);
    onSelectView(view);
  };

  return (
    <FormControl>
      <Select
        labelId="view-select-label"
        id="view-select"
        value={selectedView}
        onChange={handleChange}
      >
        <MenuItem value="list">List View</MenuItem>
        <MenuItem value="day">Day View</MenuItem>
        <MenuItem value="week">Week View</MenuItem>
        <MenuItem value="month">Month View</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CommonHeader;
