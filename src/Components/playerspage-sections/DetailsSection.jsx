import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import player from "../../assets/newspage/details-section/1.png";

export default function DetailsSection({name,age,nationality,position,birthDate,joinDate}) {
  
    return (
    <Container className='px-0 details-section' fluid>
        <Row className='h-100 align-items-center z-10 position-relative py-5'>
            <Col lg={6}>
                <div className='hero-img-container me-auto rounded rounded-4'>
                <img src={player} className='hero-img' alt='player' />
                </div>
            </Col>
            <Col lg={6}>
                <h6>
                تم تسجيل أيمن مدور معنا منذ الفئة العمرية تحت 6 سنوات بعد توقيعه من خلال برنامج مركز التطوير الخاص بنا.
                </h6>
                <div className='d-flex justify-content-between w-25 my-3'>
                    <span className='fw-bold'>الاسم:</span>
                    <span className='semibold'>{name}</span>
                </div>
                <div className='d-flex justify-content-between w-25 my-3'>
                    <span className='fw-bold'>العمر:</span>
                    <span className='semibold'>{age}</span>
                </div>
                <div className='d-flex justify-content-between w-25 my-3'>
                    <span className='fw-bold'>الجنسية:</span>
                    <span className='semibold'>{nationality}</span>
                </div>
                <div className='d-flex justify-content-between w-25 my-3'>
                    <span className='fw-bold'>مكان اللعب:</span>
                    <span className='semibold'>{position}</span>
                </div>
                <div className='d-flex justify-content-between w-25 my-3'>
                    <span className='fw-bold'>تاريخ الميلاد</span>
                    <span className='semibold'>{birthDate}</span>
                </div>
                <div className='d-flex justify-content-between w-25 my-3'>
                    <span className='fw-bold'>تاريخ الانضمام:</span>
                    <span className='semibold'>{joinDate}</span>
                </div>
                <p>
                أيمن هو لاعب كرة قدم ناشئ ذو موهبة استثنائية. يتمتع بقدرة رائعة على التحكم بالكرة ورؤية مميزة للملعب. تميزه سرعته ومهاراته الفردية، مما يجعله لاعبًا حاسمًا في المباريات. يعمل بجد واجتهاد في التدريبات ويظهر تفانيًا كبيرًا لتطوير مستواه بشكل مستمر.
                </p>
            </Col>
        
        </Row>
        
        
    </Container>
  )
}
