import React from "react";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
