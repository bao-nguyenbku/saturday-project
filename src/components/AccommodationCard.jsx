import * as React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { IoLocation, IoTrash, IoPencil } from 'react-icons/io5';
import styles from './styles.module.css';
import { formatCurrency } from '../utils/utils';
import ModalDelete from "./ModalDelete";
import { useState, useEffect } from "react";

export default function AccommodationCard(props) {
  const { data } = props;

  const hostInfo = `${props.data.chuNha.ten} - ${props.data.chuNha.soDienThoai}`;
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="max-w-sm bg-slate-100 rounded-xl hover:shadow-lg transition-shadow duration-500 ">
      <div className={styles.inner}>
        <img src={data.hinhAnh} alt="anh-dai-dien" className="rounded-t-xl"/>
        <div className="flex absolute top-3 right-3 gap-1">
          <span className="bg-zinc-800/70 p-2 rounded-full">
            <IoPencil className="text-white" size={25}/>
          </span>
          <span className="bg-zinc-800/70 p-2 rounded-full">
            <IoTrash className="text-white cursor-pointer" size={25}  onClick={()=>{setShowModal(true)}}/>
            {/*  */}
            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {/*  */}
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
      </div>
     
    </div>
      
  );
}
