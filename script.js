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

const designerChemistryInput =
    document.getElementById("designer-chemistry");

const designerCellVoltageInput =
    document.getElementById("designer-cell-voltage");

const designerCellCapacityInput =
    document.getElementById("designer-cell-capacity");

const designerCellCurrentInput =
    document.getElementById("designer-cell-current");

const designerVoltageInput =
    document.getElementById("designer-voltage");

const designerCapacityInput =
    document.getElementById("designer-capacity");

const designButton =
    document.getElementById("design");

const designerError =
    document.getElementById("designer-error");

const designerResults =
    document.getElementById("designer-results");

const recommendedFormat =
    document.getElementById("recommended-format");

const designedVoltage =
    document.getElementById("designed-voltage");

const designedCapacity =
    document.getElementById("designed-capacity");

const designedEnergy =
    document.getElementById("designed-energy");

const designedCells =
    document.getElementById("designed-cells");

const designedCurrent =
    document.getElementById("designed-current");

const designedPower =
    document.getElementById("designed-power");

const designedMinVoltage =
    document.getElementById("designed-min-voltage");

const designedMaxVoltage =
    document.getElementById("designed-max-voltage");

const calculatorMode =
    document.getElementById("calculator-mode");

const designerMode =
    document.getElementById("designer-mode");

const calculatorSection =
    document.getElementById("calculator-section");

const designerSection =
    document.getElementById("designer-section");

const calculatorResults =
    document.getElementById("calculator-results");

const ruButton =
    document.getElementById("lang-ru");

const enButton =
    document.getElementById("lang-en");


const chemistryData = {

    liion: {
        nominal: 3.7,
        min: 3.0,
        max: 4.2
    },

    lifepo4: {
        nominal: 3.2,
        min: 2.5,
        max: 3.65
    },

    lipo: {
        nominal: 3.7,
        min: 3.0,
        max: 4.2
    }

};


