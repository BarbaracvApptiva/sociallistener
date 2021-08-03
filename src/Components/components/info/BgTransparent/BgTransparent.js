import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  padding: 24px 32px;
  border-radius: 14px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: solid 2px #ffffff;
  background-color: rgba(255, 255, 255, 0.4);
`

const BgTransparent = ({ children }) => {
  return <Container>{children}</Container>
}

export default BgTransparent
