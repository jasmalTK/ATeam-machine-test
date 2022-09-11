import React ,{useState}from 'react'
import styled from '@emotion/styled/macro'
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { yellow } from '@mui/material/colors';

function ItemCard({card, handleRating, idx}) {
   if(card.cardType === "pro"){
    return (
        <Container cardType={card.cardType}>
            <TypeDiv><ProHead>PRO</ProHead></TypeDiv>
            <HeadDiv><ProMain>Mentorship <br/> program</ProMain></HeadDiv>
            <ContentDiv><ProContent>A mentor will track your progress and give you tips for faster culinary growth.</ProContent></ContentDiv>
        </Container>
      )
   }else {
    return (
        <Container cardType={card.cardType}>
            <TopImgDiv>
                {/* <TopImg src={require('../images/chicken-noodle-soup-1.jpg')} /> */}
                <Avatar
                    alt="Remy Sharp"
                    src={card.image}
                    sx={{ width: 60, height: 60 }}
                />
            </TopImgDiv>
            <TopDiv>
            <CardName>
                <CardMainName>{card.name}</CardMainName>
                <CardSubName type={card.type}>{card.type}</CardSubName>
            </CardName>
            <CardType>
                <TypeContent>
                    <TypeCount>25</TypeCount>
                    <SubCount>Min</SubCount>
                </TypeContent>
                <TypeContent className='border'>
                    <TypeCount>25</TypeCount>
                    <SubCount>Kcal</SubCount>
                </TypeContent>
                <TypeContent>
                    <SubCountIconDiv>
                        <SubCountIcon src={card.icon} />
                    </SubCountIconDiv>
                    <SubCount>{card.category}</SubCount>
                    
                </TypeContent>
            </CardType>
            <CardRating>
                <Stack spacing={1}>
                    <StyledRating  name="half-rating" value={card.rating} 
                        onChange={(event, newValue) => {
                            handleRating(event,newValue,idx);
                        }} 
                        precision={0.5} />
                </Stack>
            </CardRating>
            </TopDiv>
            
            <ButtonDiv>
                <CardButton>Start cooking</CardButton>
            </ButtonDiv>
        </Container>
      )
   }
  
}

export default ItemCard

const TopImg = styled.img`
display: block;
width: 100%;
border-radius: inherit;
`

const TopImgDiv = styled.div`
    position: absolute;
    top: -31px;
    /* border: 1px solid red; */
    padding: 5px;
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

const TypeContent = styled.div`
padding: 5px;
width: 33%;
text-align: center;
&.border {
    border-color: #f7f3f2;
    border-style: solid;
    border-width: 0 1px;
}
`
const TopDiv = styled.div`
padding: 15px;
width: 95%;
`
const TypeCount = styled.span`
    font-weight: bold;
    opacity: 0.8;
    font-size: 20px;
`
const SubCount = styled.p`
font-size: 12px;
opacity: 0.7;
`

const SubCountIconDiv = styled.div`
width: 32px;
height: 28px;
font-weight: bold;
opacity: 0.8;
margin: auto;
`

const SubCountIcon = styled.img`
display: block;
width: 100%;
height: 100%;
`
const CardMainName = styled.span`
font-weight: bold;
font-size: 17px;
opacity: 0.8;
`
const CardSubName = styled.p`
padding: 2px;
color:  ${({type}) => type === "Beginner"? "#7680a6" : type === "Intermediate"? "#edb553" : "#b33a36"};
background-color: ${({type}) => type === "Beginner"? "#e0dcfa" : type === "Intermediate"? "#f5eed3" : "#f5e1df"};
font-size: 10px;
`
const CardName = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
`
const CardType = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;
`
const CardCount = styled.div`
`
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });
const CardRating = styled.div`
margin-top: 15px;
display: flex;
justify-content: center;
`
const ButtonDiv = styled.div`
margin-top: 15px;
padding: 14px;
width: 100%;
text-align: center;
background-color: #fff;
font-size: 14px;
color: #000000;
font-weight: bold;
opacity: 0.8;
border-radius: 0px 0px 18px 18px;
cursor: pointer;
border-top: 1px solid #f7f3f2;
:hover {
    background-color: red;
    color: #fff;
}
`
const CardButton = styled.span`
/* color: #000000; */
`
const Container=styled.div`
display: flex;
/* justify-content: space-between; */
justify-content: ${({cardType}) => cardType === "pro" ? "space-evenly": "space-between"};
/* align-items: center; */
align-items: ${({cardType}) => cardType === "pro" ? "left": "center"};
flex-direction: column;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 23%;
/* background-color: #fff; */
background-color: ${({cardType}) => cardType === "pro" ? "#69c9ac": "#fff"};
padding: ${({cardType}) => cardType === "pro" ? "16px": "0px"};
:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transform: translate(0, -10%);
}
border-radius: 18px;
position: relative;
margin-bottom: 68px;
`;


const TypeDiv = styled.div`
`
const HeadDiv = styled.div`
`
const ContentDiv = styled.div`
`
const ProHead = styled.span`
    border-radius: 6px;
    background-color: black;
    padding: 4px 11px;
    color: white;
    font-size: 12px;
`
const ProMain = styled.span`
font-size: 25px;
font-family: 'Lobster', cursive;
font-weight: bold;
color: #fff;
letter-spacing: 2px;
`

const ProContent = styled.p`
font-size: 12px;
color: #fff;
width: 83%;
`