const translations = {

    ru: {

        title:
            "\u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043d\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440",

        subtitle:
            "\u0420\u0430\u0441\u0447\u0451\u0442 \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u043a\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u043d\u044b\u0445 \u0431\u0430\u0442\u0430\u0440\u0435\u0439",

        calculatorMode:
            "\u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043d\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440",

        designerMode:
            "\u041f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0431\u0430\u0442\u0430\u0440\u0435\u0439",

        batteryParameters:
            "\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0431\u0430\u0442\u0430\u0440\u0435\u0438",

        designerParameters:
            "\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u0431\u0430\u0442\u0430\u0440\u0435\u0438",

        designerDescription:
            "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u043e\u0434\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438 \u0438 \u0436\u0435\u043b\u0430\u0435\u043c\u044b\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u0431\u0430\u0442\u0430\u0440\u0435\u0438. \u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u043f\u043e\u0434\u0431\u0435\u0440\u0451\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0443\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e S/P.",

        nominalVoltage:
            "\u041d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        batteryCapacity:
            "\u0401\u043c\u043a\u043e\u0441\u0442\u044c \u0431\u0430\u0442\u0430\u0440\u0435\u0438",

        batteryFormat:
            "\u0424\u043e\u0440\u043c\u0430\u0442 \u0431\u0430\u0442\u0430\u0440\u0435\u0438",

        cellChemistry:
            "\u0425\u0438\u043c\u0438\u044f \u044f\u0447\u0435\u0439\u043a\u0438",

        cellDischarge:
            "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u0440\u044f\u0434 \u044f\u0447\u0435\u0439\u043a\u0438",

        powerConsumption:
            "\u041f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u043c\u0430\u044f \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u044c",

        formatExample:
            "\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: 14s8p, 13s6p, 20s10p",

        calculate:
            "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c",

        cellNominalVoltage:
            "\u041d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u044f\u0447\u0435\u0439\u043a\u0438",

        cellCapacityInput:
            "\u0401\u043c\u043a\u043e\u0441\u0442\u044c \u043e\u0434\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438",

        cellMaxCurrent:
            "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a \u044f\u0447\u0435\u0439\u043a\u0438",

        targetVoltage:
            "\u0416\u0435\u043b\u0430\u0435\u043c\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u0431\u0430\u0442\u0430\u0440\u0435\u0438",

        targetCapacity:
            "\u0416\u0435\u043b\u0430\u0435\u043c\u0430\u044f \u0451\u043c\u043a\u043e\u0441\u0442\u044c \u0431\u0430\u0442\u0430\u0440\u0435\u0438",

        designBattery:
            "\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0431\u0430\u0442\u0430\u0440\u0435\u044e",

        recommendedConfiguration:
            "\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f",

        designedVoltage:
            "\u041d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        designedCapacity:
            "\u0401\u043c\u043a\u043e\u0441\u0442\u044c",

        designedEnergy:
            "\u042d\u043d\u0435\u0440\u0433\u0438\u044f",

        designedCells:
            "\u0412\u0441\u0435\u0433\u043e \u044f\u0447\u0435\u0435\u043a",

        designedCurrent:
            "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a",

        designedPower:
            "\u0422\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u044c",

        designedMinVoltage:
            "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        designedMaxVoltage:
            "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        designerNote:
            "\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0451\u043c\u043a\u043e\u0441\u0442\u044c \u0431\u044b\u043b\u0430 \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439. \u041d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u043f\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u043c\u0443 \u0446\u0435\u043b\u043e\u043c\u0443 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u044f\u0447\u0435\u0435\u043a.",

        results:
            "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",

        batteryEnergy:
            "\u042d\u043d\u0435\u0440\u0433\u0438\u044f \u0431\u0430\u0442\u0430\u0440\u0435\u0438",

        cellCapacity:
            "\u0401\u043c\u043a\u043e\u0441\u0442\u044c \u043e\u0434\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438",

        cellVoltage:
            "\u041d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438",

        minimumVoltage:
            "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        maximumVoltage:
            "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        totalCells:
            "\u0412\u0441\u0435\u0433\u043e \u044f\u0447\u0435\u0435\u043a",

        cellsUnit:
            "\u044f\u0447\u0435\u0435\u043a",

        maxCurrent:
            "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u043e\u043a\u043e\u043e\u0442\u0434\u0430\u0447\u0430",

        runtime:
            "\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b",

        atPower:
            "\u043f\u0440\u0438 1000 W",

        howItWorks:
            "\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f?",

        energy:
            "\u042d\u043d\u0435\u0440\u0433\u0438\u044f",

        cellCapacityFormula:
            "\u0401\u043c\u043a\u043e\u0441\u0442\u044c \u043e\u0434\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438",

        totalCellsFormula:
            "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044f\u0447\u0435\u0435\u043a",

        maxCurrentFormula:
            "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a",

        minimumVoltageFormula:
            "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        maximumVoltageFormula:
            "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",

        runtimeFormula:
            "\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b",

        designerFormula:
            "\u041f\u043e\u0434\u0431\u043e\u0440 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",

        warning:
            "\u0420\u0430\u0441\u0447\u0451\u0442\u044b \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438. \u0420\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u0431\u0430\u0442\u0430\u0440\u0435\u0438 \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438, \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u044b, \u043f\u0440\u043e\u0441\u0430\u0434\u043a\u0438 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u044f, \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u044f\u0447\u0435\u0435\u043a, BMS \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0430\u043a\u0442\u043e\u0440\u043e\u0432.",

        footer:
            "Battery Calculator \u00b7 \u0412\u0435\u0440\u0441\u0438\u044f 1.2.0b",

        errorVoltage:
            "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435.",

        errorCapacity:
            "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0451\u043c\u043a\u043e\u0441\u0442\u044c.",

        errorFormat:
            "\u0424\u043e\u0440\u043c\u0430\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0442\u0430\u043a: 14s8p.",

        errorCells:
            "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044f\u0447\u0435\u0435\u043a \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f.",

        errorDischarge:
            "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a \u044f\u0447\u0435\u0439\u043a\u0438.",

        errorPower:
            "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u044c.",

        errorDesignerCellVoltage:
            "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u044f\u0447\u0435\u0439\u043a\u0438.",

        errorDesignerCellCapacity:
            "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0451\u043c\u043a\u043e\u0441\u0442\u044c \u044f\u0447\u0435\u0439\u043a\u0438.",

        errorDesignerCurrent:
            "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a \u044f\u0447\u0435\u0439\u043a\u0438.",

        errorDesignerVoltage:
            "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0436\u0435\u043b\u0430\u0435\u043c\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435.",

        errorDesignerCapacity:
            "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0436\u0435\u043b\u0430\u0435\u043c\u0443\u044e \u0451\u043c\u043a\u043e\u0441\u0442\u044c.",

        hour: "\u0447",
        minute: "\u043c\u0438\u043d"
    },


    en: {

        title: "Battery Calculator",

        subtitle:
            "Battery calculation and pack design",

        calculatorMode:
            "Battery Calculator",

        designerMode:
            "Battery Pack Designer",

        batteryParameters:
            "Battery parameters",

        designerParameters:
            "Battery pack design",

        designerDescription:
            "Enter the specifications of a single cell and your desired battery specifications. The calculator will find a suitable S/P configuration.",

        nominalVoltage:
            "Nominal voltage",

        batteryCapacity:
            "Battery capacity",

        batteryFormat:
            "Battery configuration",

        cellChemistry:
            "Cell chemistry",

        cellDischarge:
            "Maximum cell discharge",

        powerConsumption:
            "Power consumption",

        formatExample:
            "Example: 14s8p, 13s6p, 20s10p",

        calculate:
            "Calculate",

        cellNominalVoltage:
            "Cell nominal voltage",

        cellCapacityInput:
            "Cell capacity",

        cellMaxCurrent:
            "Maximum cell current",

        targetVoltage:
            "Desired battery voltage",

        targetCapacity:
            "Desired battery capacity",

        designBattery:
            "Design battery",

        recommendedConfiguration:
            "Recommended configuration",

        designedVoltage:
            "Nominal voltage",

        designedCapacity:
            "Capacity",

        designedEnergy:
            "Energy",

        designedCells:
            "Total cells",

        designedCurrent:
            "Maximum current",

        designedPower:
            "Theoretical maximum power",

        designedMinVoltage:
            "Minimum voltage",

        designedMaxVoltage:
            "Maximum voltage",

        designerNote:
            "The configuration is selected so that the actual capacity is not lower than requested. Voltage is selected using the nearest whole number of series cells.",

        results:
            "Results",

        batteryEnergy:
            "Battery energy",

        cellCapacity:
            "Cell capacity",

        cellVoltage:
            "Cell voltage",

        minimumVoltage:
            "Minimum voltage",

        maximumVoltage:
            "Maximum voltage",

        totalCells:
            "Total cells",

        cellsUnit:
            "cells",

        maxCurrent:
            "Maximum battery current",

        runtime:
            "Runtime",

        atPower:
            "at 1000 W",

        howItWorks:
            "How is it calculated?",

        energy:
            "Energy",

        cellCapacityFormula:
            "Cell capacity",

        totalCellsFormula:
            "Number of cells",

        maxCurrentFormula:
            "Maximum current",

        minimumVoltageFormula:
            "Minimum voltage",

        maximumVoltageFormula:
            "Maximum voltage",

        runtimeFormula:
            "Runtime",

        designerFormula:
            "Configuration",

        warning:
            "Calculations are approximate. Actual battery performance depends on load, temperature, voltage sag, cell condition, BMS and other factors.",

        footer:
            "Battery Calculator \u00b7 Version 1.2.0b",

        errorVoltage:
            "Enter a valid voltage.",

        errorCapacity:
            "Enter a valid battery capacity.",

        errorFormat:
            "The format should look like this: 14s8p.",

        errorCells:
            "The number of cells must be greater than zero.",

        errorDischarge:
            "Enter a valid maximum cell discharge current.",

        errorPower:
            "Enter a valid power consumption.",

        errorDesignerCellVoltage:
            "Enter a valid nominal cell voltage.",

        errorDesignerCellCapacity:
            "Enter a valid cell capacity.",

        errorDesignerCurrent:
            "Enter a valid maximum cell current.",

        errorDesignerVoltage:
            "Enter a desired battery voltage.",

        errorDesignerCapacity:
            "Enter a desired battery capacity.",

        hour: "h",

        minute: "min"
    }

};


