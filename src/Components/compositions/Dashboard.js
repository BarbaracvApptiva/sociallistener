import React from 'react'

import styled from 'styled-components'

import BgDashboard from '../components/info/BgDashboard'

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;
`

const Main = styled.main`
  height: 100%;
  width: 100%;
  max-height: 1500px;
  display: grid;
  grid-template-columns: repeat(3, calc((100% - 32px) / 3));
  grid-template-rows: minmax(250px, 30%) minmax(312px, calc(40% - 32px)) minmax(224px, 30%);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 16px;
`

const Dashboard = ({ children }) => {
  return (
    <Wrapper>
      <Main>
        <BgDashboard></BgDashboard>
        <BgDashboard></BgDashboard>
        <BgDashboard></BgDashboard>
        <BgDashboard></BgDashboard>
        <BgDashboard></BgDashboard>
        <BgDashboard></BgDashboard>
        <BgDashboard></BgDashboard>
        <BgDashboard></BgDashboard>
        <BgDashboard></BgDashboard>
      </Main>
    </Wrapper>
  )
}

export default Dashboard
