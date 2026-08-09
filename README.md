# Battery Calculator

A lightweight and responsive web-based battery calculator for analyzing Li-ion battery configurations.

The calculator allows users to enter the battery voltage, capacity, and cell configuration and calculates several important battery characteristics.

## Features

- Battery energy calculation in Wh
- Capacity of an individual cell
- Voltage of an individual cell
- Minimum battery voltage
- Maximum battery voltage
- Estimated runtime at 1000 W
- Support for different battery configurations such as `14s8p`, `13s6p`, and `20s10p`
- Russian and English language support
- Responsive design for desktop and mobile devices
- No external libraries or frameworks required

## How It Works

The calculator uses basic battery formulas to estimate the main characteristics of the battery.

### Battery Energy

```text
Energy (Wh) = Voltage (V) × Capacity (Ah)
