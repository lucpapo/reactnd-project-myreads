import React from 'react';

const ChangeShelf = ({ onUpdate, shelf }) => (
    <select id="shelf" onChange={onUpdate} value={shelf}  >
        <option value="" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
)

export default ChangeShelf;