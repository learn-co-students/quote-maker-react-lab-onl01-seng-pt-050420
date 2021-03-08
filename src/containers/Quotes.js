import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              { this.props.quotes.map((quote) => (<QuoteCard quote={quote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote}/>)) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({quotes: state.quotes});
const mapDispatchToProps = (dispatch) => ({
  upvoteQuote: (id) => dispatch(upvoteQuote(id)),
  downvoteQuote: (id) => dispatch(downvoteQuote(id)),
  removeQuote: (id) => dispatch(removeQuote(id))
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
 