import Head from "next/head";
import Hero from "../Components/Hero/Hero";
import Nav from "../Components/Nav/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
    </div>
  );
}
