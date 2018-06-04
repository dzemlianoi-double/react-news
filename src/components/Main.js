import React, { Component } from 'react'
import Articles from './articles/Articles'
import Home from './Home'
import FullArticle from './articles/FullArticle'
import { Route, Link } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route path='/article/:id' component={FullArticle} />
        <Route exact path='/articles' component={Articles} />
      </main>
    )
  }
}
