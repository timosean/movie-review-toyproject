import { useEffect, useState } from "react";
import axios from "axios";
import { CgUserlane } from "react-icons/cg";
import { Rating } from "react-simple-star-rating";

const ReviewList = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        let res = await axios.get("http://localhost:8080/review/" + movieId);
        setReviews(res.data);
      } catch (e) {
        setError(e);
      }
    };

    fetchReviews();
  }, []);

  if (error) return <div>ReviewList.js 에러</div>;

  return (
    <div className="container">
      {reviews ? (
        reviews.map((review) => (
          <div key={review.userid} className="review-item">
            <div className="icon-area">
              <CgUserlane size={40} color="#342568" />
            </div>
            <div className="review-area">
              <Rating
                readonly={true}
                allowHalfIcon={true}
                initialValue={review.score / 2}
                fillColor="#342568"
              />
              {review.text}
            </div>
          </div>
        ))
      ) : (
        <div className="no-review">아직 등록된 리뷰가 없습니다.</div>
      )}

      <style jsx>{`
        .container {
          width: 100%;
          margin-top: 100px;
        }
        .no-review {
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 25px;
          background: #f8f8fa;
        }
        .review-item {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
        }
        .icon-area {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .review-area {
          margin-left: 30px;
          width: 100%;
          padding: 30px;
          background: #f8f8fa;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default ReviewList;
