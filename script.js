// Conversion for Weight
function convertWeight() {
    const input = document.getElementById('weightInput').value.split(',').map(num => parseFloat(num.trim()));
    const fromUnit = document.getElementById('weightFrom').value;
    const toUnit = document.getElementById('weightTo').value;
    const resultDisplay = document.getElementById('weightResult');
    
    if (input.some(isNaN)) {
        resultDisplay.innerText = 'Please enter valid numbers.';
        return;
    }

    let result = input.map(weight => {
        if (fromUnit === 'kg' && toUnit === 'lb') {
            return (weight * 2.20462).toFixed(2);
        } else if (fromUnit === 'lb' && toUnit === 'kg') {
            return (weight / 2.20462).toFixed(2);
        } else {
            return weight; // No conversion if units are the same
        }
    });
    resultDisplay.innerText = `Converted Weights: ${result.join(', ')}`;
}

// Conversion for Distance
function convertDistance() {
    const input = document.getElementById('distanceInput').value.split(',').map(num => parseFloat(num.trim()));
    const fromUnit = document.getElementById('distanceFrom').value;
    const toUnit = document.getElementById('distanceTo').value;
    const resultDisplay = document.getElementById('distanceResult');
    
    if (input.some(isNaN)) {
        resultDisplay.innerText = 'Please enter valid numbers.';
        return;
    }

    let result = input.map(distance => {
        if (fromUnit === 'km' && toUnit === 'miles') {
            return (distance * 0.621371).toFixed(2);
        } else if (fromUnit === 'miles' && toUnit === 'km') {
            return (distance / 0.621371).toFixed(2);
        } else {
            return distance; // No conversion if units are the same
        }
    });
    resultDisplay.innerText = `Converted Distances: ${result.join(', ')}`;
}

// Conversion for Temperature
function convertTemperature() {
    const input = document.getElementById('temperatureInput').value.split(',').map(num => parseFloat(num.trim()));
    const fromUnit = document.getElementById('temperatureFrom').value;
    const toUnit = document.getElementById('temperatureTo').value;
    const resultDisplay = document.getElementById('temperatureResult');
    
    if (input.some(isNaN)) {
        resultDisplay.innerText = 'Please enter valid numbers.';
        return;
    }

    let result = input.map(temp => {
        if (fromUnit === 'C' && toUnit === 'F') {
            return ((temp * 9/5) + 32).toFixed(2);
        } else if (fromUnit === 'F' && toUnit === 'C') {
            return ((temp - 32) * 5/9).toFixed(2);
        } else {
            return temp; // No conversion if units are the same
        }
    });
    resultDisplay.innerText = `Converted Temperatures: ${result.join(', ')}`;
}
