import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="lg" className="header-nav fixed-top">
    <Container className='text-nowrap' >
        <Row className=' w-100 flex-row justify-content-between align-items-center'>
            <Col xs={2} md={2} sm={2} lg={2}><span  className='nav-logo px-2'>Logo</span></Col>
            <Col xs={12} md={8} sm={8} lg={8} className='text-white  mt-2  justify-content-around d-none d-sm-flex '>
                <span className='fa-cover rounded rounded-circle p-2'><FaTwitter /></span>
                <span className='fa-cover rounded rounded-circle p-2'><PiInstagramLogo /></span>
                <span className='fa-cover rounded rounded-circle p-2'><FaLinkedinIn /></span>
                <span className='fa-cover rounded rounded-circle p-2'><FaWhatsapp /></span>
                <span className='fa-cover rounded rounded-circle p-2'><FaFacebookF /></span>
            </Col>
            <Col xs={2} md={2} sm={2} lg={2}><Navbar.Toggle aria-controls="basic-navbar-nav"  className='toggler'/></Col>
      </Row>
      <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0 my-3'>
        <Nav className=" justify-content-md-center align-items-md-center   ">
            <div className='d-flex justify-content-around d-block d-sm-none mb-3'>
                <span className='fa-cover rounded rounded-circle p-2'><FaTwitter /></span>
                <span className='fa-cover rounded rounded-circle p-2'><PiInstagramLogo /></span>
                <span className='fa-cover rounded rounded-circle p-2'><FaLinkedinIn /></span>
                <span className='fa-cover rounded rounded-circle p-2'><FaWhatsapp /></span>
                <span className='fa-cover rounded rounded-circle p-2'><FaFacebookF /></span>
            </div>
          <Link to="/" className='nav-link'>الاكاديمية</Link>
          <Link to="/news" className='nav-link'>الاخبار</Link>
          <Link to="/players" className='nav-link'>اللاعبين</Link>
          <Link to="/contact" className='nav-link'>تواصل معنا</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
