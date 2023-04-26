import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <Final>
      <Header />
      <Outlet />
    </Final>
  );
};

export default Layout;

const Final = styled.div`
    background-color: rgb(7,7, 34);
    
`