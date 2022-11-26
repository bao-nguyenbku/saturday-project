import React from "react";
import Update from "../../components/updateRoom";
import { useParams } from "react-router";
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from "react-router";

const UpdatePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-screen px-[80px] overflow-hidden">
      <header className="bg-slate-200 w-full h-16 flex items-center px-2">
        <div 
          className="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <IoArrowBackOutline />
        </div>
      </header>
      <Update
        id={params.id}
      />
    </div>
  )
};

export default UpdatePage;