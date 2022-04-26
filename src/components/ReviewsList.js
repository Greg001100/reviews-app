import React from "react";
import StarRating from "./StarRating";
import { Card, Row } from "react-bootstrap";

const ReviewsList = (props) => {
  const reviewsArray = props.reviewsArray;

  return (
    <div>
      {reviewsArray.map((review, i) => {
        let date = review.timestamp.toDate().toDateString();
        return (
          <Card className="my-2">
            <Card.Header as="h5" className="d-flex justify-content-between">
              <span>{review.name} says:</span>
              <span>{date}</span>
            </Card.Header>
            <Card.Body>
              <Row>
                <Card.Text className="quote my-2">"{review.review}"</Card.Text>
              </Row>
              <Row className="d-flex flex-column small-text mt-3">
                <div className="d-flex">
                  Overall Rating: <StarRating rating={review.overall} />
                </div>
                <div className="d-flex">
                  Price Rating:
                  <StarRating rating={review.priceRating} />
                </div>
                <div className="d-flex">
                  Timeliness:
                  <StarRating rating={review.speedRating} />
                </div>
                <div className="d-flex">
                  Customer Service:
                  <StarRating rating={review.cServRating} />
                </div>
              </Row>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ReviewsList;
