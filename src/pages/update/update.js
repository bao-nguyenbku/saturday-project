import React from "react";
import Update from "../../components/updateRoom";
import { useParams } from "react-router";

const UpdatePage = () => {
  const params = useParams();
  return (
    <Update
      id={params.id}
    />
  )
};

export default UpdatePage;