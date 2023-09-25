import React from "react";
import './App.css';
import { BrowserRouter, Route,Router, Link, Routes } from "react-router-dom";
import {Navbar,Nav } from 'react-bootstrap'
import Home from "./components/Home";
import ResturantUpdate from "./components/ResturantUpdate";
import ResturantCreate from "./components/ResturantCreate";
import ResturantDetail from "./components/ResturantDetail";
import ResturantSearch from "./components/ResturantSearch";
import ResturantList from "./components/ResturantList";

function App() {
    return (
      <div className="App">
        <BrowserRouter>

        <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>

            </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        <ul>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/list"> List</Link></li>
            <li><Link to="/create"> Create</Link></li>
            <li><Link to="/search"> Search</Link></li>
            <li><Link to="/detail"> Detail</Link></li>
            <li><Link to="/update"> Update</Link></li>
          </ul>
          <Routes>
          <Route path="/list" element={ <ResturantList />} />
          <Route path="/create" element={ <ResturantCreate />} />
          <Route path="/search" element={ <ResturantSearch />} />            
          <Route path="/detail" element={ <ResturantDetail />} />
          <Route path="/update" element={ <ResturantUpdate />} />
          <Route path="/" element={ <Home />} />
          
          </Routes>
        </BrowserRouter>
         
        
       </div>
    )
}
export default App;