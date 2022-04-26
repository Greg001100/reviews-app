import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
} from "react-bootstrap";

import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewsList";
import firebase from "../fbconfig";
import StarRating from "./StarRating";

const CompanyProfile = (props) => {
  const db = firebase.firestore();
  const [overall, setOverall] = useState(null);
  const [speedRating, setSpeedRating] = useState(null);
  const [cServRating, setCServRating] = useState(null);
  const [priceRating, setPriceRating] = useState(null);
  const [reviewsArray, setReviewsArray] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    const awaitReviews = async () => {
      let tempArray = [];
      const companyRef = await db.collection("companies").doc("ColoCarryCo");
      const companyData = (await companyRef.get()).data();
      const companyReviews = await db
        .collection("companies")
        .doc("ColoCarryCo")
        .collection("reviews")
        .orderBy("timestamp", "desc")
        .get();
      companyReviews.forEach((review) => {
        tempArray.push(review.data());
      });

      setReviewsArray(tempArray);
      setOverall(
        (companyData.overallRating / companyData.totalReviews).toFixed(2)
      );
      setSpeedRating(
        (companyData.speedRating / companyData.totalReviews).toFixed(2)
      );
      setCServRating(
        (companyData.cServRating / companyData.totalReviews).toFixed(2)
      );
      setPriceRating(
        (companyData.priceRating / companyData.totalReviews).toFixed(2)
      );
    };
    awaitReviews();
  }, [updateCount]);

  if (reviewsArray.length) {
    return (
      <Container fluid className="bg--dark-blue vh-100 overflow-auto">
        <Row>
          <Col></Col>
          <Col xs={7} className="bg-white mt-5 text-center rounded">
            <h1>Colorado Carrying Co. Reviews</h1>
            <h1>Colorado Carrying Co. Reviews</h1>
            <div className="d-flex justify-content-center">
              Overall Rating: <StarRating rating={overall} />
            </div>
            <div className="d-flex justify-content-center">
              Price Rating:
              <StarRating rating={priceRating} />
            </div>
            <div className="d-flex justify-content-center">
              Timeliness:
              <StarRating rating={speedRating} />
            </div>
            <div className="d-flex justify-content-center">
              Customer Service:
              <StarRating rating={cServRating} />
            </div>
            <ReviewForm
              className="w-auto"
              db={db}
              updateCount={updateCount}
            //   this is done so that the page auto-updates when a new review is submitted
              setUpdateCount={(count) => setUpdateCount(count)}
            />
            <ReviewList reviewsArray={reviewsArray} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid className="bg--dark-blue vh-100">
      <Row>
        <Col></Col>
        <Col xs={7} className="bg-light mt-5 text-center">
          <h1>Colorado Carrying Co. Reviews</h1>
          <h1>Colorado Carrying Co. Reviews</h1>
          <h1>Colorado Carrying Co. Reviews</h1>
          <ReviewForm
            className="w-auto"
            db={db}
            updateCount={updateCount}
            setUpdateCount={(count) => setUpdateCount(count)}
          />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default CompanyProfile;
