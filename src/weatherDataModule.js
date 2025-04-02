// Fetch the weather data from Virtual Crossing API
// Takes 2 parameters - location for data & unit type (us / metric)
export async function fetchWeatherData(location, unit = "metric") {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=A5JKW4ELJQ4BD7SYBQ2CL9N2A`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    handleError(err);
  }
}

// Data validation check that throws an error if weather data is not present
function validateWeatherData(data) {
  if (!data || !data.days || !data.days[0]) {
    throw new Error("Invalid or missing weather data");
  }
}

function validateDate(date) {
  if (!(date instanceof Date)) {
    throw new Error("Invalid data, must be instance of Date");
  }
}

function validateArray(input) {
  if (!Array.isArray(input)) {
    throw new Error("Invalid data type, must be array");
  }
}

function handleError(err) {
  console.error(err);
  return null;
}

// Helper functions to extract & format relevant data from API response
function getLocationName(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const locationResolvedAddress = locationData.resolvedAddress;
    const locationName = locationResolvedAddress.split(",")[0];

    return locationName;
  } catch (err) {
    handleError(err);
  }
}

function getWeatherCondition(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const weatherConditon = locationData.days[0].conditions;
    return weatherConditon;
  } catch (err) {
    handleError(err);
  }
}

function getWeatherConditionIcon(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const weatherConditonIcon = locationData.days[0].icon;
    return weatherConditonIcon;
  } catch (err) {
    handleError(err);
  }
}

function getCurrentTemp(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const currentTemp = locationData.days[0].temp;
    return Math.round(currentTemp);
  } catch (err) {
    handleError(err);
  }
}

function getCurrentFeelsLikeTemp(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const currentFeelsLikeTemp = locationData.days[0].feelslike;
    return Math.round(currentFeelsLikeTemp);
  } catch (err) {
    handleError(err);
  }
}

function getHumidity(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const locationHumidity = locationData.days[0].humidity;
    return Math.floor(locationHumidity);
  } catch (err) {
    handleError(err);
  }
}

function getCurrentWindSpeed(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const currentWindSpeed = locationData.days[0].windspeed;
    return Math.round(currentWindSpeed);
  } catch (err) {
    handleError(err);
  }
}

function getPressure(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const locationPressure = locationData.days[0].pressure;
    return Math.round(locationPressure);
  } catch (err) {
    handleError(err);
  }
}

function getUvIndex(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const uvIndex = locationData.days[0].uvindex;
    return uvIndex;
  } catch (err) {
    handleError(err);
  }
}

function getLocalTime(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const timezoneOffset = locationData.tzoffset;

    if (timezoneOffset === undefined) {
      throw new Error("Timezone offset missing");
    }

    const timezoneOffsetMs = timezoneOffset * 3600 * 1000;
    const nowUtc = new Date(); // Current UTC time
    const localTime = new Date(nowUtc.getTime() + timezoneOffsetMs);
    const localTimeFormatted = formatDateHoursMinutes(localTime);

    return localTimeFormatted;
  } catch (err) {
    handleError(err);
  }
}

function getLocalDateFormatted(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const currentDate = new Date(locationData.days[0].datetime);
    const formattedDate = currentDate.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
    }); // Return formatted local date, e.g. 28 Jan
    return formattedDate;
  } catch (err) {
    handleError(err);
  }
}

function formatDateToShortDayMonth(date) {
  try {
    validateDate(date);

    const formattedDate = date.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
    });

    return formattedDate;
  } catch (err) {
    console.error(err);
    return null;
  }
}

function formatDateToWeekday(date) {
  try {
    validateDate(date);

    const formattedWeekday = date.toLocaleString("en-GB", {
      weekday: "long",
    });

    return formattedWeekday;
  } catch (err) {
    handleError(err);
  }
}

function formatDateHoursMinutes(date) {
  try {
    validateDate(date);

    const formattedTime = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return formattedTime;
  } catch (err) {
    handleError(err);
  }
}

function getLocalWeekday(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const currentDate = new Date(locationData.days[0].datetime);
    const localWeekday = formatDateToWeekday(currentDate);

    return localWeekday;
  } catch (err) {
    handleError(err);
  }
}

function getSunriseTime(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const sunriseTime = locationData.days[0].sunrise;
    const sunriseTimeFormatted = sunriseTime.slice(0, -3);

    return sunriseTimeFormatted;
  } catch (err) {
    handleError(err);
  }
}

function getSunsetTime(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const sunsetTime = locationData.days[0].sunset;
    const sunsetTimeFormatted = sunsetTime.slice(0, -3);

    return sunsetTimeFormatted;
  } catch (err) {
    handleError(err);
  }
}

// Hourly forecast
function getRelevantHourlyData(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const allHoursData = locationData.days[0].hours;
    const relevantHours = [
      "12:00:00",
      "15:00:00",
      "18:00:00",
      "21:00:00",
      "00:00:00",
    ];
    const relevantHoursData = [];

    for (let i = 0; i < allHoursData.length; i++) {
      if (relevantHours.includes(allHoursData[i].datetime)) {
        relevantHoursData.push(allHoursData[i]);
      }
    }

    return relevantHoursData;
  } catch (err) {
    handleError(err);
  }
}

function getHourlyForecast(data) {
  try {
    validateWeatherData(data);

    const fullRelevantHoursData = getRelevantHourlyData(data);

    validateArray(fullRelevantHoursData);

    const hourlyForecast = [];

    for (let i = 0; i < fullRelevantHoursData.length; i++) {
      const fullHourData = fullRelevantHoursData[i];
      const relevantHourData = {};

      relevantHourData.hourTimeFormatted = fullHourData.datetime.slice(0, -3);
      relevantHourData.hourConditionIcon = fullHourData.icon;
      relevantHourData.hourTemp = fullHourData.temp;
      relevantHourData.hourWindSpeed = fullHourData.windspeed;

      hourlyForecast.push(relevantHourData);
    }

    return hourlyForecast;
  } catch (err) {
    handleError(err);
  }
}

// 5 day forecast
function getRelevantFiveDayData(data) {
  try {
    validateWeatherData(data);

    const locationData = data;
    const fiveDayData = [];

    for (let i = 0; i < 5; i++) {
      fiveDayData.push(locationData.days[i]);
    }

    return fiveDayData;
  } catch (err) {
    handleError(err);
  }
}

function getFiveDayForecast(data) {
  try {
    validateWeatherData(data);

    const fullFiveDayData = getRelevantFiveDayData(data);

    validateArray(fullFiveDayData);

    const fiveDayForecast = [];

    for (let i = 0; i < fullFiveDayData.length; i++) {
      const fullDayData = fullFiveDayData[i];
      const relevantDayData = {};

      relevantDayData.dayConditionIcon = fullDayData.icon;
      relevantDayData.dayTemp = fullDayData.temp;
      relevantDayData.dayDate = formatDateToShortDayMonth(
        new Date(fullDayData.datetime)
      );
      relevantDayData.dayWeekday = formatDateToWeekday(
        new Date(fullDayData.datetime)
      );
      relevantDayData.dayFormattedFullDate = `${relevantDayData.dayWeekday}, ${relevantDayData.dayDate}`;

      fiveDayForecast.push(relevantDayData);
    }

    return fiveDayForecast;
  } catch (err) {
    handleError(err);
  }
}

// -----------------------------------------

// Combine all previous helper functions and get a weather summary object
export function getWeatherSummary(data) {
  return {
    locationName: getLocationName(data),
    weatherConditions: getWeatherCondition(data),
    weatherConditionIcon: getWeatherConditionIcon(data),
    currentTemp: getCurrentTemp(data),
    feelsLikeTemp: getCurrentFeelsLikeTemp(data),

    humidity: getHumidity(data),
    windSpeed: getCurrentWindSpeed(data),
    pressure: getPressure(data),
    uvIndex: getUvIndex(data),

    // Removed separate properties for localWeekday and localDate because YAGNI
    formattedFullDate: `${getLocalWeekday(data)}, ${getLocalDateFormatted(
      data
    )}`,

    localTime: getLocalTime(data),
    sunriseTime: getSunriseTime(data),
    sunsetTime: getSunsetTime(data),

    todayHourlyForecast: getHourlyForecast(data),
    fiveDayForecast: getFiveDayForecast(data),
  };
}

const londonData = await fetchWeatherData("london");
const londonDataSummary = getWeatherSummary(londonData);
// console.log(londonDataSummary)