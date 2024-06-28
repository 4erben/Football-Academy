import React from 'react'
import {Card, Col, Row } from 'react-bootstrap'

export default function ({name,imgSrc,category,age,description}) {
  return (
    <Col lg={3} md={6} className='my-2'>
        <Card className='player-card'>
            <div className=' img-container d-flex justify-content-center p-2'>
            <Card.Img variant='top' src={imgSrc} alt='player' className='player-img ' />
            </div>
            
            <Card.Body>
                <Row className='pb-3'>
                    <Col className="col-6">
                        <button className={`${category === "ناشئ"? "btn-c-red": "btn-c-grey"} btn   rounded-pill`}>ناشي </button>
                    </Col>
                    <Col className="col-6">
                        <button className={`${category !== "ناشئ"? " btn-c-red": "btn-c-grey"} btn  rounded-pill`}>محترف</button>
                    </Col>
                </Row>
                <Row>
                    <div>
                        <span className='ms-1'>الاسم: </span>
                        <span>{name}</span>
                    </div>
                    <div>
                        <span className='ms-1'>العمر:</span>
                        <span>{age}</span>
                    </div>
                    <div>
                        <span className='ms-1'>الوصف: </span>
                        <span>{description.substring(0,66) +"..."}</span>
                    </div>
                </Row>
            </Card.Body>
        </Card>
    </Col>
  )
}
