import React from "react";
import Product from "./Product";
import { Col, Row } from "react-bootstrap";

function ProductList() {
  const products = [];

  return (
    <Row>
      {products.map((product) => (
        <Col lg={4} md={6}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
