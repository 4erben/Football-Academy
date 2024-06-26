import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import footballer from "../assets/talent-section/2.png";
export default function TalentSection() {
  return (
    <Container className='talent-section py-5'>
        <Row className='pb-5'>
            <Col lg={6} className='d-flex justify-content-center '>
                <div className="talent-image ">
                </div>
            </Col>
            <Col lg={6}>
            <Row>
                <h3>اكتشف موهبتك الكروية مع اكاديميتنا</h3>
                <h5>ما هي مميزات اكادميتنا؟</h5>
                <span>
                    -تدريب محترف على أعلى مستوى: نقدم تدريبات متقدمة تحت 
                    إشراف مدربين محترفين معتمدين بخبرات واسعة في كرة القدم.
                </span>
                <span>
                -برامج تدريب مخصصة: نصمم برامج تدريب فردية لكل لاعب، بناءً على مستواه الحالي وأهدافه الشخصية، لضمان تحقيق أفضل النتائج.
                </span>
                <span>
                -منشآت حديثة ومتطورة: نتوفر على ملاعب وأدوات تدريب حديثة توفر بيئة مثالية للتطوير الرياضي.
                -فرص للمشاركة في بطولات محلية ودولية: نوفر للاعبين فرصة المشاركة في بطولات ومباريات ودية لتجربة أجواء المنافسات الحقيقية.
                </span>
                <span>
                -تنمية شاملة للمهارات: نهتم بتطوير الجوانب البدنية والفنية والنفسية للاعبين، لضمان إعدادهم بشكل شامل للمستقبل.
                </span>
                <span>
                -متابعة وتقييم مستمر: نقدم تقارير دورية حول تطور اللاعبين، مع تقديم نصائح وتوجيهات لتحسين الأداء باستمرار.
                </span>
            </Row>
            </Col>
        </Row>
    </Container>
  )
}
