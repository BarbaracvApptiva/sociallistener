import React from 'react'

import styled from 'styled-components'

const Button = styled.button`
  width: auto;
  height: 48px;
  padding: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  border: none;
  background: none;
`
const Value = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #486382;
  margin: 0 7px 0 0;
`

const Icon = styled.div`
  height: 8px;
  width: 8px;
  background: red;
`

const ButtonIcon = ({ children, value }) => {
  return (
    <Button>
      <Value>{value}</Value>
      <Icon>{children}</Icon>
    </Button>
  )
}

export default ButtonIcon
