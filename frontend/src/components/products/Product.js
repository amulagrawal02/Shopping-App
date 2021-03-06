import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product(props) {
  // console.log(props.product);
  const { _id, name, src, price, desc } = props.product;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Title>&#8377;{price}</Card.Title>
        <Button variant="primary">
          <Link to={`/products/${_id}`}>Buy Now</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
