import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default function NewsSection() {
  return (
    <Container className='px-0 news-section py-3 mt-5' fluid>
        <Row className='position-relative z-3'>
            <Col lg={7} md={8} sm={8} className="">
            <Row className='px-5'>
                <h2>أكاديميتنا تنظم دورة كرة القدم</h2>
            </Row>
            <Row className='px-5'>
                <p className=''>فرصتك لتطوير مهاراتك والانضمام إلى نجوم المستقبل!</p>
                <p>سجل الآن لتكون جزءًا من رحلتنا لصناعة أبطال المستقبل</p>
            </Row>
            <Row className='px-5'>
                <Form className="d-flex align-items-center">
                    <Row>
                    <Col lg={4} className='px-3 my-2'>
                        <Form.Control placeholder='رقم الجوال' type='text' className='px-2' />
                    </Col>
                    <Col lg={4} className='px-3 my-2'>
                        <Form.Control placeholder='اسم الفريق' type='text' className='px-2'/>
                    </Col>
                    <Col lg={4} className='px-3 my-2'>
                        <Button type='submit' className='bg-c-red border-0 fw-bold mx-1 px-5 my-2'>
                            تسجيل
                        </Button>
                    </Col>
                    </Row>
                </Form>
            </Row>
            
            </Col>
        </Row>
        
    </Container>
  )
}
