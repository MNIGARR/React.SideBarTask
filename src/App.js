import logo from './logo.svg';
import './App.css';
import Side from './SideBar';
import Main from './Main';
import Navi from './NaviBar';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div ClassName="App" >
      <Container  >
        <Row>
          <Col className='Side' >
          <Side title='side component'  heading= "Dummy Heading"></Side>
          </Col>

          <Col className='Main' >
            <Row className='navRow'>
              <Navi></Navi>
            </Row>
            <Row>
            <Main title='main component'></Main>
            </Row>

          </Col>
          </Row>         
        
      </Container>
      
    </div>
  );
}

export default App;
