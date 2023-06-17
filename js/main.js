"use strict"

function convertYear() {
    const yearSelect = document.getElementById("year-select");
    const selectedYear = parseInt(yearSelect.value);
    const westernYear = selectedYear + 2018;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "西暦: " + westernYear + "年";
}