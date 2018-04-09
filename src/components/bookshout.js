import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import fetchData from '../actions/fetchdata-action';
import BookDetails from './book-details';
import details from '../actions/bookdetails-action';

export class BookShout extends Component {
    constructor(props){
        super(props);
        this.showbooks=this.showbooks.bind(this);
        this.bookdetails = this.bookdetails.bind(this);
    }
  componentDidMount() {
      this.props.fetchData();
  }
  bookdetails(book){
      console.log(book);
      this.props.details(book);
  }

  showbooks(books){
      return books.map(book=>{
          return(
              <li className="nav" key={book.id} onClick={() => this.bookdetails(book)}>
              <img src={book.image} width="100" height="100"/>
              <div>{book.name}</div>
              </li>
          )
      })
  }
  render() {
      const {books}= this.props;
    return (
        <div>
            <h1>Books:- </h1>
            <ul className="navs">
                {books.length == 0 ? <div>Loading...</div> : this.showbooks(books.results)}
            </ul>
            <hr/>
            <h2>Book details:- </h2>
            <BookDetails />
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.data
})

const mapDispatchToProps = {
  fetchData : fetchData,
  details: details
}

export default connect(mapStateToProps,mapDispatchToProps)(BookShout);
