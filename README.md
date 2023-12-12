# Weather CLI App

A simple command-line interface (CLI) application to retrieve weather information using the OpenWeatherMap API.

## Prerequisites

Before running the Weather CLI App, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-cli-app.git
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

Run the Weather CLI App using the following command:

```bash
node weather-cli.js <command>
```

### Available Commands

- **Current Weather:**

  ```bash
  node weather-cli.js current <city> [-u, --unit <unit>]
  ```

  Alias: `node weather-cli.js c`

  Example:

  ```bash
  node weather-cli.js current London -u metric
  ```

- **Weather Forecast:**

  ```bash
  node weather-cli.js forecast <city> [-u, --unit <unit>]
  ```

  Alias: `node weather-cli.js f`

  Example:

  ```bash
  node weather-cli.js forecast Paris -u imperial
  ```

- **Detailed Weather Forecast:**

  ```bash
  node weather-cli.js detailed-forecast <city> [-u, --unit <unit>]
  ```

  Alias: `node weather-cli.js df`

  Example:

  ```bash
  node weather-cli.js detailed-forecast Berlin -u metric
  ```

- **Detailed Current Weather:**

  ```bash
  node weather-cli.js detailed-current <city> [-u, --unit <unit>]
  ```

  Alias: `node weather-cli.js dc`

  Example:

  ```bash
  node weather-cli.js detailed-current NewYork -u imperial
  ```

## ASCII Art

Run the Weather CLI App without any command to see the ASCII art and available commands:

```bash
node weather-cli.js
```
