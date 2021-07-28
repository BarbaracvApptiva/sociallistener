import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.div`
  border-radius: 16px;
  background-color: #ffffff;
  transition: 0.4s ease-out;

  &:hover {
    box-shadow: 5px 10px 20px 0 rgba(0, 0, 0, 0.26);
  }
`;

const BgDashboard = () => {
  return <Container></Container>;
};

export default BgDashboard;
