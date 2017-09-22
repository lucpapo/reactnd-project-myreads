import React from 'react';
import ChangeShelf from './ChangeShelf'
import * as BooksAPI from '../BooksAPI'

class Book extends React.Component {

    updateShelf = (shelf) => {

        BooksAPI.update(this.props.book, shelf).then((retorno) => {
            this.props.book.shelf = shelf;
            this.props.onUpdateBooks && this.props.onUpdateBooks(this.props.book);
        });

    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <ChangeShelf shelf={this.props.book.shelf} onUpdate={this.updateShelf} />
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </li>
        );
    }
}

export default Book;