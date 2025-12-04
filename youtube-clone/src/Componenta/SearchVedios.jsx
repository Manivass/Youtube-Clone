import { FaUserCircle } from "react-icons/fa";

const SearchVedios = ({ info }) => {
  console.log("info" + info);
  const { snippet } = info;
  const { channelTitle, thumbnails, title, description } = snippet;
  return (
    <div className=" p-2 flex gap-3 shadow-sm">
      <div>
        <img
          src={thumbnails.high.url}
          className="h-[245px] min-w-[460px] rounded-xl"
        />
      </div>
      <div className="p-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-xs text-gray-700 mt-2">
          Published at : {snippet.publishedAt.slice(0, 10)}-
          {snippet.publishedAt.slice(11, -1)}
        </p>
        <h2 className="text-lg font-semibold mt-2 flex gap-2 text-gray-600">
          <FaUserCircle className="w-8 h-8" />
          {channelTitle}
        </h2>
        <p className="text-xs  mt-3">{description}</p>
      </div>
    </div>
  );
};

export default SearchVedios;
