import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CustomCard from './components/CustomCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return(
    <>
      <Header brand='Animal Welfare' titleText='Adopt a Doggy'/>
      <Container fluid="md">
        <Row>
          <Col><CustomCard dogName="Doggo" dogImg="https://placedog.net/200" dogDesc="nice doggo" /></Col>
          <Col><CustomCard dogName="Doggo" dogImg="https://placedog.net/200" dogDesc="nice doggo" /></Col>
          <Col><CustomCard dogName="Doggo" dogImg="https://placedog.net/200" dogDesc="nice doggo" /></Col>
          <Col><CustomCard dogName="Doggo" dogImg="https://placedog.net/200" dogDesc="nice doggo" /></Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
