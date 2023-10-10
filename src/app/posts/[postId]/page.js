import React from 'react'

const postId = async ({params}) => {
     const specificPost = params.postId
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${specificPost}`,{next:{revalidate:60}})
     const post = await response.json()
     
  return (
    <>
        <h1> post details </h1> 
         <h1> {post.title} </h1>
         <p> {post.body}</p>  
    </>
     
  )
}

export default postId