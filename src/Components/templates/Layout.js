import React from "react";
import styled from "styled-components";

// Compositions

import Nav from "../compositions/Nav";
import Dashboard from "../compositions/Dashboard";
import Header from "../compositions/Header";
import BarTags from "../compositions/BarTags";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  background-color: #f1f6f9;
`;

const WrapperContent = styled.div`
  display: flex;
  width: 100%;
`;

const DashboardContent = styled.div`
  height: auto;

  /* position: relative; */
  width: 100%;
  margin-top: 64px;
  padding-left: 16px;
`;

const Layout = () => {
  return (
    <Wrapper id="App">
      <Header />
      <WrapperContent>
        <Nav pageWrapId={"page-wrap"} outerContainerId={"App"}></Nav>
        <DashboardContent>
          <BarTags />
          <Dashboard id="page-wrap"></Dashboard>
        </DashboardContent>
      </WrapperContent>
    </Wrapper>
  );
};

export default Layout;
