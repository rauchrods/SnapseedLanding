import "./App.css";
import DescriptionBlock from "./components/descriptionBlock/DescriptionBlock";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import descImg1 from "./assets/desc_1.png";
import descImg2 from "./assets/desc_2.png";
import descImg3 from "./assets/desc_3.png";
import descImg4 from "./assets/desc_4.png";
import descImg5 from "./assets/desc_5.png";
import descImg6 from "./assets/desc_6.png";
import descImg7 from "./assets/desc_7.png";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <DescriptionBlock
        img={descImg7}
        description={
          "Achieve success, one step at a time with Stepseed: Your AI Accountability Partner"
        }
      />
      <DescriptionBlock
        img={descImg1}
        description={
          "Automatically divide your Goals into attainable milestones using AI"
        }
        alignment="right"
      />
      <DescriptionBlock
        img={descImg2}
        description={"Analytics to track your progress and gain insights"}
      />
      <DescriptionBlock
        img={descImg3}
        description={
          "Meet Seedy, your personal AI life goal coach. Seedy can help you create action plans, provide advice and motivation"
        }
        alignment="right"
      />
      <DescriptionBlock
        img={descImg4}
        description={
          "Add unlimited journal entries and see how far you've come on your journey towards achieving your goals."
        }
      />
      <DescriptionBlock
        img={descImg5}
        description={
          "if uou ever run out of motivation, check the quote of the day!"
        }
        alignment="right"
      />
      <DescriptionBlock
        img={descImg6}
        description={
          "Access curated video content that will help you stay on the right track"
        }
      />
    </>
  );
}

export default App;
