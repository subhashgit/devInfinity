import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import logo from '../assets/img/logo.png';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


function Footer() {
    return (
      
        <div className='footer'>
         <Container>
            <Row>
                <Col md>
                <img src={logo} alt="Logo"/>
                  <p className='gradient-text my-3'>Lorem ipsum dolor sit amet consectetur adipiscing elit eu</p>
                  <div className='d-flex social-icons align-items-center'>
                      <a href='/'> <img src={require('./../assets/img/instagram.png')} alt="Instagram"/></a>
                      <a href='/'> <img src={require('./../assets/img/linkedin.png')} alt="Linkdin"/></a>
                      <a href='/'> <img src={require('./../assets/img/twiter.png')} alt="Twitter"/></a>
                      <a href='/'> <img src={require('./../assets/img/facebook.png')} alt="Facebook"/></a>
                  </div>
                </Col>
                <Col md>
                  <h5>Services</h5>
                  <ul>
                    <li><a href="/">Web Development</a></li>
                    <li><a href="/">UI/UX Designer</a></li>
                    <li><a href="/">Branding</a></li>
                    <li><a href="/">Lorem</a></li>
                  </ul>
                </Col>
                <Col md>
                <h5>Company</h5>
                  <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Testimonial</a></li>
                  </ul>
                </Col>
                <Col md>
                <h5>Links</h5>
                  <ul>
                    <li><a href="/">Privacy policy</a></li>
                    <li><a href="/">Term of Services</a></li>
                    <li><a href="/">Cookie Policy</a></li>
                  </ul>
                </Col>
            </Row>
            <Row className='justify-content-between pt-5 text-white copyrights'>
              <Col md>© 2024 DevInfinity inc. All rights reserved.</Col>
              <Col md className='text-center'><img src={require('./../assets/img/phone.png')} alt="Linkdin"/> +91 9876543210</Col>
              <Col md className='text-right'><img src={require('./../assets/img/mail.png')} alt="Linkdin"/> contact@DevInfinity.com</Col>
            </Row>
        </Container>
        </div>
     
    );
  }
  export default Footer;