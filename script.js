const voltageInput = document.getElementById("voltage");
const capacityInput = document.getElementById("capacity");
const formatInput = document.getElementById("battery-format");
const chemistryInput = document.getElementById("chemistry");
const cellDischargeInput = document.getElementById("cell-discharge");
const powerInput = document.getElementById("power");

const calculateButton = document.getElementById("calculate");
const errorElement = document.getElementById("error");

const energyElement = document.getElementById("energy");
const cellCapacityElement = document.getElementById("cell-capacity");
const cellVoltageElement = document.getElementById("cell-voltage");
const minVoltageElement = document.getElementById("min-voltage");
const maxVoltageElement = document.getElementById("max-voltage");
const totalCellsElement = document.getElementById("total-cells");
const maxCurrentElement = document.getElementById("max-current");
const runtimeElement = document.getElementById("runtime");

const ruButton = document.getElementById("lang-ru");
const enButton = document.getElementById("lang-en");


const chemistryData = {
    liion: {
        min: 3.0,
        max: 4.2
    },

    lifepo4: {
        min: 2.5,
        max: 3.65
    },

    lipo: {
        min: 3.0,
        max: 4.2
    }
};


const translations = {

    ru: {

        title: "\u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043d\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440",

        subtitle: "\u0420\u0430\u0441\u0447\u0451\u0442 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a \u0430\u043a\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u043d\u043e\u0439 \u0431\u0430\u0442\u0430\u0440\u0435\u0438",

        batteryParameters: "\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0431\u0430\u0442\u0430\u0440\u0435\u0438",

        nominalVoltage: "\u041d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        batteryCapacity: "\u0401\u043c\u043a\u043e\u0441\u0442\u044c \u0431\u0430\u0442\u0430\u0440\u0435\u0438",

        batteryFormat: "\u0424\u043e\u0440\u043c\u0430\u0442 \u0431\u0430\u0442\u0430\u0440\u0435\u0438",

        cellChemistry: "\u0425\u0438\u043c\u0438\u044f \u044f\u0447\u0435\u0439\u043a\u0438",

        cellDischarge: "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u0440\u044f\u0434 \u044f\u0447\u0435\u0439\u043a\u0438",

        powerConsumption: "\u041f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u043c\u0430\u044f \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u044c",

        formatExample: "\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: 14s8p, 13s6p, 20s10p",

        calculate: "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c",

        results: "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",

        batteryEnergy: "\u042d\u043d\u0435\u0440\u0433\u0438\u044f \u0431\u0430\u0442\u0430\u0440\u0435\u0438",

        cellCapacity: "\u0401\u043c\u043a\u043e\u0441\u0442\u044c \u043e\u0434\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438",

        cellVoltage: "\u041d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438",

        minimumVoltage: "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        maximumVoltage: "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        totalCells: "\u0412\u0441\u0435\u0433\u043e \u044f\u0447\u0435\u0435\u043a",

        cellsUnit: "\u044f\u0447\u0435\u0435\u043a",

        maxCurrent: "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u043e\u043a\u043e\u043e\u0442\u0434\u0430\u0447\u0430",

        runtime: "\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b",

        atPower: "\u043f\u0440\u0438 1000 W",

        howItWorks: "\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f?",

        energy: "\u042d\u043d\u0435\u0440\u0433\u0438\u044f",

        cellCapacityFormula: "\u0401\u043c\u043a\u043e\u0441\u0442\u044c \u043e\u0434\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438",

        totalCellsFormula: "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044f\u0447\u0435\u0435\u043a",

        maxCurrentFormula: "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a",

        minimumVoltageFormula: "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        maximumVoltageFormula: "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        runtimeFormula: "\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b",

        warning: "\u0420\u0430\u0441\u0447\u0451\u0442\u044b \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438. \u0420\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u0431\u0430\u0442\u0430\u0440\u0435\u0438 \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438, \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u044b, \u043f\u0440\u043e\u0441\u0430\u0434\u043a\u0438 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u044f, \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u044f\u0447\u0435\u0435\u043a, BMS \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0430\u043a\u0442\u043e\u0440\u043e\u0432.",

        footer: "Battery Calculator \u00b7 \u0412\u0435\u0440\u0441\u0438\u044f 1.1.0b",

        errorVoltage: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435.",

        errorCapacity: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0451\u043c\u043a\u043e\u0441\u0442\u044c.",

        errorFormat: "\u0424\u043e\u0440\u043c\u0430\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0442\u0430\u043a: 14s8p.",

        errorCells: "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044f\u0447\u0435\u0435\u043a \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f.",

        errorDischarge: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a \u044f\u0447\u0435\u0439\u043a\u0438.",

        errorPower: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u044c.",

        hour: "\u0447",

        minute: "\u043c\u0438\u043d"
    },


    en: {

        title: "Battery Calculator",

        subtitle: "Battery characteristics calculator",

        batteryParameters: "Battery parameters",

        nominalVoltage: "Nominal voltage",

        batteryCapacity: "Battery capacity",

        batteryFormat: "Battery configuration",

        cellChemistry: "Cell chemistry",

        cellDischarge: "Maximum cell discharge",

        powerConsumption: "Power consumption",

        formatExample: "Example: 14s8p, 13s6p, 20s10p",

        calculate: "Calculate",

        results: "Results",

        batteryEnergy: "Battery energy",

        cellCapacity: "Cell capacity",

        cellVoltage: "Cell voltage",

        minimumVoltage: "Minimum voltage",

        maximumVoltage: "Maximum voltage",

        totalCells: "Total cells",

        cellsUnit: "cells",

        maxCurrent: "Maximum battery current",

        runtime: "Runtime",

        atPower: "at 1000 W",

        howItWorks: "How is it calculated?",

        energy: "Energy",

        cellCapacityFormula: "Cell capacity",

        totalCellsFormula: "Number of cells",

        maxCurrentFormula: "Maximum current",

        minimumVoltageFormula: "Minimum voltage",

        maximumVoltageFormula: "Maximum voltage",

        runtimeFormula: "Runtime",

        warning: "Calculations are approximate. Actual battery performance depends on load, temperature, voltage sag, cell condition, BMS and other factors.",

        footer: "Battery Calculator \u00b7 Version 1.1.0b",

        errorVoltage: "Enter a valid voltage.",

        errorCapacity: "Enter a valid battery capacity.",

        errorFormat: "The format should look like this: 14s8p.",

        errorCells: "The number of cells must be greater than zero.",

        errorDischarge: "Enter a valid maximum cell discharge current.",

        errorPower: "Enter a valid power consumption.",

        hour: "h",

        minute: "min"
    }

};


