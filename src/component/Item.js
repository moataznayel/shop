import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import s1 from "../Photos/s1.jpg";
import s2 from "../Photos/s2.jpg";
import s3 from "../Photos/s3.jpg";
import s4 from "../Photos/s4.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './item.css'

export default class Item extends Component {
  state = {
    Products: [
      { id: 0, name: "Clothing Items", num: 5, img: s1 },
      { id: 1, name: "Bag Brand Items", num: 20, img: s2 },
      { id: 2, name: "Accessories Items", num: 6, img: s3 },
      { id: 3, name: "Shoes Item", num: 8, img: s4 },
    ],
  };
  render() {
    return (
      <div className="pt-5 pb-5 item">
        <Container>
          <Row >
            {this.state.Products.map((e) => (
              <Col key={e.id} className='mb-3 '>
                <Card  style={{ width: "18rem" }} className='m-auto item'>
                  <Card.Img variant="top" src={e.img} />
                  <Card.Body>
                      <div> <h3>{e.name}</h3>
                      <p>item {e.num}</p></div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
