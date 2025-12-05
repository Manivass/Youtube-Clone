import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addChatList } from "../utils/chatSlice";
import { autoNameGenerate } from "../utils/autoGenrateName";
import { autoStringGenerate } from "../utils/autoGenrateString";
import { LIVE_CHAT_STRING } from "../utils/constant";
import LiveChatDiv from "./LiveChatDiv";
const LiveChatSlide = () => {
  const dispatch = useDispatch();
  const chatList = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChatList({
          name: autoNameGenerate(),
          text: autoStringGenerate(LIVE_CHAT_STRING),
        })
      );
    }, 500);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div>
      <div className=" w-11/12 h-[500px] mx-auto px-3 py-3 bg-slate-100    overflow-y-scroll flex flex-col-reverse">
        {chatList.map((val) => (
          <div className="">
            <LiveChatDiv info={val} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveChatSlide;
