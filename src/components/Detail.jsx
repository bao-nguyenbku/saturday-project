import { useEffect, useState } from "react";
import { getAccommodation } from "../services/accommodation";
import { formatCurrency } from '../utils/utils';


function Detail(props) {
    let [accommodationData, setAccommodationData] = useState();

    useEffect(() => {
      getAccommodation(props.id).then(response => setAccommodationData(response.data));
    }, []);

    if (accommodationData) {
        return (
            <div className="grid h-screen place-items-center">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={accommodationData.hinhAnh} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{accommodationData.ten}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Địa chỉ: {accommodationData.soNha}, {accommodationData.tenDuong}, {accommodationData.quan}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Giá: {formatCurrency.format(accommodationData.gia)} / tháng</p>
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{accommodationData.moTa}</h6>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Liên hệ : {accommodationData.chuNha.ten} - {accommodationData.chuNha.soDienThoai} </p>
                    </div>
                </div>
            </div>
        );
    }
    return <h1>Loading...</h1>
}

export default Detail;