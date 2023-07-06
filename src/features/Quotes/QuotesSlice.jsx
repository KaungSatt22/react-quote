import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  quotes: [
    {
      id: 1,
      author: "test",
      quote: "test",
      comments: [
        { id: 1, text: "test" },
        { id: 2, text: "testing" },
      ],
      reactions: {
        "👍🏼": 0,
        "😍": 0,
        "😡": 0,
        "👎🏻": 0,
      },
    },
  ],
};

const QuoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addToQuote(state, { payload }) {
      state.quotes.push({
        id: uuidv4(),
        author: payload.author,
        quote: payload.quote,
        comments: [],
        reactions: {
          "👍🏼": 0,
          "😍": 0,
          "😡": 0,
          "👎🏻": 0,
        },
      });
    },
    removeToQuote(state, { payload }) {
      let findIdx = state.quotes.findIndex(
        (quote) => quote.id === payload.postid
      );
      if (findIdx !== -1) {
        state.quotes.splice(findIdx, 1);
      }
    },
    addComment(state, { payload }) {
      let findQuote = state.quotes.find((quote) => quote.id === payload.postid);
      if (findQuote) {
        findQuote.comments.push({ id: uuidv4(), text: payload.text });
      }
    },
    deleteComment(state, { payload }) {
      let findQuote = state.quotes.find((quote) => quote.id === payload.postid);
      if (findQuote) {
        let commentIdx = findQuote.comments.findIndex(
          (comment) => comment.id === payload.commentid
        );
        if (commentIdx !== -1) {
          findQuote.comments.splice(commentIdx, 1);
        }
      }
    },
    addReactions(state, { payload }) {
      const findQuote = state.quotes.find(
        (quote) => quote.id === payload.postid
      );
      if (findQuote) {
        findQuote.reactions[payload.emoji]++;
      }
    },
  },
});

export const {
  addToQuote,
  removeToQuote,
  deleteComment,
  addComment,
  addReactions,
} = QuoteSlice.actions;
export const quotes = (state) => state.quotes.quotes;
export const reactionCount = (state, postid, emoji) => {
  let findQuote = state.quotes.quotes.find((quote) => quote.id === postid);
  if (findQuote) {
    return findQuote[emoji];
  }
};
export default QuoteSlice.reducer;
