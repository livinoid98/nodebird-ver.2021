import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {Menu, Input, Button, Row, Col, Card, Avatar} from 'antd'

const AppLayout = ({children}) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="email">
                    <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
                </Menu.Item>
            </Menu>
            <Button><Link href="/signup"><a>회원가입</a></Link></Button>
            <Row>
                <Col xs={24} md={6}></Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}></Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node,
}

export default AppLayout;
