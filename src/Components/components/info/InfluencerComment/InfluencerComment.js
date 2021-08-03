import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`
const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #49535e;
  margin-bottom: 4px;
`
const Followers = styled.p`
  font-size: 9px;
  font-weight: 500;
  color: #92aac6;
  margin-bottom: 4px;
`

const Comment = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: #728aa6;
`

const InfluencerComment = ({ name, followers, img, comment }) => {
  return (
    <Container>
      <Icon src={img} />
      <div>
        <Name>{name}</Name>
        <Followers>{followers}</Followers>
        <Comment>{comment}</Comment>
      </div>
    </Container>
  )
}

export default InfluencerComment
