import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Show() {
  const [data, updatedData] = useState({
    name: "",
    src: "",
    desc: "",
    price: "",
  });

  //   to get the path of the url
  const pathAddress = useLocation().pathname;

  useEffect(() => {
    async function fetchData() {
      let product = await axios.get(pathAddress);
      product = product.data;
      updatedData({
        name: product.name,
        src: product.src,
        desc: product.desc,
        price: product.price,
      });
    }
    fetchData();
  });

  return (
    <Row>
      <Col lg={6} md={12}>
        <Card style={{ width: "21rem" }}>
          <Card.Img variant="top" src={data.src} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.desc}</Card.Text>
            <Card.Title>&#8377;{data.price}</Card.Title>
            <Button variant="primary" className="me-2 mb-2">
              <Link to={`/products/`}>Buy Now</Link>
            </Button>
            <Button variant="success" className="me-2 mb-2">
              <Link to={`/products/`}>Add to Card</Link>
            </Button>
            <Button variant="info" className="me-2 mb-2">
              <Link to={`/products/`}>Edit</Link>
            </Button>
            <Button variant="danger" className="me-2 mb-2">
              <Link to={`/products/`}>Delete</Link>
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <h1>Leave A review</h1>
      </Col>
    </Row>
  );
}

export default Show;
