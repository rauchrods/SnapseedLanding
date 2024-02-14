import "./App.css";
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
    </>
  );
}

export default App;
