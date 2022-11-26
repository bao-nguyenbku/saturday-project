import * as React from "react";
import { IoLocation, IoTrash, IoPencil } from 'react-icons/io5';
import styles from './styles.module.css';
import { formatCurrency } from '../utils/utils';
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function AccommodationCard(props) {
  const { data } = props;

  const hostInfo = `${props.data.chuNha.ten} - ${props.data.chuNha.soDienThoai}`;

  const navigate = useNavigate()
  
  return (
    <div className="max-w-sm bg-slate-100 rounded-xl hover:shadow-lg transition-shadow duration-500 cursor-pointer">
      <div className={styles.inner}>
        <img src={data.hinhAnh} alt="anh-dai-dien" className="rounded-t-xl h-[200px] w-full object-cover"/>
        <div className="flex absolute top-3 right-3 gap-1"
          onClick={()=> {
            navigate(`/${data.id}/update`)
          }}
        >
          <span className="bg-zinc-800/70 p-2 rounded-full">
              <IoPencil className="text-white" size={25}/>
          </span>
          <span className="bg-zinc-800/70 p-2 rounded-full">
            <IoTrash className="text-white" size={25}/>
          </span>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-3">
        <p className="text-3xl font-bold">{data.ten}</p>
        <span className="flex items-center text-xl text-gray-500">
          <IoLocation />
          <p>{[data.soNha, data.tenDuong, data.quan].join(', ')}</p>
        </span>
        <p className="text-sky-700 text-xl font-bold mt-2">{formatCurrency.format(data.gia)} / tháng</p>
        <div 
          onClick={()=> {
            navigate(`/${data.id}/detail`)
          }} 
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Xem chi tiết
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
      </div>
    </div>
      
  );
}
