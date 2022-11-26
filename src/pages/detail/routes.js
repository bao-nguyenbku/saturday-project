import React, { Suspense } from "react";

const DetailPage = React.lazy(() => import("./Detail"));

const DETAIL_ROUTES = [{ 
    path: `/:id/detail`, 
    element:
    <Suspense fallback={<h1>Loading...</h1>}>
        <DetailPage />
    </Suspense> 
}];

export default DETAIL_ROUTES;