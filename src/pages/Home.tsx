import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import Aside from "../components/Aside";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* for this page we will probably have a different header */}
      <Header />
      <div className="flex flex-grow">
        <Navigation />
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
