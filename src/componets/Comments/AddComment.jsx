import React from "react";
import { BsFillSendFill } from "react-icons/bs";

const AddComment = ({ sendCommenthandler, userCommentHandler, quoteid }) => {
  return (
    <div className="flex items-center mt-5">
      <input
        type="text"
        placeholder="Add Comment"
        className="border-2 w-full p-2 text-xl rounded-lg outline-none"
        onChange={userCommentHandler}
      />
      <div>
        <BsFillSendFill
          size={30}
          className="cursor-pointer"
          onClick={() => sendCommenthandler(quoteid)}
        />
      </div>
    </div>
  );
};

export default AddComment;
