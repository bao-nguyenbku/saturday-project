import React from "react";

const Home = React.lazy(() => import("./Home"));

const HOME_ROUTES = [{ path: "/", element: <Home /> }];

export default HOME_ROUTES;
