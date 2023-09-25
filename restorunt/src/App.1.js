import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import ResturantUpdate from "./components/ResturantUpdate";
import ResturantCreate from "./components/ResturantCreate";
import ResturantDetail from "./components/ResturantDetail";
import Resturantsearch from "./components/Resturantsearch";
import ResturantList from "./components/ResturantList";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/list"> List</Link></li>
            <li><Link to="/create"> Create</Link></li>
            <li><Link to="/search"> Search</Link></li>
            <li><Link to="/detail"> Detail</Link></li>
            <li><Link to="/update"> Update</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/list">
            <ResturantList />
          </Route>
          <Route path="/create">
            <ResturantCreate />
          </Route>
          <Route path="/search">
            <Resturantsearch />
          </Route>
          <Route path="/detail">
            <ResturantDetail />
          </Route>
          <Route path="/update">
            <ResturantUpdate />
          </Route>
          <Route exact path="/ ">
            <Home />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
