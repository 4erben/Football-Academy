import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PlayerCard from '../smallComponents/PlayerCard';
import players from "../../data/data.jsx";

export default function AcademySection() {
    const youndPlayers = players.filter((p)=>{
        return p.category === "ناشئ"
    });
    console.log(youndPlayers);
  return (
    <Container className='py-5'>
        <Row className='my-3 pt-5'>
            <h1 className='mb-3'>لاعبي الاكاديمية الاصاغر -18</h1>
            <small>تستطيع تصفح طرق واساليب الاكاديمية في الحصص التدريبية</small>
        </Row>
        <Row>
            {youndPlayers?.slice(0,4).map((p,i)=>{
                return(
                    <PlayerCard 
                    key={i}
                    name={p.name}
                    imgSrc={p.imgSrc}
                    category={p.category}
                    age={p.age}
                    description={p.description}
                    />
                )
            })}
            
        </Row>
        
    </Container>
  )
}
