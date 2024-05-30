import './assets/sass/Home.scss';
import Header from './theme/Header';
import Footer from './theme/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
function Home() {
  return (
    <div className="App">
        <Header/>
        <div className="banner">
            <Container className='text-center'>
              <h3 className='gradient-text'>One stop solution for all your business needs</h3>
              <p>Rorem ipsum dolor sit amet consectetur. Gravida convallis orci ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae orci ac penatibus consectetur.</p>
              <a href='/' className='btn-consult'>Consult now <img src={require('./assets/img/arrow-up.png')} alt="consult"/></a>
            </Container>
        </div>
        <div className='trusted-by'>
        <Container className='text-center'>
           <h3 className='gradient-text'>Trusted by Leading Organizations</h3>
           <Row className='mt-4'>
            <Col sm className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/guvi.png')} alt="consult"/></Col>
            <Col sm className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/hawmi.png')} alt="consult"/></Col>
            <Col sm className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/farmididi.png')} alt="consult"/></Col>
            <Col sm className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/knmn.png')} alt="consult"/></Col>
            <Col sm className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/real-property.png')} alt="consult"/></Col>
           </Row>
          </Container>
        </div>

        <div className='ideas-into-digital'>
        <Container className='text-center'>
          <h3 className='gradient-text font-weight-light'>Transforming Ideas into Digital Reality: Explore Our Services.</h3>
            <Row className='mt-4'>
              <Col  md={4}  className='align-items-center trans-col'>
                <div>
                <img src={require('./assets/img/mobile.png')} alt="consult"/>
                <h4>Mobile App / Web Development</h4>
                <p>Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.</p>
                </div>
              </Col>
              <Col  md={4}  className='align-items-center trans-col'>
              <div>
                <img src={require('./assets/img/seo.png')} alt="consult"/>
                <h4>SEO / Facebook & Google  Ads and LinkedIn Marketing</h4>
                <p>Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.</p>
                </div>
              </Col>
              <Col md={4}  className='align-items-center trans-col'>
              <div>
                <img src={require('./assets/img/content-creation.png')} alt="consult"/>
                <h4>Content Creation & Social Media Branding</h4>
                <p>Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.</p>
                </div>
              </Col>
            </Row>
            <Row className='mt-4'>
              <Col md={4} className='align-items-center trans-col'>
              <div>
                <img src={require('./assets/img/3d-animation.png')} alt="consult"/>
                <h4>3D Animation</h4>
                <p>Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.</p>
                </div>
              </Col>
              <Col  md={4}  className='align-items-center trans-col'>
              <div>
                <img src={require('./assets/img/enterprice.png')} alt="consult"/>
                <h4>Enterprise Resource Planning</h4>
                <p>Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.</p>
                </div>
              </Col>
              <Col  md={4}  className='align-items-center trans-col'>
                <div>
                <img src={require('./assets/img/business-consulting.png')} alt="consult"/>
                <h4>Business Consulting</h4>
                <p>Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.</p>
                </div>
              </Col>
            </Row>


        </Container>
        </div>


        <div className='sets-us-apart'>
        <Container className='text-center'>
          <h3 className='gradient-text font-weight-light'>What sets us apart</h3>
            <Row className="mt-5">
              
              <Col md={{ span: 4, offset: 1 }}  className='align-items-center trans-col'>
                
                <img src={require('./assets/img/innovative.png')} alt="consult"/>
                <h4>Innovative Solutions</h4>
                <p>Bem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.</p>
              </Col>

              <Col  md={{ span: 4, offset: 2 }} className='align-items-center trans-col'>
             
                <img src={require('./assets/img/expert-team.png')} alt="consult"/>
                <h4>Expert Team</h4>
                <p>Bem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.</p>
                
              </Col>
              </Row>
              </Container>
              </div>


      <div className='customers-visit'>
        <Container className='text-center'>
            <Row>
              
              <Col md={4}  className='align-items-center'>
                
                <h3 className='gradient-text font-weight-light'>1M+</h3>
                <p>Customers visit Devinfinity every month to get their service done.</p>
              </Col>

              <Col  md={4}className='align-items-center'>
             
                <h3 className='gradient-text font-weight-light'>92%</h3>
                <p>Customers visit Devinfinity every month to get their service done.</p>
              </Col>
              <Col  md={4}className='align-items-center'>
             
            
             <h3 className='gradient-text font-weight-light'>4.9/5.0</h3>
             <p>Customers visit Devinfinity every month to get their service done.</p>
           </Col>
              </Row>
              </Container>
              </div>

              <div className='about-us'>
                <Container>
                  <Row>
                    <Col md={6}  className='align-items-center'>
                    <h3 className='gradient-text font-weight-light px-3'>About us</h3>
                    <p className='px-3'> In the bustling city of Delhi, two engineers, found themselves at the crossroad of their engineering college. Bonded by a shared curiosity for business, they embarked on a bold entrepreneurial journey, founding DevInfinity Inc. With their unique blend of engineering expertise and business acumen, they started this organisation offering innovative solutions to a myriad of challenges. At DevInfinity, we are a dynamic team of passionate engineers dedicated to transforming ideas into reality. With a wealth of experience in the ever-evolving landscape of software development, we have successfully empowered businesses across various industries to thrive in the digital age.</p>
                    </Col>
                    <Col md={6}  className='align-items-center '>
                      <img  src={require('./assets/img/about.png')} className='img-fluid' alt="About us"/>
                    </Col>
                  </Row>
                </Container>
              </div>

              <div className='contact-form'>
                  <Container>
                  <div className='align-items-center trans-col'>
                    <Row>
                   
              
                        <Col md={5}  className='align-items-center'>
                        <img  src={require('./assets/img/chat.png')} className='img-fluid' alt="About us"/>
                            <h3 className='gradient-text'>We look forward to helping you</h3>
                            <p>Please, send us a message or give us a call. We are looking forward to hearing from you and would like to know, how we can help you.</p>
                        </Col>
                        <Col md={{ span: 6, offset: 1 }} >

                        </Col>
                        
                      </Row>
                      </div>
                  </Container>
              </div>
<Footer/>
    </div>
  );
}

export default Home;
