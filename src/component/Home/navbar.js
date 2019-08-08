import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Signupmodal from './signupmodal'


class Mynavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand className="text-white" href="/">Online-Shopping</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink to='' className="text-white" href="/components/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-white" nav caret>
                  Products
                      </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Men Wear
                        </DropdownItem>
                  <DropdownItem>
                    Women Wear
                        </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Accessories
                        </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink className="text-white" href="#">Contact Us</NavLink>
              </NavItem>
            </Nav>
            <Nav>
              <NavItem className="ml-auto">
                <NavLink className="text-white" href="#"><Signupmodal>Login</Signupmodal></NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink className="text-white" href="#">Cart</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="d-flex justify-content-around bor-nav">
          <h4 className="text-left text-muted bor-text">Online Shopping</h4>
          <h4 className="text-center text-muted bor-text">Online Shopping</h4>
          <h4 className="text-right text-muted bor-text">Online Shopping</h4>
        </div>
      </div>
    );
  }
}
export default Mynavbar;