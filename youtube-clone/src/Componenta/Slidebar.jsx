import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoDownloadSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Slidebar = () => {
  const nav = useSelector((store) => store.Nav.hambersand);
  console.log(nav);
  if (!nav) return null;
  return (
    <div className="w-[220px] shrink-0 shadow-2xl p-2 border-gray-200 ml-2 border ">
      <ul className="pb-4 border-b border-gray-300 flex flex-col gap-2">
        <li>
          <Link to="/" className="flex text-xl font-bold gap-3 cursor-pointer">
            <IoHomeSharp className="translate-y-1" />
            Home
          </Link>
        </li>
        <li className="flex text-xl font-bold gap-3 ">
          <SiYoutubeshorts className="translate-y-1" />
          Shorts
        </li>
      </ul>

      <h2 className="text-md font-bold flex my-1">
        You <MdOutlineKeyboardArrowRight className="text-md translate-y-1.5 " />
      </h2>
      <ul className="pb-4 border-b border-gray-300 flex flex-col gap-2 ">
        <li className="flex text-xl font-bold gap-3">
          <FaHistory className="translate-y-1" />
          History
        </li>
        <li className="flex text-xl font-bold gap-3 mt-2 ">
          <MdFeaturedPlayList className="translate-y-1" />
          PlayList
        </li>
        <li className="flex text-xl font-bold gap-3 mt-2">
          <MdWatchLater className="translate-y-1" />
          Watch Later
        </li>
        <li className="flex text-xl font-bold gap-3 mt-2">
          <FaThumbsUp className="translate-y-1" />
          Liked Videos
        </li>
        <li className="flex text-xl font-bold gap-3 mt-2 ">
          <FaYoutube className="translate-y-1" />
          Your Videos
        </li>
        <li className="flex text-xl font-bold gap-3 mt-2 ">
          <IoDownloadSharp className="translate-y-1" />
          Downloads
        </li>
      </ul>
      <h2 className="text-md font-bold">Explore </h2>
      <ul className="pb-4 border-b border-gray-300 flex flex-col gap-2 mt-1">
        <li className="flex text-xl font-bold gap-3">
          <FaCartShopping className="translate-y-1" />
          Shopping
        </li>
        <li className="flex text-xl font-bold gap-3 mt-2 ">
          <FaMusic className="translate-y-1" />
          Music
        </li>
        <li className="flex text-xl font-bold gap-3 mt-2">
          <MdLocalMovies className="translate-y-1" />
          Movies
        </li>
        <li className="flex text-xl font-bold gap-3 mt-2">
          <MdLiveTv className="translate-y-1" />
          Live
        </li>
        <li className="flex text-xl font-bold gap-3 mt-2 ">
          <SiYoutubegaming className="translate-y-1" />
          Gaming
        </li>
      </ul>
    </div>
  );
};

export default Slidebar;
