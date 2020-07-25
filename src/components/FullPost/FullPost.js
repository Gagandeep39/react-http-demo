import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    if (this.props.id) {
      // If loop is entered if there is no loaded post or theere is a loaded post but with different ID
      // This prevents infinite looping
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
        axios
          .get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
          .then((response) => {
            console.log(response);
            this.setState({ loadedPost: response.data });
          })
          .catch(error => console.log(error));
      }
    }
  }

  deleteButtonHandler = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id) post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    if (this.state.loadedPost) {
      post = (
        <div className='FullPost'>
          <h1> {this.state.loadedPost.title} </h1>
          <p> {this.state.loadedPost.body} </p>
          <div className='Edit'>
            <button onClick={this.deleteButtonHandler} className='Delete'>Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
