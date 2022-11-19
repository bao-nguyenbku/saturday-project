import React from "react";

const Test = React.lazy(() => import("./Test"));

const TEST_ROUTES = [
  {
    path: "/test",
    name: "Test",
    element: <Test />,
  },
];

export default TEST_ROUTES;
