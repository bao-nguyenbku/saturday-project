import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AccommodationCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={props.data.ten}
        subheader={props.data.chuNha}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.data.hinhAnh}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.data.moTa}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Địa chỉ: {props.data.soNha}, {props.data.tenDuong}, {props.data.quan}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Diện tích: {props.data.dienTich} m2
        </Typography>
      </CardContent>


      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item><IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><IconButton aria-label="share">
          <ShareIcon />
        </IconButton></Item>
        </Grid>
      </Grid>
    </Card>
  );
}
