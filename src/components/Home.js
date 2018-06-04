import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
      <h1>Hello at our blog</h1>
      <div>
        If you want to see articles
        <Link to="/articles">click here</Link>
      </div>
    </div>
  )
}

export default Home;
