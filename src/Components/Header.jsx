import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar expand="lg" className="header-nav py-3">
    <Container className=''>
      <span  className='nav-logo px-2'>Logo</span>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <div className='text-white'>
        <span className='fa-cover rounded rounded-circle p-2'><FaTwitter /></span>
        <span className='fa-cover rounded rounded-circle p-2'><PiInstagramLogo /></span>
        <span className='fa-cover rounded rounded-circle p-2'><FaLinkedinIn /></span>
        <span className='fa-cover rounded rounded-circle p-2'><FaWhatsapp /></span>
        <span className='fa-cover rounded rounded-circle p-2'><FaFacebookF /></span>
      </div>
      <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>

        <Nav className=" justify-content-md-center align-items-md-center   ">
          <span className='nav-link'>الاكاديمية</span>
          <span className='nav-link'>الاخبار</span>
          <span className='nav-link'>اللاعبين</span>
          <span className='nav-link'>تواصل معنا</span>
          
        </Nav>
      </Navbar.Collapse>

    </Container>
  </Navbar>
  )
}
