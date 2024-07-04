import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeroSection from '../Components/players-sections/HeroSection'
import NewsSection from '../Components/players-sections/NewsSection'
import AcademySection from '../Components/players-sections/AcademySection'


export default function YoungPlayers() {
  return (
    <Container fluid className='px-0 newspage'>
        <HeroSection/>
        <NewsSection/>
        <AcademySection />
    </Container>
  )
}
