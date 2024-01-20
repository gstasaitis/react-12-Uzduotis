import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../modules/Loading";
const Products = () => {

    const [itemList, setItemList] = useState([]);

    const fethItemList = async () => {
    const resp = await fetch("http://localhost:3000/products/");
    const json = await resp.json();
    setItemList(json);
    };

    useEffect(() => {
        fethItemList();
    }, []);

    return (
    <>
    <div className="filter">
        <div className="category">
        <label htmlFor="category">Filter by category:</label>
            <select name="category">
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Fitness">Fitness</option>
            <option value="Gardening">Gardening</option>
            <option value="Furniture">Furniture</option>
            </select>
        </div>
        <div className="price">
            <label htmlFor="price">Sort by price:</label>
            <select name="price">
            <option value="None">None</option>
            <option value="HI-LO">HI-LO</option>
            <option value="LO-HI">LO-HI</option>
            </select>
        </div>
    </div>

    <div className="products">
        {!itemList ? (
            <Loading/> 
        ) : (
            itemList.map((item) => (
                <div 
                className="product"
                key={item.id}
                >
                <h1>{item.title}</h1>
                <div className="descript">
                <p className="bold">{item.category}</p>
                <p className="normal">{item.price} €</p>
                </div>
                <p>{item.description}</p>
                <Link to={`/reviews/${item.id}`}>
                    <br />
                <button>Show Reviews</button>
                </Link>
            </div>
            ))
        )}
    </div>
    </>
    )
}

export default Products