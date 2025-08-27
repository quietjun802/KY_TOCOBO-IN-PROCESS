import Header from "./components/Header";
import Hero from "./sections/Hero";
import Brand from "./sections/Brand";
import Products from "./sections/Products";
import Reviews from "./sections/Reviews";
import Cta from "./sections/Cta";
import Footer from "./components/Footer";
import TopBanner from "./components/TopBanner";
import { useState } from "react";
import "./styles/main.scss";
import TopBtn from "./components/TopBtn";

export default function App() {

  const [topBanner, setTopBanner] = useState("")

  const upTopBanner = ()=>{
    setTopBanner("up")
  }

  return (
    <div className={`app-container ${topBanner}`}>
      <TopBtn/>
      <TopBanner onClick={upTopBanner}/>
      <Header />
      <main>
        <section id="Hero" className="Section"><Hero /></section>
        <section id="Brand" className="Section"><Brand /></section>
        <section id="Products" className="Section"><Products /></section>
        <section id="Reviews" className="Section"><Reviews /></section>
        <section id="Cta" className="Section"><Cta /></section>
      </main>
      <Footer />
    </div>
  );
}
