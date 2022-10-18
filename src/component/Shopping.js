import React, { Component, useState } from "react";
import {   Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiShoppingBasketFill } from "react-icons/ri";
import Button from "react-bootstrap/Button";
const Shopping =(props)=> {
    return (
      <div>
        <div className="shop-bg d-flex justify-content-center align-items-center">
          <div className="text-center"><h1>Shop</h1>
          <h2 className="text-secondary">Home<span className="text-dark">/Shop</span></h2></div>
          
        </div>
        <div className="item pt-5 pb-5">
          <Container>
            <Row>
              {props.data.map((e) => (
                <Col key={e.id} className="mb-3">
                  <Card style={{ width: "18rem",height:"100%" }} className="m-auto">
                    <Card.Img variant="top" src={e.img} />
                    <Card.Body>
                      <div>
                        <p>{e.name}</p>
                        <div className="d-flex justify-content-between  ">
                          <p  className='fw-bold'>${e.price}.00</p>
                          {/* <HiOutlineShoppingBag />   */}
                          <RiShoppingBasketFill onClick={()=>props.fan(e)} className="fs-1 text-info icon text-dark"/>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="d-flex  m-auto">
              <Link to="/" className="m-auto">
                <Button variant="outline-success">Back Home</Button>
              </Link>
            </div>
            
          </Container>
        </div>
      </div>
    );
  }

export default Shopping;
