import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeroSection from '../Components/players-sections/HeroSection'
import NewsSection from '../Components/players-sections/NewsSection'
import AmateurSection from '../Components/players-sections/AmateurSection'


export default function AmateurPlayers() {
  return (
    <Container fluid className='px-0 newspage'>
        <HeroSection/>
        <NewsSection/>
        <AmateurSection />
    </Container>
  )
}
