import React, {Component} from 'react';
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedType: null,
      selectedCategory: null,
      books : []
    }
  }
  updateBooks(bookResults) {
    this.setState({
      books: bookResults
    })
  }
  updateType(value) {
    this.setState({
      selectedType: value
    })
  }
  updateCategory(value) {
    this.setState({
      selectedCategory: value
    })
  }
  render() {
    return (
      <main className='App'>
        <SearchBar
          books={this.state.books}
          updateBooks={bookResults => this.updateBooks(bookResults)}
          updateType={value => this.updateType(value)}
          updateCategory={value => this.updateCategory(value)}
          selectedType={this.state.selectedType}
          selectedCategory={this.state.selectedCategory}
        />
        <BookList
          books={this.state.books}
          selectedType={this.state.selectedType}
          selectedCategory={this.state.selectedCategory}
        />
      </main>
    );
  }
}

export default App;