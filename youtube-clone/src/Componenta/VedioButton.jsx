const VedioButton = ({ items }) => {
  if (!items || !items.snippet) {
    console.log("Snippet missing for:", items);
    return null; // prevent crash
  }
  const { snippet, statistics } = items;
  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="w-full max-w-[340px] h-94 cursor-pointer shadow-lg rounded-lg ">
      <img src={thumbnails.high.url} className="rounded-2xl" />
      <div className=" p-2">
        <p className="text-md font-semibold">{title}</p>
        <h2 className="text-sm text-gray-600 font-bold">{channelTitle}</h2>
        <p className="text-sm text-gray-600">
          {Math.floor(viewCount / 100000)}k Views
        </p>
      </div>
    </div>
  );
};

export default VedioButton;
