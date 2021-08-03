import React from 'react'
import styled from 'styled-components'

// COMPONENTS

import BgTransparent from '../../../components/info/BgTransparent/BgTransparent'
import InfluencerComment from '../../../components/info/InfluencerComment/InfluencerComment'

import Icon from '../../../../img/uc-RS5ij_400x400.png'

const Container = styled.div`
  width: 100%;
  height: 506px;
  overflow: auto;
`

const Influencers = () => {
  return (
    <Container>
      <BgTransparent>
        <InfluencerComment img={Icon} name="Diario Libre" followers="1.4M audiencia"></InfluencerComment>
      </BgTransparent>
      <BgTransparent>
        <InfluencerComment img={Icon} name="Diario Libre" followers="1.4M audiencia"></InfluencerComment>
      </BgTransparent>
      <BgTransparent>
        <InfluencerComment img={Icon} name="Diario Libre" followers="1.4M audiencia"></InfluencerComment>
      </BgTransparent>
      <BgTransparent>
        <InfluencerComment img={Icon} name="Diario Libre" followers="1.4M audiencia"></InfluencerComment>
      </BgTransparent>
      <BgTransparent>
        <InfluencerComment img={Icon} name="Diario Libre" followers="1.4M audiencia"></InfluencerComment>
      </BgTransparent>
      <BgTransparent>
        <InfluencerComment img={Icon} name="Diario Libre" followers="1.4M audiencia"></InfluencerComment>
      </BgTransparent>
      <BgTransparent>
        <InfluencerComment img={Icon} name="Diario Libre" followers="1.4M audiencia"></InfluencerComment>
      </BgTransparent>
    </Container>
  )
}

export default Influencers
