import React from 'react'

import styled from 'styled-components'

// COMPONENTS
import Mentions from '../Dashboard/Mentions/Mentions'
import MentionsGraphics from '../Dashboard/MentionsGraphics/MentionsGraphics'
import BgDashboard from '../../components/info/BgDashboard/BgDashboard'
import Sentiments from './Sentiments/Sentiments'

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  overflow: auto;
`

const Main = styled.main`
  height: 850px;
  width: 100%;
  max-height: 1500px;
  display: grid;
  grid-template-columns: repeat(3, calc((100% - 32px) / 3));
  grid-template-rows: minmax(250px, 30%) minmax(312px, calc(40% - 32px)) minmax(224px, 30%);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 16px;
  overflow: auto;
`

const Dashboard = ({ children }) => {
  return (
    <Wrapper>
      <Main>
        <BgDashboard toggleActive={true} titleLeft="Mentions" titleRight="Reach">
          <span>
            <MentionsGraphics></MentionsGraphics>
          </span>
        </BgDashboard>

        <BgDashboard
          classProps="column__card-mentions"
          toggleActive={true}
          titleLeft="Mentions"
          titleRight="Influencers"
        >
          <span>
            <Mentions></Mentions>
          </span>
        </BgDashboard>

        <BgDashboard classProps="column__card-sentiments">
          <Sentiments />
        </BgDashboard>
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
