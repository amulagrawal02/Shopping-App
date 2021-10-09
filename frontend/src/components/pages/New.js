import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function New() {
  const history = useHistory();
  const [data, updateData] = useState({
    name: "",
    src: "",
    price: "",
    desc: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("/products", data);
    history.push("/products");
  };

  return (
    <div>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name"
                name="name"
                onChange={(e) => {
                  updateData({ ...data, name: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Img url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image Url"
                name="src"
                onChange={(e) => {
                  updateData({ ...data, src: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Price"
                name="price"
                onChange={(e) => {
                  updateData({ ...data, price: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description of Product</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="desc"
                onChange={(e) => {
                  updateData({ ...data, desc: e.target.value });
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </div>
  );
}

export default New;
