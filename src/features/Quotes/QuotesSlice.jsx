import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  quotes: [
    {
      id: uuidv4(),
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
    addToQuote: {
      prepare(author, quote) {
        return {
          payload: {
            id: uuidv4(),
            author,
            quote,
            comments: [],
            reactions: {
              "👍🏼": 0,
              "😍": 0,
              "😡": 0,
              "👎🏻": 0,
            },
          },
        };
      },
      reducer(state, { payload }) {
        state.quotes.push(payload);
      },
    },
    removeToQuote(state, { payload }) {
      state.quotes = state.quotes.filter(
        (quote) => quote.id !== payload.postid
      );
    },
    addComment(state, { payload }) {
      let findQuote = state.quotes.find((quote) => quote.id === payload.postid);
      if (findQuote) {
        findQuote.comments.push({ id: uuidv4(), text: payload.text });
      }
    },
    editComment(state, { payload }) {
      let findQuote = state.quotes.find((quote) => quote.id === payload.postid);
      if (findQuote) {
        findQuote.comments = findQuote.comments.map((comment) =>
          comment.id === payload.commentid
            ? { ...comment, text: payload.text }
            : comment
        );
      }
    },
    deleteComment(state, { payload }) {
      let findQuote = state.quotes.find((quote) => quote.id === payload.postid);
      if (findQuote) {
        findQuote.comments = findQuote.comments.filter(
          (comment) => comment.id !== payload.commentid
        );
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
  editComment,
} = QuoteSlice.actions;

export const quotes = (state) => state.quotes.quotes;
export const reactionCount = (state, postid, emoji) => {
  let findQuote = state.quotes.quotes.find((quote) => quote.id === postid);
  if (findQuote) {
    return findQuote[emoji];
  }
};
export default QuoteSlice;
