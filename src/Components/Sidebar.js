import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled/macro'
import Avatar from '@mui/material/Avatar';
import CallToActionIcon from '@mui/icons-material/CallToAction';

import AvatarGroup from '@mui/material/AvatarGroup';

function Sidebar() {
const [data,setData]=useState("Recipes")
    const LinkOptions=[{
        name:"Recipes",
        navigation:"/",
        imge: require("../images/icons/book.png")
    },{
        name:"Favorites",
        navigation:"/favourites",
        imge: require("../images/icons/heart-icon.png")
    },{
        name:"Courses",
        navigation:"/courses",
        imge: require("../images/icons/courses.png")
    },{
        name:"Community",
        navigation:"/community",
        imge: require("../images/icons/community.png")
    }]


    const navigate=useNavigate()
    const navigateTo=(name,route)=>{
        console.log(`${route}`);
        setData(name)
        navigate(`${route}`)
    }
  return (
    <Container>

<LogoTxt>
    Foodoo
</LogoTxt>


<AvtarContainer>

<Avatar1 alt="Cindy Baker" src="https://www.filmibeat.com/img/162x203/popcorn/profile_photos/rashmika-mandanna-20190705125340-37195.jpg" />
</AvtarContainer>
<NameContainer>

<UserName>
    Kristin Watson
</UserName>
<ChefTxt>
Chef de Partie
</ChefTxt>
<BadgeContainer>
<Icon1/>
<NumberTXt>
    37
</NumberTXt>
</BadgeContainer>
</NameContainer>

<DBContainer>
    {
        LinkOptions.map((i)=>(
           <Links onClick={()=>navigateTo(i.name,i.navigation)}>
                <IconDiv data1={i.name} data2={data}>
                    <Icons src={i.imge} data1={i.name} data2={data}/>
                </IconDiv>
                
                <LinkTxt  data1={i.name} data2={data}>   
                    {i.name}
                </LinkTxt>
            </Links>

            ))
    }

</DBContainer>

<AvtarContainer1>   
<Div>
<Avatar3 alt="Cindy Baker" src="https://www.filmibeat.com/img/162x203/popcorn/profile_photos/rashmika-mandanna-20190705125340-37195.jpg" />
<Avatar2 alt="Cindy Baker" src="https://www.filmibeat.com/img/162x203/popcorn/profile_photos/rashmika-mandanna-20190705125340-37195.jpg" />

<Position>
<Plus>
    <Plus1>
        +
    </Plus1>
</Plus>
</Position>
</Div>
</AvtarContainer1>

<LinkContainer>
<Create>
    Create a team and
</Create>
<Create>
Take part in<Link style={{color:"black"}} to=''>Tv show!</Link>
</Create>
</LinkContainer>
    </Container>
  )
}

export default Sidebar


const LinkContainer=styled.div`
font-size:10px;
margin-top: 15px;;


`;
const Create=styled.p`
text-align: center;
font-weight:bold;
width: 100%;
`;

const Div=styled.div`
   
position:relative;
`;
const Plus=styled.div`
border-radius: 50%;
background-color: #ff0000de;
width:20px;
height:20px;

position: relative;
`;
const Plus1=styled.span`
top:50%;
left: 50%;
color:white;
transform: translate(-50%, -50%);
  margin: auto;

position: absolute;
cursor: pointer;
`;

const Position=styled.div`
 position: absolute;
    right: -11px;
    border-radius: 50px;
    border: 1px solid white;
    bottom: 0;
`;
const NumberTXt=styled.span`

`;

const LinkTxt=styled.span`
font-size:12px;
color:${({data1,data2})=>data1===data2 ? "black":"grey"};
`;
const Links=styled.li`
display: flex;
cursor: pointer;
gap:10px;
user-select: none;
margin-top:10px;
:nth-child(1){
    margin-top: unset;
}
align-items:center;
`;
const DBContainer=styled.ul`
list-style: none;
/* margin: auto; */
margin-top: 95px;

`
const Icon1=styled(CallToActionIcon)`
&&{
    font-size: 1rem;
}
color: red;
`
const IconDiv = styled.div`
width: 17px;
height: 17px;
/* color: ${({data1,data2})=>(data1===data2 ?  "red":"#8080806e" )}; */
`
const Icons=styled.img`
width: 100%;
height: 100%;
display: block;
background-color: ${({data1,data2})=>(data1===data2 ?  "#f5463d":"#f0efed" )};
&&{
    font-size: 1rem;
}

`
const BadgeContainer=styled.div`
border-radius: 30px;
display: flex;
gap:10px;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding: 5px 10px;;
font-size:12px;
`;

const ChefTxt=styled.span`
color:grey;
font-size:11px;
`;
const NameContainer=styled.div`
display: flex;
gap:5px;
flex-direction: column;
align-items: center;
`;
const UserName=styled.span`
margin-bottom:auto;
font-size:13px;     
font-family: 'Lobster', cursive;
`;
const AvtarContainer=styled.div`    
padding: 3px;
border-radius: 50px;
margin-top: 50px;;
border-right:3px solid #80808052;
border-top:3px solid  #e58b8b;

transform: rotate(45deg);

    
    border-left: 3px solid #80808052;
    border-bottom: 3px solid #80808052;



`;
const AvtarContainer1=styled.div`    
display: flex;
align-items: baseline;
margin-top: auto;
`;
const Avatar1=styled(Avatar)`
    transform: rotate(-45deg);
`;
const Avatar2=styled(Avatar)`
position: absolute;
left:-13px;
bottom: 0;
&&{
    border:1px solid white;
    width:22px;
    height:22px;
}
`;
const Avatar3=styled(Avatar)`

`;

const Container=styled.div`
width:20%;
position: sticky;
padding:30px 0px ;
left:0;
display: flex;

align-items: center;
flex-direction: column;

`;

const LogoTxt=styled.h2`
font-size: 16px;

font-weight:bold;
`;