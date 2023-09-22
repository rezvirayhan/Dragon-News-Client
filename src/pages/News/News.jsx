import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link, useLoaderData } from "react-router-dom";
import Editor from './Editor/Editor';

const News = () => {
    const news = useLoaderData()
    const { _id, title, image_url, details, category_id } = news;
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"> <FaArrowCircleLeft></FaArrowCircleLeft> All News In Thin Category. </Button>

                    </Link>
                </Card.Body>
            </Card>
            <Editor></Editor>
        </div>
    );
};

export default News;