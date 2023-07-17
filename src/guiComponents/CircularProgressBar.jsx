import React, { useState, useEffect } from "react";
import "./circularProgressBar.style.css";

const CircularProgressBar = ({ sensor, sensorType }) => {
  const [colors, setColors] = useState({
    temp_color: "#ffae00",
    humid_color: "#0099ff",
  });

  const [sensorData, setSensorData] = useState({ ...sensor });

  const [temperatureSensor, setTemperatureSensor] = useState({});
  const [humiditySensor, setHumiditySensor] = useState({});

  let tempVal = 0;

  useEffect(() => {
    const abortController = new AbortController();

    const getSensorData = async () => {
      try {
        // const response = await fetchSensorData(query, abortController.signal);

        setInterval(() => {
          tempVal += 1;

          if (tempVal < 159) {
            setSensorData({ ...sensorData, temperature: tempVal });
          } else {
            tempVal = 0;
            setSensorData({ ...sensorData });
          }
        }, 500);
      } catch (error) {
        console.log("ERROR:", error);
      }

      return () => abortController.abort();
    };

    getSensorData();
  }, []);

  return (
    <div className="circular-pb-container">
      <div className="sensor-name-label">{sensorData?.sensor_name}</div>
      <span className="sensor-model-label">
        {sensorData?.sensor_spec.model}
      </span>
      <div
        className="circular-pb-progress"
        style={{
          background: `conic-gradient(${
            sensorType === "Temperature"
              ? colors.temp_color
              : colors.humid_color
          } ${sensorData?.temperature * 2.25}deg, #efefef 0deg)`,
        }}
      >
        <span className="circular-pb-value">
          {sensorData?.temperature}
          <span className="circular-pb-value-symbol">°F</span>
        </span>
      </div>

      <span className="circular-pb-text">
        {sensorType === "Temperature"
          ? sensorData?.sensor_spec.sensors.temperature
          : sensorData?.sensor_spec.sensors.humidity}
      </span>
    </div>
  );
};

export default CircularProgressBar;
