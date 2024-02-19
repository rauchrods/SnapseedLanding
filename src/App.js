import "./App.css";
import Testimonials from "./components/Testimonials/Testimonials";
import DescriptionBlock from "./components/descriptionBlock/DescriptionBlock";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { descriptions } from "./data/descriptionBlockData";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      {descriptions.map((description, index) => (
        <DescriptionBlock {...description} key={index} />
      ))}
      <Testimonials/>
    </>
  );
}

export default App;
