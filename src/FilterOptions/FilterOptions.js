import React, {Component} from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
    changeType(value) {
        if(value === "All") {
            this.props.updateType(null);
        } else {
            this.props.updateType(value);
        }
    }
    changeCategory(value) {
        if(value === "Any") {
            this.props.updateCategory(null);
        } else {
            this.props.updateCategory(value);
        }
    }
    render() {
        const uniqueTypes = [...new Set(this.props.books.map(item => item.saleInfo.saleability))];
        const typeOptions = uniqueTypes.map((option, i) => 
            (option === 'FOR_SALE' && <option value={option} key={i}>Ebook (Buy)</option>) ||
            (option === 'NOT_FOR_SALE' && <option value={option} key={i}>Print</option>) ||
            (option === 'FOR_SALE_AND_RENTAL' && <option value={option} key={i}>Ebook (Buy or Rent)</option>) ||
            (option === 'FREE' && <option value={option} key={i}>Ebook (Free)</option>)
        );

        const categories = this.props.books.length !== 0 ? 
            (this.props.books
                .map(item => item.volumeInfo.categories)
                .filter(item => item)
                .map(item => item[0]))
            : [] ;
        const uniqueCategories = this.props.books.length !== 0 ? [...new Set(categories)] : []
        const categoryOptions = uniqueCategories.map((option, i) => <option value={option} key={i}>{option}</option>);

        return (
            <div className="FilterOptions">
                <div className="FilterOptions__option">
                    <div>
                        <label htmlFor="type">Type:</label>
                        <select
                            id="type"
                            name="type"
                            onChange={e => this.changeType(e.target.value)}
                        >
                            <option value="All">All</option>
                            {typeOptions}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="category">Category:</label>
                        <select
                            id="category"
                            name="category"
                            onChange={e => this.changeCategory(e.target.value)}
                        >
                            <option value="Any">Any</option>
                            {categoryOptions}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterOptions;