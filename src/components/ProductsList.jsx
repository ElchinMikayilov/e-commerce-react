import React, { useEffect, useState } from 'react'
import ProductCard from './ProductsCard'
import { Empty } from 'antd'

const ProductsList = ({ data, search, sort, category, favourite, setFavourite, basket, setBasket }) => {
    const [count, setCount] = useState(4)

    useEffect(() => {
        setCount(4)
    }, [sort, search, category])

    const filterData = data.filter(item => {
        if (category === "") return true
        return item.category === category
    })
        .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (sort == 'low') {
                return a.price - b.price
            }
            if (sort == 'high') {
                return b.price - a.price
            }
            return 0
        })

    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 my-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4 lg:gap-6">
                {filterData.length === 0 ? (
                    <div className="col-span-full flex justify-center py-20">
                        <Empty description="Məhsul tapılmadı" />
                    </div>
                ) : (
                    filterData.slice(0, count).map(item => (
                        <ProductCard
                            key={item.id}
                            item={item}
                            favourite={favourite}
                            setFavourite={setFavourite}
                            basket={basket}
                            setBasket={setBasket}
                        />
                    ))
                )}
            </div>

            {count < filterData.length && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setCount(count + 4)}
                        className="btn"
                    >
                        Daha çox
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProductsList
