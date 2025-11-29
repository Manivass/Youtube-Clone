const Buttoncards = ({ name }) => {
  return (
    <div className="min-w-[4%] w-auto shadow-lg cursor-pointer">
      <h2 className="px-3 py-2  text-sm bg-gray-200  text-center font-semibold rounded-lg">
        {name}
      </h2>
    </div>
  );
};
export default Buttoncards;
