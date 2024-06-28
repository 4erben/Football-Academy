import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import player from "../../assets/newspage/academy-section/1.png"

export default function HeroSection() {
  return (
    <Container className='py-5 hero-section px-0' fluid>
        <img src={player} className='hero-img' alt='player' />
        <span className='hero-title'>ايمن مدور</span>
        <Row className='w-100 px-5 mt-5 z-10 position-relative'>
            <Col lg={6} className=''></Col>
            <Col lg={6} className='px-5 '>
            <h2>اللاعب ايمن مدور</h2>
            <p>
            خريج الاكاديمية و هو لاعب مميز يتمتع بلياقة بدنية ممتازة و مهارات عالية في صناعة الفرص و الاهداف
            </p>
            <button className='rounded-pill btn'>ارسل طلب شراء للاعب</button>
            </Col>
        </Row>
        
    </Container>
  )
}
