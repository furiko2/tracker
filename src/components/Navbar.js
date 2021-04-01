import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";

function Navbars() {
  const { loginWithRedirect, logout } = useAuth0();

    return (
        <header>
           <Navbar sticky="top" bg="light" expand="lg">
  <Navbar.Brand href="#home">Trakky</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="profile">Profile</Nav.Link>
      <Nav.Link href="newtask">Create a Task</Nav.Link>
      <Nav.Link href="tasks">List all tasks</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="">List all tasks</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Button variant="outline-success" onClick={() => loginWithRedirect()}>Log In</Button>
   
    <Button variant="outline-danger" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
    
  </Navbar.Collapse> 
</Navbar>
        </header>
    )
}

export default Navbars
