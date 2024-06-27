import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeroSection from '../Components/newspage-sections/HeroSection'
import NewsSection from '../Components/newspage-sections/NewsSection'
import AcademySection from '../Components/newspage-sections/AcademySection'
import AmateurSection from '../Components/newspage-sections/AmateurSection'

export default function NewsPage() {
  return (
    <Container fluid className='px-0 newspage'>
        <HeroSection/>
        <NewsSection/>
        <AcademySection />
        <AmateurSection />
    </Container>
  )
}
