import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../Components/playerspage-sections/HeroSection'
import DetailsSection from '../Components/playerspage-sections/DetailsSection'
import PlayerNewsSection from '../Components/playerspage-sections/PlayerNewsSection'

export default function PlayersPage() {
  return (
    <Container className='px-0  playerspage' fluid>
        <HeroSection />
        <DetailsSection />
        <PlayerNewsSection />
    </Container>
  )
}
