import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Article extends Component {
  render() {
    return (
      <div className="article">
        <div className="article-author">{this.props.author}</div>
        <div className="article-text">
          {this.props.text.slice(0, 50)}
          <Link to={`/article/${this.props.id}`}>...</Link>
        </div>
        <div className="article-likes-wrapper">
          <span className="article-likes">{this.props.likes}</span>
          <span className="article-dislikes">{this.props.dislikes}</span>
        </div>
      </div>
    )
  }
}
