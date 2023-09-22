import { Button } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Qzone from "../Qzone/Qzone";

import './RightNav.css';

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className="mb-2" variant="primary"> <FaGoogle /> Login with Google</Button>
            <Button className="mb-4" variant="success"> <FaGithub /> Login with Github</Button>
            <div>
                <h4 >Fing us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram </ListGroup.Item>
                    <ListGroup.Item> <FaLinkedin /> Linkedin </ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className="text-center text-light p-4" id="amazing_news">
                <h2>Create an Amazing Newspaper</h2>
                <p className="mt-5 border">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button className="px-4 mt-4" variant="danger">Learn More</Button>{' '}

            </div>
        </div>
    );
};

export default RightNav;