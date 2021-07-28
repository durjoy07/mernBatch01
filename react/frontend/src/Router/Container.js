import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Post from './Post'
import SinglePost from './SinglePost'
import {BrowserRouter, Route} from 'react-router-dom'

function Container() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/posts' exact component={Post} />
      <Route path='/posts/:id' component={SinglePost} />
        </div>
      </BrowserRouter>
    );
}

export default Container
