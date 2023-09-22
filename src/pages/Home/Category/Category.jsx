import { useLoaderData, useParams } from "react-router-dom";
import NewsCart from "../NewsCart/NewsCart";

const Category = () => {
    const { id } = useParams()
    const categoryNews = useLoaderData()
    return (
        <div>
            {
                categoryNews.map(news => <NewsCart
                    key={news._id}
                    news={news}
                ></NewsCart>)
            }

        </div>
    );
};

export default Category;