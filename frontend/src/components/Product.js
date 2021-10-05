import React from "react";
import { Card, Button } from "react-bootstrap";

function Product(props) {
  const { name, src, price, desc } = props.product;
  console.log(src, price);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Title>{price}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
