import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PlayerCard from '../smallComponents/PlayerCard';
import data from "../../data/data.jsx";

export default function AcademySection() {
    const {players} = data;
    const youndPlayers = players.filter((p)=>{
        return p.category === "ناشئ"
    });
  return (
    <Container className='py-5'>
        <Row className='my-3 pt-5'>
            <h1 className='mb-3'>لاعبي الاكاديمية الاصاغر -18</h1>
            <small>تستطيع تصفح طرق واساليب الاكاديمية في الحصص التدريبية</small>
        </Row>
        <Row>
            {youndPlayers.map((p,i)=>{
                return(
                    <PlayerCard 
                    key={i}
                    name={p.name}
                    imgSrc={p.imgSrc}
                    category={p.category}
                    age={p.age}
                    description={p.description}
                    player = {p}
                    />
                )
            })}
            
        </Row>
        
    </Container>
  )
}
