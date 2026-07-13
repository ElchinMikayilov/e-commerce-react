import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Router from "./router/Router"

function App() {
  const [favourite, setFavourite] = useState([])
  const [basket, setBasket] = useState([])

  return (
    <div className="bg-gray-50">
      <Header favourite={favourite} basket={basket} />
      <Router favourite={favourite} setFavourite={setFavourite} basket={basket} setBasket={setBasket} />
      <Footer />
    </div>
  );
}

export default App