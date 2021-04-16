import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table, ButtonGroup, Button } from "react-bootstrap";
import { Star, StarFill, StarHalf, CaretDownFill, CaretRightFill, } from "react-bootstrap-icons";
import ReviewForm from './ReviewForm';
import firebase from '../fbconfig';
import StarRating from './StarRating';

const CompanyProfile = (props) => {
    const db= firebase.firestore();

    return (
        <Container fluid className='bg--dark-blue vh-100'>
            <Row>
                <Col></Col>
                <Col xs={7} className='bg-light mt-5 text-center'>
                    <h1>Colorado Carrying Co. Reviews</h1>
                    <StarRating rating={3.6} />
                    <ReviewForm db={db} />
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )

}

export default CompanyProfile;
