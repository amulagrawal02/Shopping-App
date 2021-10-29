import React, { useState } from "react";

import { Col, Row, Form, Button } from "react-bootstrap";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <Row>
        <Col lg={3} md={1} xs={2}></Col>
        <Col lg={6} md={10} xs={8}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="value"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={3} md={1} xs={2}></Col>
      </Row>
    </div>
  );
}

export default Login;
