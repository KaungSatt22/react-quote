import React from "react";
import { useDispatch } from "react-redux";
import { addReactions } from "../../features/Quotes/QuotesSlice";

const Reactions = ({ quoteid, reactions }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-3">
      {Object.keys(reactions).map((emoji, idx) => (
        <div
          key={idx}
          className="text-xl cursor-pointer border-2 border-blue-200 p-2 rounded-md"
          onClick={() => dispatch(addReactions({ postid: quoteid, emoji }))}
        >
          {emoji} {reactions[emoji]}
        </div>
      ))}
    </div>
  );
};

export default Reactions;
