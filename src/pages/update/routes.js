import React, { Suspense } from "react";

const UpdatePage = React.lazy(() => import("./update"));

const UPDATE_ROUTES = [{
  path: `/:id/update`, 
  element:
      <Suspense fallback={<h1>Loading...</h1>}>
        <UpdatePage />
      </Suspense>
}];

export default UPDATE_ROUTES;