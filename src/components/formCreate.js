import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { createAccomadation } from "../services/accommodation";
import { useNavigate } from "react-router-dom";

function FormCreate() {
  const [houseName, setHouseName] = useState("");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  let selectedDistrict = "Thành Phố Thủ Đức";
  const [houseNumber, setHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [area, setArea] = useState(0);
  const [price, setPrice] = useState(0);
  // const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  const [districts, setDistricts] = useState([]);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    // console.log(typeof houseName)
    // console.log(typeof houseNumber)
    // console.log(typeof street)
    // console.log(typeof selectedDistrict)
    // console.log(parseInt(area))
    // console.log(typeof area)
    // console.log(parseInt(price))
    // console.log(typeof price)
    // console.log(typeof picture)
    // console.log(typeof owner)
    // console.log(typeof phone)
    var data = JSON.stringify({
      "ten": houseName,
      "soNha": houseNumber,
      "tenDuong": street,
      "quan": selectedDistrict,
      "dienTich": parseInt(area),
      "gia": parseInt(area),
      "hinhAnh": picture,
      "chuNha": {
        "ten": owner,
        "soDienThoai": phone,
      },
    });
    createAccomadation(data)
      .then((res) => {
        Swal.fire({
          title: "Tạo thành công",
          icon: "success",
          confirmButtonText: "OK",
        })
        console.log(res);
      })
      .catch((err) => {
        Swal.fire({
          title: "Tạo thất bại",
          icon: "error",
          confirmButtonText: "Close",
        });
        console.log(err)
      });
  };

  useEffect(() => {
    const getDistrict = () => {
      axios
        .get(
          `https://online-gateway.ghn.vn/shiip/public-api/master-data/district`,
          {
            headers: {
              token: "c6109bdb-6597-11ed-9dc6-f64f768dbc22",
            },
            params: {
              province_id: 202,
            },
          }
        )
        .then((res) => {
          setDistricts(res.data.data);
        });
    };

    getDistrict();
  }, []);

  return (
    <div className="form">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form id="create">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      for="house_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tên Trọ
                    </label>
                    <input
                      type="text"
                      name="house_name"
                      id="house_name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => setHouseName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      for="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tên Chủ Trọ
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => setOwner(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      for="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      for="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Quận
                    </label>
                    <select
                      id="district"
                      name="district"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => {
                        selectedDistrict = e.target.value;
                        console.log(selectedDistrict);
                      }}
                      required
                    >
                      {districts.map((district, index) => {
                        return (
                          <option key={index} value={district.DistrictName}>
                            {district.DistrictName}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label
                      for="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Số Nhà
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onSelect={(e) => setHouseNumber(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      for="street_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tên Đường
                    </label>
                    <input
                      type="text"
                      name="street_address"
                      id="street_address"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => setStreet(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      for="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Diện tích
                    </label>
                    <input
                      type="text"
                      name="area"
                      id="area"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="20m2"
                      onChange={(e) => setArea(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      for="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Giá
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="1000000"
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Ảnh Trọ
                  </label>
                  <input
                    type="url"
                    name="picture"
                    id="picture"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    size="30"
                    onChange={(e) => setPicture(e.target.value)}
                  />
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Tạo
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormCreate;
