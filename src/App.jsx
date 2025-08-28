
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import Brand from "./sections/Brand"
import Cta from "./sections/Cta"
import Reviews from "./sections/Reviews"
import Products from "./sections/Products"
import "./styles/main.scss"
import TopBanner from "./components/TopBanner"
import { useState } from "react"
import TopBtn from "./components/TopBtn"
import Hello from "./sections/Hello"
function App() {

  const [topBanner, setTopBanner] = useState("")

  const upTopBanner = () => {
    setTopBanner("up")
  }

  return (
    <div className={`app-container  ${topBanner}`}>
      <TopBtn />
      <TopBanner onClick={upTopBanner} />
      <Header />
      <main>
        <section id="Hero" className="Section">
          <Hero />
        </section>
        <section id="Cta" className="Section">
          <Cta />
        </section>
        <section id="Hello" className="Section">
          <Hello /> 
        </section>

        <section id="Brand" className="Section">
          <Brand />
        </section>
        <section id="Products" className="Section">
          <Products />
        </section>
        <section id="Reviews" className="Section">
          <Reviews />
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default App