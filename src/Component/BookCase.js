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

        var datanew = this.state.books;
        var bookIndex = datanew.findIndex(function (c) {
            return c.id === book.id;
        });
        if (bookIndex !== -1)
            datanew[bookIndex] = book;
        else
            datanew.push(book);

        this.setState({ books: datanew });
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