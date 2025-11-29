import useYoutubeAPI from "../utils/useYoutubeAPI";
import VedioButton from "./VedioButton";
const VediosCards = () => {
  const vedios = useYoutubeAPI();
  console.log(vedios);
  return (
    <div className="mt-3 p-6 flex flex-wrap gap-6 w-auto justify-between">
      {vedios.map((cards) => (
        <div key={cards.id}>
             <VedioButton items={cards} />
        </div>
       
      ))}
    </div>
  );
};
export default VediosCards;
