import React from "react";
import Product from "./Product";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, updateProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productData = await axios.get("/products");
      /* // console.log(productData); */
      updateProducts(productData.data);
    }
    fetchData();
  });

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
