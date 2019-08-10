import React, {Component} from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

class SearchBar extends Component {
    render() {
        return(
            <div className="SearchBar__controls">
                <h1 className="SearchBar__title">Google Book Search</h1>
                <SearchBox
                    updateBooks={this.props.updateBooks}
                    updateSearchTerm={this.props.updateSearchTerm}
                    updateType={this.props.updateType}
                    updateCategory={this.props.updateCategory}
                />
                <FilterOptions
                    books={this.props.books}
                    updateType={this.props.updateType}
                    updateCategory={this.props.updateCategory}
                    selectedType={this.props.selectedType}
                    selectedCategory={this.props.selectedCategory}
                />
            </div>
        );
    }
}

export default SearchBar;