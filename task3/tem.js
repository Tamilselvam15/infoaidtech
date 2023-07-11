const convertFahrenheit = () => {
    var celsiusInput = document.querySelector("#celsius");
    var fahrenheitInput = document.querySelector("#Fahrenheit");

    var celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsius)) {
        fahrenheitInput.value = "";
        fahrenheitInput.placeholder = "Enter a valid input";
        return;
    }

    var fahrenheitResult = (1.8 * celsius) + 32;
    var a = fahrenheitResult.toFixed(2);

    celsiusInput.value = celsius;
    fahrenheitInput.value = a;
    fahrenheitInput.placeholder = "Fahrenheit";
}

const convertCelsius = () => {
    var celsiusInput = document.querySelector("#celsius");
    var fahrenheitInput = document.querySelector("#Fahrenheit");

    var fahrenheit = parseFloat(fahrenheitInput.value);

    if (isNaN(fahrenheit)) {
        celsiusInput.value = "";
        celsiusInput.placeholder = "Enter a valid input";
        return;
    }

    var celsiusResult = (fahrenheit - 32) / 1.8;
    var b = celsiusResult.toFixed(2);

    celsiusInput.value = b;
    fahrenheitInput.value = fahrenheit;
    celsiusInput.placeholder = "Celsius";
}

const Reset = () => {
    var celsiusInput = document.querySelector("#celsius");
    var fahrenheitInput = document.querySelector("#Fahrenheit");

    celsiusInput.value = "";
    fahrenheitInput.value = "";

    celsiusInput.placeholder = "Celsius";
    fahrenheitInput.placeholder = "Fahrenheit";
}
