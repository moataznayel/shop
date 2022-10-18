import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link, Route, Routes } from "react-router-dom";
import t1 from "../Photos/t1.jpg";
import t2 from "../Photos/t2.jpg";
import t3 from "../Photos/t3.jpg";
import t4 from "../Photos/t4.jpg";
import f1 from "../Photos/f1.png";
import fifth1 from "../Photos/fifth1.jpg";
import fifth2 from "../Photos/fifth2.jpg";
import fifth3 from "../Photos/fifth3.jpg";
import fifth4 from "../Photos/fifth4.jpg";
import fifth5 from "../Photos/fifth5.jpg";
import fifth6 from "../Photos/fifth6.jpg";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
export default class Seling extends Component {
  state = {
    Product: [
      { id: 0, name: "Quited Giled With Hood", price: 150, img: t1 },
      { id: 1, name: "Quited Giled With Hood", price: 110, img: t2 },
      { id: 2, name: "Quited Giled With Hood", price: 200, img: t3 },
      { id: 3, name: "Quited Giled With Hood", price: 250, img: t4 },
    ],
  };
  render() {
    return (
      <div className="item">
        <Container className="pt-5 pb-5">
          <h1>Best Seling</h1>
          <Row className="mt-3">
            {this.state.Product.map((e) => (
              <Col key={e.id} className="mb-3">
                <Card style={{ width: "18rem" }} className="m-auto seling">
                  <Card.Img variant="top" src={e.img} />
                  <Card.Body>
                    
                      
                      <p>{e.name}</p>
                      <div className="d-flex justify-content-between">
                        <p>{e.price}.00$</p>
                        <Link to="/Shopping">
                          <Button variant="outline-success">Shoping Now</Button>{" "}
                        </Link>
                      </div>
                   
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-5">
            <Col className="col-10 col-lg-9 m-auto mb-3">
              <Card bg="secondary">
                <Card.Img src={f1} alt="Card image" />
                <Card.ImgOverlay className="text-center text-img text-dark d-flex align-items-center justify-content-center">
                  
                    <div> <h1>MERRY</h1>
                    <p>Christmas 40% Off</p>
                    <Link to="/Shopping">
                      <Button variant="outline-success">Shoping Now</Button>{" "}
                    </Link></div>
                   
                    
                  
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col className="col-10 col-lg-3 ms-auto me-auto mb-3">
              <Card className="bg-secondary text-dark h-100 m-auto text-over text-center">
                <Card.Title>
                  <h1>
                    Your
                    <br />
                    Next
                  </h1>
                </Card.Title>
               
                  <p>Purchase 10% Off</p>
                
                <Card.Text>
                  <Link to="/Shopping">
                    <Button variant="outline-dark">Shoping Now</Button>
                  </Link>
                </Card.Text>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col className="col-10 col-lg-4 m-auto mb-3">
              <Row>
                <Col className="col-6 p-0">
                  <img src={fifth1} width={"100%"} />
                </Col>
                <Col className="col-6 p-0">
                  <img src={fifth2} width={"100%"} />
                </Col>
                <Col className="col-6 p-0">
                  <img src={fifth3} width={"100%"} />
                </Col>
                <Col className="col-6 p-0">
                  <img src={fifth4} width={"100%"} />
                </Col>
                <Col className="col-6 p-0">
                  <img src={fifth5} width={"100%"} />
                </Col>
                <Col className="col-6 p-0">
                  <img src={fifth6} width={"100%"} />
                </Col>
              </Row>
            </Col>
            <Col className=" col-10 col-lg-8 text-center vintage-style m-auto">
              <h1>Vintage Style</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                eaque iusto error debitis odio architecto omnis laboriosam ipsa,
                corrupti quod! Voluptatem sit voluptatibus facere sunt iste
                numquam voluptatum in esse!
              </p>
              <h1>#Lusiontheme</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
