import React, {Suspense} from "react";

const Home = React.lazy(() => import("./Home"));

const HOME_ROUTES = [{ path: "/", element: <Suspense fallback={<h1>Loading...</h1>}><Home /></Suspense> }];

export default HOME_ROUTES;
