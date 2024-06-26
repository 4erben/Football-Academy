import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import {Container , Row , Col, Form, Button} from "react-bootstrap";
import { CiMail } from "react-icons/ci";

export default function Footer() {
    const handleOnSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <Container className="footer-container px-0 d-flex align-items-center" fluid>
    <Row className='py-5 px-5 w-100 text-end justify-content-between px-5 py-4'>
        <Col lg={4}  md={4}  className='px-5 py-4'>
            <h3 className='nav-logo  text-end'>Logo</h3>
            <p>
            تهدف أكادميتنا  إلى تدريب وتطوير مهارات اللاعبين الشباب في لعبة كرة القدم. تعمل الأكاديمية على توفير بيئة مهنية تعليمية تساعد اللاعبين على تنمية قدراتهم البدنية والفنية والنفسية، مما يؤهلهم للوصول إلى مستويات احترافية في اللعبة.
            </p>
        </Col>
        <Col lg={4}  md={4}   className='d-flex flex-column justify-content-around align-items-center px-5 py-4'>
        <h5>عن الموقع</h5>
        <span className='nav-link'>تواصل معنا </span>
        <span className='nav-link'>المدونة</span>
        <span className='nav-link'>عن الاكاديمية</span>
        <span className='nav-link'>سياسة الشروط</span>
        </Col>
        <Col lg={4} md={4}  className='px-5 py-4'>
            <Form className='mb-3' onSubmit={handleOnSubmit}>
                <Form.Group>
                    <h3>سجل البريد الخاص بك:</h3>
                    <div className='d-flex align-items-center input-icon-container'>
                       <button className='input-icon btn' type='submit'><CiMail  /></button> 
                        <Form.Control type='email' placeholder='ادخل البريد'  className='px-5 w-100' required />
                    </div>
                    
                </Form.Group>
            </Form>
            <h5>تابعنا:</h5>
            <div className='d-flex  justify-content-around align-items-center mt-4'>
                <span className='fa-cover rounded rounded-circle p-2 '><FaTwitter /></span>
                <span className='fa-cover rounded rounded-circle p-2 '><PiInstagramLogo /></span>
                <span className='fa-cover rounded rounded-circle p-2 '><FaLinkedinIn /></span>
                <span className='fa-cover rounded rounded-circle p-2 '><FaWhatsapp /></span>
                <span className='fa-cover rounded rounded-circle p-2 '><FaFacebookF /></span>
            </div>
        </Col>
    </Row>
    </Container>
  )
}
