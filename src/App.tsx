import './App.css'
import { Header } from "./components/NavBar";
import  HelloCard  from "./components/HelloCard";
import Button from "./components/Button"

function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to my first React Practical - Week 1</h1>
      <HelloCard />
      <Button label="Save" variant="primary" />
      <Button label="Cancel" variant="secondary" />
      <Button label="Delete" variant="primary" />
    </div>
  );
}

export default App;
