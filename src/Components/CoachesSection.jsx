import React from 'react';
import {Container , Row , Col} from "react-bootstrap";
import coach1 from "../assets/coaches-section/2.jpeg";
import coach2 from "../assets/coaches-section/3.jpeg";
import coach3 from "../assets/coaches-section/4.jpeg";

export default function CoachesSection() {
  return (
    <Container className='px-0 coaches-section py-5' fluid>
      <Row className='position-relative z-3 py-5 px-5'>
        <Col lg={4}>
        <h1>مدربي الأكاديمية </h1>
        <p>لدينا خيرة المدربين و المحضرين البدنيين اللذين يستطيعون اكتشاف المواهب و اللاعبين 
        الجيدين في مجال كرة القدم</p>
        </Col>
      </Row>
      <Row className='position-relative z-3'>
        <Col lg={4} className='coaches-cards px-3 my-3'>
          <div className='co-card'>
            <img src={coach1} className=' co-avatar rounded rounded-circle'  alt='coach-1'/>
            <h5>محمد علي </h5>
            <span className='fw-bold mb-1'>مدرب رئيسي</span>
            <small>
            محمد علي هو مدرب كرة قدم محترف ذو خبرة واسعة. بدأ كلاعب ثم انتقل للتدريب، حيث حصل على شهادات معتمدة وشارك في دورات متقدمة. يشتهر بأسلوبه الشامل في تطوير مهارات اللاعبين وتحقيق نتائج إيجابية. محمد علي معروف بقدرته على بناء فرق متماسكة وروح الفريق العالية .
            </small>
          </div>
        </Col>
        <Col lg={4} className='coaches-cards px-3 my-3'>
        <div className='co-card'>
            <img src={coach2} className=' co-avatar rounded rounded-circle'  alt='coach-1'/>
            <h5>معاذ الدوسري</h5>
            <span className='fw-bold mb-1'>مدرب حراس</span>
            <small>
            محمد علي هو مدرب كرة قدم محترف ذو خبرة واسعة. بدأ كلاعب ثم انتقل للتدريب، حيث حصل على شهادات معتمدة وشارك في دورات متقدمة. يشتهر بأسلوبه الشامل في تطوير مهارات اللاعبين وتحقيق نتائج إيجابية. محمد علي معروف بقدرته على بناء فرق متماسكة وروح الفريق العالية .
            </small>
          </div>
        </Col>
        <Col lg={4} className='coaches-cards px-3 my-3'>
        <div className='co-card'>
            <img src={coach3} className=' co-avatar rounded rounded-circle'  alt='coach-1'/>
            <h5>عبدالعزيز</h5>
            <span className='fw-bold mb-1'>مدرب فئة اقل من 18 سنة</span>
            <small>محمد علي هو مدرب كرة قدم محترف ذو خبرة واسعة. بدأ كلاعب ثم انتقل للتدريب، حيث حصل على شهادات معتمدة وشارك في دورات متقدمة. يشتهر بأسلوبه الشامل في تطوير مهارات اللاعبين وتحقيق نتائج إيجابية. محمد علي معروف بقدرته على بناء فرق متماسكة وروح الفريق العالية .</small>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
