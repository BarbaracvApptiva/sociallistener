import React from 'react'

import styled from 'styled-components'

// COMPONENTS
import Mentions from '../Dashboard/Mentions/Mentions'
import Influencers from '../Dashboard/Influencers/Influencers'
import MentionsGraphics from '../Dashboard/MentionsGraphics/MentionsGraphics'
import BgDashboard from '../../components/info/BgDashboard/BgDashboard'
import Sentiments from './Sentiments/Sentiments'
import Sources from './Sources-social/Sources'
import TopicCloud from './TopicCloud/TopicCloud'

const Wrapper = styled.div`
  height: calc(100vh - 128px);
  width: 100%;
  overflow: auto;
  padding-bottom: 16px;
`

const Main = styled.main`
  width: 100%;
  max-height: 1500px;
  display: grid;
  grid-template-columns: repeat(3, calc((100% - 32px) / 3));
  grid-template-rows: minmax(300px, 30%);
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
          <span>
            <Influencers></Influencers>
          </span>
        </BgDashboard>

        <BgDashboard classProps="column__card-sentiments">
          <Sentiments />
        </BgDashboard>
        <BgDashboard toggleActive={true} titleLeft="Countries" titleRight="Languages"></BgDashboard>
        <BgDashboard toggleActive={true} titleLeft="Gender" titleRight="Age"></BgDashboard>
        <BgDashboard>
          <Sources></Sources>
        </BgDashboard>
        <BgDashboard classProps="bg-blue">
          <TopicCloud></TopicCloud>
        </BgDashboard>
      </Main>
    </Wrapper>
  )
}

export default Dashboard
