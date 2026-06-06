import "./App.scss";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import QualiTrack from "./product-pages/qualitrack/QualiTrack";

function App() {
  const [windowScrollTop, setWindowScrollTop] = useState(0);

  const handleScroll = () => {
    setWindowScrollTop(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Main scrollTop={windowScrollTop} />
              {windowScrollTop > 50 && <Footer />}
            </>
          }
        />

        {/* Product Route */}
        <Route
          path="/products/qualitrack"
          element={<QualiTrack windowScrollTop={windowScrollTop} />}
        />
      </Routes>
    </>
  );
}

export default App;
