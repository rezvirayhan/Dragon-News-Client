import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const NavagationBar = () => {
    const { user } = useContext(AuthContext)

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/' className='text-white text-decoration-none'>Home</Link>
                            {/* <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Carrer</Nav.Link> */}
                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem', color: 'white' }}></FaUserCircle>
                            }
                            {user ?
                                <Button variant="success">LogOut</Button> :
                                <Link to='/login'>
                                    <Button variant="success">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavagationBar;