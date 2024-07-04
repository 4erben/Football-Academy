import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import news1 from "../../assets/playerspage/playersnews-section/1.jpeg";
import news2 from "../../assets/playerspage/playersnews-section/2.jpeg";
import news3 from "../../assets/playerspage/playersnews-section/3.jpeg";
import news4 from "../../assets/playerspage/playersnews-section/4.jpeg";
import news5 from "../../assets/playerspage/playersnews-section/5.png";
import VideoComponent from '../smallComponents/VideoComponent';

export default function PlayerNewsSection() {
  return (
    <Container className='px-0 py-5 news-section'>
        <h3>اخبار اللاعب & فيديوهات</h3>
        <small>تستطيع تصفح طرق و أساليب الاكاديمية في الحصص التدريبية  </small>
        <Row className='mt-2 py-4 '>
            <Col lg={6} md={6}>
                <div>
                <div className='news ' style={{backgroundImage:`url(${news1})`}}>
                <div className='mt-auto px-5 pb-2'>
                        <h5>تألق في بطولة الأكاديمية الودية:</h5>
                        <small className='fs-7'>
                            شارك أحمد في بطولة الأكاديمية الودية وقدم أداءً رائعًا، حيث سجل عدة أهداف حاسمة وساهم بشكل كبير في فوز فريقه بالبطولة. تم اختياره كأفضل لاعب في البطولة نظير أدائه المميز. 
                        </small>
                    </div>
                </div>
                </div>
            </Col>
            <Col lg={6} md={6}>
                <div>
                <div className='news ' style={{backgroundImage:`url(${news2})`}}>
                <div className='mt-auto px-5 pb-2'>
                        <h5>تألق في بطولة الأكاديمية الودية:</h5>
                        <small className='fs-7'>
                            شارك أحمد في بطولة الأكاديمية الودية وقدم أداءً رائعًا، حيث سجل عدة أهداف حاسمة وساهم بشكل كبير في فوز فريقه بالبطولة. تم اختياره كأفضل لاعب في البطولة نظير أدائه المميز.
                        </small>
                    </div>
                </div>
                </div>
            </Col>
        </Row>
        <Row className='mt-2 py-4'>
            <Col lg={4} md={4} className='my-2'>

            <div className='latest-image' style={{backgroundImage:`url(${news3})`}}>
                        <div className='d-flex justify-content-between align-items-center mb-1'>
                            <span className='ps-3 py-1 pe-2 c-border'>
                                <VideoComponent />
                            </span>
                            <small className='px-4'>متابعة اللاعب من التدريبات </small>
                        </div>
            </div>

            </Col>
            <Col lg={4} md={4} className='my-2'>
            <div className='latest-image' style={{backgroundImage:`url(${news4})`}}>
                        <div className='d-flex justify-content-between align-items-center mb-1'>
                            <span className='ps-3 py-1 pe-2 c-border'>
                                <VideoComponent />
                            </span>
                            <small className='px-4'>بعض مهارات اللاعب في المباريات الرسمية</small>
                        </div>
            </div>
            </Col>
            <Col lg={4} md={4} className='my-2'>
                <div className='latest-image' style={{backgroundImage:`url(${news5})`}}>
                    <div className='d-flex justify-content-between align-items-center mb-1'>
                        <span className='ps-3 py-1 pe-2 c-border'>
                            <VideoComponent />
                        </span>
                        <small className='px-4'>استضافة للاعب حصريا</small>
                    </div>
            </div>
            </Col>
        </Row>
    </Container>
  )
}
