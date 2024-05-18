import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Changed Children to children, and used PropTypes.node for any renderable content
};
