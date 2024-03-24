import "./App.css";
import Card from "./components/Card";
const userdetails = {
  name: "jhon",
  age: 45,
  gender: "male",
};

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-red-500 rounded-sm p-3">heloo world</h1>
      <Card userName="chewk" details={userdetails} />
      <Card userName="zenifer" details={userdetails} />
      <Card userName="lucifer" details={userdetails} />
    </>
  );
}

export default App;
