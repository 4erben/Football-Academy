import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
export default function HeroSection() {
  return (
    <Container className='hero-section d-flex justify-content-center align-items-end px-5'>
            <Row className='z-3 h-100 text-center flex-column align-items-center justify-content-end pb-5 '>
               <Col lg={9} >
               <h1>
                رحلة البحث عن المواهب الواعدة في أكاديميتنا
                </h1>
                <p>
                رحلة مستمرة للبحث عن المواهب الواعدة وتطويرها في أكاديميتنا، لنصنع جيلاً جديداً من الأبطال
                </p>
                </Col>
            </Row>
        </Container>
  )
}
