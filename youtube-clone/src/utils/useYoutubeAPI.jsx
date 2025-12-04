import { useEffect, useState } from "react";
import { Youtube_API_KEY } from "./constant";
const useYoutubeAPI = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  var fetchData = async () => {
    const data = await fetch(Youtube_API_KEY);
    const response = await data.json();
    setData(response.items);
  };

  return data;
};
export default useYoutubeAPI;
