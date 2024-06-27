import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default function NewsSection() {
  return (
    <Container className='px-0 news-section py-5 mt-5' fluid>
        <Row className='position-relative z-3'>
            <Col className="col-7">
            
            
            <Row>
                <h2>النشرة الاخبارية</h2>
            </Row>
            <Row>
                <Form className="d-flex align-items-center">
                    <Col lg={4} className='px-3'>
                        <Form.Control placeholder='عنوان البريد الاكتروني*' type='email' className='px-2' />
                    </Col>
                    <Col lg={4} className='px-3'>
                        <Form.Control placeholder='اخبارالاكاديمية*' type='text' className='px-2'/>
                    </Col>
                    <Col lg={4} className='px-3'>
                        <Button type='submit' className='bg-c-red border-0 fw-bold mx-1 px-5 my-2'>
                            اشتراك
                        </Button>
                    </Col>
                </Form>
            </Row>
            <Row className='px-5'>
                <p>
                نقوم بمعالجة بياناتك وفقاً لسياسة حماية البيانات الخاصة بنا. يمكن أن تكون رسائلنا الإخبارية مصممة خصيصاً لك شخصياً. باشتراكك في النشرة الإخبارية، فإنك توافق على أنه يجوز لنا معالجة ودمج تفاعلاتك مع النشرات الإخبارية
                </p>
            </Row>
            </Col>
        </Row>
        
    </Container>
  )
}
