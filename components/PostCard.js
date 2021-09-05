import React from 'react'
import {Card, Avatar, Button} from 'antd'
import {RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined} from '@ant-design/icons'

const PostCard = (c) => {
    return (
        <div>
            <Card key={+c.createdAt} cover={c.img && <img alt="example" src={c.img} />}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    <HeartOutlined key="heart"/>,
                    <MessageOutlined key="message"/>,
                    <EllipsisOutlined key="ellipse"/>
                ]}
                extra={<Button>팔로우</Button>}>
                    <Card.Meta avatar={<Avatar>{}</Avatar>}
                    title={c.content} description={c.content}/>
            </Card>
        </div>
    )
}

export default PostCard
