import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
   return (
      <div className="App">
         <PetInfo animal="dog" age="3" hasPet />
         <PetInfo animal="goose" age="1" hasPet={false} />
      </div>
   );
}

export default App;
