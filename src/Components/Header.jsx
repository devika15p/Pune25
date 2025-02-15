import React from 'react';
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import { FaUserCircle, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/request">Request</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>

                        {/* Login Navigation */}
                        <Nav.Link as={Link} to="/login" className="text-white mt-2">                            
                        <FaUser size={20} className="me-1 text-white mb-2" /> Login
                        </Nav.Link>

                        {/* User Dropdown on the Right */}
                        <Dropdown align="end">
                            <Dropdown.Toggle as="span" id="user-dropdown" className="p-0 ms-5">
                                <FaUserCircle size={35} className="text-light" style={{ cursor: "pointer" }} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="p-3 text-center">
                                <h6 className="mb-0">John Doe</h6>
                                <small className="text-muted">johndoe@example.com</small>
                                <Dropdown.Divider />

                                <Button variant="primary" className="w-100 mb-2">Tracking</Button>
                                <Button variant="secondary" className="w-100 mb-2">Edit</Button>
                                <Button variant="danger" className="w-100">Logout</Button>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
