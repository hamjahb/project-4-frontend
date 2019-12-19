import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import { Navbar,Nav ,Form,FormControl,Button} from "react-bootstrap";

const assistant  = (
  <div>
    <Link className="nav-link d-inline" to="/assistant/history">History</Link>
    <Link className="nav-link d-inline" to="/assistant">My Requests </Link>
    <Link className="nav-link d-inline" to="/assistant/prof">Profile </Link>
    </div>
)

const patient   = (
  <div>
    <Link className="nav-link d-inline" to="/Patient/myrequests">History</Link>
    <Link className="nav-link d-inline" to="/Patient">My Requests </Link>
    <Link className="nav-link d-inline" to="/Patient/prof">Profile </Link>
  </div>
)

const authenticatedOptions = (
  <div>
    <Link className="nav-link d-inline " to="/change-password">Change Password</Link>
    <Link className="nav-link d-inline " to="/sign-out">Sign Out</Link>
    <Link className="nav-link d-inline" to="/sign-out">Sign Out</Link>
  </div>
)

const unauthenticatedOptions = (
  <div>
    <Link className="nav-link d-inline " to="/sign-up">Sign Up</Link>
    <Link className="nav-link d-inline" to="/sign-in">Sign In</Link>
  </div>
)

const alwaysOptions = (
<div>
    <Link  className="nav-link d-inline" to="/">Home</Link>
    </div>
)

const user = (e)=>{
  
    const temp= e.role
    if (temp ==="Patient")
      return true
      else return false 
}

const Header = ({ user,userRoll }) => (
  
  <header className="main-header ">
     <React.Fragment>
  <Navbar  variant="light">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">

    <Nav className="meddico orange-text display-5"> <h3 className="meddico" >Meddico Trip </h3></Nav>
    <Nav.Link>  { user && <span>Welcome, {user}</span>}</Nav.Link>
      <Nav.Link>{alwaysOptions}</Nav.Link>
      <Nav.Link>{ user ? authenticatedOptions : unauthenticatedOptions }</Nav.Link>
   
      <Nav.Link>{ (userRoll === "Patient"  )? patient : false }</Nav.Link>
      <Nav.Link>{ (userRoll === "Assistant" )? assistant : false }</Nav.Link>
    </Nav>
    
    <Nav>
    <Nav.Link  >
    <div>
      <Link className="nav-link d-inline" to="/team">Team</Link> 
      </div>
       </Nav.Link>
      <a href="/">
      <img
        alt=""
        src="https://previews.123rf.com/images/alluranet/alluranet1712/alluranet171202730/91795598-disability-care-logo-design-template-vector.jpg"
        width="65"
        height="50" 
      />
      </a>

  </Nav>
    
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
  
  </React.Fragment>
    {/* <h1>Meddico Trip, But For Taxis {user}</h1>

    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav> */}
  </header>
)

export default Header;
