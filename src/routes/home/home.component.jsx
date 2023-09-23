import Homepage from "../../components/homepage.component";
import About from "../about/about.component";
import Contact from "../contact/contact.component";
import { Routes, Route } from "react-router";

const Home = () => {
  return (
    <Routes>
      <Route element={<Homepage />} path="/">
        <Route element={<About />} path="about" />
        <Route element={<Contact />} path="contact" />
        </Route>
    </Routes>
  );
};

export default Home;
