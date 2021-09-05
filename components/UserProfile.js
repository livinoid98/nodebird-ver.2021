import React from 'react'
import {Avatar, Card, Button} from 'antd'

const dummy = {
    nickname: 'livinoid98',
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedIn: false,
}

const UserProfile = () => {
    return (
        <div>
            <Card
                actions={[
                    <div key="twit">짹짹<br/>{dummy.Post.length}</div>,
                    <div key="following">팔로잉<br/>{dummy.Followings.length}</div>,
                    <div key="follower">팔로워<br/>{dummy.Followers.length}</div>
                ]}>
                <Card.Meta avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}/>
                <Button>로그아웃</Button>
            </Card>
        </div>
    )
}

export default UserProfile
