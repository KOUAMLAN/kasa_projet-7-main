import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/accommodation/:id" element={<Accommodation />} />
  <Route path="/404" element={<NotFound />} />
  <Route path="*" element={<NotFound />} />
</Routes>
      <Footer />
    </>
  );
}


export default App;