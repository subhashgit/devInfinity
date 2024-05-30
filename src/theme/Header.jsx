import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import logo from '../assets/img/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function Header() {
    return (
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="md"
      >
        <div className='header position-absolute w-100 mt-3'>
         <Container>
            <Row>
                <Col md={2}><img src={logo} alt="Logo"/></Col>
                <Col md={8}>

                <Navbar collapseOnSelect expand="lg">
      <Container>
      
      <Navbar.Brand href="#home"><img src={logo} alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav  " className='justify-content-center'>
        <Nav
                      activeKey="/home"
                    >
                      <Nav.Item>
                        <Nav.Link href="/home" >Home</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href='#about' eventKey="link-1">About</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href='#services' eventKey="link-2">Services</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href='#contact' eventKey="link-2">Contact us </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href='#portfolios' eventKey="link-2">Portfolio</Nav.Link>
                      </Nav.Item>
                      
                    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    
                
                </Col>
                <Col md={2} className='d-n-m'>
                <a className="outline-light" href='#contact' >Consult now <img src={require('./../assets/img/arrow-up-white.png')} alt="consult"/></a>
                </Col>
            </Row>
        </Container>
        </div>
      </ThemeProvider>
    );
  }
  export default Header;