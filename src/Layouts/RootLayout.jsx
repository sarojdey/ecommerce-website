import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

import { DataProvider } from "../contexts/DataProvider";

const RootLayout = () => {
  return (
    <DataProvider>
      <Navbar />
      <Outlet />
    </DataProvider>
  );
};

export default RootLayout;