let currentLanguage =
    localStorage.getItem("batteryCalculatorLanguage") || "ru";


function translatePage() {

    const language = translations[currentLanguage];

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key = element.dataset.i18n;

            if (language[key]) {
                element.textContent = language[key];
            }

        });

    document.documentElement.lang = currentLanguage;

    ruButton.classList.toggle(
        "active",
        currentLanguage === "ru"
    );

    enButton.classList.toggle(
        "active",
        currentLanguage === "en"
    );

    document.title = language.title;

    errorElement.textContent = "";

    updateRuntimeLabel();
}


function updateRuntimeLabel() {

    const language = translations[currentLanguage];

    const power = Number(powerInput.value);

    if (power > 0) {

        const unit = currentLanguage === "ru"
            ? "при"
            : "at";

        document.getElementById("runtime-unit").textContent =
            `${unit} ${formatNumber(power)} W`;

    } else {

        document.getElementById("runtime-unit").textContent =
            language.atPower;

    }
}


function setLanguage(language) {

    currentLanguage = language;

    localStorage.setItem(
        "batteryCalculatorLanguage",
        language
    );

    translatePage();

    if (
        voltageInput.value ||
        capacityInput.value ||
        formatInput.value ||
        cellDischargeInput.value ||
        powerInput.value
    ) {
        calculateBattery();
    }
}


