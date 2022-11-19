import React, { useState } from "react";
import AccommodationCard from "../../components/AccommodationCard";
import SearchBar from "../../components/searchBar";

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
    chuNha: "Nguyễn Thiên Bảo",
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

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const matchSearch = (value, data, param) => {
    let res;
    let valueArray = value
      .split(" ")
      .map((entry) => removeAccents(entry.trim()));
    valueArray = valueArray.filter((entry) => entry);
    console.log(valueArray);
    if (valueArray) {
      const regExp = new RegExp(valueArray.join(" "), "i");
      console.log(regExp);
      res = data.filter((entry) => {
        const comp = removeAccents(entry[param]);
        const val = comp.search(regExp);
        // console.log(val);
        return val !== -1;
      });
    } else {
      res = [];
    }
    console.log(res);
    return res;
  };

  const handleSearch = (value) => {
    let res = matchSearch(value, mockData, "quan");
    console.log(res);
    setSearchResult(res);
  };
  return (
    <div>
      <SearchBar
        topic={{
          label: "accomodation",
          name: "Chỗ ở",
        }}
        onSearch={handleSearch}
      />
      {/* <AccommodationCard data={mockData[0]} /> */}
      {searchResult.map((entry, index) => (
        <div key={index}>
          <AccommodationCard data={entry} />
          {/* {console.log(entry)} */}
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
