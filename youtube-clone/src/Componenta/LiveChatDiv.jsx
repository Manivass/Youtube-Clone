import { FaUserCircle } from "react-icons/fa";

const LiveChatDiv = ({info}) => {
    const {name,text} = info ;
  return (
    <div className="flex gap-3 shadow-xs rounded-sm p-2 ">
      <FaUserCircle className="h-8 w-8" />
      <span className="flex gap-4 items-center">
        <h2 className="font-bold">{name}</h2>
        <p className="text-sm">{text}</p>
      </span>
    </div>
  );
};

export default LiveChatDiv;
