
import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  renderQuoteCards = quotes => {
    return (
      quotes.quotes.map((quote, id) => {
        return <QuoteCard key={id} quote={quote} deleteQuote={this.props.deleteQuote} upvote={this.props.upvote} downvote={this.props.downvote} />
      })
    )
  }

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
              {this.renderQuoteCards(this.props)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteQuote: (id) => { dispatch({type: "DELETE_QUOTE", payload: id}) },
    upvote: (id) => { dispatch({type: "UPVOTE", payload: id}) },
    downvote: (id) => {dispatch({type: "DOWNVOTE", payload: id}) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);