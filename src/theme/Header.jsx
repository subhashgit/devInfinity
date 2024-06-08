import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import logo from '../assets/img/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, withRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function Header(props) {
    return (
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="md"
      >
         <ScrollToTop />
        <div className='header position-absolute w-100 mt-2'>
         <Container>
            <Row className='align-items-center'>
                <Col md={2}><Link to="/"><img src={logo} className='img-fluid' alt="Logo"/></Link></Col>
                <Col md={8}>

                <Navbar collapseOnSelect expand="lg">
      <Container>
      
      <Navbar.Brand href="#home"><img src={logo} className='logo' alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav  " className='justify-content-center'>
        <Nav
                      activeKey="/"
                    >
                      <Nav.Item>
                        <Nav.Link href="/" >Home</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href='/#about' eventKey="link-1">About</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href='/#services' eventKey="link-2">Services</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href='/#contact' eventKey="link-2">Contact us </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href='/#partners' eventKey="link-2">Portfolio</Nav.Link>
                      </Nav.Item>
                      
                    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    
                
                </Col>
                <Col md={2} className='d-n-m'>
                <a className="outline-light" href="https://wa.me/7042352490?text=Hi" target='_blank' rel="noreferrer" >Consult now <img src={require('./../assets/img/arrow-up-white.png')} alt="consult"/></a>
                </Col>
            </Row>
        </Container>
        </div>
      </ThemeProvider>
    );
  }
  export default Header;