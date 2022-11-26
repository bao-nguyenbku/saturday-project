import React from "react";
import { useParams } from "react-router";
import Detail from "../../components/Detail";

const DetailPage = () => {
  const params = useParams();
  return (
    <Detail 
      id={params.id}
    />
  )
}

export default DetailPage;