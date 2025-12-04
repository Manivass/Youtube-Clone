import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Google_API_KEY } from "../utils/constant";
import SearchVedios from "./SearchVedios";
import { useDispatch } from "react-redux";
import { Search } from "../utils/navSlice";

const Results = () => {
  const [searchParams] = useSearchParams();
  const resultsId = searchParams.get("q");
  const [resultsVedios, setResultsVedios] = useState([]);
  console.log(resultsId);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchResults();
    dispatch(Search());
  }, []);
  const fetchResults = async () => {
    var data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        resultsId +
        "&type=video&key=" +
        Google_API_KEY
    );
    const response = await data.json();
    setResultsVedios(response.items);
  };

  return (
    <div className="border col-span-100 p-2 ">
      {resultsVedios?.map((datas) => (
        <SearchVedios info={datas} />
      ))}
    </div>
  );
};

export default Results;
