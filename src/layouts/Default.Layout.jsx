import React from "react";
import Header from "../components/Navbar/Header";
const DefaultLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
export default DefaultLayout;
