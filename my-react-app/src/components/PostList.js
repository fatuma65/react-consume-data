import React from "react";

const PostList = ({posts, viewPost, updatePost, deletePost}) => {
    return (
        <div>
            <h2>PostList</h2>
            <ul>
                {posts.map((post) => (
                    <li key = {post.id}>
                        {post.title}
                        {post.body}
                        {post.userId}
                        <button onClick={() => viewPost(post)}>View</button>
                        <button onClick={() => updatePost(post)}>Update</button>
                        <button onClick={() => deletePost(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PostList;