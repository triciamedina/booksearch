import React, {Component} from 'react';
import './Book.css';

class Book extends Component {
    render() {
        const {volumeInfo, saleInfo, searchInfo} = this.props;
        const title = <h2 className="book__title">{volumeInfo.title}</h2>;
        const image = !volumeInfo.imageLinks ? 
            <img className="book__image" src="https://books.google.com/googlebooks/images/no_cover_thumb.gif" alt="" /> : 
            <img className="book__image" src={volumeInfo.imageLinks.smallThumbnail} alt="" />;
        const authors = !volumeInfo.authors ? '' : <p className="book__authors">{volumeInfo.authors.map((author, i) => <span key={i}>{author}</span>)}</p>;
        const snippet = !searchInfo ? '' : <p className="book__snippet" dangerouslySetInnerHTML={ {__html : searchInfo.textSnippet}}></p>;
        const price = !saleInfo.retailPrice ? '' : <p className="book__price">Price: ${saleInfo.retailPrice.amount}</p>;
        const link = <a className="book__link" href={volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">{volumeInfo.infoLink}</a>
        return (
        <div className="book">
            <div className="book__thumbnail">
                {image}
            </div>
            <div className="book__info">
                {title}
                {link}
                {authors}
                {price}
                {snippet}
            </div>
        </div>
        )
    }
}

export default Book;