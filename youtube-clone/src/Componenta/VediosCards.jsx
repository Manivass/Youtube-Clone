import { Link } from "react-router-dom";
import useYoutubeAPI from "../utils/useYoutubeAPI";
import VedioButton from "./VedioButton";

const VediosCards = () => {
  const vedios = useYoutubeAPI();
  
  

  return (
    <div className="mt-3 p-6 flex flex-wrap gap-6 w-auto justify-between">
      {vedios.map((cards) => (
        <Link key={cards.id} to={`/watch?v=${cards.id}`}>
          <VedioButton items={cards} />
        </Link>
      ))}
    </div>
  );
};
export default VediosCards;
