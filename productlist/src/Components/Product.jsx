function Product({ title, price, image }) {
  return (
    <div>
      <div className="max-w-sm shadow-lg bg-white overflow-hidden rounded-sm hover:scale-105 transform transition-transform duration-300">
        <img
          src={image}
          className="w-full transform transition-transform duration-300 hover:scale-90 max-h-[200px] object-contain"
        />
        <div className="px-4 py-6">
          <p className="text-gray-400 font-bold mb-2">{title}</p>
          <p className=" text-xl font-medium bg-yellow-300 inline px-2 py-1 rounded-sm text-gray-900">
            ${price}
          </p>
        </div>
        <div className="px-4 pb-5">
          <button className="rounded-sm font-semibold bg-blue-500 hover:bg-blue-800 text-white px-6 py-2">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
