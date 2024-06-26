import React from 'react';
import {Container , Row , Col, Button} from "react-bootstrap";
/* import backgroundBall from "../assets/top-section/background-ball.jpeg"; */

export default function HeroSection() {
  return (
    <Container className='hero-section px-0' fluid dir='rtl'>
        <Row className='h-100 backgroundBall'>
            <Row className='hero-row h-100'>
              <Col lg={7} className='d-flex me-5 px-5'>
                <Col lg={12} className='px-5 d-flex align-items-center text-white justify-content-center z-1 flex-column me-5'>
                  <h1>انضم الي اكاديمية الابطال حيث يصنع نجوم كرة القدة</h1>
                  <p>لدينا خيرة المدربين و المحضرين البدنيين اللذين يستطيعون اكتشاف المواهب و اللاعبين الجيدين في مجال كرة القدم</p>
                  <div className=''>
                    <Button className='bg-c-red border-0 fw-bold mx-1 px-2'>سجل عضويتك</Button>
                    <Button variant='white' className='bg-white text-danger fw-bold border-0 mx-1 px-2'>تواصل معنا</Button>
                  </div>
                </Col>
              </Col>
            </Row>
            <Container className='hero-secondary' fluid>
              <Row className='text-black'>
                <Col lg={4} md={4} className='fw-bold px-2  my-2'>
                <div className='bg-white rounded rounded-4 px-3 py-3 mx-2'>
                  <div className='my-3 d-flex justify-content-between'>
                    <span className='mx-2'>حصة تدريبية للاصاغر </span>
                    <span>10.00 بتوقيت مكة المكرمة</span>
                  </div>
                  <div className='my-3'><span>مركز الاكاديمية</span></div>
                  <div className='d-flex mt-3'><Button className='bg-white border-danger text-danger fw-bold mx-auto' >التفاصيل</Button></div>
                  </div>
                </Col>
                <Col lg={4} md={4} className='fw-bold px-2  my-2'>
                <div className='bg-white rounded rounded-4 px-3 py-3 mx-2'>
                  <div className='my-3 d-flex justify-content-between'>
                    <span>حصة تدريبية للاكابر</span>
                    <span>17.00 بتوقيت مكة المكرمة</span>
                  </div>
                  <div className='my-3'><span>مركز الاكاديمية</span></div>
                  <div className='d-flex mt-3'><Button className='bg-white border-danger text-danger fw-bold mx-auto' >التفاصيل</Button></div>
                  </div>
                </Col>
                <Col lg={4} md={4} className='fw-bold px-2 text-nowrap my-2'>
                <div className='bg-white rounded rounded-4 px-3 py-3 mx-2'>
                  <div className='my-3 d-flex justify-content-between'>
                    <span>مباراة ودية اصاغر</span>
                    <span>11.00 بتوقيت مكة المكرمة</span>
                  </div>
                  <div className='my-3'><span>مركز الاكاديمية</span></div>
                  <div className='d-flex mt-3'><Button className='bg-white border-danger text-danger fw-bold mx-auto' >التفاصيل</Button></div>
                  </div>
                </Col>
                
              </Row>
           </Container>
        </Row>
        
    </Container>
  )
}
