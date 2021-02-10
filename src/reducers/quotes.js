import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {

    case "ADD_QUOTE":
      return [
        ...state,
        {
          id: uuid(),
          votes: 0,
          ...action.payload
        }
      ]

    case "DELETE_QUOTE":
      let index;

      state.map((quote, id) => {
        if (quote.id === action.payload){
            index = state.indexOf(quote)
        }
      })

      return [
        ...state.slice(0, index), ...state.slice(index + 1)
      ]

    case "UPVOTE":

      let quoteUpvote = state.find(e => e.id === action.payload)
      
      quoteUpvote.votes += 1

      return [...state]

    case "DOWNVOTE":

      let quoteDownvote = state.find(e => e.id === action.payload)

      quoteDownvote.votes -= 1

      return [...state]

    default:
      return state
  }
}
