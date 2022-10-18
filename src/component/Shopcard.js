import React, { Component, useState } from "react";
import { Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BsFillBasket3Fill, BsExclamationLg } from "react-icons/bs";
const Shopcard = (props) => {
  let price = props.data.map((e) => props.data.length > 0 && e.count * e.price);
  let totalPrice = price.length > 0 && price.reduce((x, y) => x + y);

  return (
    <div>
      <div
        style={
          props.data.length == 0 ? { display: "block" } : { display: "none" }
        }
      >
        <Card className="m-auto text-center mb-5 mt-5 w-75 p-5" bg="info">
          <h1 style={{ color: "red" }}>
            <BsExclamationLg />
            You Cart is Empty
          </h1>
        </Card>
      </div>
      <Container
        style={
          props.data.length == 0 ? { display: "none" } : { display: "block" }
        }
      >
        <Row className="pt-5">
          {props.data.map((e) => (
            <Col className="mb-3" key={e.id}>
              <Card
                style={{ width: "18rem" }}
                className="m-auto pt-2 pb-5 bg-secondary"
              >
                <img src={e.img} className="m-auto w-50" />
                <Card.Body className="text-center">
                  <p>Name: {e.name}</p>
                  <p>Price: {e.price}$</p>
                  <p>count: {e.count}</p>
                  <div className="d-flex justify-content-evenly mt-5  ">
                    <Button
                      variant="light"
                      className="text-success"
                      onClick={() => props.increment(e)}
                    >
                      +
                    </Button>
                    <Button
                      variant="light"
                      className="text-danger "
                      onClick={() => props.decrement(e)}
                    >
                      -
                    </Button>
                    <Button
                      variant="light"
                      className="text-danger"
                      onClick={() => props.remove(e)}
                    >
                      <BsFillBasket3Fill />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Card className="m-auto w-50 mt-5 text-center p-2 border-card">
          <h1 className="text-dark">
            Total Price: <span className="text-danger">{totalPrice} $</span>
          </h1>
        </Card>
      </Container>
      <div className="d-flex  m-auto mt-5">
        <Link to="/Shopping" className="m-auto mb-3">
          <Button variant="outline-success">Back Shopping</Button>
        </Link>
      </div>
    </div>
  );
};
export default Shopcard;
