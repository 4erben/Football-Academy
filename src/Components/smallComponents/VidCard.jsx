import React from 'react'
import {Card, Col, Row } from 'react-bootstrap'

export default function ({name,imgSrc,price,history,description}) {
  return (
    <Col lg={4} md={6}  className='my-2 px-2 vid-container'>
        <Card className='vids-card pb-4'>
            <div className=' img-container d-flex justify-content-center p-2'>
            <Card.Img variant='top' src={imgSrc} alt='player' className='session-img ' />
            </div>
            
            <Card.Body className='px-0 py-0'>
                <Row>
                    <div>
                        <span className='ms-1 fw-bold'>المدرب: </span>
                        <span>{name}</span>
                    </div>
                    <div>
                        <span className='ms-1 fw-bold'>التاريخ:</span>
                        <span>{history}</span>
                    </div>
                    <div>
                        <span className='ms-1 fw-bold'>الحصة:</span>
                        <span>{description.substring(0,66) +"..."}</span>
                    </div>
                </Row>
                <div className='d-flex justify-content-between px-3 pt-3'>
                    <div>
                        <button className='btn bg-c-red'>تواصل معنا</button>
                    </div>
                    <div> 
                        <span className='fw-bold fs-5'>{price} </span>
                        <small>ريال</small>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </Col>
  )
}
