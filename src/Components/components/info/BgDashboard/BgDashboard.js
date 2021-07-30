import React, { useState } from 'react'
import styled from 'styled-components'

import Toggle from '../../navigation/Toogle/Toogle'

const Container = styled.div`
  border-radius: 16px;
  background-color: #ffffff;
  transition: 0.4s ease-out;
  padding: 32px;

  &:hover {
    box-shadow: 5px 10px 20px 0 rgba(0, 0, 0, 0.16);
  }
`

const BgDashboard = ({ toggleActive, titleLeft, titleRight, children, classProps }) => {
  const [toggle, settoggle] = useState('left')
  const currentTab = toggle === 'left' ? React.Children.toArray(children)[0] : React.Children.toArray(children)[1]

  return (
    <Container className={classProps}>
      {toggleActive ? (
        <Toggle value={toggle} handleClick={settoggle} titleLeft={titleLeft} titleRight={titleRight} />
      ) : null}
      <div>{currentTab}</div>
    </Container>
  )
}

BgDashboard.defaultProps = {
  toggleActive: false,
}

export default BgDashboard
