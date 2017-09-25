import React from 'react';
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle';
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends React.Component {

  state = {
    query: '',
    books: [],
    booksSelected: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((booksSelected) => {
      this.setState({ booksSelected })
    })
  }

  getItemBookCase = (book) => {
    var itemBookCase = this.state.booksSelected.filter((item) => item.id === book.id);
    return (itemBookCase[0] ? itemBookCase[0].shelf : "none");
  }

  onSearchBook = (query) => {
    if (query.trim() === "")
      this.setState({ books: [] });
    else
      BooksAPI.search(query.trim(), 20).then((books) => {
        this.setState({ books: books.sort(sortBy('title')) });
      }).catch(() => {
        this.setState({ books: [] });
      });
  }

  updateBooks = (book) => {
    this.setState((prevState) => ({
      books: prevState.books.filter((c) => c.id !== book.id).concat(book).sort(sortBy('title'))
    }))
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
              <Book book={book} key={book.id} shelf={this.getItemBookCase(book)} onUpdateBooks={this.updateBooks}></Book>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;