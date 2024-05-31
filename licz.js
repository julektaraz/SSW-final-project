// licz.js
function divideNumbers() {
    const a = parseFloat(document.getElementById('numberA').value);
    const b = parseFloat(document.getElementById('numberB').value);

    if (b === 0) {
        document.getElementById('dzielenie').textContent = "Nie można dzielić przez zero!";
    } else {
        const result = a / b;
        document.getElementById('dzielenie').textContent = `Wynik dzielenia: ${result}`;
    }
}