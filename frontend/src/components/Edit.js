import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";

function Edit() {
  const history = useHistory();
  const [data, updateData] = useState({
    name: "",
    src: "",
    price: "",
    desc: "",
  });
  let params = useParams();
  params = params.id;

  useEffect(() => {
    async function fetchData() {
      let product = await axios.get(`/products/${params}`);
      product = product.data;
      updateData({
        name: product.name,
        src: product.src,
        desc: product.desc,
        price: product.price,
      });
    }
    fetchData();
  }, [params]);

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.patch(`/products/${params}`, data);
    history.push("/products");
  };

  return (
    <div>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <h1>Edit</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name"
                name="name"
                value={data.name}
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
                value={data.src}
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
                value={data.price}
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
                value={data.desc}
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

export default Edit;
