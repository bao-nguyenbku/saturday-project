import React from "react";
import AccommodationGridView from "../../components/AccommodationGridView";
import SearchPage from '../../pages/search/SearchPage';
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router";


const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="px-[180px] py-[80px] max-w-[1800px] flex flex-col items-center m-auto">
      <div className="flex items-center w-full justify-center">
        <SearchPage />
        <Button variant="contained" className="!ml-auto mr-0 !h-[56px]" onClick={() => navigate("/create")}><AddIcon /> Add new</Button>
      </div>
      <AccommodationGridView/>
    </div>
  );
};

export default Home;
