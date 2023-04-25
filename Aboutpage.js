import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a person who buys and sells securities such as shares to make a profit. I can work for myself or for a financial company. I use different strategies and methods to take advantage of the market fluctuations. I may also act as advisers or managers for my friends & clients.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>Excellent analytical and statistical modeling skills</li>
                                    <li>Strong knowledge of markets and stocks</li>
                                    <li>Excellent ability to determine when to place purchase and sell orders to brokers</li>
                                    <li>Experienced with managing multi-million dollar portfolios</li>
                                </Col>
                                <Col md={5}>
                                    <li>In-depth knowledge of the stock exchange</li>
                                    <li>Maximizes profits and minimizes losses</li>
                                    <li>good time management</li>
                                    <li>Consistently successful trading track record</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage