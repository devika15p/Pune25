
import React, { useState } from "react";
import { Form, Button, Container, Card, Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    college: "",
    branch: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const colleges = {
    "College A": ["Computer Science", "Electronics", "Mechanical", "Civil"],
    "College B": ["Information Technology", "Electrical", "Chemical"],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Basic Validation before API call
    const { username, email, password, college, branch } = formData;
    if (!username || !email || !password || !college || !branch) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      // Simulated API call (Replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Sign up successful!", formData);
      setFormData({ username: "", email: "", password: "", college: "", branch: "" });
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-dark min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 bg-secondary text-white shadow-lg">
              <Card.Title className="text-center mb-4 fs-3 fw-bold">Sign Up</Card.Title>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                {/* Username */}
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="bg-dark  border border-gray-700"
                    placeholder="Enter username"
                  />
                </Form.Group>

                {/* Email */}
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-dark text-white border border-gray-700"
                    placeholder="Enter email"
                  />
                </Form.Group>

                {/* Password */}
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="bg-dark text-white border border-gray-700"
                    placeholder="Enter password"
                  />
                </Form.Group>

                {/* College */}
                <Form.Group controlId="college" className="mb-3">
                  <Form.Label>College</Form.Label>
                  <Form.Select
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    className="bg-dark text-white border border-gray-700"
                  >
                    <option value="">Select College</option>
                    {Object.keys(colleges).map((college) => (
                      <option key={college} value={college}>
                        {college}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {/* Branch - Dynamically updates based on college */}
                <Form.Group controlId="branch" className="mb-3">
                  <Form.Label>Branch</Form.Label>
                  <Form.Select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="bg-dark text-white border border-gray-700"
                    disabled={!formData.college} // Disables branch selection until a college is chosen
                  >
                    <option value="">Select Branch</option>
                    {formData.college &&
                      colleges[formData.college].map((branch) => (
                        <option key={branch} value={branch}>
                          {branch}
                        </option>
                      ))}
                  </Form.Select>
                </Form.Group>

                {/* Submit Button */}
                <div className="text-center">
                  <Button variant="primary" type="submit" disabled={loading} className="w-75 mt-2">
                    {loading ? "Signing Up..." : "Sign Up"}
                  </Button>
                </div>
                <div className="text-center mt-3">
                <small>
                  Get Back To{" "}
                  <Link to="/login" className="text-warning">Login</Link>
                </small>
              </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
