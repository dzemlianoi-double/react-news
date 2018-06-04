import React, { Component } from 'react'
import axios from 'axios'

export default class FullArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: {}
    }
  }

  componentDidMount() {
    axios.get(`http://139.59.166.202/news/${this.props.match.params.id}`).then((resp) => {
      this.setState({
        article: resp.data
      })
    })
  }

  render() {
    return (
      <div className="article">
        <div className="article-author">{this.state.article.author}</div>
        <div className="article-text">
          {this.state.article.text}
        </div>
        <div className="article-likes-wrapper">
          <span className="article-likes">{this.state.article.likes}</span>
          <span className="article-dislikes">{this.state.article.dislikes}</span>
        </div>
      </div>
    )
  }
}
