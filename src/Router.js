import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Layout from "./components/Layout";
import Pets from "./components/Pets";

const Router = () => {
  const Home = () => <h1 style={{ textAlign: "center" }}>Home</h1>;
  // const Pets = () => <h1>Pet List</h1>;
  // const Layout = () => <h1>Layout</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="pets" element={<Pets />}></Route>
            <Route path="pets/:id" element={<Details />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
