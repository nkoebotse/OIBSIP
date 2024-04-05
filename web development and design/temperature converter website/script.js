document.getElementById("convert-btn").addEventListener("click", function() {
    const temperature = parseFloat(document.getElementById("temperature-input").value);
    const unit = document.getElementById("unit-selector").value;
    let result = '';

    if (isNaN(temperature)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    switch (unit) {
        case "Celsius":
            result = `${temperature}°C is ${((temperature * 9/5) + 32).toFixed(2)}°F or ${(temperature + 273.15).toFixed(2)}K`;
            break;
        case "Fahrenheit":
            result = `${temperature}°F is ${((temperature - 32) * 5/9).toFixed(2)}°C or ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
            break;
        case "Kelvin":
            result = `${temperature}K is ${(temperature - 273.15).toFixed(2)}°C or ${(((temperature - 273.15) * 9/5) + 32).toFixed(2)}°F`;
            break;
    }

    document.getElementById("result").textContent = result;
});
