import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../Components/academypage-sections/HeroSection'
import VidsSection from '../Components/academypage-sections/VidsSection'
import NewsSection from '../Components/academypage-sections/NewsSection'

export default function AcademyPage() {
  return (
    <Container fluid className='px-0 academypage'>
        <HeroSection />
        <VidsSection />
        <NewsSection />
    </Container>
  )
}
