import React from 'react';
import {Container , Row , Col} from "react-bootstrap";

export default function NewsSection() {
  return (
    <Container className="news-section py-5">
        <Row className='text-white'>
            <h3>
                اخر الاخبار
            </h3>
            <span className='mt-4'>اخر اخبار الاكاديمية</span>
        </Row>

        <Row className='w-100 pb-4'>
            <Col lg={6} className=''>
                <div className='news news-1'>
                <div className='mt-auto px-5 pb-2'>
                        <h5>بطولة الاكاديمية الودية:</h5>
                        <small className='fs-7'>
                            قامت الأكاديمية بطولة ودية شارك فيها فرق من مختلف الفئات العمرية.
                            شهدت البطولة تنافسًا قويًا وأظهرت العديد من المواهب الواعدة.
                            وحققت فرق الأكاديمية نتائج مميزة وأداءً مشرفًا. 
                        </small>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='news news-2'>
                    <div className='mt-auto px-5 pb-2'>
                        <h5>بطولة الاكاديمية الودية:</h5>
                        <small className='fs-7'>
                            قامت الأكاديمية بطولة ودية شارك فيها فرق من مختلف الفئات العمرية.
                            شهدت البطولة تنافسًا قويًا وأظهرت العديد من المواهب الواعدة.
                            وحققت فرق الأكاديمية نتائج مميزة وأداءً مشرفًا. 
                        </small>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='w-100 pb-5'>
            <Col lg={4} className=''>
                <div className='news news-3'>
                <div className='mt-auto px-5 pb-2'>
                        <h5>معسكر تدريبي صيفي:</h5>
                        <small className='fs-7'>
                                ظمت الأكاديمية معسكرًا تدريبيًا صيفيًا استمر لمدة أسبوعين، حيث خضع اللاعبون لبرامج تدريب مكثفة تحت إشراف نخبة من المدربين.
                                شمل المعسكر تدريبات فنية وتكتيكية، بالإضافة إلى جلسات توعوية حول التغذية واللياقة البدنية.
                        </small>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className='news news-4'>
                <div className='mt-auto px-5 pb-2'>
                        <h5>بطولة الاكاديمية الودية:</h5>
                        <small className='fs-7'>
                            قامت الأكاديمية بطولة ودية شارك فيها فرق من مختلف الفئات العمرية.
                            شهدت البطولة تنافسًا قويًا وأظهرت العديد من المواهب الواعدة.
                            وحققت فرق الأكاديمية نتائج مميزة وأداءً مشرفًا. 
                        </small>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className='news news-5'>
                <div className='mt-auto px-5 pb-2'>
                        <h5>بطولة الاكاديمية الودية:</h5>
                        <small className='fs-7'>
                            قامت الأكاديمية بطولة ودية شارك فيها فرق من مختلف الفئات العمرية.
                            شهدت البطولة تنافسًا قويًا وأظهرت العديد من المواهب الواعدة.
                            وحققت فرق الأكاديمية نتائج مميزة وأداءً مشرفًا. 
                        </small>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
