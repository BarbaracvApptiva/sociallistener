import React from 'react'

import styled from 'styled-components'

const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #49535e;
  margin-bottom: 24px;
`

const TitleDashboard = ({ value }) => {
  return <Title>{value}</Title>
}

export default TitleDashboard
