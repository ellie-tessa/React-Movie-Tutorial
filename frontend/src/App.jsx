import "./App.css";

function App() {
  return (
    <>
      <div>
        <p>Hello</p>
      </div>
      <Text display="whats up" />
      <Text display="hello" />
    </>
  );
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
