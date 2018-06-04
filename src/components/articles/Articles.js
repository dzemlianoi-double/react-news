import React, { Component } from 'react'
import axios from 'axios'
import Article from './Article'

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get('http://139.59.166.202/news').then((resp) => {
      this.setState({
        articles: resp.data
      })
    })
  }

  render() {
    const articles = this.state.articles.map((article) => {
      return <Article
                id={article.id}
                author={article.author}
                text={article.text}
                likes={article.likes}
                dislikes={article.dislikes}
             />
    })

    return (
      <div>
        {articles}
      </div>
    )
  }
}
