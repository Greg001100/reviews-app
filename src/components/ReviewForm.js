import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Table,
  ButtonGroup,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import {
  Star,
  StarFill,
  StarHalf,
  CaretDownFill,
  CaretRightFill,
} from "react-bootstrap-icons";

const ReviewForm = (props) => {
  const db = props.db;
  const [show, setShow] = useState(false);
  const [overall, setOverall] = useState(null);
  const [speedRating, setSpeedRating]= useState(null);
  const [cServRating, setCServRating]= useState(null);
  const [priceRating, setPriceRating]= useState(null);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updateName = (e) => setName(e.target.value);
  const updateReview = (e) => setReview(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //in the future, this can be changed to work with multiple companies. Current company can be imported from whatever state mgmt is being used.
    const companyRef= await db.collection('companies').doc('ColoCarryCo');
    const companyData= (await companyRef.get()).data();

    const updateCompany = await companyRef.update({
        totalReviews: companyData.totalReviews+1,
        overallRating: companyData.overallRating+overall,
        speedRating: companyData.speedRating+speedRating,
        cServRating: companyData.cServRating+cServRating,
        priceRating: companyData.priceRating+priceRating
    })

    const addReview = await companyRef.collection("reviews").add({
        name: name,
        overall: overall,
        speedRating: speedRating,
        cServRating: cServRating,
        priceRating: priceRating,
        review: review,
    })


    setOverall(null);
    setSpeedRating(null);
    setCServRating(null);
    setPriceRating(null);
    setName("");
    setReview("");
    handleClose();
  };

  return (
    <>
      <Button className="my-3 borange noBorder" block size="sm" onClick={handleShow}>
        Write a Review
      </Button>

      <Modal show={show} centered onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Write a Review!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group required>
              <Form.Label className='mr-1'>Overall Rating: </Form.Label>
              <Form.Check
                inline
                label="1"
                type="radio"
                onClick={() => setOverall(1)}
              />
              <Form.Check
                inline
                label="2"
                type="radio"
                onClick={() => setOverall(2)}
              />
              <Form.Check
                inline
                label="3"
                type="radio"
                onClick={() => setOverall(3)}
              />
              <Form.Check
                inline
                label="4"
                type="radio"
                onClick={() => setOverall(4)}
              />
              <Form.Check
                inline
                label="5"
                type="radio"
                onClick={() => setOverall(5)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className='mr-1'>Customer Service Rating: </Form.Label>
              <Form.Check
                inline
                label="1"
                type="radio"
                onClick={() => setCServRating(1)}
              />
              <Form.Check
                inline
                label="2"
                type="radio"
                onClick={() => setCServRating(2)}
              />
              <Form.Check
                inline
                label="3"
                type="radio"
                onClick={() => setCServRating(3)}
              />
              <Form.Check
                inline
                label="4"
                type="radio"
                onClick={() => setCServRating(4)}
              />
              <Form.Check
                inline
                label="5"
                type="radio"
                onClick={() => setCServRating(5)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className='mr-1'>Price Rating: </Form.Label>
              <Form.Check
                inline
                label="1"
                type="radio"
                onClick={() => setPriceRating(1)}
              />
              <Form.Check
                inline
                label="2"
                type="radio"
                onClick={() => setPriceRating(2)}
              />
              <Form.Check
                inline
                label="3"
                type="radio"
                onClick={() => setPriceRating(3)}
              />
              <Form.Check
                inline
                label="4"
                type="radio"
                onClick={() => setPriceRating(4)}
              />
              <Form.Check
                inline
                label="5"
                type="radio"
                onClick={() => setPriceRating(5)}
              />
            </Form.Group>
            <Form.Group >
              <Form.Label className='mr-1'>Timeliness Rating: </Form.Label>
              <Form.Check
                inline
                label="1"
                type="radio"
                onClick={() => setSpeedRating(1)}
              />
              <Form.Check
                inline
                label="2"
                type="radio"
                onClick={() => setSpeedRating(2)}
              />
              <Form.Check
                inline
                label="3"
                type="radio"
                onClick={() => setSpeedRating(3)}
              />
              <Form.Check
                inline
                label="4"
                type="radio"
                onClick={() => setSpeedRating(4)}
              />
              <Form.Check
                inline
                label="5"
                type="radio"
                onClick={() => setSpeedRating(5)}
              />
            </Form.Group>

            <Form.Control
              type="text"
              placeholder="Enter your name"
              onChange={updateName}
              required
            />

            <Form.Control
              as='textarea'
              placeholder="How was the service?"
              onChange={updateReview}
              rows={5}
              required
            />
            <Button variant="secondary" className='noBorder' onClick={handleClose}>
              Cancel
            </Button>
            {/* Some light validation to make sure the ratings,  name, and review are filled out */}
            {overall && cServRating && priceRating && speedRating?
                <Button className='borange noBorder' type="submit">
                Submit
                </Button>
                : <Button className='borange' variant='warning' type="submit" disabled>
                Submit
                </Button>
            }
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewForm;
