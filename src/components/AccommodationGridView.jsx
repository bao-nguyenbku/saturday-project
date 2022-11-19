import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AccommodationCard from './AccommodationCard';

const mockData = [
    {
        id: 1,
        ten: 'Nhà trọ số 1',
        soNha: '12345/6789',
        tenDuong: 'ABC',
        quan: 'XYZ',
        chuNha: 'ABCDE',
        chuNhaId: 1,
        dienTich: 50000,
        hinhAnh: 'https://akisa.vn/uploads/plugin/product_items/13551/mau-biet-thu-nha-dep-2-tang-hien-dai-bt21377-v2.jpg'
    },
    {
        id: 2,
        ten: 'Nhà trọ số 1',
        soNha: '12345/6789',
        tenDuong: 'ABC',
        quan: 'XYZ',
        chuNha: 'ABCDE',
        chuNhaId: 1,
        dienTich: 50000,
        hinhAnh: 'https://akisa.vn/uploads/plugin/product_items/13551/mau-biet-thu-nha-dep-2-tang-hien-dai-bt21377-v2.jpg'
    },
    {
        id: 3,
        ten: 'Nhà trọ số 1',
        soNha: '12345/6789',
        tenDuong: 'ABC',
        quan: 'XYZ',
        chuNha: 'ABCDE',
        chuNhaId: 1,
        dienTich: 50000,
        hinhAnh: 'https://akisa.vn/uploads/plugin/product_items/13551/mau-biet-thu-nha-dep-2-tang-hien-dai-bt21377-v2.jpg'
    },
    {
        id: 4,
        ten: 'Nhà trọ số 1',
        soNha: '12345/6789',
        tenDuong: 'ABC',
        quan: 'XYZ',
        chuNha: 'ABCDE',
        chuNhaId: 1,
        dienTich: 50000,
        hinhAnh: 'https://akisa.vn/uploads/plugin/product_items/13551/mau-biet-thu-nha-dep-2-tang-hien-dai-bt21377-v2.jpg'
    },
    {
        id: 5,
        ten: 'Nhà trọ số 1',
        soNha: '12345/6789',
        tenDuong: 'ABC',
        quan: 'XYZ',
        chuNha: 'ABCDE',
        chuNhaId: 1,
        dienTich: 50000,
        hinhAnh: 'https://akisa.vn/uploads/plugin/product_items/13551/mau-biet-thu-nha-dep-2-tang-hien-dai-bt21377-v2.jpg'
    }
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AccommodationGridView() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {mockData.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
                <AccommodationCard data={item}/>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
