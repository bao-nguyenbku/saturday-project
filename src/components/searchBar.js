import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ topic, onSearch }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <TextField
        id="filled-basic"
        label={topic.name}
        variant="filled"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <Button variant="outlined">
        <FaSearch size={40} />
      </Button>
    </div>
  );
};

export default SearchBar;
