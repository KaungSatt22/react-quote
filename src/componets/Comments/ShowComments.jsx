import React from "react";
import { FaTrash, FaRegEdit } from "react-icons/fa";

import { deleteComment } from "../../features/Quotes/QuotesSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import EditComment from "./editComment";

const ShowComments = ({ quoteid, id, text }) => {
  const [isEdit, setIsEdit] = useState(false);

  let dispatch = useDispatch();
  const handleEdit = () => {
    setIsEdit(false);
  };

  return (
    <div className="bg-slate-50 p-3 my-3 text-xl flex justify-between items-center">
      {isEdit ? (
        <EditComment
          quoteid={quoteid}
          commentid={id}
          currentCom={text}
          onEdit={handleEdit}
        />
      ) : (
        <>
          <p>{text}</p>
          <div className="flex space-x-5">
            <FaRegEdit
              className="cursor-pointer"
              size={25}
              onClick={() => setIsEdit(true)}
            />
            <FaTrash
              className="text-red-500 cursor-pointer"
              size={25}
              onClick={() =>
                dispatch(
                  deleteComment({
                    postid: quoteid,
                    commentid: id,
                  })
                )
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ShowComments;
