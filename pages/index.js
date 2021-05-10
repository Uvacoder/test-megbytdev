import Head from "next/head";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Nav from "../Components/Nav/Nav";
import Products from "../Components/Products/Products";
import Story from "../Components/Story/Story";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <div className="bg-products">
        <Products />
        <div className="bg-[#cbccd61f]">
          <Story />
        </div>
      </div>
      <Footer />
    </div>
  );
}
