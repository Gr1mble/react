import Cards from "../components/Cards";
const App = () => {
  const titles = ["Halo", "Call of Duty", "Gears of War"];
  const descriptions = [
    "Master Chief Keef",
    "Gun go pew",
    "Im going to hide now",
  ];
  return <Cards titles={titles} description={descriptions}></Cards>;
};

export default App;
