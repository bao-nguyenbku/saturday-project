import React from "react";

const Create = React.lazy(() => import("./Create"));

const CREATE_ROUTES = [{ path: "/create", element: <Create /> }];

export default CREATE_ROUTES;