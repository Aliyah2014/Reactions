import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './NavBar.css';
import Logo from '../brand/brand-logo.png';
import React, { Component } from "react";
import ReactDOM from "react-dom";

export const NavBar = () => {
  
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
            <ul class="navbar-nav ml-auto">
              <li class="nav-item d-flex">
                <div class="collapse fade" id="searchForm">
                  <input
                    id="search"
                    type="search"
                    class="form-control border-0 bg-light"
                    placeholder="search"
                  />
                </div>
                <a
                  class="nav-link ml-auto"
                  href="#searchForm"
                  data-target="#searchForm"
                  data-toggle="collapse"
                >
                  <i class="mdi mdi-magnify"></i>
                </a>
              </li>
            </ul>
            <div>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="🔍"
                  className="mt-2"
                  aria-label="Search"
                  
                /> 
                <Button type="submit" variant="">Search</Button>
              </Form>
            </div>
          </Navbar.Collapse>
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
                accept="image/*"
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
        </Container>
      </Navbar>
    );
  }
}

const elem = document.getElementById("menu");
ReactDOM.render(<FileUploadButton />, elem);

}
  


// export default NavBar;