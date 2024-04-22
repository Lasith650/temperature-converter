// src/TemperatureConverter.js

import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://8fe4a8b1-4dab-445f-96af-89aec9819abc-prod.e1-us-cdp-2.choreoapis.dev/temperature-converter/temperature-converter-service/convertcelsiustofahrenheit-6d1/v1.0/convert?celsius=${celsius}`);
      const data = await response.json();
      setFahrenheit(data); // Assuming the response directly contains the Fahrenheit value
    } catch (error) {
      console.error('Error converting temperature:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <div>
        <label htmlFor="celsius">Celsius:</label>
        <input
          type="number"
          id="celsius"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
        <button onClick={handleConvert}>Convert</button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {fahrenheit !== '' && (
            <div>
              <p>{celsius}°C is approximately {fahrenheit}°F</p>
              <label htmlFor="fahrenheitOutput">Fahrenheit:</label>
              <input
                type="text"
                id="fahrenheitOutput"
                value={`${fahrenheit}°F`}
                readOnly
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TemperatureConverter;
