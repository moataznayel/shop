import React, { Component, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Naav = (props) => {
  const navigate = useNavigate()
let data=props.data.length
  return (
    <Navbar bg="light" expand="lg" className='pt-3 pb-3'>
      <Container>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Shopping">Shop</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </div>
          <h1 className='m-auto text-nav'>Lusion</h1>  
          <div className='position-relative'> <BsFillCartFill className='fs-3 icon' onClick={() => navigate('/Shopcard')} />
          <Badge className="position-absolute" bg={data==0?'danger':'secondary'}>{data}</Badge></div>
         
       
      </Container>
    </Navbar>
  )
}
export default Naav