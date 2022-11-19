import React, { useState, useEffect } from "react";
import axios from "axios";
import { createAccomadation } from "../services/accommodation";

function FormCreate() {
  const [houseName, setHouseName] = useState("");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("quận 1");
  const [houseNumber, setHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState(null);

  const [districts, setDistricts] = useState([]);

  const handleSubmit = async (e) => {
    const data = {
      tên: houseName,
      soNha: houseNumber,
      tenDuong: street,
      quan: selectedDistrict,
      dienTich: area,
      gia: price,
      moTa: description,
      hinhAnh: picture,
      chuNha: {
        ten: owner,
        soDienThoai: phone,
      },
    };
    await createAccomadation(data);
  };

  return (
    <div className="form">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" id="create" onSubmit={handleSubmit}>
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
                      onSelect={(e) => {
                        setSelectedDistrict(e.target.value);
                        console.log("quận: ", e.target.value);
                      }}
                      defaultValue="quận 1"
                      required
                    >
                      <option value="quận 1">Quận 1</option>
                      <option value="quận 2">Quận 2</option>
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
                      onChange={(e) => setHouseNumber(e.target.value)}
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
                      onSelect={(e) => setStreet(e.target.value)}
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
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="20m2"
                      onChange={(e) => setArea(e.target.value)}
                      required
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email_address"
                      class="block text-sm font-medium text-gray-700"
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
                  <label
                    for="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mô tả
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="you@example.com"
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
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
                  />
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
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
