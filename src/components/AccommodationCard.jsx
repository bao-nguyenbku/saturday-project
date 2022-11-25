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
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function AccommodationCard(props) {
  const { data } = props;

  const hostInfo = `${props.data.chuNha.ten} - ${props.data.chuNha.soDienThoai}`;

  const navigate = useNavigate()
  
  return (
    <div className="max-w-sm bg-slate-100 rounded-xl hover:shadow-lg transition-shadow duration-500 cursor-pointer">
      <div className={styles.inner}>
        <img src={data.hinhAnh} alt="anh-dai-dien" className="rounded-t-xl"/>
        <div className="flex absolute top-3 right-3 gap-1"
          onClick={()=> {
            navigate('update', {state: {id: data.id , chuNhaId: data.chuNhaId}})
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
      </div>
    </div>
      
  );
}
