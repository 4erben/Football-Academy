import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../Components/details-sections/HeroSection'
import DetailsSection from '../Components/details-sections/DetailsSection'
import PlayerNewsSection from '../Components/details-sections/PlayerNewsSection'
import { useLocation } from 'react-router-dom'

export default function PlayersPage() {
  const location = useLocation();
  return (
    <Container className='px-0  playerspage' fluid>
        <HeroSection player= {location.state?.player}/>
        <DetailsSection player= {location.state?.player} />
        <PlayerNewsSection player= {location.state?.player} />
    </Container>
  )
}
