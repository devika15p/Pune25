import React, { useState } from 'react';
import { Form, Button, Container, Card, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    college: '',
    branch: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [branches, setBranches] = useState({  // Example branch data
    'College A': ['Computer Science', 'Electronics', 'Mechanical', 'Civil'],
    'College B': ['Information Technology', 'Electrical', 'Chemical'],
    // ... more colleges and branches
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Simulate API call (replace with your actual API call)
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (formData.username && formData.email && formData.password && formData.college && formData.branch) {
            resolve({ success: true });
          } else {
            reject({ success: false, message: 'All fields are required' });
          }
        }, 1500);
      });

      if (response.success) {
        console.log('Sign up successful!', formData);
        // Redirect or perform other actions
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error("Sign Up Error:", err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 bg-black text-white"> {/* Black theme for Card */}
            <Card.Title className="text-center">Sign Up</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 text-white border border-gray-700" // Black input styling
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 text-white border border-gray-700"
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 text-white border border-gray-700"
                />
              </Form.Group>

              <Form.Group controlId="college">
                <Form.Label>College</Form.Label>
                <Form.Control
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 text-white border border-gray-700"
                />
              </Form.Group>

              <Form.Group controlId="branch">
                <Form.Label>Branch</Form.Label>
                <Form.Select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 text-white border border-gray-700"
                >
                  <option value="">Select Branch</option>
                  {Object.keys(branches).map((college) =>
                    branches[college].map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))
                  )}
                </Form.Select>
              </Form.Group>

              {error && <Alert variant="danger">{error}</Alert>}

              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? 'Signing Up...' : 'Sign Up'}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;