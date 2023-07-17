import CircularProgressBar from "./guiComponents/CircularProgressBar";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <section>
        <div>
          <h2 className="navbar-title">Sensor View</h2>
        </div>

        <div>
          <CircularProgressBar />
        </div>
      </section>
    </div>
  );
}

export default App;
