
import "./App.css";
import About from "./components/About";
import SayHello from "./components/SayHello";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Component1 from "./components/Component1";
import Projects from "./components/Projects";

function App() {
 
  return (
    <div className="App">
      <Header />
      <Component1 />
      <About />
      <Experience />
      <Projects />
      <SayHello />
      <Footer />
    </div>
  );
}

export default App;