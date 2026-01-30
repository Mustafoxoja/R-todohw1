import Navbar from "./navbar";
import { Route, Routes } from "react-router";
import Homepage from "./home";
import Product from "./product";
import About from "./about";
import Contact from "./contact";
import Profile from "./profile";
import NotFound from "./notFound";
import LoginComp from "./pages/login";
import Todolist from "./todo";

const RouterComp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginComp />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo" element={<Todolist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouterComp;
