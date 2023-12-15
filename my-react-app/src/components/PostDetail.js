import React from 'react';

const PostDetail = ({ post }) => {
  return (
    <div>
      <h2>Post Detail</h2>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      <p>UserId: {post.userId}</p>
    </div>
  );
};

export default PostDetail;