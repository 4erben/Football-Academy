import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import herobg from "../../assets/academypage/hero-section/1.jpeg";
export default function HeroSection() {
  return (
    <Container fluid className='hero-section d-flex justify-content-center align-items-end ' style={{backgroundImage:`url(${herobg})`}}>
            <Row className='z-3  w-100 align-items-center justify-content-center pb-5 px-5 '>
               <Col lg={8} className='my-3'>
               <h1>الحصة التدريبية الثالثة لهذا الاسبوع </h1>
                <p>حصة تحضيرية لمباراة ودية يوم 12/06/2024 </p>
                </Col>
                <Col lg={4} className=' d-flex justify-content-lg-end my-3'>
                    <button className='btn'>عرض التفاصيل</button>
                </Col>
            </Row>
        </Container>
  )
}
