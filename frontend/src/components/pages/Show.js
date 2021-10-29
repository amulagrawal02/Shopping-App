import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button, Form } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";

function Show() {
  const [data, updatedData] = useState({
    name: "",
    src: "",
    desc: "",
    price: "",
  });

  const history = useHistory();

  //   to get the params of the url
  let params = useParams();
  params = params.id;

  useEffect(() => {
    async function fetchData() {
      let product = await axios.get(`/products/${params}`);
      product = product.data;
      updatedData({
        name: product.name,
        src: product.src,
        desc: product.desc,
        price: product.price,
      });
    }
    fetchData();
  }, [params]);

  const deleteHandler = async () => {
    await axios.delete(`/products/${params}`);
    return history.push("/products");
  };

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
              <Link to={`/products/${params}/edit`}>Edit</Link>
            </Button>
            <Button
              variant="danger"
              className="me-2 mb-2"
              onClick={deleteHandler}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <h1>Leave A review</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="range" min="1" max="5" name="rating" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description of Product</Form.Label>
            <Form.Control as="textarea" rows={3} name="review" />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default Show;
