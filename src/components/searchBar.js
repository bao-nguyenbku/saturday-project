import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ topic, onSearch }) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex gap-2">
      <TextField
        fullWidth
        id="filled-basic"
        label={topic.name}
        variant="filled"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <Button
        variant="outlined"
        onClick={
          onSearch
            ? (e) => {
                e.preventDefault();
                onSearch(value);
              }
            : (e) => {
                e.preventDefault();
              }
        }
      >
        <FaSearch size={40} />
      </Button>
    </div>
  );
};

export default SearchBar;
