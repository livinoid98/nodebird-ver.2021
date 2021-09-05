import React from 'react'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'livinoid98',
        },
        content: '첫 번째 게시글',
        img: 'https://cdn.pixabay.com/photo/2018/04/28/22/03/tree-3358468_960_720.jpg'
    }],
}

const Home = () => {
    return (
        <>
            {dummy.isLoggedIn && <PostForm/>}
            {dummy.mainPosts.map((c) => {
                return(
                    <PostCard key="c"/>
                );
            })}
        </>
    )
}

export default Home;