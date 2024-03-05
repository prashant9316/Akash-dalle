import React, { useState } from 'react';
import { Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import SubHeader from './sub-header';


const headerData = [
    {
        id: 1,
        title: 'What we do',
        link: '#',
        subHeader: true,
        subHeaderData: {
            columnData: [
                { id: 1, title: 'Overview', link: '#', data: 'text 1' },
                { id: 2, title: 'Industries', link: '#', data: 'text 2' },
                { id: 3, title: 'Servcices', link: '#', data: 'text 3' }
            ],
        }
    },
    {
        id: 2,
        title: 'Who we are',
        link: '#',
        subHeader: false // which defines if we want to have sub header or not?
    },
    {
        id: 3,
        title: 'Insights',
        link: '#',
        subHeader: false,
    },
    {
        id: 4,
        title: 'Skills',
        link: '#',
        subHeader: false
    }
]

function Header() {
    const [hover, setHover] = useState(0);
    const [subHeaderData, setSubHeaderData] = useState({})
    const [dataToShow, setDataToShow] = useState("")
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {headerData.map((header, index) => {
                                return (
                                    <Nav.Link href={header.link}
                                        key={header.id}
                                        onMouseEnter={() => {
                                            if (header.subHeader) {
                                                setHover(header.id)
                                                setSubHeaderData(header.subHeaderData)
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            setHover(0)
                                            setSubHeaderData({})
                                        }}
                                    >{header.title}</Nav.Link>
                                )
                            })}

                            {/* <Nav.Link href="#link"
                        onMouseEnter={() => {setHover(2)}}
                        onMouseLeave={() => setHover(0)}
                    >Link</Nav.Link>
                    <Nav.Link href="#hover"
                        onMouseEnter={() => {setHover(3)}}
                        onMouseLeave={() => setHover(0)}
                    >Hover</Nav.Link> */}

                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href='#action/3.1'>
                            <SubHeader />
                        </NavDropdown.Item>
                    </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {hover != 0 && (
                <>
                    <div className='w-100 absolute z-100 top-0 left-0 h-25 bg-secondary' 
                        onMouseEnter={() => {
                            if(hover){
                                setHover(hover);
                            }
                        }}
                    >
                        <Container >
                            <Row>
                                <Col>
                                    {subHeaderData && subHeaderData.columnData.map((data, index) => {
                                        return (
                                            <div key={data.id} className='w-25 h-100 float-left' onMouseEnter={() => {
                                                setDataToShow(data.data)
                                            }}>
                                                <a href={data.link}>{data.title}</a>
                                            </div>
                                        )
                                    })}
                                </Col>
                                <Col>
                                    {dataToShow ? dataToShow : subHeaderData.columnData[0].data}
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </>
            )}
        </>
    )
}

export default Header;