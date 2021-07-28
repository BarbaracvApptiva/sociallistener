import React from "react";
import styled from "styled-components";

const BoxHeader = styled.div`
  width: 100%;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: var(--primary);
  position: fixed;
`;

const Header = () => {
  return <BoxHeader></BoxHeader>;
};

export default Header;
