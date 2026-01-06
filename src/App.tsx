import './App.css'
import { Header } from "./components/NavBar";
import  HelloCard  from "./components/HelloCard";

function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to my first React Practical - Week 1</h1>
      <HelloCard />
    </div>
  );
}

export default App;
