import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import players from "../../data/data.jsx";
import VidCard from '../smallComponents/VidCard.jsx';
import data from "../../data/data.jsx";

export default function VidsSection() {
    const {sessions} = data;
  return (
    <Container className='py-5 vids-section' fluid>
        <Row className='my-3 pt-5'>
            <h1 className='mb-3'>الحصص التدريبية لشهر جوان</h1>
            <small>فرصة من ذهب لحظور حصص تدريبية جدا قيمة مع خيرة المدربين</small>
        </Row>
        <div className='vids-row'>
           {sessions?.map((p,i)=>{
                return(
                    <VidCard 
                    key={i}
                    name={p.name}
                    imgSrc={p.imgSrc}
                    price={p.price}
                    description={p.description}
                    history = {p.history}
                    />
                )
            })} 
        </div>
        
    </Container>
  )
}
