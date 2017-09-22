import React from 'react';
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle';
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends React.Component {

  state = {
    query: '',
    books: []
  }

  onSearchBook = (query) => {
    if (query.trim() === "")
      this.setState({ books: [] });
    else
      BooksAPI.search(query.trim(), 20).then((books) => {

        if (!books || books.error)
          this.setState({ books: [] })
        else
          this.setState({ books })
      });
  }

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input type="text" placeholder="Search by title or author" value={this.query}
                onChange={(event) => this.onSearchBook(event.target.value)} />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <Book book={book} key={book.id} ></Book>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;