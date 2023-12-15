import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostEdit from './components/PostEdit';
import React, {useState, useEffect} from 'react';


function App () {
  const [posts, setPosts] = useState([]);
  const [seletedPost, setSelectedPost] = useState(null);
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  // const [id, setId] = useState('');
  // const [userId, setUserId] = useState('');

  // fething posts frpm component mount
  useEffect(() => {
    fetchPosts()
  },[])

  // fetching posts from api
  const fetchPosts = async () => {
    try {
      const reponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await reponse.json();
      setPosts(data);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  // create a new post
  const addPost = async (formData) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setPosts([...posts, data]);
      console.log('post added successfully')
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // update an existing post
  const updatePost = async (formData) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${formData.id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type' : 'application/json',
        }
      });
      const updatedPost = await response.json();
      const updatedPosts = posts.map((post) => 
      post.id === updatedPost.id ? updatedPost : post
      );
      setPosts(updatedPosts);
      setSelectedPost(null)
      console.log('post updated successfully');
    } catch (error) {
      console.log('Error updating posts:', error)
    }
  }

  // delete a post 
  const deletePost = async (userId) => {
    try {
      await fetch (`https://jsonplaceholder.typicode.com/posts/${userId}`, {
        method: 'DELETE',
      });
      const updatedPosts = posts.filter((post) => post.id !== userId);
      setPosts(updatedPosts)
      console.log('post deleted successfully');
    }catch (error) {
      console.log('error deleting post:', error)
    }
  };

  return (
    <div>
      <h1>CRUD application</h1>
      <InputForm addPost={addPost} updatePost={updatePost} initialData={{id : '', title: '', body:'', userId: ''}} />
      <PostList posts={posts} viewPost={setSelectedPost} updatePost={setSelectedPost} deletePost={deletePost}/>
      {seletedPost ? (
        <div>
          <PostDetail post={seletedPost}/>
          <PostEdit post={seletedPost} updatePost={updatePost}/>
        </div>) : null}
    </div>
    )
}
export default App;


  // performing a get request using fetch api. Viewing all posts.

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
   
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data);
  //     })
  //     .catch(() => {
  //       console.log('An error has occured')
  //     })
  // }, [])

  // Getting a single post.

    // useEffect (() => {
    //   fetch('https://jsonplaceholder.typicode.com/posts/10')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log(data),
    //     setPosts(data)
    //   })
    //   .catch(() => console.log('An error has occurred!'))
    // }, [])
  
    // endpoint for creating new posts.

    // const addPosts = async (title, body) => {
    //   let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    //     method: 'POST',
    //     body: JSON.stringify({
    //       title: title,
    //       body: body,
    //       userId: 1,
    //     }),
    //     headers : {
    //       'Content-type' : 'application/json; charset=UTF-8'
    //     },
    //   })
    // let data = await response.json()
    //   setPosts((posts) => [data, ...posts]);
    //   setTitle('');
    //   setBody('');
    // };

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   addPosts(title, body);
    //   console.log('post has been added sucessfully')
    // }

    // Updating an endpoint/ posts
    // const updatePosts = async (id) => {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method : 'PUT',
    //     body: JSON.stringify({
    //       id: id
    //       // title: title,
    //       // body: body,
    //       // userId: userId
    //     }),
    //     headers: {
    //       'Content-type' : 'application/json; charset=UTF-8'
    //     },
    //   })
      
      // const updatedPost = await response.json();
      // const updatedPosts = posts.map((post) => 
      // post.id === updatedPost.id ? updatedPost : post
      // );
      // setPosts(updatedPosts);
      // .then((response) => response.json())
      // .then((json) => 
      //   setPosts((posts) => [json, ...posts]),
      //   setId(''),
      //   setUserId(''),
      //   setBody(''),
      //   setTitle(''));
      // .catch(() => console.log('an error has occured.'))

    // }
    // const handleupdatePost = (event) => {
    //   event.preventDefault()
    //   updatePosts(id)
    //   console.log('the post has been updated.')
    // }









      {/* {/* /// div for getting all posts. */}
{/* 
      <div>
          {posts.map((post) => { 
           return (
            <div key={post.toString()}>
                <p>{post.id}</p>
                <p>{post.userId}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </div>)
          })}
      </div> */}
      
        {/* /// div for geting a single post */}

      {/* 
      <div key={posts.userId}>
        <p>{posts.id}</p>
        <p>{posts.title}</p>
        <p>{posts.body}</p>
      </div>   */}

      {/* form for posting data to the api */}
      {/* <form onSubmit={handleSubmit}>
        <input type='text' 
            value={title}
            onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input type='text' 
              value={body} 
              onChange={(event) => setBody(event.target.value)}>
        </input>
        <input type='submit' value='submit'></input>
      </form> */}
{/*
      {/* div for updating the posts */}
      {/* <form onSubmit={handleupdatePost}>
        <label>
          id
          <input type='number'
          value={id}
          onChange={(e) => setId(e.target.value)}
          ></input>
        </label> */}
        {/* <label>
          title
          <input type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label> */}
        {/* <label>
          body
          <input type='text'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          ></input>
        </label>
        <label>
          userId
          <input type='number'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          ></input>
        </label> */}
        {/* <button>Update</button>
      </form>  */}
    //  </>
      // )

      

