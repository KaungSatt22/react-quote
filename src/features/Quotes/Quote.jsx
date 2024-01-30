import React, { useState } from "react";
import ShowComments from "../../componets/Comments/ShowComments";
import AddComment from "../../componets/Comments/AddComment";
import { addComment, removeToQuote } from "./QuotesSlice";
import { useDispatch } from "react-redux";
import Reactions from "../../componets/reactions/Reactions";
import { FaTrash } from "react-icons/fa";

const Quote = ({ ...quote }) => {
  const [isShowCom, setIsShowCom] = useState(false);
  const [isAddCom, setIsAddCom] = useState(false);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const userCommentHandler = (e) => {
    setComment(e.target.value);
  };
  const sendCommenthandler = (quoteid) => {
    dispatch(addComment({ postid: quoteid, text: comment }));
    setComment("");
    setIsAddCom(false);
    setIsShowCom(true);
  };
  return (
    <div className="shadow-lg p-10 w-full lg:w-[70rem] mx-auto">
      <h2 className="text-center text-4xl mb-5">{quote.quote}</h2>
      <div className="mb-2">
        <i className="font-light">
          author by <span>{quote.author}</span>
        </i>
      </div>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-x-0 lg:items-center lg:justify-between">
        <Reactions quoteid={quote.id} reactions={quote.reactions} />
        <div className="flex items-center space-x-5">
          <button
            onClick={() => setIsShowCom(!isShowCom)}
            className="bg-blue-500 py-2 px-5 text-xl rounded-lg text-white"
          >
            {isShowCom ? "Close" : "Show"} Comments
          </button>
          <button
            onClick={() => setIsAddCom(!isAddCom)}
            className="bg-blue-500 py-2 px-5 text-xl rounded-lg text-white"
          >
            {isAddCom ? "Close" : "Add"} Comments
          </button>
          <div className=" inline-block">
            <FaTrash
              size={30}
              onClick={() => dispatch(removeToQuote({ postid: quote.id }))}
              className="cursor-pointer text-red-500"
            />
          </div>
        </div>
      </div>
      <div>
        {isShowCom &&
          (quote.comments.length > 0 ? (
            quote.comments.map((comment) => (
              <ShowComments key={comment.id} {...comment} quoteid={quote.id} />
            ))
          ) : (
            <div className="bg-slate-50 p-3 my-3">No Comments Found</div>
          ))}
      </div>
      <div>
        {isAddCom && (
          <AddComment
            sendCommenthandler={sendCommenthandler}
            userCommentHandler={userCommentHandler}
            quoteid={quote.id}
          />
        )}
      </div>
    </div>
  );
};

export default Quote;
