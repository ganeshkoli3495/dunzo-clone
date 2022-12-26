import React from "react";
import Header from "../components/Header";
import MainFold from "../components/mainFold";
import TopPicks from "../components/top-picks";
import AppDownload from "../components/app-download";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <MainFold />
      <TopPicks />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Home;
