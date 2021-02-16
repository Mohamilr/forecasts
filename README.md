# cli-climate

<img src="https://res.cloudinary.com/project-s/image/upload/v1613503859/climate_cli_search_j3cngj.png" />

## Description
The climate cli is a nodejs cli that takes parameters from the terminal and makes a fetch request to [openweather current api](https://openweathermap.org/current) using [axios](https://www.npmjs.com/package/axios) to give the current weather condition of a place in different temperature units.
## Installation
`npm i -g forecasts`


## Usage
Examples

Temperature values are in Farhenheit by default.

```
forecasts lagos
```

Results

```
Current temperature in lagos is 91.4°F.
Conditions are currently: light rain.
What you should expect: light rain throughout the day, Tue Feb 16 2021. 
Weather was added to your weather tracking file, weather.txt
```

Pass in Temperature Parameters (Kelvin)
```
forecasts lagos -k
```
Results
```
Current temperature in lagos is 306.15°K.
Conditions are currently: light rain.
What you should expect: light rain throughout the day, Tue Feb 16 2021. 
Weather was added to your weather tracking file, weather.txt
```

Pass in Temperature Parameters (Celcius)
```
forecasts lagos -c
```
Results
```
Current temperature in lagos is 33°C.
Conditions are currently: light rain.
What you should expect: light rain throughout the day, Tue Feb 16 2021. 
Weather was added to your weather tracking file, weather.txt
```

Get all weather report
```
forecasts report 
```
Results 

```
Current temperature in london is 49.62F.
Conditions are currently: few clouds.
What you should expect: few clouds throughout the day, Tue Feb 16 2021.

Current temperature in london is 282.99K.
Conditions are currently: broken clouds.
What you should expect: broken clouds throughout the day, Tue Feb 16 2021.

Current temperature in lagos is 306.15K.
Conditions are currently: light rain.
What you should expect: light rain throughout the day, Tue Feb 16 2021.

Current temperature in lagos is 91.4F.
Conditions are currently: light rain.
What you should expect: light rain throughout the day, Tue Feb 16 2021.

Current temperature in lagos is 33C.
Conditions are currently: light rain.
What you should expect: light rain throughout the day, Tue Feb 16 2021.
```

Help
```
forecasts --help
```

### Packages Used
`axios`
`chalk`
`dotenv`
`yargs`