import { Container } from '@mui/material'
import styled from '@emotion/styled/macro'
import React, { useState, useEffect } from 'react'
import TopBar from '../Components/TopBar'
import ItemCard from '../Components/ItemCard'
import KebabDiningIcon from '@mui/icons-material/KebabDining';

function Favourites() {
  const [state, setState] = useState({
    cards: [{
      image: require('../images/chicken-noodle-soup-1.jpg'),
      name: "Noodle chicken soup",
      type: 'Intermediate',
      min:25,
      kcl: 25,
      category: 'meat',
      icon: require('../images/meat-vector.jpeg'),
      rating: 2.5,
      cardType: "normal"
    },
    {
      image: require('../images/raw-tuna-salad.webp'),
      name: "Salad with raw tuna",
      type: 'Advanced',
      min:25,
      kcl: 25,
      category: 'Fish',
      icon: require('../images/fish-vector.jpeg'),
      rating: 3.5,
      cardType: "normal"
    },
    {
      image: require('../images/spinacha-pasta.jfif'),
      name: "Pasta with spinach",
      type: 'Beginner',
      min:25,
      kcl: 25,
      category: 'Veg',
      icon: require('../images/leaf-vector.jpeg'),
      rating: 3,
      cardType: "normal"
    },
    {
      image: require('../images/fruit bowl.jpg'),
      name: "Fruit bowl",
      type: 'Intermediate',
      min:25,
      kcl: 25,
      category: 'Fruit',
      icon: require('../images/fruit-vector.jpeg'),
      rating: 2.5,
      cardType: "normal"
    }]
    }
  )

  const [searchValue, setSearchValue] = useState("")
  const [cards, setCards] = useState(state.cards)

  useEffect(() => {
    if(searchValue === ""){
      setState((prevState) => {
        return {
          ...prevState,
          cards
        }
      })
    }else {
      const newcards = cards.filter(value => value.name.toLowerCase().includes(searchValue.toLowerCase()))
      setState((prevState) => {
        return {
          ...prevState,
          cards: newcards
        }
      })
    }
    
  }, [searchValue])
  
  const handleRating = (e,val,idx) => {
    let cards = [...state.cards]
    cards[idx]["rating"] = val
    setState((prevState) => {
      return {
        ...prevState,
        cards
      }
    })
  }
  return (
    <MainContainer>
      <TopBar setSearchValue={setSearchValue} />
      <MainHead>
        <SubDivLeft>
          <HeadImgDiv>
            <HeadImg src={require('../images/icons/heart-icon.png')} />
          </HeadImgDiv>
          <HeadContentDiv>
            <HeadContent>Favourites</HeadContent>
            {/* <SubContent>Today's new recipes for you</SubContent> */}
          </HeadContentDiv>
        </SubDivLeft>
        {/* <SubDivRight>
          <SubDivRightContent borderRight={true}>
            <HeadContent borderRight={true}>168</HeadContent>
            <SubContent>Tutorials</SubContent>
            </SubDivRightContent>
          <SubDivRightContent>
          <HeadContent>304</HeadContent>
            <SubContent>Recipes</SubContent>
          </SubDivRightContent>
        </SubDivRight> */}
      </MainHead>
      <CardContainer>
        {state.cards.map((i,index) => <ItemCard card={i} handleRating={handleRating} idx={index} />)}
      </CardContainer>
    </MainContainer>
  )
}

export default Favourites

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