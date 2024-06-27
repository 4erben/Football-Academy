import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PlayerCard from '../smallComponents/PlayerCard';
import {amateurPlayers} from "../../data/data.jsx";

export default function AmateurSection() {

  return (
    <Container className='py-5'>
        <Row className='my-3 pt-5'>
            <h1 className='mb-3'>لاعبي الاكاديمية المحترفين</h1>
            <small>
                اللاعبين هم خريجي الاكاديمية و هم الان متاحين للبيع         
            </small>
        </Row>
        <Row>
            {amateurPlayers?.slice(0,4).map((p,i)=>{
                return(
                    <PlayerCard 
                    key={i}
                    name={p.name}
                    imgSrc={p.imgSrc}
                    isYoung={p.isYoung}
                    age={p.age}
                    description={p.description}
                    />
                )
            })}
            
        </Row>
        
    </Container>
  )
}
