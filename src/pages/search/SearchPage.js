import React, { useState } from "react";
import AccommodationCard from "../../components/AccommodationCard";
import { Button, InputLabel, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { getAllAccommodation } from "../../services/accommodation";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({});
  const [data, setData] = useState([]);

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const matchSearch = (criteria, data) => {
    let res = data.filter((entry) => {
      for (const [param, value] of Object.entries(criteria)) {
        if (typeof value !== "object") {
          let valueArray = value
            .split(" ")
            .map((entry) => removeAccents(entry.trim()));
          valueArray = valueArray.filter((entry) => entry);

          if (valueArray.length > 0) {
            const regExp = new RegExp(valueArray.join(" "), "i");
            let comp;
            let val;
            if (param === "chuNha") {
              comp = removeAccents(entry.chuNha.ten);
              val = comp.search(regExp);
            } else {
              if (typeof entry[param] === "string") {
                comp = removeAccents(entry[param]);
                val = comp.search(regExp);
              } else if (typeof entry[param] === "number") {
                comp = entry[param];
                val = value.from <= comp <= value.to ? 1 : -1;
              }
            }

            if (val === -1) return false;
          }
        } else {
          if (value) {
            let comp;
            let val;
            comp = entry[param];
            if (comp < value.from || comp > value.to) val = -1;
            else val = 1;
      
            if (val === -1) return false;
          }
        }
      }
      return true;
    });

    return res;
  };

  const handleSearch = async () => {
    // if (!data) return;
    try {
      let temp = [];
      await getAllAccommodation().then((res) => {
        setData(res.data);
        temp = res.data;
      });
      let res = matchSearch(searchCriteria, temp);
      setSearchResult(res);
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeSearchValue = (event, field) => {
    setSearchCriteria((prev) => {
      return { ...prev, [field]: event.target.value };
    });
  };

  const onChangeSearchRange = (event, field, isTo) => {
    const range = searchCriteria[field] || {};

    if (!isTo) {
      range.from = Number(event.target.value);
      if (range.to) {
        range.to = Math.max(range.to, range.from);
      } else {
        range.to = range.from;
      }
    } else {
      const temp = Number(event.target.value);
      if (range.from) {
        range.to = Math.max(range.from, temp);
      } else {
        range.to = temp;
        range.from = temp;
      }
    }
    setSearchCriteria((prev) => {
      return { ...prev, [field]: range };
    });
  };
  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className={`flex gap-2 col-span-3`}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Tên nhà trọ"
            variant="outlined"
            className="bg-slate-100 rounded-lg"
            value={searchCriteria.ten || ""}
            onChange={(event) => onChangeSearchValue(event, "ten")}
          />
        </div>
        <div className={`flex gap-2 col-span-3`}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Số nhà"
            variant="outlined"
            className="bg-slate-100 rounded-lg"
            value={searchCriteria.soNha || ""}
            onChange={(event) => onChangeSearchValue(event, "soNha")}
          />
        </div>
        <div className={`flex gap-2 col-span-3`}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Tên đường"
            variant="outlined"
            className="bg-slate-100 rounded-lg"
            value={searchCriteria.tenDuong || ""}
            onChange={(event) => onChangeSearchValue(event, "tenDuong")}
          />
        </div>
        <div className={`flex gap-2 col-span-3`}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Quận"
            variant="outlined"
            className="bg-slate-100 rounded-lg"
            value={searchCriteria.quan || ""}
            onChange={(event) => onChangeSearchValue(event, "quan")}
          />
        </div>
        <div className={`flex flex-col gap-2 col-span-3`}>
          <InputLabel className="text-center">Diện tích</InputLabel>
          <div className="flex gap-2 ">
            <TextField
              fullWidth
              id="filled-basic"
              label="Từ"
              type="number"
              variant="outlined"
              className="bg-slate-100 rounded-lg"
              value={searchCriteria.dienTich?.from || ""}
              onChange={(event) =>
                onChangeSearchRange(event, "dienTich", false)
              }
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Đến"
              type="number"
              variant="outlined"
              className="bg-slate-100 rounded-lg"
              value={searchCriteria.dienTich?.to || ""}
              onChange={(event) => onChangeSearchRange(event, "dienTich", true)}
            />
          </div>
        </div>
        <div className={`flex flex-col gap-2 col-span-3`}>
          <InputLabel className="text-center">Giá</InputLabel>
          <div className="flex gap-2 ">
            <TextField
              fullWidth
              id="filled-basic"
              label="Từ"
              type="number"
              variant="outlined"
              className="bg-slate-100 rounded-lg"
              value={searchCriteria.gia?.from || ""}
              onChange={(event) => onChangeSearchRange(event, "gia", false)}
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Đến"
              type="number"
              variant="outlined"
              className="bg-slate-100 rounded-lg"
              value={searchCriteria.gia?.to || ""}
              onChange={(event) => onChangeSearchRange(event, "gia", true)}
            />
          </div>
        </div>
        <div className={`flex gap-2 col-span-3`}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Tên chủ nhà"
            variant="outlined"
            className="bg-slate-100 rounded-lg"
            value={searchCriteria.chuNha || ""}
            onChange={(event) => onChangeSearchValue(event, "chuNha")}
          />
        </div>
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <FaSearch size={40} />
        </Button>
      </div>
      <div className="grid grid-cols-4 mt-9 gap-[20px]">
        {searchResult.map((entry, index) => (
          <div key={index}>
            <AccommodationCard data={entry} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
