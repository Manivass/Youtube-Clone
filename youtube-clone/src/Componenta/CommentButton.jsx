import CommentCards from "./CommentCards";

const CommentButton = ({ values }) => {
  console.log(values);

  return (
    <div className=" p-0 rounded-lg  ">
      {values.map((info, index) => (
        <div key={index} className="bg-gray-100 rounded-lg  my-2  py-2 px-4">
          <CommentCards data={info} />
          <div className="border-l ml-5 pl-1">
            <CommentButton values={info.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default CommentButton;
