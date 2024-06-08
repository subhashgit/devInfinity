import React,{useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import logo from '../assets/img/logo.png';
import CookieConsent from "react-cookie-consent";
import { Link, withRouter  } from "react-router-dom";

function Footer(props) {

    return (

   
        <div className='footer'>
         <Container>
            <Row>
                <Col md={3}>
                <Link to="/"><img src={logo} alt="Logo"/></Link>
                {/**   <p className='gradient-text my-3'>Lorem ipsum dolor sit amet consectetur adipiscing elit eu</p>
                  <div className='d-flex social-icons mt-3 align-items-center'>
                      <a href='/'> <img src={require('./../assets/img/instagram.png')} alt="Instagram"/></a>
                      <a href='/'> <img src={require('./../assets/img/linkedin.png')} alt="Linkdin"/></a>
                      <a href='/'> <img src={require('./../assets/img/twiter.png')} alt="Twitter"/></a>
                      <a href='/'> <img src={require('./../assets/img/facebook.png')} alt="Facebook"/></a>
                  </div>
                  */}
                </Col>
                <Col md={5}>
                  <h5><a href="/#services">Services</a></h5>
                  <ul>
                    <li><a href="/#services">Mobile App / Web Development</a></li>
                    <li><a href="/#services">SEO / Facebook & Google Ads and LinkedIn Marketing</a></li>
                    <li><a href="/#services">Content Creation & Social Media Branding</a></li>
                    <li><a href="/#services">3D Animation</a></li>
                    <li><a href="/#services">Enterprise Resource Planning</a></li>
                    <li><a href="/#services">Business Consulting</a></li>

                  </ul>
                </Col>
                <Col md={2}>
                <h5>Company</h5>
                  <ul>
                    <li><a href="/#about">About</a></li>
                    <li><a  href="https://wa.me/7042352490?text=Hi" target='_blank' rel="noreferrer" >Contact</a></li>
                    <li><a href="/#testimonials">Testimonial</a></li>
                  </ul>
                </Col>
 <Col md={2}>
                 <h5>Quick Links</h5>
                  <ul>
                    <li> <Link to="/privacy-policy">Privacy policy</Link></li>
                    {/** 
                  <li><a href="/">Term of Services</a></li>
                    <li><a href="/">Cookie Policy</a></li>
                    */}
                  </ul>
                </Col>
    
            </Row>
            <Row className='justify-content-between pt-5 text-white copyrights'>
              <Col md>© 2024 DevInfinity inc. All rights reserved.</Col>
              <Col md className='text-center'><a href="tel:+91 7042352490"><img src={require('./../assets/img/phone.png')} alt="Linkdin"/> +91 7042352490</a></Col>
              <Col md className='text-right'><a href="mailto:contact@devinfinityinc.com"><img src={require('./../assets/img/mail.png')} alt="Linkdin"/> contact@devinfinityinc.com</a></Col>
            </Row>
        </Container>
       
        <CookieConsent location="bottom"  style={{
    background: "#0e1122",
    textShadow: "2px 2px black",
  }}
    buttonText="Accept all" declineButtonText="Reject all" cookieName="myAwesomeCookieName3" enableDeclineButton flipButtons expires={999} >
        <strong>We value your privacy</strong><br />
        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
</CookieConsent>
  
        </div>
     
    );
  }
  export default Footer;