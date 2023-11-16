import Header2 from "../components/Header2";
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import { Skeleton } from "@nextui-org/react";
import { useState, useEffect } from "react";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header2 />
      <div className="flex flex-grow flex-col sm:flex-row">
        <Navigation />
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
