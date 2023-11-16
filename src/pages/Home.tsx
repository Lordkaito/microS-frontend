import Header2 from "../components/Header2";
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import { store } from "../redux/store";

function Home() {
  const user = store.getState().user;
  return (
    <div className="flex flex-col min-h-screen">
      {/* for this page we will probably have a different header */}
      <Header2 />
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
