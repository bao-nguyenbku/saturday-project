import React, {Suspense} from "react";

const Create = React.lazy(() => import("./Create"));

const CREATE_ROUTES = [{ path: "/create", element: <Suspense fallback={<h1>Loading...</h1>}> <Create /> </Suspense> }];

export default CREATE_ROUTES;