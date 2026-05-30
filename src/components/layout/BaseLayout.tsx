import React from "react";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
