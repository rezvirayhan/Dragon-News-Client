import moment from 'moment';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";
import Logo from '../../../assets/logo.png';


const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={Logo} alt="Logo" />
                <p className='text-secondary'><small>Journalism Without Fear or Favourit</small></p>
                <p>{moment().format("dddd, MMMM, YYYY")}</p>
            </div>
            <Container>
                <div className='d-flex mb-2'>
                    <Button variant="danger">Latest</Button>{' '}
                    <Marquee speed={80}>
                        I can be a React component, multiple React components, or just some text.........................................................
                    </Marquee>
                </div>
            </Container>

        </div>
    );
};

export default Header;