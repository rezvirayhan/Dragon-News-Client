import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accpted, setAccpted] = useState(false)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const createUser = result.user;
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccpted = event => {
        setAccpted(event.target.checked);
    }

    return (
        <Container className='w-25 mx-auto mt-4'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required name='email' />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name: </Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" required name='name' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Please Submit Your Photo URL" required name='photo' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required name='password' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        style={{ color: 'red' }}
                        onClick={handleAccpted}
                        type="checkbox"
                        name='accept' label="Accept Terms and Condation" />

                </Form.Group>
                <Button disabled={!accpted} variant="primary" type="submit">
                    Submit
                </Button> <br />
                <Form.Text className="text-muted">
                    Alrady Have An account Please Login<Link className='text-danger' to='/login'>
                        Login
                    </Link>
                </Form.Text>

            </Form>
        </Container>
    );
};

export default Register;