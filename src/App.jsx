import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Home from "./pages/Home.jsx";
import Csr from "./pages/Csr.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Men from "./pages/Men.jsx";
import Womens from "./pages/Women.jsx";
import WomenNightWear from "./pages/WomenNightWear.jsx";
import Boys from "./pages/Boys.jsx";
import Girls from "./pages/Girls.jsx";
import Infants from "./pages/Infants.jsx";
import { Helmet } from "react-helmet";

function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Export Garments in Tirupur | Ma Apparels</title>
        <meta
          name="description"
          content="Explore the latest trends in clothing with Ma Apparels. High-quality fashion for women, men, kids and infant."
        />
      </Helmet>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Helmet>
                <title>Home | Ma Apparels</title>
                <meta
                  name="description"
                  content="Explore the latest fashion trends with Ma Apparels."
                />
              </Helmet>
              <Home />
            </>
          }
        />

        <Route
          path="/women/casual"
          element={
            <>
              <Helmet>
                <title>Women's Casual Wear | Ma Apparels</title>
                <meta
                  name="description"
                  content="Discover comfortable and stylish casual wear for women."
                />
              </Helmet>
              <Womens />
            </>
          }
        />

        <Route
          path="/women/freestyle"
          element={
            <>
              <Helmet>
                <title>Women's Freestyle Fashion | Ma Apparels</title>
                <meta
                  name="description"
                  content="Explore the latest freestyle fashion for women at Ma Apparels. Find comfortable and trendy clothing for every occasion."
                />
              </Helmet>
              <WomenNightWear />
            </>
          }
        />

        <Route
          path="/men"
          element={
            <>
              <Helmet>
                <title>Men's Fashion Collection | Ma Apparels</title>
                <meta
                  name="description"
                  content="Discover the latest men's fashion trends at Ma Apparels. High-quality clothing for every style and occasion."
                />
              </Helmet>
              <Men />
            </>
          }
        />

        <Route
          path="/kids/girls"
          element={
            <>
              <Helmet>
                <title>Girls' Fashion for Kids | Ma Apparels</title>
                <meta
                  name="description"
                  content="Shop trendy and comfortable girls' clothing for kids at Ma Apparels. Find the perfect styles for your little ones."
                />
              </Helmet>
              <Girls />
            </>
          }
        />

        <Route
          path="/kids/boys"
          element={
            <>
              <Helmet>
                <title>Boys' Fashion for Kids | Ma Apparels</title>
                <meta
                  name="description"
                  content="Explore boys' clothing for kids at Ma Apparels. From casual to formal wear, find stylish and durable options for your little ones."
                />
              </Helmet>
              <Boys />
            </>
          }
        />

        <Route
          path="/infants"
          element={
            <>
              <Helmet>
                <title>Infants' Clothing Collection | Ma Apparels</title>
                <meta
                  name="description"
                  content="Discover adorable and comfortable clothing for infants at Ma Apparels. Explore our collection of baby essentials."
                />
              </Helmet>
              <Infants />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Helmet>
                <title>About Us | Ma Apparels</title>
                <meta
                  name="description"
                  content="Learn about Ma Apparels - our story, values, and commitment to providing high-quality fashion for all. Join us on our journey."
                />
              </Helmet>
              <About />
            </>
          }
        />

        <Route path="/csr" element={<Csr />} />

        <Route
          path="/contact"
          element={
            <>
              <Helmet>
                <title>Contact Ma Apparels | Get in Touch</title>
                <meta
                  name="description"
                  content="Contact Ma Apparels for any inquiries, feedback, or collaborations. We are here to assist you. Reach out to us today!"
                />
              </Helmet>
              <Contact />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;