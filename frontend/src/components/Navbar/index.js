import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Navbar1 = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Container fluid>
                <NavLink className='navbar-brand' to='/'>
                    Mening yerim
                </NavLink>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <NavLink data-rr-ui-event-key='/' className='nav-link' to='/home'>
                            Home
                        </NavLink>
                        <NavLink data-rr-ui-event-key='/link' className='nav-link' to='/link'>
                            Link
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar1
