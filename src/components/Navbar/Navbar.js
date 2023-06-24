import React, { Component } from "react";
import "./navbar.css";
import{
  BrowerRouter as Router,
  Link
} from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className='navbar_container'>
          <div className='navbar_logo'>
            <h2>Dee-News</h2>
          </div>

          <div className='navbar_links'>
          <p>
              <Link to='/'>Home</Link>
            </p>
            <p>
              <Link to='/business'>Business</Link>
            </p>
            <p>
              <Link to='/entertainment'>Entertainment</Link>
            </p>
            <p>
              <Link to='/general'>General</Link>
            </p>
            
            <p>
              <Link to='/science'>Science</Link>
            </p>
            <p>
              <Link to='/sports'>sports</Link>
            </p>
          </div>
          <div className='navbar_button'>
          <div className="nav_button">
            Button
          </div>
          </div>
        </div>
      </>
    );
  }
}
