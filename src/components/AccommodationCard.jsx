import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function AccommodationCard(props) {
  const hostInfo = `${props.data.chuNha.ten} - ${props.data.chuNha.soDienThoai}`;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={props.data.ten}
        subheader={hostInfo}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.data.hinhAnh}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Địa chỉ: {props.data.soNha}, {props.data.tenDuong}, {props.data.quan}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Diện tích: {props.data.dienTich} m2
        </Typography>
      </CardContent>
    </Card>
  );
}
