import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
      <NAV>
        {/* keep all the NavLinks here */}
        <ul>
         <NavLink to="/" ><li>Home</li></NavLink>
         <NavLink to="/about" ><li>About</li></NavLink> 
         <NavLink to="/books" > <li>Books</li></NavLink>
         <NavLink to="/login" ><li>Login</li></NavLink>
        </ul>

      </NAV>
      </nav>
    </>
  );
};
const NAV=styled.div`
 ul{display:flex;
justify-content:space-evenly;
background:tomato;
padding:15px;

}
 li{list-style:none;
  text-decoration:none;
  color:white;
}
Navlink{
  text-decoration:none;

}

`
