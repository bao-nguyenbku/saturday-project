

function Update() {
  return (
    <div className="form">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tên
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autocomplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      for="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Số điện thoại
                    </label>
                    <input
                      type="text"
                      name="email_address"
                      id="email_address"
                      autocomplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="district"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Quận
                    </label>
                    <select
                      id="district"
                      name="district"
                      autocomplete="district"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Quận 1</option>
                      <option>Quận 2</option>
                      <option>Quận 3</option>
                      <option>Quận 4</option>
                      <option>Quận 5</option>
                      <option>Quận 6</option>
                      <option>Quận 7</option>
                      <option>Quận 8</option>
                      <option>Quận 9</option>
                      <option>Quận 10</option>
                      <option>Quận 11</option>
                      <option>Quận 12</option>
                      <option>Quận Tân Bình</option>
                      <option>Quận Tân Phú</option>
                      <option>Quận Phú Nhuận</option>
                      <option>Quận Bình Thạnh</option>
                      <option>Quận Gò Vấp</option>
                      <option>Quận Thủ Đức</option>
                      <option>Quận Bình Tân</option>
                      <option>Quận Hóc Môn</option>
                      <option>Quận Bình Chánh</option>
                      <option>Quận Nhà Bè</option>
                      <option>Quận Củ Chi</option>
                    </select>
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
                      autocomplete="street-address"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
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
                      autocomplete="m2"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="50m2"
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
                      autocomplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="1000000VND"
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
                      placeholder=""
                    ></textarea>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Mô tả ngắn gọn thông tin phòng trọ.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Hình ảnh minh họa
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="True"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sửa
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;