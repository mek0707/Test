import Footer from "@/components/structure/Footer";
import Hero from "@/components/structure/Hero";
import Navbar from "@/components/structure/Navbar";
import React from "react";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}

export default App;
