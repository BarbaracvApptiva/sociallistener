import React from "react";
import styled from "styled-components";

// COMPONENTS
import Tag from "../components/navigation/Tag";
import ButtonIcon from "../components/form/buttons/ButtonIcon";

// ICONS

import IconCrossBlue from "../icons/IconCrossBlue";

const Container = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  padding: 16px 0px;
`;

const ButtonCompare = styled.div`
  margin-left: 40px;
`;

const BarTags = () => {
  return (
    <Container>
      <Tag tagName="Abinader"></Tag>
      <ButtonCompare>
        {" "}
        <ButtonIcon value="compare" icon={IconCrossBlue}></ButtonIcon>
      </ButtonCompare>
    </Container>
  );
};

export default BarTags;
