import React from "react"
import { Empty, message, Popconfirm } from "antd"
import { Link } from "react-router"
import { FaBasketShopping } from "react-icons/fa6"

const Favorite = ({ favourite, setFavourite, basket, setBasket }) => {
    const addBasket = (item) => {
        const add = basket.find(card => card.id === item.id)

        if (add) {
            setBasket(basket.map(card => card.id === item.id ? { ...card, count: card.count + 1 } : card))
            message.success("Məhsul səbətdə artırıldı 🛒")
        }
        else {
            setBasket([...basket, { ...item, count: 1 }])
            message.success("Məhsul səbətə əlavə edildi 🛒")
        }
    }
    return (
        <div className="max-w-2xl mx-auto px-4 py-8 min-h-screen">

            <h1 className="text-3xl font-bold text-center mb-8">
                ❤️ Seçilmiş Məhsullar
            </h1>

            {favourite.length === 0 ? (
                <div className="flex justify-center items-center h-[60vh]">
                    <Empty description="Seçilmiş məhsul yoxdur" />
                </div>
            ) : (
                <div className="space-y-4">

                    {favourite.map(item => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 duration-300 p-4"
                        >

                            <div className="flex gap-4">
                                <div>
                                    <Link to={`/detail/${item.id}`}>
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-24 h-24 mb-2 sm:w-28 sm:h-28 rounded-lg object-cover bg-gray-100 hover:scale-105 duration-300"
                                        />
                                    </Link>

                                    <p className="text-2xl pl-2 font-bold text-blue-600">
                                        $ {item.price}
                                    </p>

                                    <div className="flex items-center pl-2 gap-2 mt-1">
                                        <span
                                            className={`w-2.5 h-2.5 rounded-full ${item.stock > 20
                                                ? "bg-green-500"
                                                : item.stock > 10
                                                    ? "bg-yellow-500"
                                                    : "bg-red-500"
                                                }`}
                                        />

                                        <span className="text-xs text-gray-500">
                                            {item.stock} in stock
                                        </span>
                                    </div>

                                </div>

                                <div className="flex-1 flex flex-col justify-between">

                                    <div>

                                        <div className="flex items-center justify-between gap-3">

                                            <span className="text-xs uppercase font-semibold text-blue-600">
                                                {item.category}
                                            </span>

                                            <span className="bg-red-500 text-white text-[11px] px-2 py-1 rounded-full">
                                                -{Math.round(item.discountPercentage)}%
                                            </span>

                                        </div>

                                        <Link to={`/detail/${item.id}`}>
                                            <h2 className="mt-2 text-lg font-semibold line-clamp-1 hover:text-blue-600 duration-300">
                                                {item.title}
                                            </h2>
                                        </Link>

                                        <p className="text-sm text-gray-500 line-clamp-2 md:line-clamp-3 lg:line-clamp-none mt-1">
                                            {item.description}
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-3 justify-end mt-4">
                                        <button onClick={() => addBasket(item)} className="py-2 px-4 rounded-lg bg-green-500 hover:bg-grenn-600 text-white text-sm font-medium duration-300 cursor-pointer">
                                            <FaBasketShopping className="text-xl" />
                                        </button>
                                        <Popconfirm
                                            title="Məhsul silinsin?"
                                            onConfirm={() =>
                                                setFavourite(
                                                    favourite.filter(card => card.id !== item.id)
                                                )
                                            }
                                            okText="Bəli"
                                            cancelText="Xeyr"
                                        >
                                            <button
                                                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium duration-300 cursor-pointer"
                                            >
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

export default Favorite;