import React from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBooks: PropTypes.func
    }

    render() {
        let booksInShelf = this.props.books.filter((book) => book.shelf === this.props.type);
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {booksInShelf.map((book) => (
                            <Book book={book} key={book.id} onUpdateBooks={this.props.onUpdateBooks} ></Book>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Shelf;