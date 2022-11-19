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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const options = [
  'Edit',
  'Delete',
];

const ITEM_HEIGHT = 48;

export default function AccommodationCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const hostInfo = `${props.data.chuNha.ten} - ${props.data.chuNha.soDienThoai}`;
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardHeader
        action={
          <IconButton aria-label="settings" className='p-0'>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.ten}
        subheader={hostInfo}
      /> */}
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {props.data.ten}
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {hostInfo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Giá: {props.data.gia} VNĐ
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        image={props.data.hinhAnh}
      />

      <CardHeader title={props.data.ten} subheader={props.data.chuNha.ten} />
      <CardMedia component="img" height="194" image={props.data.hinhAnh} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Địa chỉ: {props.data.soNha}, {props.data.tenDuong}, {props.data.quan}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Diện tích: {props.data.dienTich} m2
        </Typography>
      </CardContent>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Item>
        </Grid>
      </Grid>
    </Card>
  );
}
