import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Watch } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Watch());
  }, []);
  const [searchParams] = useSearchParams();
  const vedioId = searchParams.get("v");
  console.log(vedioId);

  return (
    <div className="border min-w-[1280px] w-full  px-12 py-4 h-auto mx-auto">
      <iframe
        width="1050"
        height="500"
        src={
          "https://www.youtube.com/embed/" + vedioId + "?si=K6mJFxTyYC_GExtb"
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
