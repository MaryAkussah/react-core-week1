import  HelloCard  from "./HelloCard"
import Counter from "./Counter"
import Button from "./Button"

export function MiniDashboard() {
  return (
    <div>
      <h2>Mini Dashboard</h2>
      <HelloCard />
      <Button label="Submit" variant="primary" />
      <Button label="Reset" variant="secondary" />
      <Counter />
    </div>
  );
}
export default MiniDashboard;