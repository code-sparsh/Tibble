import React from "react";
import NavigationBar from "../NavigationBar";

const Layout = ({...props}) => {
  return (
    <div>
      <NavigationBar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
