import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const AboutUs = () => {
  return (
    <Container className="aboutus-section py-5">
      <Row className='px-5 py-4 w-100' >
        <Col lg={7} className='my-3'>
        <div className='d-flex flex-column'>
          <h2 className='mb-2'>من نحن</h2>
          <h3 className='my-3'>اكاديمية الابطال</h3>
          <span className=''>
          تهدف أكادميتنا  إلى تدريب وتطوير مهارات اللاعبين الشباب في لعبة كرة القدم. تعمل الأكاديمية على توفير بيئة مهنية تعليمية تساعد اللاعبين على تنمية قدراتهم البدنية والفنية والنفسية، مما يؤهلهم للوصول إلى مستويات احترافية في اللعبة
          </span>
          <span>
          تشمل برامج الأكاديمية مجموعة متنوعة من الأنشطة التدريبية مثل التمارين البدنية، التدريبات التكتيكية، والتمارين الفنية التي تتناول الجوانب المختلفة للعبة مثل التمرير، التسديد، الدفاع، والهجوم. بالإضافة إلى ذلك، تركز الأكاديمية على تعليم اللاعبين قيمًا رياضية مثل الروح الرياضية، العمل الجماعي، والانضباط.
          تُدار الأكاديمية بواسطة فريق من المدربين المحترفين والخبراء في مجال كرة القدم، الذين يمتلكون خبرة واسعة في التدريب والتطوير. غالبًا ما تكون الأكاديميات مرتبطة بأندية كرة قدم كبيرة، مما يتيح للاعبين الشباب الفرصة للانضمام إلى فرق الأندية والاستفادة من البنية التحتية الاحترافية المتاحة.
          </span>
        </div>
        </Col>
        <Col lg={5} className='my-3'>
        <div className='aboutus-images '>
        <div className="aboutus-image aboutus-1"></div>
          <div className="aboutus-image aboutus-2"></div>
          <div className="aboutus-image aboutus-3"></div>
          <div className="aboutus-image aboutus-4"></div>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;