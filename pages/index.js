import Head from "next/head";
import Hero from "../Components/Hero/Hero";
import Nav from "../Components/Nav/Nav";
import Products from "../Components/Products/Products";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Nav></Nav>
      <Hero></Hero>
      <div className="bg-products">
        <Products></Products>
      </div>
    </div>
  );
}
