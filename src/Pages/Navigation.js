import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components/macro";
import Sidebar from "../Components/Sidebar";



const DashBoard = lazy(() => import("../Pages/Dashboard"));
const Favourites = lazy(() => import("../Pages/Favourites"));
const Courses = lazy(() => import("../Pages/Courses"));
const Community = lazy(() => import("../Pages/Community"));


function Navigation() {
  return (
    <Container>
      <MenuContainer>
        <Sidebar />
        <Suspense
          fallback={
            <Box>
              <CircularProgress />
            </Box>
          }
        >
          <Routes>
            <Switch>
              <Route path="/" element={<DashBoard />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/community" element={<Community />} />
            </Switch>
          </Routes>
        </Suspense>
      </MenuContainer>
    </Container>
  );
}

export default Navigation;

const Container = styled.div`
  background-color: white;
  width: 100%;
  border-bottom-right-radius: 20px;
  /* min-height: 100vh; */
  border-top-left-radius: 20px;
    border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
 
`;

const MenuContainer = styled.div`
  display: flex;
 
  width: 100%;
  height: 100%;
  
`;
const Routes = styled.div`
  
  margin: 0;
  
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
  background-color: #e8e3e8;
  min-height: 100vh;
  border-radius: 0px 20px 20px 0px;
`;

const Box = styled.div`
  width: 100%;
  height: 80vh;



  display: grid;
  place-items: center;
`;