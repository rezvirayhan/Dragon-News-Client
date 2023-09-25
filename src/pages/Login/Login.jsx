import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navagite = useNavigate()
    const location = useLocation()
    //console.log('Login Page Location added', location);
    const from = location.state?.from?.pathname || '/category/0'

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //  console.log(email, password);
        signIn(email, password)
            .then(result => {
                const logedUser = result.user;
                ///    console.log(logedUser);
                navagite(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Container className='w-25 mx-auto mt-4'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required name='email' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required name='password' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button> <br />
                <Form.Text className="text-muted">
                    Don't Have an accoutn <Link className='text-danger' to='/register'>
                        Register
                    </Link>
                </Form.Text>
            </Form>
        </Container >
    );
};

export default Login;