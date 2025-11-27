import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { isNav } from "../utils/navSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navChange = () => {
    dispatch(isNav());
  }
  return (
    <div className="grid grid-flow-col p-2  my-3 shadow-lg ">
      <div className="flex col-span-1 gap-2">
        <IoMdMenu className="text-4xl translate-y-0.5 cursor-pointer" onClick={navChange}/>
        <img
          alt="youtube-icon"
          className=" h-11 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7Db4UESN2-nreFcIRiatDWcvSZJl0NQ4hA&s"
        />
      </div>

      <div className="flex col-span-10 justify-center p-2 -translate-y-1">
        <input
          className="w-[40%] h-full  bg-gray-100 rounded-l-2xl border border-gray-200 outline-gray-300 p-2 "
          type="text"
          placeholder="Search..."
        />
        <CiSearch className="text-4xl items-center h-full my-auto bg-gray-100 p-1 rounded-r-2xl border border-gray-200" />
      </div>
      <div className="text-4xl -translate-y-1">
        <CgProfile className="translate-y-2 cursor-pointer" />
      </div>
    </div>
  );
};
export default Header;
