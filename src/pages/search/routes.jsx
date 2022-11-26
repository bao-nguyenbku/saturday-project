import React from "react";

const SearchPage = React.lazy(() => import("./SearchPage"));

const SEARCH_ROUTES = [
  { path: "/search", name: "Search", element: <SearchPage /> },
];

export default SEARCH_ROUTES;
