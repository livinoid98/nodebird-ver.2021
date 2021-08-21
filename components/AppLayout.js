import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {Menu, Input, Button} from 'antd'

const AppLayout = ({children}) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
            </Head>
            <div>
                <Menu mode="horizontal">
                    <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                    <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                    <Menu.Item key="email">
                        <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
                    </Menu.Item>
                </Menu>
                <Button><Link href="/signup"><a>회원가입</a></Link></Button>
                {children}
            </div>
        </>
    )
}

export default AppLayout;
