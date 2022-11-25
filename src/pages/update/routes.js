import React from "react";

const UpdatePage = React.lazy(() => import("./update"));

const UPDATE_ROUTES = [{ path: `/update`, element: <UpdatePage /> }];

export default UPDATE_ROUTES;