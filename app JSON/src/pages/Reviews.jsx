import { useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Loading from "../modules/Loading";

const Reviews = () => {
  const { productId } = useParams();
  const [reviewlist, setReviewlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);

  const fetchReview = async () => {
    try {
      const resp = await fetch("http://localhost:3000/reviews");
      if (!resp.ok) {
        throw new Error("Failed to fetch reviews");
      }
      const json = await resp.json();
    
      const reviewsArray = json.filter(review => {
        return review.productId === Number(productId);
      });
  
      console.log('Filtered Reviews:', reviewsArray);
  
      setReviewlist(reviewsArray);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setLoading(false);
    }
  };
  
  
  
  

  const fetchItemList = async () => {
    const resp = await fetch("http://localhost:3000/products/");
    const json = await resp.json();
    setItemList(json);
  };

  useEffect(() => {
    fetchReview();
    fetchItemList();
  }, []);

  const product = itemList.find((item) => item.id === productId);

  return (
    <>
      <div className="display">
        <h1>{` ${product ? product.title : "Unknown Product"} Reviews:`}</h1>
      </div>
      <div className="reviews">
        {loading ? (
          <Loading />
        ) : (
          reviewlist.map((review) => (
            <div className="review" key={review.id}>
              <div className="name">
                <p>{review.name}</p>
                <IoIosCheckmarkCircle />
              </div>
              <span className="rating">
                <p>Rating:</p>
                <div className="stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <IoMdStar
                      key={index}
                      className={
                        index < review.rating ? "ratingmagenta" : "ratinggray"
                      }
                    />
                  ))}
                </div>
              </span>
              <h2>{review.description}</h2>
              <p>{review.comment}</p>
            </div>
          ))
        )}
      </div>
      <div className="buttoncontainer">
        <Link to="/">
          <button className="goback">Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default Reviews;
