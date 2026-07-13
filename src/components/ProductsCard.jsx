import { message } from "antd"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart, FaBasketShopping } from "react-icons/fa6"
import { Link } from "react-router"

message.config({
    maxCount: 1,
    top: 100,
})

const ProductsCard = ({
    item,
    favourite,
    setFavourite,
    basket,
    setBasket,
}) => {
    const liked = favourite.some(card => card.id === item.id)
    const add = basket.find(card => card.id === item.id)

    const fav = () => {
        if (liked) {
            setFavourite(favourite.filter(card => card.id !== item.id))
        } else {
            setFavourite([...favourite, item])
        }
    }

    const addBasket = () => {
        if (add) {
            setBasket(
                basket.map(card =>
                    card.id === item.id
                        ? { ...card, count: card.count + 1 }
                        : card
                )
            )
            message.success("Məhsul səbətdə artırıldı 🛒")
        } else {
            setBasket([...basket, { ...item, count: 1 }])
            message.success('Məhsul səbətə əlavə edildi 🛒')
        }
    }

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 duration-300 overflow-hidden">

            <div className="relative">

                <button
                    onClick={fav}
                    className="absolute top-2 right-2 z-10 text-lg text-red-600"
                >
                    {liked ? <FaHeart /> : <FaRegHeart />}
                </button>

                <Link to={`detail/${item.id}`}>
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-40 sm:h-44 md:h-48 object-cover"
                    />
                </Link>

                <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">
                    -{Math.round(item.discountPercentage)}%
                </span>

            </div>

            <div className="p-3">

                <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase text-blue-600 font-semibold truncate">
                        {item.category}
                    </span>

                    <span className="text-xs">
                        {'⭐'.repeat(Math.round(item.rating))}
                    </span>
                </div>

                <h2 className="mt-1 text-[15px] font-semibold line-clamp-1">
                    {item.title}
                </h2>

                <p className="text-xs mt-0.5 md:mt-1 text-gray-500 line-clamp-2 md:line-clamp-2 lg:line-clamp-3">
                    {item.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                    <div>
                        <p className="text-lg font-bold text-blue-600">
                            $ {item.price}
                        </p>

                        <div className="flex items-center gap-2">
                            <span
                                className={`w-3 h-3 rounded-full ${item.stock > 20
                                    ? "bg-green-500"
                                    : item.stock > 10
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                    }`}
                            />

                            <p className="text-xs text-gray-600">
                                {item.stock > 20
                                    ? "In Stock"
                                    : item.stock > 10
                                        ? "Limited Stock"
                                        : "Only Few Left"}{" "}
                                ({item.stock})
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={addBasket}
                        className={`${add ? "bg-green-600" : "bg-black"
                            } p-2.5 rounded-lg cursor-pointer text-white hover:scale-105 duration-300`}
                    >
                        <FaBasketShopping className="text-lg" />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ProductsCard