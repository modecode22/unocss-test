import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@unocss/reset/tailwind.css'
import './App.css'
function App() {
  // Define the initial HSL values using useState
  const [hslValues, setHslValues] = useState({
    hue: 210,
    saturation: 100,
    lightness: 50
  });

  // Function to handle changes in HSL values
  const handleHslChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setHslValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <div>
      <p
        style={{
          '--un-bg-hue': hslValues.hue,
          '--un-bg-saturation': `${hslValues.saturation}%`,
          '--un-bg-lightness': `${hslValues.lightness}%`
        }}
        className="bg-red"
      >
        Your content goes here
      </p>

      <label>
        Hue:
        <input
          type="range"
          min="0"
          max="360"
          name="hue"
          value={hslValues.hue}
          onChange={handleHslChange}
        />
        {hslValues.hue}
      </label>

      <label>
        Saturation:
        <input
          type="range"
          min="0"
          max="100"
          name="saturation"
          value={hslValues.saturation}
          onChange={handleHslChange}
        />
        {hslValues.saturation}%
      </label>

      <label>
        Lightness:
        <input
          type="range"
          min="0"
          max="100"
          name="lightness"
          value={hslValues.lightness}
          onChange={handleHslChange}
        />
        {hslValues.lightness}%
      </label>
    </div>
  );
}
export default App
