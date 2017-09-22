import React from 'react';

class ChangeShelf extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shelf: this.props.shelf
        };

    }

    change = (event) => {
        this.props.onUpdate(event.target.value);
    }

    render() {
        return (
            <select id="shelf" onChange={this.change} value={this.state.shelf}  >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        );
    }
}

export default ChangeShelf;