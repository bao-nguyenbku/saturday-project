import React, { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AccommodationCard from './AccommodationCard';
import { getAllAccommodation } from '../services/accommodation';

const mockData = [
    {
      id: 1,
      ten: 'Nhà trọ số 1',
      soNha: '12345/6789',
      tenDuong: 'ABC',
      quan: 'XYZ',
      chuNhaId: 1,
      gia: 123456789,
      dienTich: 50000,
      hinhAnh: 'https://akisa.vn/uploads/plugin/product_items/13551/mau-biet-thu-nha-dep-2-tang-hien-dai-bt21377-v2.jpg',
      chuNha: {
        id: 1,
        ten: 'ABCXYZ',
        soDienThoai: '0123456789'
      }
    },
    {
      id: 2,
      ten: 'Nhà trọ số 2',
      soNha: '12345/6789',
      tenDuong: 'ABC',
      quan: 'XYZ',
      chuNhaId: 1,
      gia: 123456789,
      dienTich: 50000,
      hinhAnh: 'https://akisa.vn/uploads/plugin/product_items/13551/mau-biet-thu-nha-dep-2-tang-hien-dai-bt21377-v2.jpg',
      chuNha: {
        id: 1,
        ten: 'ABCXYZ',
        soDienThoai: '0123456789'
      }
    },
    {
      id: 3,
      ten: 'Nhà trọ số 3',
      soNha: '12345/6789',
      tenDuong: 'ABC',
      quan: 'XYZ',
      chuNhaId: 1,
      gia: 123456789,
      dienTich: 50000,
      hinhAnh: 'https://akisa.vn/uploads/plugin/product_items/13551/mau-biet-thu-nha-dep-2-tang-hien-dai-bt21377-v2.jpg',
      chuNha: {
        id: 1,
        ten: 'ABCXYZ',
        soDienThoai: '0123456789'
      }
    },
    {
      id: 4,
      ten: 'Nhà trọ số 4',
      soNha: '12345/6789',
      tenDuong: 'ABC',
      quan: 'XYZ',
      chuNhaId: 1,
      gia: 123456789,
      dienTich: 50000,
      hinhAnh: 'https://akisa.vn/uploads/plugin/product_items/13551/mau-biet-thu-nha-dep-2-tang-hien-dai-bt21377-v2.jpg',
      chuNha: {
        id: 1,
        ten: 'ABCXYZ',
        soDienThoai: '0123456789'
      }
    },
    {
      id: 5,
      ten: 'Nhà trọ số 5',
      soNha: '12345/6789',
      tenDuong: 'ABC',
      quan: 'XYZ',
      chuNhaId: 1,
      gia: 123456789,
      dienTich: 50000,
      hinhAnh: 'https://akisa.vn/uploads/plugin/product_items/13551/mau-biet-thu-nha-dep-2-tang-hien-dai-bt21377-v2.jpg',
      chuNha: {
        id: 1,
        ten: 'ABCXYZ',
        soDienThoai: '0123456789'
      }
    }
];

export default function AccommodationGridView() {
  let [accommodationList, setAccommodationList] = useState([]);

  // useEffect(() => {
  //   getAllAccommodation().then(response => setAccommodationList(response.data));
  // });
  return (
    <div className='grid grid-cols-4 mt-9 gap-[20px]'>
      {mockData.map(item => {
        return (
          <AccommodationCard key={item.id} data={item}/>
        )
      })}
    </div>
  )
  // return (
  //   <Box sx={{ flexGrow: 1 }}>
  //     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  //       {mockData.map((item) => (
  //         <Grid item xs={2} sm={4} md={3} key={item.id}>
  //           <Item>
  //               <AccommodationCard data={item}/>
  //           </Item>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </Box>
  // );
}
