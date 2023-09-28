import Homepage from "../../components/homepage.component";
import About from "../about/about.component";
import Contact from "../contact/contact.component";
import { Routes, Route } from "react-router";
import Projects from "../projects/projects.component";
import TypewriterEffect from "../../components/typewriter-effect/typewriter-effect.component";


const Home = () => {
  return (
    <Routes>
      <Route element={<Homepage />} path="/">
      <Route element={<TypewriterEffect />} path="/" />
      
        <Route element={<About />} path="about" />
        <Route element={<Contact />} path="contact" />
        <Route element={<Projects />} path="projects" />
        </Route>
        
    </Routes>
  );
};

export default Home;
