import { useState } from "react";
import { editComment } from "../../features/Quotes/QuotesSlice";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";

const EditComment = ({ quoteid, currentCom, onEdit, commentid }) => {
  const [editText, setEditText] = useState(currentCom);
  const dispatch = useDispatch();
  const handleEdit = () => {
    if (editText === currentCom) {
      onEdit();
      return null;
    }
    if (editText) {
      dispatch(editComment({ postid: quoteid, commentid, text: editText }));
      onEdit();
    }
  };
  return (
    <div className="flex items-center justify-between w-full space-x-5">
      <input
        type="text"
        className="w-full p-2 border-2 border-black"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button className="bg-green-200 p-2 rounded-lg" onClick={handleEdit}>
        Update
      </button>
      <MdCancel
        className="cursor-pointer text-red-500"
        size={25}
        onClick={onEdit}
      />
    </div>
  );
};

export default EditComment;
