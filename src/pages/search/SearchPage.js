import React, { useState } from "react";
import AccommodationCard from "../../components/AccommodationCard";
import { Button, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";

const mockData = [
  {
    id: 1,
    ten: "Hello World",
    soNha: "113/5",
    tenDuong: "Ba Thang Hai",
    quan: "Tân Bình",
    chuNhaId: 1,
    dienTich: 123,
    hinhAnh: "img",
    chuNha: {
      id: 1,
      ten: "Nguyễn Thiên Bảo",
      soDienThoai: "0909090909",
    },
  },
  {
    id: 1,
    ten: "Hello World",
    soNha: "113/5",
    tenDuong: "Ba Thang Hai",
    quan: "Tan Binh",
    chuNhaId: 1,
    dienTich: 123,
    hinhAnh: "img",
    chuNha: {
      id: 1,
      ten: "Nguyễn Thiên Bảo",
      soDienThoai: "0909090909",
    },
  },
  {
    id: 1,
    ten: "Hello World",
    soNha: "113/5",
    tenDuong: "Ba Thang Hai",
    quan: "Tan Binh",
    chuNhaId: 1,
    dienTich: 123,
    hinhAnh: "img",
    chuNha: {
      id: 1,
      ten: "Nguyễn Thiên Bảo",
      soDienThoai: "0909090909",
    },
  },
  {
    id: 1,
    ten: "Hello World",
    soNha: "113/5",
    tenDuong: "Ba Thang Hai",
    quan: "Tan Binh",
    chuNhaId: 1,
    dienTich: 123,
    hinhAnh: "img",
    chuNha: {
      id: 1,
      ten: "Nguyễn Thiên Bảo",
      soDienThoai: "0909090909",
    },
  },
  {
    id: 2,
    ten: "Hello World",
    soNha: "113/5",
    tenDuong: "Ba Thang Hai",
    quan: "11",
    chuNhaId: 1,
    dienTich: 123,
    hinhAnh: "img",
    chuNha: {
      id: 1,
      ten: "Nguyễn Thiên Bảo",
      soDienThoai: "0909090909",
    },
  },
  {
    id: 3,
    ten: "Hello World",
    soNha: "113/5",
    tenDuong: "Ba Thang Hai",
    quan: "9",
    chuNhaId: 1,
    dienTich: 123,
    hinhAnh: "img",
    chuNha: {
      id: 1,
      ten: "Nguyễn Thiên Bảo",
      soDienThoai: "0909090909",
    },
  },
];

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({});

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const matchSearch = (criteria, data, param) => {
    let res;
    for (const [param, value] of Object.entries(criteria)) {
      let valueArray = value
        .split(" ")
        .map((entry) => removeAccents(entry.trim()));
      valueArray = valueArray.filter((entry) => entry);
      // console.log(valueArray);
      if (valueArray.length > 0) {
        const regExp = new RegExp(valueArray.join(" "), "i");
        // console.log(regExp);
        res = data.filter((entry) => {
          let comp;
          let val;
          // console.log(param === "chuNha");
          if (param === "chuNha") {
            comp = removeAccents(entry.chuNha.ten);
            val = comp.search(regExp);
          } else {
            if (typeof entry[param] === "string") {
              comp = removeAccents(entry[param]);
              val = comp.search(regExp);
            } else {
              comp = entry[param];
              val = comp.toString() === criteria ? 1 : -1;
            }
          }

          // console.log(val);
          return val !== -1;
        });
      } else {
        res = [];
      }
      console.log(res);
    }
    console.log(res);
    return res;
  };

  const handleSearch = () => {
    // let res = matchSearch(value, mockData, topic);
    // setSearchResult(res);
  };

  const onChangeSearchValue = (event, field) => {
    setSearchCriteria((prev) => {
      return { ...prev, [field]: event.target.value };
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
            value={searchCriteria.ten}
            onChange={(event) => onChangeSearchValue(event, "ten")}
          />
        </div>
        <div className={`flex gap-2 col-span-3`}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Tên nhà trọ"
            variant="outlined"
            className="bg-slate-100 rounded-lg"
            value={searchCriteria.soNha}
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
            value={searchCriteria.tenDuong}
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
            value={searchCriteria.tenDuong}
            onChange={(event) => onChangeSearchValue(event, "quan")}
          />
        </div>
        <div className={`flex gap-2 col-span-3`}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Diện tích"
            variant="outlined"
            className="bg-slate-100 rounded-lg"
            value={searchCriteria.tenDuong}
            onChange={(event) => onChangeSearchValue(event, "dienTich")}
          />
        </div>
        <div className={`flex gap-2 col-span-3`}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Giá"
            variant="outlined"
            className="bg-slate-100 rounded-lg"
            value={searchCriteria.tenDuong}
            onChange={(event) => onChangeSearchValue(event, "gia")}
          />
        </div>
        <div className={`flex gap-2 col-span-3`}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Tên chủ nhà"
            variant="outlined"
            className="bg-slate-100 rounded-lg"
            value={searchCriteria.tenDuong}
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
      <div>
        {searchResult.map((entry, index) => (
          <div key={index}>
            <AccommodationCard data={entry} />
            {/* {console.log(entry)} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
