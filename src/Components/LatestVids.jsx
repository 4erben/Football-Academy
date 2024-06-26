import React from 'react';
import {Container ,Row , Col} from "react-bootstrap";
import VideoComponent from './smallComponents/VideoComponent';

export default function LatestVids() {
  return (
    <Container className='py-5 latestvids-section'>
        <Row className='px-5 w-100'>
            <h2>شاهد مقاطع من الحصص التدريبية</h2>
            <small>تستطيع تصفح طرق و اساليب الاكاديمية في الحصص التدريبية</small>
        </Row>
        <Row className=' py-5'>
            <Col lg={4} className=''>
                <Row >
                    <Col lg={12} className='mb-2'>
                    <div className='latest-image latest-1'>
                        <div className='d-flex justify-content-between align-items-center mb-1'>
                            <span className='ps-3 py-1 pe-2 c-border'>
                                <VideoComponent />
                            </span>
                            <small className='px-4'>
                                الحصة التدريبية الصباحية لفئة الاكابر  لليوم الحالي بحضور ازيد من 34 لاعب 
                            </small>
                        </div>
                    </div>
                    </Col>
                    <Col lg={12} className='my-2'>
                    <div className='latest-image latest-2'>
                        <div className='d-flex justify-content-between align-items-center mb-1'>
                            <span className='ps-3 py-1 pe-2 c-border'>
                                <VideoComponent />
                            </span>
                            <small className='px-4'>
                                الحصة التدريبية الصباحية لفئة الاكابر  لليوم الحالي بحضور ازيد من 34 لاعب 
                            </small>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Col>
            <Col lg={8} className=''>
                <div className="latest-image latest-3">
                    <div className='d-flex justify-content-between align-items-center mb-1'>
                        <span className='ps-3 py-1 pe-2 c-border'>
                            <VideoComponent />
                        </span>
                        <small className='px-4'>
                            الحصة التدريبية الصباحية لفئة الاصاغر  لليوم الحالي بقيادة المدربمعاذ الدوسري بحضور ازيد من 34 لاعب 
                        </small>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
