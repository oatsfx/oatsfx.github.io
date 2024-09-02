import React from "react";

const routes = [
  {
    path: "/",
    key: "home",
    name: "Home",
    component: React.lazy(() => import("pages/Home")),
  },
];

export default routes;
