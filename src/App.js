import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import NewsContainer from "./containers/NewsContainer/NewsContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <NewsContainer
                  key='general'
                  pagesize={15}
                  country='us'
                  catagory='general'
                  API_KEY='6346038a0dd140918037f07891a970ea'
                />
              }
            />
            <Route
              exact
              path='/general'
              element={
                <NewsContainer
                  key='general'
                  pagesize={15}
                  country='us'
                  catagory='general'
                  API_KEY='6346038a0dd140918037f07891a970ea'
                />
              }
            />
            <Route
              exact
              path='/business'
              element={
                <NewsContainer
                  pagesize={15}
                  key='business'
                  country='us'
                  catagory='business'
                  API_KEY='6346038a0dd140918037f07891a970ea'
                />
              }
            />
            <Route
              exact
              path='/entertainment'
              element={
                <NewsContainer
                  pagesize={15}
                  key='entertainment'
                  country='us'
                  catagory='entertainment'
                  API_KEY='6346038a0dd140918037f07891a970ea'
                />
              }
            />
            <Route
              exact
              path='/science'
              element={
                <NewsContainer
                  pagesize={15}
                  key='science'
                  country='us'
                  catagory='science'
                  API_KEY='6346038a0dd140918037f07891a970ea'
                />
              }
            />
            <Route
              path='/sports'
              exact
              element={
                <NewsContainer
                  pagesize={15}
                  country='us'
                  key='sports'
                  catagory='sports'
                  API_KEY='6346038a0dd140918037f07891a970ea'
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
