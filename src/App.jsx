import "./App.scss";
import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
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
      <Main scrollTop={windowScrollTop} />
      <Footer />
    </>
  );
}

export default App;
