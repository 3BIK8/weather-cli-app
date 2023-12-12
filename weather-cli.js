const axios = require("axios");
const { program } = require("commander");
const kleur = require("kleur");
const config = require("./config.json");

const API_KEY = config.openWeatherApiKey;

const getCurrentWeather = async (city, unit) => {
	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather`,
			{
				params: {
					q: city,
					units: unit,
					appid: API_KEY,
				},
			}
		);

		return response.data;
	} catch (error) {
		console.error("Error fetching current weather:", error.message);
		process.exit(1);
	}
};

const getWeatherForecast = async (city, unit) => {
	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/forecast`,
			{
				params: {
					q: city,
					units: unit,
					appid: API_KEY,
				},
			}
		);

		return response.data;
	} catch (error) {
		console.error("Error fetching weather forecast:", error.message);
		process.exit(1);
	}
};

const formatDateTime = (dateTime) => {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		timeZoneName: "short",
	};
	return new Date(dateTime).toLocaleDateString("en-US", options);
};

const displayCurrentWeather = (weatherData, unit) => {
	console.log(
		kleur
			.bgBlue()
			.white()
			.bold(
				` Current Weather for ${weatherData.name}, ${weatherData.sys.country} `
			)
	);
	console.log(
		kleur.bold().yellow("Temperature:"),
		kleur.yellow(`${weatherData.main.temp} ${unit === "metric" ? "°C" : "°F"}`)
	);
	console.log(
		kleur.bold().magenta("Weather:"),
		kleur.magenta(weatherData.weather[0].description)
	);
	console.log(kleur.gray("------------------"));
};

const displayDetailedCurrentWeather = (weatherData, unit) => {
	displayCurrentWeather(weatherData, unit);
	console.log(
		kleur.bold().green("Humidity:"),
		kleur.green(`${weatherData.main.humidity}%`)
	);
	console.log(
		kleur.bold().cyan("Wind Speed:"),
		kleur.cyan(`${weatherData.wind.speed} m/s`)
	);
	console.log(kleur.gray("------------------"));
};

const displayWeatherInfo = (
	item,
	unit,
	detailed = false,
	detailedCurrent = false
) => {
	console.log(
		kleur.bold().blue("Date:"),
		kleur.blue(formatDateTime(item.dt_txt))
	);
	console.log(
		kleur.bold().yellow("Temperature:"),
		kleur.yellow(`${item.main.temp} ${unit === "metric" ? "°C" : "°F"}`)
	);

	if (detailed || detailedCurrent) {
		console.log(
			kleur.bold().magenta("Weather:"),
			kleur.magenta(item.weather[0].description)
		);
		console.log(kleur.gray("------------------"));
	}

	if (detailed) {
		console.log(
			kleur.bold().green("Humidity:"),
			kleur.green(`${item.main.humidity}%`)
		);
		console.log(
			kleur.bold().cyan("Wind Speed:"),
			kleur.cyan(`${item.wind.speed} m/s`)
		);
	}

	if (detailedCurrent) {
		displayDetailedCurrentWeather(item, unit);
	}
};

// Display ASCII art and list of commands when no commands are provided
if (process.argv.length <= 2) {
	console.log(
		kleur
			.bold()
			.cyan(
				"__          __ ______         _______  _    _  ______  _____       _____  _       _____                 _____   _____  "
			)
	);
	console.log(
		kleur
			.bold()
			.cyan(
				" \\ \\        / /|  ____|    /\\ |__   __|| |  | ||  ____||  __ \\     / ____|| |     |_   _|         /\\    |  __ \\ |  __ \\ "
			)
	);
	console.log(
		kleur
			.bold()
			.cyan(
				"  \\ \\  /\\  / / | |__      /  \\   | |   | |__| || |__   | |__) |   | |     | |       | |          /  \\   | |__) || |__) |"
			)
	);
	console.log(
		kleur
			.bold()
			.cyan(
				"   \\ \\/  \\/ /  |  __|    / /\\ \\  | |   |  __  ||  __|  |  _  /    | |     | |       | |         / /\\ \\  |  ___/ |  ___/ "
			)
	);
	console.log(
		kleur
			.bold()
			.cyan(
				"    \\  /\\  /   | |____  / ____ \\ | |   | |  | || |____ | | \\ \\    | |____ | |____  _| |_       / ____ \\ | |     | |     "
			)
	);
	console.log(
		kleur
			.bold()
			.cyan(
				"     \\/  \\/    |______|/_/    \\_\\|_|   |_|  |_||______||_|  \\_\\    \\_____||______||_____|     /_/    \\_\\|_|     |_|     "
			)
	);
	console.log("\nWeather CLI\n");
	console.log("Available Commands:");
	console.log("  - current <city> [-u, --unit <unit>]");
	console.log("  - forecast <city> [-u, --unit <unit>]");
	console.log("  - detailed-forecast <city> [-u, --unit <unit>]");
	console.log("  - detailed-current <city> [-u, --unit <unit>]");
	process.exit(0);
}

program.version("1.0.0").description("Weather CLI App");

program
	.command("current <city>")
	.option(
		"-u, --unit <unit>",
		"Temperature unit (Celsius or Fahrenheit)",
		"metric"
	)
	.description("Get current weather for a city")
	.action(async (city, options) => {
		const unit = options.unit;
		const weatherData = await getCurrentWeather(city, unit);
		displayCurrentWeather(weatherData, unit);
	});

program
	.command("forecast <city>")
	.option(
		"-u, --unit <unit>",
		"Temperature unit (Celsius or Fahrenheit)",
		"metric"
	)
	.description("Get weather forecast for a city")
	.action(async (city, options) => {
		const unit = options.unit;
		const forecastData = await getWeatherForecast(city, unit);
		console.log(kleur.bgBlue().white().bold(` Weather Forecast for ${city} `));

		forecastData.list.forEach((item) => {
			displayWeatherInfo(item, unit);
		});
	});

program
	.command("detailed-forecast <city>")
	.option(
		"-u, --unit <unit>",
		"Temperature unit (Celsius or Fahrenheit)",
		"metric"
	)
	.description("Get detailed weather forecast for a city")
	.action(async (city, options) => {
		const unit = options.unit;
		const forecastData = await getWeatherForecast(city, unit);
		console.log(
			kleur.bgBlue().white().bold(` Detailed Weather Forecast for ${city} `)
		);

		forecastData.list.forEach((item) => {
			displayWeatherInfo(item, unit, true);
		});
	});

program
	.command("detailed-current <city>")
	.option(
		"-u, --unit <unit>",
		"Temperature unit (Celsius or Fahrenheit)",
		"metric"
	)
	.description("Get detailed current weather for a city")
	.action(async (city, options) => {
		const unit = options.unit;
		const weatherData = await getCurrentWeather(city, unit);
		displayDetailedCurrentWeather(weatherData, unit);
	});

program.parse(process.argv);
