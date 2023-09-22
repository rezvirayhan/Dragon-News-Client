import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <Container className='w-25 mx-auto mt-4'>
            <h3>Please Register</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required name='email' />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name: </Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" required name='name' />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Please Submit Your Photo URL" required name='photo' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required name='password' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Terms and Condation" />
                </Form.Group>
                <Button variant="primary" type="submit">
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