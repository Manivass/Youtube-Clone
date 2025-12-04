import { FaUserCircle } from "react-icons/fa";

const CommentCards = ({ data }) => {
  return (
    <div className="flex gap-2 ">
      <FaUserCircle className=" h-11 w-11 my-2 " />
      <ul className=" my-auto">
        <li className="text-gray-700 font-semibold">{data.name}</li>
        <li className="font-semibold">{data.text}</li>
      </ul>
    </div>
  );
};

export default CommentCards;
