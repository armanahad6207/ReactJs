import PropTypes from "prop-types";
function Filterrestaurant({ resData }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-2xl">
      {/* First Row */}
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={resData.restaurant_thumb}
            alt="Image"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">
            {resData.restaurant_name}
          </div>
          <p className="mt-2 text-gray-500">description</p>
        </div>
      </div>
      {/* Second Row */}
      <div className="p-8 bg-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">Cuisine: cuisine</span>
          <span className="text-gray-900 font-semibold">${resData.cost}</span>
        </div>
      </div>
    </div>
  );
}
Filterrestaurant.propTypes = {
  resData: PropTypes.shape({
    restaurant_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    restaurant_thumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default Filterrestaurant;
