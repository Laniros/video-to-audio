import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Activity from './Activity'

function App() {
  return (

    <div className="App">
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Video To Audio</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
  <Activity/>
    </div>
  );
}

export default App;
