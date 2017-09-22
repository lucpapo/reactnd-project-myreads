import React from 'react'
import { Route } from 'react-router-dom'

import BookCase from './Component/BookCase'
import Search from './Component/Search'

import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookCase />
        )} />
        <Route path='/search' render={({ history }) => (
          <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp
