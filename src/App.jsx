import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Router from "./router/Router"

function App() {
  const [search, setSearch] = useState("")
  const [favourite, setFavourite] = useState(() => {
    const data = localStorage.getItem('favourite')
    return data ? JSON.parse(data) : []
  })
  const [basket, setBasket] = useState(() => {
    const data = localStorage.getItem('basket')
    return data ? JSON.parse(data) : []
  })

  useEffect(() => {
    localStorage.setItem('favourite', JSON.stringify(favourite))
  }, [favourite])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])

  return (
    <div className="bg-gray-50">
      <Header favourite={favourite} basket={basket} />
      <Router search={search} setSearch={setSearch} favourite={favourite} setFavourite={setFavourite} basket={basket} setBasket={setBasket} />
      <Footer />
    </div>
  )
}

export default App