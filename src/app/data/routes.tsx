import HomePage from "../../pages/HomePage";

export const privateRoutes = [
  { path: "/home", component: <HomePage /> },
  { path: "/resource-utilization", component: <HomePage /> },
  { path: "/network-performance", component: <HomePage /> },
  { path: "/risk-analysis", component: <HomePage /> },
  { path: "/storage-provider", component: <HomePage /> },
  { path: "/settings", component: <HomePage /> },
  // all hyperlinks
  // { path: "/", component: <HomePage /> },
  // { path: "/createHyperlink", component: <CreateHyperlinkPage /> },
  // { path: "/hyperlink/:hyperlinkId", component: <SingleHyperlinkPage /> },
];

export const publicRoutes = [
];