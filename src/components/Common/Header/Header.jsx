import React, { useEffect, useState } from 'react'
import {Container, Row, Navbar, Offcanvas, Nav, NavDropdown,} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../Header/header.css";

const Header = () => {
    const [open,setOpen] = useState(false);

    
    const toggleMenu = () =>{
        setOpen(!open);

    };
    useEffect(()=>{
        window.addEventListener("scroll", isSticky);
        return()=>{
            window.removeEventListener("scroll", isSticky)
        }
    })

    const isSticky=(e)=>{
        const header= document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop>=120 ? header.classList.add('is-sticky'):
        header.classList.remove('is-sticky')
    }


  return (
    <header className="header-section">
    <section className='header-section'>
        <Container>
            <Row>
            <Navbar expand='lg' className="p-0">
                {/*Logo Section Start */}
            <Navbar.Brand href="#">
                <NavLink to=''>GhumteyRaho</NavLink>
            </Navbar.Brand>
            {/*Logo Section End*/}

           
            <Navbar.Offcanvas 
            id={`offcanvasNavbar-expand-lg`} 
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`} 
            placement="start"
            show={open}
            >
                {/*Mobile Logo Section Start*/}
              <Offcanvas.Header>
                <h1 className='logo'>GhumteyRaho</h1>
                <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i class="bi bi-x-lg" ></i>
                </span>
              </Offcanvas.Header>

              {/*MobileLogo Section End*/}
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink  className="nav-link" to="/">Home</NavLink>
                  <NavLink className="nav-link" to="/">ABOUT US</NavLink>
                  <NavLink className="nav-link" to="/">TOURS</NavLink>

                  <NavDropdown
                    title="Destination"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">Haridwar</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Rishikesh</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Kedarnath</NavDropdown.Item>
                  </NavDropdown>
                  <NavLink className="nav-link" to="/">GALLERY</NavLink>
                  <NavLink className="nav-link" to="/">CONTACT</NavLink>
                  </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="ms-md-4 ms-2">
                <NavLink className="primaryBtn d-none d-sm-inline-block">
                    Book Now
                </NavLink>
                <li className='d-inline-block d-lg-none ms-3' style={{color:'white'}}>
                    <i className={open ? "bi bi-x-lg": "bi bi-list"} onClick={toggleMenu}></i>
                </li>

            </div>
         
        </Navbar> 
            </Row>
        </Container>
    </section>
    </header>
  )
}

export default Header
