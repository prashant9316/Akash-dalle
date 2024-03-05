import React, { useEffect, useState } from 'react';
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
    const [subHeaderData, setSubHeaderData] = useState({});
    const [dataToShow, setDataToShow] = useState("");
    const [subHeaderHover, setSubHeaderHover] = useState(false);
    const [showSubHeader, setShowSubHeader] = useState(false);


    useEffect(() =>{
        if(subHeaderData == false && hover != 0){
            setShowSubHeader(true)
        }
        setTimeout(() => {
            if(subHeaderHover == false && hover == 0){
                setShowSubHeader(false)
            } else if(subHeaderHover == true && hover != 0){
                setShowSubHeader(true)
            } else { // sub header hover is true and hover is also true
                setShowSubHeader(true);
            }
        }, 500)
    }, [subHeaderHover, hover])
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
                                            setTimeout(() => {
                                                console.log("subHeader Hover while leaving hover", subHeaderHover)
                                                // if(!subHeaderHover) {
                                                setHover(0)
                                                    // setSubHeaderData({})
                                                // }
                                            }, 1000)
                                        }}
                                    >{header.title}</Nav.Link>
                                )
                            })}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {showSubHeader && (
                <>
                    <div className='w-100 absolute z-100 top-0 left-0' 
                        style={{
                            height: '200px',
                            backgroundColor: "#1E2222"
                        }}
                        onMouseEnter={() => {
                            setSubHeaderHover(true)
                            // if(hover){
                            //     console.log(subHeaderHover)
                            //     console.log('hover', hover)
                            // }
                        }} 

                        onMouseLeave={() => {
                            setSubHeaderHover(false);
                            // setTimeout(() => {
                            // }, 1000)
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
                                                <h6 className='text-white'>{data.title}</h6>
                                            </div>
                                        )
                                    })}
                                </Col>
                                <Col>
                                    <p className='text-white'>
                                        {dataToShow ? dataToShow : subHeaderData.columnData[0].data}
                                    </p>
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