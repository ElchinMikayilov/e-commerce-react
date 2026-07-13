import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../services/Api";
import Loader from "../components/Loader";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { message } from "antd";

message.config({
    maxCount: 1,
    top: 75,
})

const Detail = ({ favourite, setFavourite, basket, setBasket }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getDetail(id).then((res) => {
      setProducts(res.data)
    });
  }, [id]);

  if (!products) {
    return <Loader />;
  }

  const liked = favourite.some((card) => card.id === products.id);

  const fav = () => {
    if (liked) {
      setFavourite(favourite.filter((item) => item.id !== products.id));
    } else {
      setFavourite([...favourite, products]);
    }
  };

  const add = basket.find((card) => card.id === products.id);

  const addBasket = () => {
    if (add) {
      setBasket(
        basket.map((card) =>
          card.id === products.id
            ? { ...card, count: card.count + 1 }
            : card
        )
      )
      message.success('Məhsul səbətdə artırıldı 🛒')
    } else {
      setBasket([...basket, { ...products, count: 1 }])
      message.success('Məhsul səbətə əlavə edildi 🛒')
    }
  };

  return (
    <div className="relative px-3 py-6">
      <div className="max-w-6xl mx-auto mb-5">
        <button
          onClick={() => navigate(-1)}
          className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 duration-300 cursor-pointer"
        >
          <IoIosArrowBack className="text-2xl" />
        </button>
      </div>

      <div className="relative max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <button
          onClick={fav}
          className="absolute right-4 top-4 sm:right-6 sm:top-6 text-xl sm:text-2xl text-red-600 cursor-pointer"
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>

        <div>
          <img
            src={products.thumbnail}
            alt={products.title}
            className="w-full h-72 sm:h-96 lg:h-[500px] object-cover rounded-2xl"
          />

          <div className="flex gap-2 sm:gap-3 mt-4 overflow-x-auto pb-2">
            {products.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="min-w-[70px] w-20 h-20 sm:w-24 sm:h-24 rounded-xl border object-cover cursor-pointer hover:scale-105 duration-300"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {products.category}
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
              {products.title}
            </h1>

            <p className="text-gray-500 mt-4 leading-7">
              {products.description}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-3xl sm:text-4xl font-bold text-green-600">
              ${products.price}
            </span>

            <span className="bg-red-100 text-red-500 px-3 py-1 rounded-lg">
              -{products.discountPercentage}%
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-700 text-sm sm:text-base">
            <p>
              <b>⭐ Rating:</b> {products.rating}
            </p>

            <p>
              <b>🏷 Brand:</b> {products.brand}
            </p>

            <p>
              <b>📦 Stock:</b> {products.stock}
            </p>

            <p>
              <b>⚖ Weight:</b> {products.weight} g
            </p>

            <p>
              <b>📏 Width:</b> {products.dimensions.width} cm
            </p>

            <p>
              <b>📏 Height:</b> {products.dimensions.height} cm
            </p>

            <p>
              <b>📏 Depth:</b> {products.dimensions.depth} cm
            </p>

            <p>
              <b>🚚 Shipping:</b>{" "}
              {products.price >= 100 ? (
                <span className="text-green-600 font-semibold">
                  Free Shipping
                </span>
              ) : (
                products.shippingInformation
              )}
            </p>

            <p>
              <b>🔄 Return:</b> {products.returnPolicy}
            </p>

            <p>
              <b>🛡 Warranty:</b> {products.warrantyInformation}
            </p>

            <p>
              <b>📦 MOQ:</b> {products.minimumOrderQuantity}
            </p>

            <p>
              <b>Status:</b>{" "}
              <span className="text-green-600 font-semibold">
                {products.availabilityStatus}
              </span>
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-3">Tags</h2>

            <div className="flex flex-wrap gap-2">
              {products.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={addBasket}
            className={`${
              add ? "bg-green-600" : "bg-black"
            } w-full text-white py-3 sm:py-4 rounded-xl duration-300 cursor-pointer text-base sm:text-lg font-semibold hover:opacity-90`}
          >
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;