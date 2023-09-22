import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Leftzone from "../Leftzone/Leftzone";

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4>All Categories</h4>
            <div className="ps-4">
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className="text-black text-decoration-none">{category.name}</Link>
                    </p>)
                }
            </div>
            <Leftzone></Leftzone>
        </div>
    );
};

export default LeftNav;