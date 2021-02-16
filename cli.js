#!/usr/bin/env node

const chalk = require("chalk");
require("dotenv").config();
const yargs = require("yargs");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const argv = yargs
  .command("place", "The place you which to search for.")
  .command("report", "Get Weather report.")
  .option("fahrenheit", {
    alias: "f",
    description: "Temperature in fahrenheit.",
    type: "boolean",
  })
  .option("kelvin", {
    alias: "k",
    description: "Temperature in kelvin.",
    type: "boolean",
  })
  .option("celcius", {
    alias: "c",
    description: "Temperature in celcius.",
    type: "boolean",
  })
  .help()
  .alias("help", "h").argv;

const place = argv._[0];
const param = argv;


if (argv._[0] === "report") {
  getLogs();
} 
else if (argv._[0]) {
  (async function (place, param) {
    try {

      const { Unit, Value } = temperature(param);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${Value}&appid=${process.env.API_KEY}`
      );

      const date = new Date().toDateString();
      const data = `
              \rCurrent temperature in ${place} is ${response.data.main.temp}°${Unit}.
              \rConditions are currently: ${response.data.weather[0].description}.
              \rWhat you should expect: ${response.data.weather[0].description} throughout the day, ${date}.`;

      fs.appendFile("weather.txt", `\n${data}`, (err) => {
        if (err) {
          throw err;
        }
      });

      return console.log(
        chalk.greenBright(
          data,
          "\nWeather was added to your weather tracking file, weather.txt"
        )
      );
    } catch (error) {
      console.error(chalk.red(error.response.data.message));
    }
  })(place, param);
} 
else {
  return console.log(chalk.red("Please provide a location"));
}


function getLogs() {
  const log = fs.readFileSync(path.join(__dirname, "./weather.txt"));
  return console.log(chalk.blue(log.toLocaleString()));
}


function temperature(param) {
  let Value;
  let Unit = "F";

  if (!param.fahrenheit && !param.kelvin && !param.celcius) {
    Value = "imperial";
  }
  if (param.fahrenheit) {
    Value = "imperial";
    Unit = "F";
  } else if (param.kelvin) {
    Value = "";
    Unit = "K";
  } else if (param.celcius) {
    Value = "metric";
    Unit = "C";
  }

  return { 
    Unit, 
    Value 
  };
}
