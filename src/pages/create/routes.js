import React, { Suspense } from "react";

const Create = React.lazy(() => import("./Create"));

const CREATE_ROUTES = [{ path: "/create", element: <Suspense loader={<p>Loading ...</p>}><Create /></Suspense> }];

export default CREATE_ROUTES;