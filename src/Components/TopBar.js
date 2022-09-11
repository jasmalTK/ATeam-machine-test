import React ,{useState}from 'react'
import styled from '@emotion/styled/macro'
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

function TopBar({setSearchValue}) {
   
  return (
    <Container>
        <LeftDiv>
            <SearchDiv>
                <SearchIcn />
                <SearchInput onChange={(e)=> setSearchValue(e.target.value)} placeholder="Enter your search request..."></SearchInput>
            </SearchDiv>
        </LeftDiv>
        <RightDiv>
            <RightIcon></RightIcon>
            <RightButton>Go to Premium</RightButton>
        </RightDiv>
    </Container>
  )
}

export default TopBar

const RightIcon = styled(TuneIcon)`
width: 20px;
height: 20px;
cursor: pointer;
`
const RightButton = styled.button`
padding: 10px;
background-color: red;
border: unset;
border-radius: 10px;
margin-left: 11px;
color: #fff;
opacity: 0.7;
font-size: 11px;
-webkit-box-shadow: 0 8px 6px -6px red;
-moz-box-shadow: 0 8px 6px -6px red;
box-shadow: 0 8px 6px -6px red;
cursor: pointer;
`
const LeftDiv = styled.div`
`
const RightDiv = styled.div`
display: flex;
align-items: center;
`
const SearchDiv = styled.div`
position: relative;
border-bottom: 1px solid #d3d6db;
`
const SearchIcn = styled(SearchIcon)`
position: absolute;
width: 20px;
height: 28px;
/* top: 0px; */
`
const SearchInput = styled.input`
border: unset;
background-color: #e8e3e8;
:focus-visible {
    outline: unset
}
margin-left: 20px;
width: 200px;
padding: 5px;
`

const Container=styled.div`
position: sticky;
padding:30px 0px ;
left:0;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
`;

const LogoTxt=styled.h2`
font-size: 16px;

font-weight:bold;
`;