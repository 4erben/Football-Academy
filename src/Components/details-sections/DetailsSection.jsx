import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import player from "../../assets/newspage/details-section/1.png";

export default function DetailsSection({player}) {
  
    return (
    <Container className='px-0 details-section' fluid>
        <Row className='h-100 align-items-center z-10 position-relative py-5'>
            <Col lg={6}>
                <div className='hero-img-container me-auto rounded rounded-4'>
                <img src={player.imgSrc} className='hero-img' alt='player' />
                </div>
            </Col>
            <Col lg={6}>
                <h6>
                تم تسجيل أيمن مدور معنا منذ الفئة العمرية تحت 6 سنوات بعد توقيعه من خلال برنامج مركز التطوير الخاص بنا.
                </h6>
                <div className='d-flex justify-content-between w-50 my-3'>
                    <span className='fw-bold'>الاسم:</span>
                    <span className='semibold'>{player.name}</span>
                </div>
                <div className='d-flex justify-content-between w-50 my-3'>
                    <span className='fw-bold'>العمر:</span>
                    <span className='semibold'>{player.age}</span>
                </div>
                <div className='d-flex justify-content-between w-50 my-3'>
                    <span className='fw-bold'>الجنسية:</span>
                    <span className='semibold'>{player.nationality}</span>
                </div>
                <div className='d-flex justify-content-between w-50 my-3'>
                    <span className='fw-bold'>مكان اللعب:</span>
                    <span className='semibold'>{player.position}</span>
                </div>
                <div className='d-flex justify-content-between w-50 my-3'>
                    <span className='fw-bold'>تاريخ الميلاد</span>
                    <span className='semibold'>{player.birthDate}</span>
                </div>
                <div className='d-flex justify-content-between w-50 my-3'>
                    <span className='fw-bold'>تاريخ الانضمام:</span>
                    <span className='semibold'>{player.joinDate}</span>
                </div>
                <p>{player.description} </p>
            </Col>
        
        </Row>
        
        
    </Container>
  )
}
