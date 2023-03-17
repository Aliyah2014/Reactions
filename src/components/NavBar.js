import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './NavBar.css';
import Logo from '../brand/brand-logo.png';
import React, { Component } from "react";
import ReactDOM from "react-dom";

class FileUploadButton extends Component {
  handleFileUpload = event => {
    console.log(event.target.files[0].name);
  };

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className="BrandLogo" src={Logo} alt="Reactions Brand" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <div>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="🔍"
              className="mt-2"
              aria-label="Search"
            />
            <Button variant="">Search</Button>
          </Form>
            </div>
            <div className="ButtonDiv">
            
      
            <Button className="WidgetButton rounded-pill m-1" variant="contained" size="lg">+ Widgets
            </Button>
            

                  <React.Fragment>
        <input
          ref="fileInput"
          onChange={this.handleFileUpload}
          type="file"
          style={{ display: "none" }}
          // multiple={false}
        />
        <button className="UploadButton rounded-pill m-1" variant="contained" onClick={() => this.refs.fileInput.click()}>Upload File</button>
      </React.Fragment>
             {/* <label htmlFor="contained-button-file"> */}
            {/* <input className="UploadButton rounded-pill m-1" variant="contained" size="lg" type="file" accept="image/*" 
        id="contained-button-file">↑ Upload</input></label> */ }

        
       
        

            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
const rootElement = document.getElementById("root");
ReactDOM.function(<FileUploadButton />, rootElement);

 
  


export default NavBar;