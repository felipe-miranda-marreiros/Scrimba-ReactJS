import "./Sass/App.scss";
import Navbar from "./components/Navbar";
import TravelInfo from "./components/TravelInfo/TravelInfo";
import data from "./data";

const App = () => {
  const travelinfoElement = data.map((item, index) => {
    return <TravelInfo key={index} item={item} />;
  });
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <section>{travelinfoElement}</section>
    </>
  );
};

export default App;
