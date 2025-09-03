
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import Brand from "./sections/Brand"
import Cta from "./sections/Cta"
import Reviews from "./sections/Reviews"
import Products from "./sections/Products"
import "./styles/main.scss"
import TopBanner from "./components/TopBanner"
import { useState,useEffect } from "react"
import TopBtn from "./components/TopBtn"
import Hello from "./sections/Hello"
import Collection from "./sections/Collection"
function App() {

  const [topBanner, setTopBanner] = useState("")

  const [isScrolled,setIsScrolled]=useState(false)


  useEffect(()=>{
    const handleScroll=()=>{
      const scrollTop = window.scrollY

      setIsScrolled(scrollTop>0)
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>window.removeEventListener('scroll',handleScroll)

  })


  const upTopBanner = () => {
    setTopBanner("up")
  }

  return (
    <div className={`app-container  ${topBanner} ${isScrolled? "scrolled":""}`}>
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

        <section id="Collection" className="Section">
          <Collection />
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
