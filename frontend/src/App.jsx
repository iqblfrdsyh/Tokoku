import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./pages/notFound/notFound";
import Register from "./pages/register";
import Keranjang from "./pages/keranjang";
import MainLayout from "./components/layouts/main.layout";
import PesananSaya from "./pages/pesananSaya";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/keranjang" element={<Keranjang />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="keranjang" element={<Keranjang />} />
          <Route path="pesananSaya" element={<PesananSaya />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
