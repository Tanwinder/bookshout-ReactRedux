import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BookDetails extends Component {

  render() {
    const {book} = this.props;
    if(book == null) {
        return(<div>please select any character...</div>)
    };
    return (
      <div>
        <img src={book.image} width="300" height="300"/>
        <div>Name:- {book.name}</div>
        <div>Gender:- {book.gender}</div>
        <div>Species:- {book.species}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  book: state.details
})

export default connect(mapStateToProps)(BookDetails)
