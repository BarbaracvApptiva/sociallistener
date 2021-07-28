import React from "react";

import styled from "styled-components";

// ICONS
import Arrow from "../../icons/IconArrowBlue";
import Delete from "../../icons/IconDeleteBlue";

const Container = styled.div`
  width: auto;
  border-radius: 8px;
  background-color: var(--secondary);
  padding: 8px;
  height: 32px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const TagName = styled.div`
  margin: 0 7px 0 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--projects-project-1);
`;

const Icon = styled.div`
  margin-right: 8px;
`;

const Tag = ({ tagName }) => {
  return (
    <Container>
      <TagName>{tagName}</TagName>
      <Icon>
        <Arrow />
      </Icon>
      <Icon>
        <Delete />
      </Icon>
    </Container>
  );
};

export default Tag;
