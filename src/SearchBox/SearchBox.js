import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchTerm: '',
      }
  }
  inputChanged(value){
    this.setState({
      searchTerm: value
      })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateCategory(null);
    this.props.updateType(null);
    const params = {
      q: this.state.searchTerm,
      key: 'AIzaSyAwXQOQpRsy_DyxMOyNSAgly8sztY5F4cQ'
    };
    const searchUrl = 'https://www.googleapis.com/books/v1/volumes';
    const queryItems = Object.keys(params).map((key => `${key}=${params[key]}`));
    const url = searchUrl + '?' + queryItems.join('&')
    console.log(url)
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again.')
        }
          return res;
        })
      .then(res => res.json())
      .then(data => {
        this.props.updateBooks(
          data.items
        )
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  render() {
    const errMessage = this.state.error ? <p className="SearchBox__error">{this.state.error}</p> : '';
    return (
      <div className="SearchBox">
        <form className="searchbooks__form" onSubmit={e => this.handleSubmit(e)}>
          <input
            placeholder="Ulysses"
            value={this.state.searchTerm}
            onChange={e => this.inputChanged(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>  
        {errMessage}
      </div>
    );
  }
}

export default SearchBox;