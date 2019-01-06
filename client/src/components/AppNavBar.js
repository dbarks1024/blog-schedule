import React, {
  Component
} from 'react';
import { Link } from  'react-router-dom';
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Navbar
} from 'reactstrap';


class AppNavBar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  } 
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <Link className='navbar-brand' to="/">
              Blog Schedule
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar > 
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <Link className='nav-link' to={'/settings'}>Settings</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavBar;