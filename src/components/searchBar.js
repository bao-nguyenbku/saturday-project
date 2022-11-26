import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ topic, onSearch, className }) => {
  const [value, setValue] = useState("");
  return (
    <div className={`flex gap-2 ${className}`}>
      <TextField
        fullWidth
        id="filled-basic"
        label={topic.name}
        variant="outlined"
        className="bg-slate-100 rounded-lg"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={
          onSearch
            ? (e) => {
                e.preventDefault();
                onSearch(value, topic.label);
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
