import React from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from './NavbarElements';

const Navbar = ({Logout}) => {

  const btnStyle={
    borderRadius: "4px",
    background: "#256ce1",
    padding: "5px 10px",
    color: "#fff",
    outline: "none",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    textDecoration: "none",
    /* Second Nav */
    marginLeft: "24px",
   hover: {
      transition: "all 0.2s ease-in-out",
      background:" #fff",
      color:" #010606",
    }
  }
  
  const imageStyle={
    width:"120px",
    height:"60px"
  }
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img style={imageStyle} src={require('../../images/loader_road_ready.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/map' activeStyle>
          <img src={require('../../images/MapIcon.png')} alt='map' />
          </NavLink>
          <NavLink to='/fleetdashboard' activeStyle>
          <img src={require('../../images/trailer.png')} alt='trailer' />
          </NavLink>
          <NavLink to='/dashboard' activeStyle>
          <img src={require('../../images/trailer.png')} alt='trailer' />
          </NavLink>
          <NavLink to='/alerts' activeStyle>
          <img src={require('../../images/AlertIcon.png')} alt='AlertIcon' />
          </NavLink>
          <NavLink to='/reports' activeStyle>
          <img src={require('../../images/UtilizationIcon.png')} alt='UtilizationIcon' />
          </NavLink>
          <NavLink to='/settings' activeStyle>
          <img src={require('../../images/settings.png')} alt='settings' />
          </NavLink>
          <NavLink to='/tscurrent' activeStyle>
          <img src={require('../../images/group64.png')} alt='group64' />
          </NavLink>
          <NavLink to='/tshistory' activeStyle>
          <img src={require('../../images/group64.png')} alt='group64' />
          </NavLink>
          <NavLink to='/support' activeStyle>
          <img src={require('../../images/AlertIcon.png')} alt='AlertIcon' />
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <button style={btnStyle} onClick={()=>Logout()}>Logout</button>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;