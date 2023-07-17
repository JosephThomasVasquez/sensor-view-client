import React, { useState, useEffect } from "react";
import CircularProgressBar from "../guiComponents/CircularProgressBar";
import "./sensorpanel.style.css";

const SensorPanel = () => {
  const initialSensorsData = [
    {
      sensor_name: "Sensor 1",
      sensor_spec: {
        model: "DHT11",
        type: "Temperature & Humidity Sensor",
        sensors: { temperature: "Temperature", humidity: "Humidity" },
      },
      temperature: 69,
      humidity: 44,
      _created_at: "2021-10-10T20:00:00.000Z",
      max_temp: 180,
      min_temp: -50,
      connected_to: "Raspberry Pi Pico W 1",
    },
    {
      sensor_name: "Sensor 2",
      sensor_spec: {
        model: "DHT22",
        type: "Temperature & Humidity Sensor",
        sensors: { temperature: "Temperature", humidity: "Humidity" },
      },
      temperature: 69,
      humidity: 44,
      _created_at: "2021-11-10T20:00:00.000Z",
      max_temp: 180,
      min_temp: -50,
      connected_to: "Raspberry Pi Pico W 2",
    },
  ];

  const [sensorsList, setSensorsList] = useState([...initialSensorsData]);

  return (
    <div>
      <div className="sensor-panel-container">
        <div className="sensor-panel-title">Sensor Panel</div>

        {/* Temperature Sensor */}
        <CircularProgressBar
          sensor={sensorsList[0]}
          sensorType={sensorsList[0].sensor_spec.sensors.temperature}
        />

        {/* Humidity Sensor */}
        <CircularProgressBar
          sensor={sensorsList[0]}
          sensorType={sensorsList[0].sensor_spec.sensors.humidity}
        />
      </div>
    </div>
  );
};

export default SensorPanel;
