import React, { useEffect, useState } from "react"
import { getProducts } from "../services/Api"
import ProductsList from "../components/ProductsList"
import Search from "../components/Search"
import Sort from "../components/Sort"
import Loader from "../components/Loader"
import Category from "../components/Category"

const Home = ({ favourite, setFavourite, basket, setBasket }) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [loader, setLoader] = useState(true)
    const [category, setCategory] = useState("")

    useEffect(() => {
        getProducts()
            .then((res) => {
                setData(res.data.products)
            })
            .catch((err) => {
                alert("Xəta baş verdi!")
                console.log(err)
            })
            .finally(() => {
                setLoader(false)
            })
    }, [])

    if (loader) {
        return <Loader />
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:mt-10">
                <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                    <Search search={search} setSearch={setSearch} />
                    <div className="flex items-center gap-3">
                        <Category
                            category={category}
                            setCategory={setCategory}
                            data={data}
                        />
                        <Sort sort={sort} setSort={setSort} />
                    </div>
                </div>
            </div>

            <ProductsList
                data={data}
                search={search}
                sort={sort}
                category={category}
                favourite={favourite}
                setFavourite={setFavourite}
                basket={basket}
                setBasket={setBasket}
            />
        </>
    );
};

export default Home;