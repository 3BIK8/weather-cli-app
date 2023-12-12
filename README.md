````markdown
# Weather CLI App

A simple command-line interface (CLI) application to get weather information.

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-cli-app.git
   ```
````

2. Navigate to the project directory:

   ```bash
   cd weather-cli-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

Run the following command in the terminal:

```bash
node weather-cli.js <command> [options]
```

### Commands

- `current <city>` (Alias: `c`): Get current weather for a city.

  Options:

  - `-u, --unit <unit>`: Temperature unit (Celsius or Fahrenheit). Default is `metric`.

  Example:

  ```bash
  node weather-cli.js current Paris -u imperial
  ```

- `forecast <city>` (Alias: `f`): Get weather forecast for a city.

  Options:

  - `-u, --unit <unit>`: Temperature unit (Celsius or Fahrenheit). Default is `metric`.

  Example:

  ```bash
  node weather-cli.js forecast London
  ```

- `detailed-forecast <city>` (Alias: `df`): Get detailed weather forecast for a city.

  Options:

  - `-u, --unit <unit>`: Temperature unit (Celsius or Fahrenheit). Default is `metric`.

  Example:

  ```bash
  node weather-cli.js detailed-forecast Berlin -u imperial
  ```

- `detailed-current <city>` (Alias: `dc`): Get detailed current weather for a city.

  Options:

  - `-u, --unit <unit>`: Temperature unit (Celsius or Fahrenheit). Default is `metric`.

  Example:

  ```bash
  node weather-cli.js detailed-current Madrid
  ```
