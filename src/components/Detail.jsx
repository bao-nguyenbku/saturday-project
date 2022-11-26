import { useEffect, useState } from "react";
import { getAccommodation } from "../services/accommodation";

const mockData = {
    id: 1,
    ten: 'Nhà trọ số 1',
    soNha: '12345/6789',
    tenDuong: 'ABC',
    quan: 'XYZ',
    moTa: 'Đỉnh đỉnh đỉnh đỉnh đỉnh đỉnh đỉnh',
    gia: 123456789,
    chuNhaId: 1,
    dienTich: 50000,
    hinhAnh: 'https://akisa.vn/uploads/plugin/product_items/13551/mau-biet-thu-nha-dep-2-tang-hien-dai-bt21377-v2.jpg',
    chuNha: {
        id: 1,
        ten: 'ABCXYZ',
        soDienThoai: '0123456789'
    }
};

function Detail(props) {
    let [accommodationData, setAccommodationData] = useState({});

    useEffect(() => {
      getAccommodation(props.id).then(response => setAccommodationData(response.data));
    }, []);

    if (accommodationData) {
        return (
            <div className="grid h-screen place-items-center">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={mockData.hinhAnh} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{mockData.ten}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Địa chỉ: {mockData.soNha}, {mockData.tenDuong}, {mockData.quan}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Giá: {mockData.gia} đ/tháng</p>
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{mockData.moTa}</h6>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Liên hệ : {mockData.chuNha.ten} - {mockData.chuNha.soDienThoai} </p>
                    </div>
                </div>
            </div>
        );
    }
    return <h1>Loading...</h1>
}

export default Detail;