let currentLanguage =
    localStorage.getItem("batteryCalculatorLanguage") || "ru";


function translatePage() {

    const language =
        translations[currentLanguage];


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (language[key]) {
                element.textContent =
                    language[key];
            }

        });


    document.documentElement.lang =
        currentLanguage;


    ruButton.classList.toggle(
        "active",
        currentLanguage === "ru"
    );


    enButton.classList.toggle(
        "active",
        currentLanguage === "en"
    );


    document.title =
        language.title;


    updateRuntimeLabel();
}


function updateRuntimeLabel() {

    const language =
        translations[currentLanguage];


    const power =
        Number(powerInput.value);


    if (power > 0) {

        const unit =
            currentLanguage === "ru"
                ? "при"
                : "at";


        document.getElementById(
            "runtime-unit"
        ).textContent =
            `${unit} ${formatNumber(power)} W`;

    } else {

        document.getElementById(
            "runtime-unit"
        ).textContent =
            language.atPower;
    }
}


function setLanguage(language) {

    currentLanguage =
        language;


    localStorage.setItem(
        "batteryCalculatorLanguage",
        language
    );


    translatePage();
}


function calculateBattery() {

    errorElement.textContent = "";


    const voltage =
        Number(voltageInput.value);


    const capacity =
        Number(capacityInput.value);


    const format =
        formatInput.value
            .trim()
            .toLowerCase()
            .replace(/\s/g, "");


    const cellDischarge =
        Number(cellDischargeInput.value);


    const power =
        Number(powerInput.value);


    if (!voltage || voltage <= 0) {
        showError(
            translations[currentLanguage]
                .errorVoltage
        );
        return;
    }


    if (!capacity || capacity <= 0) {
        showError(
            translations[currentLanguage]
                .errorCapacity
        );
        return;
    }


    const match =
        format.match(/^(\d+)s(\d+)p$/);


    if (!match) {
        showError(
            translations[currentLanguage]
                .errorFormat
        );
        return;
    }


    const series =
        Number(match[1]);


    const parallel =
        Number(match[2]);


    if (series <= 0 || parallel <= 0) {
        showError(
            translations[currentLanguage]
                .errorCells
        );
        return;
    }


    if (!cellDischarge || cellDischarge <= 0) {
        showError(
            translations[currentLanguage]
                .errorDischarge
        );
        return;
    }


    if (!power || power <= 0) {
        showError(
            translations[currentLanguage]
                .errorPower
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


function designBattery() {

    designerError.textContent = "";


    const chemistry =
        chemistryData[
            designerChemistryInput.value
        ];


    const cellVoltage =
        Number(
            designerCellVoltageInput.value
        );


    const cellCapacity =
        Number(
            designerCellCapacityInput.value
        );


    const cellCurrent =
        Number(
            designerCellCurrentInput.value
        );


    const targetVoltage =
        Number(
            designerVoltageInput.value
        );


    const targetCapacity =
        Number(
            designerCapacityInput.value
        );


    if (!cellVoltage || cellVoltage <= 0) {

        showDesignerError(
            translations[currentLanguage]
                .errorDesignerCellVoltage
        );

        return;
    }


    if (!cellCapacity || cellCapacity <= 0) {

        showDesignerError(
            translations[currentLanguage]
                .errorDesignerCellCapacity
        );

        return;
    }


    if (!cellCurrent || cellCurrent <= 0) {

        showDesignerError(
            translations[currentLanguage]
                .errorDesignerCurrent
        );

        return;
    }


    if (!targetVoltage || targetVoltage <= 0) {

        showDesignerError(
            translations[currentLanguage]
                .errorDesignerVoltage
        );

        return;
    }


    if (!targetCapacity || targetCapacity <= 0) {

        showDesignerError(
            translations[currentLanguage]
                .errorDesignerCapacity
        );

        return;
    }


    /*
        Find the nearest whole number of series cells.

        Example:

        52 V / 3.7 V = 14.05

        Therefore:

        14s × 3.7 V = 51.8 V
    */

    let series =
        Math.round(
            targetVoltage / cellVoltage
        );


    if (series < 1) {
        series = 1;
    }


    /*
        Parallel count is rounded UP.

        This guarantees that the designed
        battery capacity is not lower than
        the requested capacity.

        Example:

        30 Ah / 5 Ah = 6p
    */

    const parallel =
        Math.ceil(
            targetCapacity / cellCapacity
        );


    const actualVoltage =
        series * cellVoltage;


    const actualCapacity =
        parallel * cellCapacity;


    const energy =
        actualVoltage * actualCapacity;


    const totalCells =
        series * parallel;


    const maxCurrent =
        parallel * cellCurrent;


    const maxPower =
        actualVoltage * maxCurrent;


    const minVoltage =
        series * chemistry.min;


    const maxVoltage =
        series * chemistry.max;


    recommendedFormat.textContent =
        `${series}s${parallel}p`;


    designedVoltage.textContent =
        formatNumber(actualVoltage);


    designedCapacity.textContent =
        formatNumber(actualCapacity);


    designedEnergy.textContent =
        formatNumber(energy);


    designedCells.textContent =
        totalCells;


    designedCurrent.textContent =
        formatNumber(maxCurrent);


    designedPower.textContent =
        formatNumber(maxPower);


    designedMinVoltage.textContent =
        formatNumber(minVoltage);


    designedMaxVoltage.textContent =
        formatNumber(maxVoltage);


    designerResults.classList.remove(
        "hidden"
    );
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

    errorElement.textContent =
        message;


    energyElement.textContent = "—";
    cellCapacityElement.textContent = "—";
    cellVoltageElement.textContent = "—";
    minVoltageElement.textContent = "—";
    maxVoltageElement.textContent = "—";
    totalCellsElement.textContent = "—";
    maxCurrentElement.textContent = "—";
    runtimeElement.textContent = "—";
}


function showDesignerError(message) {

    designerError.textContent =
        message;


    designerResults.classList.add(
        "hidden"
    );
}


function switchToCalculator() {

    calculatorMode.classList.add(
        "active"
    );

    designerMode.classList.remove(
        "active"
    );


    calculatorSection.classList.remove(
        "hidden"
    );

    calculatorResults.classList.remove(
        "hidden"
    );

    designerSection.classList.add(
        "hidden"
    );
}


function switchToDesigner() {

    designerMode.classList.add(
        "active"
    );

    calculatorMode.classList.remove(
        "active"
    );


    designerSection.classList.remove(
        "hidden"
    );

    calculatorSection.classList.add(
        "hidden"
    );

    calculatorResults.classList.add(
        "hidden"
    );
}


calculateButton.addEventListener(
    "click",
    calculateBattery
);


designButton.addEventListener(
    "click",
    designBattery
);


calculatorMode.addEventListener(
    "click",
    switchToCalculator
);


designerMode.addEventListener(
    "click",
    switchToDesigner
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


[
    designerCellVoltageInput,
    designerCellCapacityInput,
    designerCellCurrentInput,
    designerVoltageInput,
    designerCapacityInput
].forEach(input => {

    input.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                designBattery();
            }

        }
    );

});


powerInput.addEventListener(
    "input",
    updateRuntimeLabel
);


translatePage();
