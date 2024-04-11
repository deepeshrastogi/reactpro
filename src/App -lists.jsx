import Lists from "./components/Lists";
const lists = [
  {
    name: "deepesh",
    email: "deepesh@gmail.com",
    age: 31,
  },
  {
    name: "bassu",
    email: "bassu@gmail.com",
    age: 30,
  },
  {
    name: "kavyansh",
    email: "kavyansh@gmail.com",
    age: 2,
  },
];
function App() {
  return (
    <div className="App">
      <Lists lists={lists} />
    </div>
  );
}

export default App;
