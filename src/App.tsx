import './App.css'
import { Header } from "./components/NavBar";
import  HelloCard  from "./components/HelloCard";
import Button from "./components/Button"
import Counter from "./components/Counter"
import MiniDashboard from './components/MiniDashboard';

function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to my first React Practical - Week 1</h1>
      <HelloCard />
      <Button label="Save" variant="primary" />
      <Button label="Cancel" variant="secondary" />
      <Button label="Delete" variant="primary" />
      <Counter />
      <h2>MiniDashboard</h2>
      <MiniDashboard />
    </div>
  );
}

export default App;
