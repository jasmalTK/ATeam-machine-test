import "./App.css";
import React, { lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";

import { CircularProgress } from "@mui/material";
import styled from "styled-components/macro";


const Navigation=lazy(()=>import ("../src/Pages/Navigation.js"))

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
         
            <CircularProgress />
          
        }
      >
        <Router>
          <Switch>
            <Route path="/*" element={<Navigation />} />
           
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
