import React from "react";
import { FaTrash } from "react-icons/fa";
import { deleteComment } from "../../features/Quotes/QuotesSlice";
import { useDispatch } from "react-redux";

const ShowComments = ({ quoteid, ...comment }) => {
  let dispatch = useDispatch();
  return (
    <div className="bg-slate-50 p-3 my-3 text-xl flex justify-between items-center">
      <p>{comment.text}</p>
      <FaTrash
        className="text-red-500 cursor-pointer"
        size={25}
        onClick={() =>
          dispatch(
            deleteComment({
              postid: quoteid,
              commentid: comment.id,
            })
          )
        }
      />
    </div>
  );
};

export default ShowComments;
