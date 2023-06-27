import React, { useState } from "react";

const TemperatureConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("Celsius");
  const [outputUnit, setOutputUnit] = useState("Fahrenheit");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputUnitChange = (e) => {
    setInputUnit(e.target.value);
  };

  const handleOutputUnitChange = (e) => {
    setOutputUnit(e.target.value);
  };

  const convertTemperature = () => {
    const inputTemp = parseFloat(inputValue);

    if (isNaN(inputTemp)) {
      setResult("Invalid input");
      return;
    }

    let outputTemp;

    switch (inputUnit) {
      case "Celsius":
        if (outputUnit === "Fahrenheit") {
          outputTemp = (inputTemp * 9) / 5 + 32;
        } else if (outputUnit === "Kelvin") {
          outputTemp = inputTemp + 273.15;
        } else if (outputUnit === "Celsius") {
          outputTemp = inputTemp;
        }
        break;

      case "Fahrenheit":
        if (outputUnit === "Celsius") {
          outputTemp = ((inputTemp - 32) * 5) / 9;
        } else if (outputUnit === "Kelvin") {
          outputTemp = ((inputTemp - 32) * 5) / 9 + 273.15;
        } else if (outputUnit === "Fahrenheit") {
          outputTemp = inputTemp;
        }
        break;

      case "Kelvin":
        if (outputUnit === "Celsius") {
          outputTemp = inputTemp - 273.15;
        } else if (outputUnit === "Fahrenheit") {
          outputTemp = ((inputTemp - 273.15) * 9) / 5 + 32;
        } else if (outputUnit === "Kelvin") {
          outputTemp = inputTemp;
        }
        break;

      default:
        setResult("Invalid units");
        return;
    }

    setResult(
      `${inputTemp} ${inputUnit} = ${outputTemp.toFixed(2)} ${outputUnit}`
    );
  };

  return (
    <div>
      <div>
        <label>
          Input Temperature:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Convert from:
          <select value={inputUnit} onChange={handleInputUnitChange}>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Convert to:
          <select value={outputUnit} onChange={handleOutputUnitChange}>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </label>
      </div>
      <button onClick={convertTemperature}>Convert</button>
      <div>{result}</div>
    </div>
  );
};

export default TemperatureConverter;
