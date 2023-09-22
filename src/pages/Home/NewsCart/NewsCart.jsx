import moment from 'moment/moment';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { _id, title, image_url, author, img, details, total_view, rating } = news;
    return (

        <Card className="mb-4">
            <Card.Header className='d-flex align-itmes-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyy-MM-d')}</small></p>
                </div>
                <div>
                    <FaBookmark></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <> {details.slice(0, 250)}..... <Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>

    );
};

export default NewsCart;