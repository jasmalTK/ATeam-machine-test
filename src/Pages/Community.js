import { Container } from '@mui/material'
import styled from '@emotion/styled/macro'
import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import ItemCard from '../Components/ItemCard'
import KebabDiningIcon from '@mui/icons-material/KebabDining';

function Community() {
  
  return (
    <MainContainer>
      <TopBar />
      <MainHead>
        <SubDivLeft>
          <HeadImgDiv>
            <HeadImg src={require('../images/icons/community.png')} />
          </HeadImgDiv>
          <HeadContentDiv>
            <HeadContent>Community</HeadContent>
          </HeadContentDiv>
        </SubDivLeft>
      </MainHead>
    </MainContainer>
  )
}

export default Community

const MainContainer = styled(Container)`
position: relative;
`
const ProImgDiv = styled.div`
position: absolute;
right: -37px;
top: 177px;
width: 180px;
transform: rotate(-32deg);
height: 200px;
`
const ProImg = styled.img`
width: 100%;
`
const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 70px;
`

const SubDivRightContent = styled.div`
border-right :${({borderRight})=>borderRight? "1px solid #d3d6db":""};
padding: 0px 11px;
`

const SubContent = styled.p`
font-size: 14px;
opacity: 0.7;
`

const HeadContentDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-left: 20px;
`
const HeadContent =styled.span`
font-size: 36px;
font-family: 'Lobster', cursive;
letter-spacing: 5px;
opacity: 0.9;
`

const HeadImgDiv = styled.div`
width: 70px;
height: 70px;
`
const HeadImg = styled.img`
display: block;
width: 100%;
`

const MainHead = styled.div`
display: flex;
justify-content: space-between;
`
const SubDivLeft = styled.div`
display: flex;
`
const SubDivRight = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 17%;
`