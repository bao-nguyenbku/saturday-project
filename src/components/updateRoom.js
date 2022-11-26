import { useEffect, useState } from "react";
import { postUpdateAccommodation } from "../services/accommodation";
import axios from "../utils/request";
import { useNavigate } from "react-router";

const InputField = (inputProps) => {
  const { value, onChange, preventEnterPress, label } = inputProps;
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        autoFocus
        onKeyPress={(e) => {
          if (preventEnterPress) {
            e.preventDefault();
          }
        }}
        type="text"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md h-14 border-2 pl-2"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}
function Update(props) {
  const { id } = props;
  const [accommodationData, setAccommodationData] = useState();
  const navigate = useNavigate();
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const res = await postUpdateAccommodation(
      accommodationData
    )
    if (res) {
      navigate('/');
    }
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
      <div className="w-full items-center justify-center">
        <div className="md:grid md:grid-cols-2 md:gap-6 overflow-x-hidden">
          <div className="mt-5 md:mt-0 md:col-span-2 overflow-x-hidden">
            <form>
              <div className="shadow sm:rounded-md overflow-x-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <InputField
                      label='Tên chỗ ở'
                      value={accommodationData?.ten}
                      onChange={(e) => setAccommodationData(prev => {
                        return {
                          ...prev,
                          ten: e.target.value
                        }
                      })}
                      preventEnterPress
                    />

                    <InputField
                      label='Tên chủ nhà'
                      value={accommodationData?.chuNha?.ten}
                      onChange={(e) => setAccommodationData(prev => {
                        return {
                          ...prev,
                          chuNha: {
                            ...prev.chuNha,
                            ten: e.target.value
                          }
                        }
                      })}
                      preventEnterPress
                    />

                    <InputField
                      label='Số điện thoại'
                      value={accommodationData?.chuNha?.id}
                      onChange={(e) => setAccommodationData(prev => {
                        return {
                          ...prev,
                          chuNha: {
                            ...prev.chuNha,
                            soDienThoai: e.target.value
                          }
                        }
                      })}
                      preventEnterPress
                    />

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        className="block text-sm font-medium text-gray-700"
                      >
                        Quận
                      </label>
                      <select
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={accommodationData?.quan}
                        onChange={(e) => setAccommodationData(prev => {
                          return {
                            ...prev,
                            quan: e.target.value
                          }
                        })}
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

                    <InputField
                      label='Số nhà'
                      value={accommodationData?.soNha}
                      onChange={(e) => setAccommodationData(prev => {
                        return {
                          ...prev,
                          soNha: e.target.value
                        }
                      })}
                      preventEnterPress
                    />

                    <InputField
                      label='Tên đường'
                      value={accommodationData?.tenDuong}
                      onChange={(e) => setAccommodationData(prev => {
                        return {
                          ...prev,
                          tenDuong: e.target.value
                        }
                      })}
                      preventEnterPress
                    />

                    <InputField
                      label='Diện tích'
                      value={accommodationData?.dienTich}
                      onChange={(e) => setAccommodationData(prev => {
                        return {
                          ...prev,
                          dienTich: e.target.value
                        }
                      })}
                      preventEnterPress
                    />

                    <InputField
                      label='Giá thuê'
                      value={accommodationData?.gia}
                      onChange={(e) => setAccommodationData(prev => {
                        return {
                          ...prev,
                          gia: e.target.value
                        }
                      })}
                      preventEnterPress
                    />
                    <div className="col-span-6 sm:col-span-3">
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
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md border-2 pl-2"
                          placeholder=""
                          value={accommodationData?.moTa}
                          onChange={(e) => setAccommodationData(prev => {
                            return {
                              ...prev,
                              moTa: e.target.value
                            }
                          })}
                        ></textarea>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Mô tả ngắn gọn thông tin phòng trọ.
                      </p>
                    </div>
                    <div className="col-span-6 sm:col-span-3 flex flex-col">
                      <label className="block text-sm font-medium text-gray-700">
                        Hình ảnh minh họa
                      </label>
                      <img src={accommodationData?.hinhAnh} alt='anh-minh-hoa' className="w-[400px] object-cover m-auto rounded-xl" />
                      <input
                        type="url"
                        name="picture"
                        id="picture"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md h-14 border-2 pl-2"
                        placeholder={accommodationData?.hinhAnh}
                        onChange={(e) => setAccommodationData(prev => {
                          return {
                            ...prev,
                            hinhAnh: e.target.value
                          }
                        })}
                        pattern="https://.*"
                        size="30"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="text"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full h-14 text-2xl items-center"
                    onClick={handleUpdateSubmit}
                  >
                    Cập nhật
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