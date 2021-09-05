import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {Menu, Input, Button, Row, Col } from 'antd'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'

const dummy = {
    nickname: 'livinoid98',
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedIn: false,
}

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
            <Row gutter={10}>
                <Col xs={24} md={6}>
                    {dummy.isLoggedIn ? <UserProfile/>
                    :<LoginForm/>
                    }
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <Link href="http://livinoid98.dothome.co.kr/starbucks/"><a target="_blank">Made by livinoid98</a></Link>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node,
}

export default AppLayout;
