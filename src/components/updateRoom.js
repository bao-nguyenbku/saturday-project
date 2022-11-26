import { useEffect, useState } from "react";
import { postUpdateAccommodation } from "../services/accommodation";
import axios from "../utils/request";

function Update(props) {
  const { id } = props;
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [district, setDistrict] = useState("")
  const [streetName, setStreetName] = useState("")
  const [numberAddress, setNumberAddress] = useState("")
  const [area, setArea] = useState("")
  const [price, setPrice] = useState("")
  const [detail, setDetail] = useState("")
  const [image, setImage] = useState("img")
  const [owner, setOwner] = useState("")
  const [accommodationData, setAccommodationData] = useState();

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const res = await postUpdateAccommodation(
      {
        "id": id,
        "ten": name,
        "soNha": numberAddress,
        "tenDuong": streetName,
        "quan": district,
        "dienTich": area,
        "hinhAnh": image,
        "chuNha": {
          "ten": owner,
          "soDienThoai": phone
        }
      }
    )
  }
  useEffect(() => {
    if (id) {
      axios.get(`/cho-o/${id}`)
        .then(response => {
          const data = response.data;
          setAccommodationData(data);
        })
    }
  }, [id])
  if (accommodationData) {
    return (
      <div className="form">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form >
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tên
                      </label>
                      <input
                        autoFocus
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        type="text"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={accommodationData?.ten}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tên Chủ Nhà
                      </label>
                      <input
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        name="owner"
                        type="text"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={accommodationData?.chuNha?.ten}
                        onChange={(e) => setOwner(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        className="block text-sm font-medium text-gray-700"
                      >
                        Số điện thoại
                      </label>
                      <input
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        name="phone"
                        type="text"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={accommodationData?.chuNha?.soDienThoai}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        className="block text-sm font-medium text-gray-700"
                      >
                        Quận
                      </label>
                      <select
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={accommodationData?.quan}
                        onChange={(e) => setDistrict(e.target.value)}
                      >
                        <option >Quận 1</option>
                        <option >Quận 2</option>
                        <option >Quận 3</option>
                        <option >Quận 4</option>
                        <option >Quận 5</option>
                        <option >Quận 6</option>
                        <option >Quận 7</option>
                        <option >Quận 8</option>
                        <option >Quận 9</option>
                        <option >Quận 10</option>
                        <option >Quận 11</option>
                        <option >Quận 12</option>
                        <option >Quận Tân Bình</option>
                        <option >Quận Tân Phú</option>
                        <option >Quận Phú Nhuận</option>
                        <option >Quận Bình Thạnh</option>
                        <option >Quận Gò Vấp</option>
                        <option >Quận Thủ Đức</option>
                        <option >Quận Bình Tân</option>
                        <option >Quận Hóc Môn</option>
                        <option >Quận Bình Chánh</option>
                        <option >Quận Nhà Bè</option>
                        <option >Quận Củ Chi</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        className="block text-sm font-medium text-gray-700"
                      >
                        Số Nhà
                      </label>
                      <input
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        name="numberAddress"
                        type="text"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={accommodationData?.soNha}
                        onChange={(e) => setNumberAddress(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tên Đường
                      </label>
                      <input
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        name="streetname"
                        type="text"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={accommodationData?.tenDuong}
                        onChange={(e) => setStreetName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        className="block text-sm font-medium text-gray-700"
                      >
                        Diện tích
                      </label>
                      <input
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        name="area"
                        type="text"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="50m2"
                        value={accommodationData?.dienTich}
                        onChange={(e) => setArea(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        className="block text-sm font-medium text-gray-700"
                      >
                        Giá
                      </label>
                      <input
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        name="price"
                        type="text"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="1000000VND"
                        value={accommodationData?.gia}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                      />
                    </div>

                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mô tả
                    </label>
                    <div className="mt-1">
                      <textarea
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        name="detail"
                        rows="3"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder=""
                        value={accommodationData?.moTa}
                        onChange={(e) => setDetail(e.target.value)}
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
                    <img src={accommodationData?.hinhAnh} alt='anh-minh-hoa' className="w-[400px] object-cover"/>
                    <input
                      type="url"
                      name="picture"
                      id="picture"
                      placeholder={accommodationData?.hinhAnh}
                      pattern="https://.*"
                      size="30"
                    />
                  </div>

                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="text"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleUpdateSubmit}
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
  return <h1>Loading...</h1>
}

export default Update;