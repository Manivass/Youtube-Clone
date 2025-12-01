import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav, Watch } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import { Google_API_KEY, Youtube_API_KEY } from "../utils/constant";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegThumbsDown } from "react-icons/fa6";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Store from "../utils/store";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Watch());
  }, []);
  const [searchParams] = useSearchParams();
  const vedioId = searchParams.get("v");
  const [information, setInformation] = useState("");
  const description = useSelector((store) => store.Nav.description);
  console.log(description);

  //get the api using Search Params
  useEffect(() => {
    fetchVideoApi();
  }, []);
  var fetchVideoApi = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        vedioId +
        "&key=" +
        Google_API_KEY
    );
    const response = await data.json();
    setInformation(response.items[0]);
  };
  console.log(information);
  const snippet = information.snippet;
  const statistics = information.statistics;
  console.log(statistics);
  const handleToggle = () => {
    dispatch(toggleNav());
  };

  return (
    <div className="border min-w-[1280px] w-full  px-12 py-4 h-auto mx-auto">
      <div className="w-[1050px]">
        <iframe
          className="w-full"
          height="500"
          src={
            "https://www.youtube.com/embed/" + vedioId + "?si=K6mJFxTyYC_GExtb"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="my-2 ">
          <h2 className="text-xl font-bold">{snippet?.title}</h2>
          <div className="w-[1050px]  my-6 flex gap-4 bg-gray-50 p-1 rounded-lg shadow-md shadow-gray-200">
            <div className="flex w-1/3  p-2 justify-between ">
              <h2 className="text-xl  font-bold  my-auto">
                <span className="text-blue-800">{snippet?.channelTitle}</span>
              </h2>
              <button className="bg-red-500 py-2 px-3 text-sm text-white font-semibold rounded-2xl mr-4">
                Subscribe
              </button>
            </div>
            <div className="flex w-3/5 p-2 justify-between mx-auto">
              <ul className="w-auto flex  my-auto bg-gray-200 p-2 rounded-2xl shadow-md shadow-gray-200 cursor-pointer">
                <li className="w-auto  border-r-4 flex h-full border-gray-700 pr-1">
                  <FaRegThumbsUp className="text-2xl" />
                  {Math.floor(statistics?.likeCount / 1000)}k
                </li>
                <li className="ml-1 w-auto flex h-full ">
                  <FaRegThumbsDown className="text-2xl" />
                </li>
              </ul>
              <button className="text-md flex h-full my-auto font-semibold bg-gray-200 py-2 px-3 rounded-2xl shadow-md shadow-gray-200 cursor-pointer">
                <FaRegShareFromSquare className="translate-y-1.5 mr-1 text-lg" />{" "}
                Share{" "}
              </button>
              <button className="text-md flex h-full my-auto font-semibold bg-gray-200 py-2 px-3 rounded-2xl shadow-md shadow-gray-200 cursor-pointer">
                <IoDownloadOutline className="translate-y-1 mr-1 text-lg" />{" "}
                Download{" "}
              </button>
              <button className="bg-gray-200 px-3 rounded-full shadow-md shadow-gray-200 cursor-pointer">
                <BsThreeDots className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-100 p-2 rounded-lg shadow-md shadow-gray-200">
          <h2 className="text-sm font-semibold">
            {statistics?.viewCount} views , Uploaded On : {snippet?.publishedAt}
          </h2>
          {description ? (
            <p className="text-sm text-gray-500">
              description : {snippet?.description.slice(1, 50)}
              <span
                onClick={handleToggle}
                className="font-bold text-black cursor-pointer"
              >
                ...more
              </span>{" "}
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              description : {snippet?.description}
              <span
                onClick={handleToggle}
                className="font-bold text-black cursor-pointer"
              >
                ...less
              </span>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
