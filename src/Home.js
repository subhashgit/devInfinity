import React, { useState, useRef  } from 'react';
import './assets/sass/Home.scss';
import Header from './theme/Header';
import Footer from './theme/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';


function Home() {
  const [success, setSucsess] = useState('');

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_28yoy8m', 'template_6f4yk5s', form.current, {
        publicKey: 'pb3_4299wq3spCtp9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSucsess('Thank you for your submission! We appreciate your effort and will get back to you shortly.');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          
        },
      );
  };




  
  return (
    <div className="App" id="Home">
     
        <div className="banner">
            <Container className='text-center'>
              <h3 className='gradient-text'>One stop solution for all your business needs</h3>
             
              <a href="https://wa.me/7042352490?text=Hi" target='_blank' rel="noreferrer" className='btn-consult mt-4'>Consult now <img src={require('./assets/img/arrow-up.png')} alt="consult"/></a>
            </Container>
        </div>
        <div className='trusted-by' id='partners'>
        <Container className='text-center'>
           <h3 className='gradient-text'>Trusted by Leading Organizations</h3>
           <div className='mt-4 equal-spc'>
              <div  className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/guvi.png')} className='img-fluid' alt="consult"/></div>
              <div  className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/hawmi.png')} className='img-fluid' alt="consult"/></div>
              <div  className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/farmididi.png')} className='img-fluid' alt="consult"/></div>
              <div  className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/knmn.png')} className='img-fluid' alt="consult"/></div>
              <div  className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/real-property.png')} className='img-fluid' alt="consult"/></div>
              <div  className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/goodness.jpeg')} className='img-fluid' alt="Goodness Hospital"/></div>
              <div  className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/bright.jpeg')} className='img-fluid' alt="Bright Avenue School"/></div>
           </div>
          </Container>
        </div>

        <div className='ideas-into-digital' >
        <Container className='text-center' id='services'>
          <h3 className='gradient-text font-weight-light'>Transforming Ideas into Digital Reality: Explore Our Services.</h3>
            <Row className='mt-4'>
              <Col  md={4}  className='align-items-center trans-col'>
                <div>
                <img src={require('./assets/img/mobile.png')} alt="consult"/>
                <h4>Mobile App / Web Development</h4>
                </div>
              </Col>
              <Col  md={4}  className='align-items-center trans-col'>
              <div>
                <img src={require('./assets/img/seo.png')} alt="consult"/>
                <h4>SEO / Facebook & Google  Ads and LinkedIn Marketing</h4>
                </div>
              </Col>
              <Col md={4}  className='align-items-center trans-col'>
              <div>
                <img src={require('./assets/img/content-creation.png')} alt="consult"/>
                <h4>Content Creation & Social Media Branding</h4>
                </div>
              </Col>
            </Row>
            <Row className='mt-4'>
              <Col md={4} className='align-items-center trans-col'>
              <div>
                <img src={require('./assets/img/3d-animation.png')} alt="consult"/>
                <h4>3D Animation</h4>
                </div>
              </Col>
              <Col  md={4}  className='align-items-center trans-col'>
              <div>
                <img src={require('./assets/img/enterprice.png')} alt="consult"/>
                <h4>Enterprise Resource Planning</h4>
                </div>
              </Col>
              <Col  md={4}  className='align-items-center trans-col'>
                <div>
                <img src={require('./assets/img/business-consulting.png')} alt="consult"/>
                <h4>Business Consulting</h4>
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
                <p>Fueling innovation in every service, we craft solutions that redefine norms, offering customers groundbreaking experiences that stand as a testament to our ingenuity.</p>
              </Col>

              <Col  md={{ span: 4, offset: 2 }} className='align-items-center trans-col'>
             
                <img src={require('./assets/img/expert-team.png')} alt="consult"/>
                <h4>Expert Team</h4>

                <p>With a diverse blend of expertise and a shared passion for excellence, our team at DevInfinity consistently delivers unparalleled service, setting a gold standard in customer satisfaction. </p>
              </Col>
              </Row>
              </Container>
              </div>


      <div className='customers-visit'>
        <Container className='text-center'>
            <Row>
              {/** 
              <Col md={4}  className='align-items-center'>
                
                <h3 className='gradient-text font-weight-light'>1M+</h3>
                <p>Customers visit Devinfinity every month to get their service done.</p>
              </Col>
*/}
              <Col  md={6}className='align-items-center'>
             
                <h3 className='gradient-text font-weight-light'>96%</h3>
                <p>Satisfaction rate comes from our awesome customers.</p>
              </Col>
              <Col  md={6}className='align-items-center'>
             
            
             <h3 className='gradient-text font-weight-light'>4.9/5.0</h3>
             <p>Unlock Your Potential with a Free First Consultation!</p>
           </Col>
              </Row>
              </Container>
              </div>

              <div className='about-us' id='about'>
                <Container>
                  <Row>
                    <Col md={6}  className='align-items-center'>
                    <h3 className='gradient-text font-weight-light px-3'>About us</h3>
                    <p className='px-3'> In the bustling city of Delhi, three engineers, found themselves at the crossroad of their engineering college. Bonded by a shared curiosity for business, they embarked on a bold entrepreneurial journey, founding DevInfinity Inc. With their unique blend of engineering expertise and business acumen, they started this organisation offering innovative solutions to a myriad of challenges. At DevInfinity, we are a dynamic team of passionate engineers dedicated to transforming ideas into reality. With a wealth of experience in the ever-evolving landscape of software development, we have successfully empowered businesses across various industries to thrive in the digital age.</p>
                    </Col>
                    <Col md={6}  className='align-items-center '>
                      <img  src={require('./assets/img/about.png')} className='img-fluid' alt="About us"/>
                    </Col>
                  </Row>
                </Container>
              </div>

              <div className='contact-form'  id='contact'>
                  <Container>
                  <div className='align-items-center trans-col'>
                    <Row>
                   
              
                        <Col md={5}  className='align-items-center'>
                        <img  src={require('./assets/img/chat.png')} className='img-fluid' alt="About us"/>
                            <h3 className='gradient-text'>We look forward to helping you</h3>
                            <p>Please, send us a message or give us a call. We are looking forward to hearing from you and would like to know, how we can help you.</p>
                        </Col>
                        <Col md={{ span: 6, offset: 1 }} >
                        
                        <form ref={form} onSubmit={sendEmail}>
                        <Form.Label htmlFor="basic-url">Name</Form.Label>
                        <InputGroup  className="mb-3">
                            <InputGroup.Text id="basic-addon1"><img  src={require('./assets/img/form-name.png')} className='img-fluid' alt="About us"/></InputGroup.Text>
                              <Form.Control
                                placeholder="Name"
                                required
                                aria-label="name"
                                aria-describedby="basic-addon1"
                                name="name"
                               
                              />
                          </InputGroup>
                          <Form.Label htmlFor="basic-url">Email</Form.Label>
                        <InputGroup  className="mb-3">
                            <InputGroup.Text id="basic-addon1"><img  src={require('./assets/img/form-email.png')} className='img-fluid' alt="About us"/></InputGroup.Text>
                              <Form.Control
                                placeholder="Email"
                                required
                                type='email'
                                aria-label="email"
                                aria-describedby="basic-addon1"
                                name="email"
                              />
                          </InputGroup>
                          <Form.Label htmlFor="basic-url">Mobile</Form.Label>
                        <InputGroup  className="mb-3">
                            <InputGroup.Text id="basic-addon1"><img  src={require('./assets/img/cell-phone.png')} className='img-fluid' alt="About us"/></InputGroup.Text>
                              <Form.Control
                              type="number"
                                placeholder="Mobile"
                                required
                                aria-label="Mobile"
                                aria-describedby="basic-addon1"
                                name="number"
                              />
                          </InputGroup>

                          <Form.Label htmlFor="basic-url">Message</Form.Label>
                        <InputGroup  className="mb-3">
                          
                              <Form.Control
                                placeholder="Message"
                                aria-label="message"
                                required
                                as="textarea" 
                                aria-describedby="basic-addon1"
                                name="message"
                              />
                          </InputGroup>
                          <Form.Check // prettier-ignore
                              type={'checkbox'}
                              id={`i-agree`}
                              required
                              name="i_agree"
                              value={'I agree to Privacy Policy and Terms of Use'}
                              label={`I agree to Privacy Policy and Terms of Use`}
                             
                            />
                             <div className="d-grid mt-3 gap-2">
                             <Button variant="primary" type='submit' size="lg">Contact with us now</Button>
                             </div>
                             {success ? success : null }
                             </form>
                        </Col>
                        
                      </Row>
                      </div>
                  </Container>

              </div>

              <div className='testimonials'>
                <Container>
                <h3 className='gradient-text font-weight-light'  id="testimonials">What they say about us</h3>
                    <Row>
                   
                      <Col  md={4}  className='align-items-center trans-col'>
                      <div className='col-wrap'>

                              <div className="d-flex gap-3">
                                {/* <div> <img src={require('./assets/img/Nugraha.png')} alt="consult" width="50" className="rounded-circle"/></div> */}
                                <div className="ml-2">
                                  <span className="name">Manoj Aggarwal</span>
                                    <p className="para">Owner of HNG</p>
                                </div>
                            </div>
                            <span className="maintxt">As a small business owner, I was overwhelmed with the complexities of managing our IT
infrastructure. The team at <b>DevInfinity Inc</b> made the entire process seamless and
worry-free. Their expertise in app development and prompt support have been invaluable.
Thanks to them, I can now focus on growing my business without worrying about technical
issues.</span>                            
                           
                      </div>
                      </Col>
                      <Col  md={4}  className='align-items-center trans-col'>
                      <div className='col-wrap'>

                              <div className="d-flex gap-3">
                              
                                <div className="ml-2">
                                  <span className="name">Satpal Malik</span>
                                    <p className="para">Operations Manager at Technical Gurus Inc. </p>
                                </div>
                            </div>
                            <span className="maintxt">Switching to <b>DevInfinity Inc</b> for our social media marketing has been one of the best
decisions we’ve made. They quickly understood our needs and provided solutions that
enhanced our operational efficiency. Their round-the-clock support ensures we never
experience downtime. Highly recommended!</span>                            
                           
                      </div>
                      </Col>
                      <Col  md={4}  className='align-items-center trans-col'>
                      <div className='col-wrap'>

                              <div className="d-flex gap-3">
                           
                                <div className="ml-2">
                                  <span className="name">Jessica Morgan</span>
                                    <p className="para">CTO at HealthLink Services</p>
                                </div>
                            </div>
                            <span className="maintxt">The professionalism and dedication of <b>DevInfinity Inc</b> are unparalleled. They took the time
to understand our unique challenges and delivered customized software solutions that
significantly improved our workflow. Their proactive approach to maintenance and support
has been a game-changer for us.</span>                            
                           
                      </div>
                      </Col>
                      <Col  md={4}  className='align-items-center trans-col'>
                      <div className='col-wrap'>

                              <div className="d-flex gap-3">
                           
                                <div className="ml-2">
                                  <span className="name">Mark Johnson</span>
                                    <p className="para">CEO of Innovatech Solutions</p>
                                </div>
                            </div>
                            <span className="maintxt">The professionalism and dedication of <b>DevInfinity Inc</b> are unparalleled. They took the time
to understand our unique challenges and delivered customized software solutions that
significantly improved our workflow. Their proactive approach to maintenance and support
has been a game-changer for us.</span>                            
                           
                      </div>
                      </Col>
                      <Col  md={4}  className='align-items-center trans-col'>
                      <div className='col-wrap'>

                              <div className="d-flex gap-3">
                            
                                <div className="ml-2">
                                  <span className="name">Emily Rogers</span>
                                    <p className="para">Director of Marketing at BrightWave Media</p>
                                </div>
                            </div>
                            <span className="maintxt">We partnered with <b>DevInfinity Inc</b> during a critical phase of our company’s growth. Their
team integrated seamlessly with our operations and provided digital accessible services like
ERP solutions that scaled us. Their expertise in content creation and animations gave us
peace of mind, knowing our growth is always stable.</span>                            
                           
                      </div>
                      </Col>
                      <Col  md={4}  className='align-items-center trans-col'>
                      <div className='col-wrap'>

                              <div className="d-flex gap-3">
                        
                                <div className="ml-2">
                                  <span className="name">Michael Brown</span>
                                    <p className="para">CFO at FutureTech Enterprises</p>
                                </div>
                            </div>
                            <span className="maintxt">The team at <b>DevInfinity Inc</b> is outstanding! They have a deep understanding of the latest
AI tools and how to apply them to real-world business problems. Their innovative solutions
have helped us streamline our processes and improve productivity. They have set a new
standard of excellence in our business.</span>                            
                           
                      </div>
                      </Col>
                    </Row>
                </Container>
              </div>
 

    </div>
  );
}

export default Home;
