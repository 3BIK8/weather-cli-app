# Weather CLI App

A simple command-line interface (CLI) application to retrieve weather information using the OpenWeatherMap API.

## Prerequisites

Before running the Weather CLI App, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/3BIK8/weather-cli-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-cli-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Current Weather

Get the current weather for a city:

```bash
node weather-cli.js current <city> [-u, --unit <unit>]
```

Example:

```bash
node weather-cli.js current London -u metric
```

### Weather Forecast

Get the weather forecast for a city:

```bash
node weather-cli.js forecast <city> [-u, --unit <unit>]
```

Example:

```bash
node weather-cli.js forecast Paris -u imperial
```

### Detailed Weather Forecast

Get a detailed weather forecast for a city:

```bash
node weather-cli.js detailed-forecast <city> [-u, --unit <unit>]
```

Example:

```bash
node weather-cli.js detailed-forecast Berlin -u metric
```

### Detailed Current Weather

Get detailed current weather for a city:

```bash
node weather-cli.js detailed-current <city> [-u, --unit <unit>]
```

Example:

```bash
node weather-cli.js detailed-current NewYork -u imperial
```

## ASCII Art

Run the Weather CLI App without any command to see the ASCII art and available commands:

```bash
node weather-cli.js
```
