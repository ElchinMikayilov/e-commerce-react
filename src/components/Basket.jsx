import { Empty, Popconfirm } from "antd"
import React from "react"
import { Link } from "react-router"

const Basket = ({ basket, setBasket }) => {
  const totalPrice = basket.reduce((total, item) => total + item.price * item.count, 0)
  return (
    <div className="max-w-2xl mx-auto px-4 py-3 min-h-screen">
      <div className="flex items-center justify-between mb-3">
        <p className="text-lg font-semibold text-blue-600">Total: {totalPrice.toFixed(2)} $</p>
        <Popconfirm
          title="Səbətdəki bütün məhsullar silinsin?"
          onConfirm={() => setBasket([])}
          okText="Bəli"
          cancelText="Xeyr"
          disabled={basket.length == 0}
        >
          <button disabled={basket.length == 0} className={`${basket.length == 0 ?
            'text-white cursor-not-allowed' 
            : 'text-red-500 cursor-pointer'
            }`}>Hamsını sil</button>
        </Popconfirm>
      </div>
      {basket.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <Empty description="Səbətdə məhsul yoxdur" />
        </div>
      ) : (
        <div className="space-y-4">
          {basket.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg duration-300 p-5"
            >
              <div className="flex gap-6">
                {/* Left */}
                <div className="flex-shrink-0">

                  <Link to={`/detail/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-32 h-32 sm:w-28 sm:h-28 rounded-xl object-cover bg-gray-100"
                    />
                  </Link>
                  <div className="flex flex-col gap-2 mt-3">

                    <span className="text-yellow-500 text-sm">
                      {"⭐".repeat(Math.round(item.rating))}
                    </span>

                    <span className="text-blue-600 font-bold text-2xl">
                      $ {(item.price * item.count).toFixed(2)}
                    </span>

                  </div>

                  <div className="flex items-center justify-between border rounded-lg overflow-hidden mt-3">

                    <button
                      onClick={() => {
                        if (item.count > 1) {
                          setBasket(
                            basket.map(card =>
                              card.id === item.id
                                ? { ...card, count: card.count - 1 }
                                : card
                            )
                          );
                        }
                      }}
                      className="w-9 h-9 hover:bg-gray-100 text-lg cursor-pointer"
                    >
                      −
                    </button>

                    <span className="w-10 text-center font-semibold">
                      {item.count}
                    </span>

                    <button
                      onClick={() =>
                        setBasket(
                          basket.map(card =>
                            card.id === item.id
                              ? { ...card, count: card.count + 1 }
                              : card
                          )
                        )
                      }
                      className="w-9 h-9 hover:bg-gray-100 text-lg cursor-pointer"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* Right */}
                <div className="flex-1 flex flex-col justify-between min-h-32">

                  <div>

                    <p className="text-xs uppercase text-blue-600 font-semibold">
                      {item.category}
                    </p>

                    <h2 className="text-xl font-semibold mt-2 line-clamp-1">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                      {item.description}
                    </p>

                  </div>

                  <div className="flex justify-end mt-5">

                    <Popconfirm
                      title="Məhsul silinsin?"
                      onConfirm={() =>
                        setBasket(
                          basket.filter(card => card.id !== item.id)
                        )
                      }
                      okText="Bəli"
                      cancelText="Xeyr"
                    >
                      <button className="px-5 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white duration-300 cursor-pointer">
                        Remove
                      </button>
                    </Popconfirm>

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Basket;