import './assets/sass/Home.scss';
import Header from './theme/Header';
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
              <a href='#' className='btn-consult'>Consult now <img src={require('./assets/img/arrow-up.png')} alt="consult"/></a>
            </Container>
        </div>
        <div className='trusted-by'>
        <Container className='text-center'>
           <h3 className='gradient-text'>Trusted by Leading Organizations</h3>
           <Row className='mt-4'>
            <Col className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/guvi.png')} alt="consult"/></Col>
            <Col className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/hawmi.png')} alt="consult"/></Col>
            <Col className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/farmididi.png')} alt="consult"/></Col>
            <Col className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/knmn.png')} alt="consult"/></Col>
            <Col className='d-flex justify-content-center align-items-center'><img src={require('./assets/img/real-property.png')} alt="consult"/></Col>
           </Row>
          </Container>
        </div>

        <div className='ideas-into-digital'>
        <Container className='text-center'>
          <h3 className='gradient-text'>Transforming Ideas into Digital Reality: Explore Our Services.</h3>
        </Container>
        </div>
    </div>
  );
}

export default Home;
