import './main.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Hero from './components/hero';
import About from './components/about';
import Partner from './components/partner';
import Projects from './components/projects';
import Testimonial from './components/testimonial';
import Blogs from './components/blogs';
import Team from './components/team';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero/>
      <About/>
      <Partner/>
      <Projects/>
      <Testimonial/>
      <Blogs/>
      <Team/>
      <Footer />
    </>
  );
}

export default App;
