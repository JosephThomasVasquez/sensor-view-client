import React, { useState, useEffect } from "react";
import "./circularProgressBarStyle.css";

const CircularProgressBar = ({ sensor }) => {
  const initialSensorData = {
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
  };

  const [sensorData, setSensorData] = useState({ ...initialSensorData });

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

        // setSensorData({ ...sensorData, temperature: 69 });
      } catch (error) {
        console.log("ERROR:", error);
      }

      return () => abortController.abort();
    };

    getSensorData();
  }, []);

  return (
    <div className="circular-pb-container">
      <div>{sensorData?.sensor_name}</div>
      <div
        className="circular-pb-progress"
        style={{
          background: `conic-gradient(#ffae00 ${
            sensorData?.temperature * 2.25
          }deg, #efefef 0deg)`,
        }}
      >
        <span className="circular-pb-value">
          {sensorData?.temperature}
          <span className="circular-pb-value-symbol">°F</span>
        </span>
      </div>
      {/* <span
        className="circular-pb-progress-ol"
        // style={{
        //   background: `conic-gradient(#0099ff ${
        //     sensorData?.temperature * 2.25
        //   }deg, #efefef 0deg)`,
        // }}
      ></span> */}
      <span className="circular-pb-text">
        {sensorData.sensor_spec.sensors.temperature}
      </span>
    </div>
  );
};

export default CircularProgressBar;
