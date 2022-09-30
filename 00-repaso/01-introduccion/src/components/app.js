function App() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="container">
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;