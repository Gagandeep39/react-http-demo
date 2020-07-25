import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
// import axios from 'axios';
// Using CUstom Axios instance
// This page will now use custom axios instance, while other pages will use GLobal Instance
import axios from '../../axios';

class Blog extends Component {

  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  // Best place to make http request
  // Component re reders if state changes in this part of lifecycle
  componentDidMount() {
    // Executes asynchronously, hence cant be stored in a const variable
    // Returns a promise
    axios.get('/posts')
    .then(response => {
      // console.log(response);
      // Selecting only 5 posts
      const posts = response.data.splice(0, 4);
      // Spreading the data o we can add aditional data to it
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Gagan'
        }
      })
      this.setState({
        posts: updatedPosts,
      })
    })
    .catch(error => {
      this.setState({error: true})
    })
  }

  postClickHandler = (id) => {
    this.setState({
      selectedPostId: id
    })
  }

  render() {

    let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>;
    if(!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post clicked={() => this.postClickHandler(post.id)} key={post.id} title={post.title} author={post.author}/>
      })
    }

    return (
      <div>
        <section className='Posts'>
          {posts}
          {/* <Post />
          <Post />
          <Post /> */}
        </section>
        <section>
          <FullPost id={this.state.selectedPostId}/>
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
