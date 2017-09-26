import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Header from './Header'
import Shelf from './Shelf'

class BookCase extends React.Component {

    state = {
        books: []
    }

    updateBooks = (book) => {
        this.setState((prevState) => ({
            books: prevState.books.filter((c) => c.id !== book.id).concat(book)
        }))
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    render() {

        return (
            <div className="list-books">
                <Header title="MyReads"></Header>
                <div className="list-books-content">
                    <div>
                        <Shelf onUpdateBooks={this.updateBooks} title="Currently Reading" type="currentlyReading" books={this.state.books}></Shelf>
                        <Shelf onUpdateBooks={this.updateBooks} title="Want to Read" type="wantToRead" books={this.state.books}></Shelf>
                        <Shelf onUpdateBooks={this.updateBooks} title="Read" type="read" books={this.state.books}></Shelf>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BookCase;