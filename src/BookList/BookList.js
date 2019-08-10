import React, {Component} from 'react';
import './BookList.css';
import Book from '../Book/Book'

class BookList extends Component {
    
    render() {
        const {selectedCategory, selectedType} = this.props;
        const books = this
            .props
            .books
            .filter(book => 
                (selectedType === null || selectedType === book.saleInfo.saleability)
                && (selectedCategory === null || 
                    (book.volumeInfo.categories ? book.volumeInfo.categories.includes(selectedCategory) 
                        : selectedCategory === null))
                )
            .map((book, i) => 
                <Book 
                    {...book} 
                    key={i}
                />
            );
        
        return (
            <div className="booklist">
                {books}
            </div>
        )
    }
}

export default BookList;