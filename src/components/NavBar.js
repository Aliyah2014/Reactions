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
  handleFileUpload = (event) => {
    console.log(event.target.files[0].name);
  };

  render() {
    return (
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className="BrandLogo" src={Logo} alt="Reactions Brand" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
              <Button
                className="WidgetButton rounded-pill m-1"
                variant="contained"
                size="lg"
              >
                + Widgets
              </Button>
              <React.Fragment>
                <input
                  ref="fileInput"
                  onChange={this.handleFileUpload}
                  type="file"
                  style={{ display: "none" }}
                  // multiple={false}
                />
                <button
                  className="UploadButton rounded-pill m-1"
                  onClick={() => this.refs.fileInput.click()}
                >
                  ↑ Upload
                </button>
              </React.Fragment>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FileUploadButton />, rootElement);

  
  


export default NavBar;