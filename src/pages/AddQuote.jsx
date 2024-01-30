import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToQuote } from "../features/Quotes/QuotesSlice";
const AddQuote = () => {
  const [isBtn, setIsBtn] = useState(false);
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authorHandler = (e) => {
    setAuthor(e.target.value);
    if (author && quote) {
      setIsBtn(true);
    }
  };
  const quoteHandler = (e) => {
    setQuote(e.target.value);
    if (author && quote) {
      setIsBtn(true);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addToQuote(author, quote));
    navigate("/allquotes");
  };
  return (
    <div className="container mx-auto ">
      <form
        className="border-2 mt-20 flex flex-col rounded-lg p-5 lg:w-[56rem] mx-auto space-y-5"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-xl font-bold">
            Author Name :
          </label>
          <input
            type="text"
            value={author}
            onChange={authorHandler}
            id="name"
            className="border-2 rounded-lg text-xl p-2 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="quote" className="text-xl font-bold">
            Enter Your Quote :
          </label>
          <textarea
            value={quote}
            onChange={quoteHandler}
            cols="30"
            rows="10"
            id="quote"
            className="border-2 rounded-lg outline-none text-xl p-2"
          ></textarea>
        </div>
        <button
          className={`p-3 rounded-lg text-xl  cursor-pointer ${
            isBtn ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-200"
          }`}
          disabled={!isBtn}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddQuote;