function calculateBattery() {

    errorElement.textContent = "";

    const voltage = Number(voltageInput.value);
    const capacity = Number(capacityInput.value);

    const format = formatInput.value
        .trim()
        .toLowerCase()
        .replace(/\s/g, "");

    const cellDischarge =
        Number(cellDischargeInput.value);

    const power =
        Number(powerInput.value);


    if (!voltage || voltage <= 0) {
        showError(
            translations[currentLanguage].errorVoltage
        );
        return;
    }


    if (!capacity || capacity <= 0) {
        showError(
            translations[currentLanguage].errorCapacity
        );
        return;
    }


    const match =
        format.match(/^(\d+)s(\d+)p$/);


    if (!match) {
        showError(
            translations[currentLanguage].errorFormat
        );
        return;
    }


    const series = Number(match[1]);
    const parallel = Number(match[2]);


    if (series <= 0 || parallel <= 0) {
        showError(
            translations[currentLanguage].errorCells
        );
        return;
    }


    if (!cellDischarge || cellDischarge <= 0) {
        showError(
            translations[currentLanguage].errorDischarge
        );
        return;
    }


    if (!power || power <= 0) {
        showError(
            translations[currentLanguage].errorPower
        );
        return;
    }


    const chemistry =
        chemistryData[chemistryInput.value];


    const energy =
        voltage * capacity;


    const cellCapacity =
        capacity / parallel;


    const cellVoltage =
        voltage / series;


    const minVoltage =
        series * chemistry.min;


    const maxVoltage =
        series * chemistry.max;


    const totalCells =
        series * parallel;


    const maxCurrent =
        cellDischarge * parallel;


    const runtimeHours =
        energy / power;


    energyElement.textContent =
        formatNumber(energy);


    cellCapacityElement.textContent =
        formatNumber(cellCapacity);


    cellVoltageElement.textContent =
        formatNumber(cellVoltage);


    minVoltageElement.textContent =
        formatNumber(minVoltage);


    maxVoltageElement.textContent =
        formatNumber(maxVoltage);


    totalCellsElement.textContent =
        totalCells;


    maxCurrentElement.textContent =
        formatNumber(maxCurrent);


    runtimeElement.textContent =
        formatRuntime(runtimeHours);


    updateRuntimeLabel();
}


function formatNumber(number) {

    return Number(
        number.toFixed(2)
    ).toString();
}


function formatRuntime(hours) {

    const language =
        translations[currentLanguage];


    const wholeHours =
        Math.floor(hours);


    const minutes =
        Math.round(
            (hours - wholeHours) * 60
        );


    if (wholeHours === 0) {

        return `${minutes} ${language.minute}`;

    }


    if (minutes === 0) {

        return `${wholeHours} ${language.hour}`;

    }


    return `${wholeHours} ${language.hour} ${minutes} ${language.minute}`;
}


function showError(message) {

    errorElement.textContent = message;

    energyElement.textContent = "\u2014";
    cellCapacityElement.textContent = "\u2014";
    cellVoltageElement.textContent = "\u2014";
    minVoltageElement.textContent = "\u2014";
    maxVoltageElement.textContent = "\u2014";
    totalCellsElement.textContent = "\u2014";
    maxCurrentElement.textContent = "\u2014";
    runtimeElement.textContent = "\u2014";
}


calculateButton.addEventListener(
    "click",
    calculateBattery
);


ruButton.addEventListener(
    "click",
    () => setLanguage("ru")
);


enButton.addEventListener(
    "click",
    () => setLanguage("en")
);


[
    voltageInput,
    capacityInput,
    formatInput,
    cellDischargeInput,
    powerInput
].forEach(input => {

    input.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                calculateBattery();
            }

        }
    );

});


powerInput.addEventListener(
    "input",
    updateRuntimeLabel
);


translatePage();
