import React, { Component } from 'react';

class QuoteCard extends Component {

  handleDelete = event => {
    // debugger
    this.props.deleteQuote(event.currentTarget.id)
  }

  handleUpvote = event => {
    // debugger
    this.props.upvote(event.currentTarget.id)
  }

  handleDownvote = event => {
    // debugger
    this.props.downvote(event.currentTarget.id)
  }

  render() {
    return(
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{this.props.quote.content}</p>
            <footer>- <cite title="Source Title">{this.props.quote.author}</cite></footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
              id={this.props.quote.id}
              onClick={e => this.handleUpvote(e)}
            >
              Upvote
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id={this.props.quote.id}
              onClick={e => this.handleDownvote(e)}
            >
              Downvote
            </button>
            <button
              type="button"
              className="btn btn-danger"
              id={this.props.quote.id}
              onClick={e => this.handleDelete(e)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {this.props.quote.votes}</div>
        </div>
      </div>
    </div>
    )
  }
}

export default QuoteCard;