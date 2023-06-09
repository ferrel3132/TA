import NavHeader from "./pages/navHeader";
import Sejarah from "./pages/sejarah/sejarah";
import Dashboard from "./pages/dashboard";
import Kepengurusan from "./pages/kepengurusan";
import Dojang from "./pages/dojang";
import Content from "./pages/content";
import Footer from "./pages/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavHeader />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/sejarah" element={<Sejarah/>}/>
          <Route path="/kepengurusan" element={<Kepengurusan/>}/>
          <Route path="/dojang" element={<Dojang/>}/>
          <Route path="/content" element={<Content/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;