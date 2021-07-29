import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  // width: 138px;
  // height: 32px;
  // padding: 4px 8px 4px 4px;
  opacity: 0.2;
  border-radius: 16px;
  box-shadow: inset 1px 1px 7px 0 rgba(0, 0, 0, 0.11);
  background-color: var(--age-age-1);
  display: flex;
  justify-content: space-between;
  max-width: max-content;
  cursor: pointer;
`

const Item = styled.button`
  background-color: transparent;
  margin: 4px;
  padding: 3px 8px;
  cursor: pointer;
  outline: none;
  font-family: DMSans;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  &.active{
    color: #49535e;
    border-radius: 12px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    }
  }
  &.inactive{
    color: var(--primary);
    border: 0;
  }
`

const Toogle = ({ titleLeft, titleRight, handleClick, value }) => {
  return (
    <Container>
      <Item className={value === 'left' ? 'active' : 'inactive'} onClick={() => handleClick('left')}>
        {titleLeft}
      </Item>
      <Item className={value === 'right' ? 'active' : 'inactive'} onClick={() => handleClick('right')}>
        {titleRight}
      </Item>
    </Container>
  )
}

export default Toogle
