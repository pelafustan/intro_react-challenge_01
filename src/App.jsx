import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CustomCard from './components/CustomCard';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return(
    <>
      <Header brand='Animal Welfare' titleText='Adopt a Doggy'/>
      <Container className="mb-5" fluid="md">
        <Row>
          <Col>
            <CustomCard 
              dogName="Doggo"
              dogImg="https://placedog.net/220" 
              dogDesc="nice doggo" 
              tagText="Labrador" 
              tagColor="primary"
            />
          </Col>
          <Col>
            <CustomCard 
              dogName="Ol' MacDonald"
              dogImg="https://placedog.net/225"
              dogDesc="nice doggo"
              tagText="Mutt"
              tagColor="secondary"
            />
          </Col>
          <Col>
            <CustomCard 
              dogName="Lady Rover"
              dogImg="https://placedog.net/255"
              dogDesc="nice doggo"
              tagText="Chihuahua"
              tagColor="success"
            />
          </Col>
          <Col>
            <CustomCard 
              dogName="Bark Twain"
              dogImg="https://placedog.net/275"
              dogDesc="nice doggo"
              tagText="Husky"
              tagColor="info"
            />
          </Col>
        </Row>
      </Container>
      <Footer 
        footerText="Take a look to our wonderful puppies available for adoption. They're amazing, and will love you for ever." 
      />
    </>
  )
}

export default App;
