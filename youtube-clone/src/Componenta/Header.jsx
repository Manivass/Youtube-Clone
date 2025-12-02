import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { isNav } from "../utils/navSlice";
import { Component, useEffect, useState } from "react";
import { YOUTUBE_Suggestion_SearchKey } from "../utils/constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";
import { saveCache } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [focus, setFocus] = useState(false);
  const show = useSelector((Store) => Store.search);
  console.log(Boolean(show[searchQuery]));

  console.log(show);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (show[searchQuery]) {
        setSuggestion(show[searchQuery]);
      } else {
        fetchQuery();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  var fetchQuery = async () => {
    const data = await fetch(YOUTUBE_Suggestion_SearchKey + searchQuery);
    const response = await data.json();

    setSuggestion(response[1]);
    dispatch(
      saveCache({
        [searchQuery]: response[1],
      })
    );
  };
  console.log(suggestion);

  // Debouncing Example

  // key - i
  //    -- render the Component
  //    --useEffect()
  //    -- setTimeout

  // key -ip
  //   --declines an API call (return () => { clearTimeOut()})
  //   --Rerender the Component
  //   --set Timeout

  const dispatch = useDispatch();
  const navChange = () => {
    dispatch(isNav());
  };
  return (
    <div className="grid grid-flow-col p-2  my-3 shadow-lg ">
      <div className="flex col-span-1 gap-2">
        <IoMdMenu
          className="text-4xl translate-y-0.5 cursor-pointer"
          onClick={navChange}
        />
        <img
          alt="youtube-icon"
          className=" h-11 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7Db4UESN2-nreFcIRiatDWcvSZJl0NQ4hA&s"
        />
      </div>

      <div className="w-[50%] col-span-10  p-2 -translate-y-1 mx-auto">
        <div className="w-full flex  justify-center h-full">
          <input
            className="w-[95%] h-full text-md outline-blue-500  bg-gray-100 rounded-l-full border border-gray-200  px-4 py-2 "
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <CiSearch className="text-xl w-12 px-3  items-center h-full  my-auto bg-gray-100 p-1 rounded-r-full border border-gray-200" />
        </div>
        {focus && suggestion.length != 0 && (
          <div className="fixed w-[90%] rounded-xl  py-3 px-1 bg-white mx-auto shadow-sm">
            <ul>
              {suggestion.map((related, index) => (
                <li
                  key={index}
                  className="flex gap-2  py-1 px-2 hover:bg-gray-100 cursor-default shadow-xs"
                >
                  <IoSearchOutline className="text-xl font-bold translate-y-0.5" />{" "}
                  {related}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="text-4xl -translate-y-1">
        <CgProfile className="translate-y-2 cursor-pointer" />
      </div>
    </div>
  );
};
export default Header;
