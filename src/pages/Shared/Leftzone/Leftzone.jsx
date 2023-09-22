import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image3 from '../../../assets/3.png';
import image1 from '../../../assets/editorsInsight1.png';
import image2 from '../../../assets/editorsInsight2.png';
const Leftzone = () => {
    return (
        <Row xs={1} md={1} lg={1} className="g-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={image1} />
                    <Card.Body>
                        <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>

                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image2} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>

                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>

                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
};

export default Leftzone;