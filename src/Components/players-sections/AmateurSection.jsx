import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PlayerCard from '../smallComponents/PlayerCard';
import data from "../../data/data.jsx";

export default function AmateurSection() {
    const {players} = data;
    const amateurPlayers = players.filter((p)=>{
        return p.category === "محترف"
    });
  return (
    <Container className='py-5'>
        <Row className='my-3 pt-5'>
            <h1 className='mb-3'>لاعبي الاكاديمية المحترفين</h1>
            <small>
                اللاعبين هم خريجي الاكاديمية و هم الان متاحين للبيع         
            </small>
        </Row>
        <Row>
            {amateurPlayers.map((p,i)=>{
                return(
                    <PlayerCard 
                    key={i}
                    name={p.name}
                    imgSrc={p.imgSrc}
                    isYoung={p.isYoung}
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
