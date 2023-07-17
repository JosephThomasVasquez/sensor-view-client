// import logo from "./logo.svg";
import SensorPanel from "./sensorPanel/SensorPanel";

function App() {
  return (
    <div className="App">
      <section>
        <div>
          <h2 className="navbar-title">Sensor View</h2>
        </div>

        <div>
          <SensorPanel />
        </div>
      </section>
    </div>
  );
}

export default App;
