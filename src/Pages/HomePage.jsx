import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../Components/homepage-sections/HeroSection'
import NewsSection from '../Components/homepage-sections/NewsSection'
import AboutUs from '../Components/homepage-sections/AboutUs'
import LatestVids from '../Components/homepage-sections/LatestVids'
import TalentSection from '../Components/homepage-sections/TalentSection'
import CoachesSection from '../Components/homepage-sections/CoachesSection'
import SignWithUs from '../Components/homepage-sections/SignWithUs'

export default function HomePage() {
  return (
    <Container className='px-0 homepage py-5' fluid>
        <HeroSection />
        <NewsSection />
        <AboutUs />
        <LatestVids />
        <TalentSection />
        <CoachesSection />
        <SignWithUs />
    </Container>
  )
}
