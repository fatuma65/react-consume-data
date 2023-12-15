import React from 'react';
import InputForm from './InputForm';

const PostEdit = ({ post, updatePost }) => {
  return (
    <div>
      <h2>Edit User</h2>
      <InputForm initialData={post} updatePost={updatePost} />
    </div>
  );
};

export default PostEdit;