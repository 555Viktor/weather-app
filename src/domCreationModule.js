// Utility functions for DOM element creation
function addClass(element, ...classes) {
  if (!element) return;
  element.classList.add(...classes);
}

export function createDivEl() {
  const divEl = document.createElement("div");
  return divEl;
}

function createImgEl() {
  const imgEl = document.createElement("img");
  return imgEl;
}

function createInputEl() {
  const inputEl = document.createElement("input");
  return inputEl;
}

function createH1El() {
  const h1El = document.createElement("h1");
  return h1El;
}

function createBoldEl() {
  const boldEl = document.createElement("b");
  return boldEl;
}

function createParagraphEl() {
  const paragraphEl = document.createElement("p");
  return paragraphEl;
}

// Functions to create weather data components
export function createSearchBar() {
  const searchBarContainer = createDivEl();
  addClass(searchBarContainer, "search-bar-container");

  const searchIcon = createImgEl();
  addClass(searchIcon, "search-icon");
  searchIcon.src = "./assets/search-icon.svg";

  const searchInput = createInputEl();
  const searchInputPlaceholder = "Search for you preferred location...";
  addClass(searchInput, "input-search");
  searchInput.placeholder = searchInputPlaceholder;

  searchBarContainer.append(searchIcon, searchInput);
  return searchBarContainer;
}

function createLocationTimeDataDom(dataSummary) {
  if (!dataSummary) return;

  const locationDataSummary = dataSummary;

  const timeDataContainer = createDivEl();
  addClass(timeDataContainer, "location-time-data-container");

  const locationNameHeader = createH1El();
  addClass(locationNameHeader, "location-name");
  locationNameHeader.textContent = locationDataSummary.locationName;

  const locationCurrentDateEl = createParagraphEl();
  addClass(locationCurrentDateEl, "location-date");
  locationCurrentDateEl.textContent = locationDataSummary.formattedFullDate;

  timeDataContainer.append(
    locationNameHeader,
    locationCurrentDateEl
  );

  return timeDataContainer;
}

function createTempDetailsDom(dataSummary) {
  const tempDetailsContainer = createDivEl();
  addClass(tempDetailsContainer, "temp-details-container");

  let tempUnitSymbol = "°C";

  const locationCurrentTempEl = createBoldEl();
  addClass(locationCurrentTempEl, "current-temp");
  locationCurrentTempEl.textContent = dataSummary.currentTemp + tempUnitSymbol;

  const locationFeelsLikeTempLabelEl = createParagraphEl();
  addClass(locationFeelsLikeTempLabelEl, "feels-like-label");
  locationFeelsLikeTempLabelEl.textContent = "Feels like: ";

  const locationFeelsLikeTempEl = createBoldEl();
  addClass(locationFeelsLikeTempEl, "feels-like-temp");
  locationFeelsLikeTempEl.textContent =
    dataSummary.feelsLikeTemp + tempUnitSymbol;

  locationFeelsLikeTempLabelEl.append(locationFeelsLikeTempEl);

  tempDetailsContainer.append(
    locationCurrentTempEl,
    locationFeelsLikeTempLabelEl
  );

  return tempDetailsContainer;
}

function createSunCycleDetailsDom(dataSummary) {
  const sunCycleDetailsContainer = createDivEl();
  addClass(sunCycleDetailsContainer, "sun-cycle-details-container");

  const sunriseDetailsContainer = createDivEl();
  addClass(sunriseDetailsContainer, "sun-cycle-details", "sunrise-details");

  const sunriseIconEl = createImgEl();
  addClass(sunriseIconEl, "sun-cycle-icon");
  sunriseIconEl.src = "./assets/sunrise-icon.svg";
  sunriseIconEl.alt = "Sunrise Icon";

  const sunriseLabelEl = createBoldEl();
  addClass(sunriseLabelEl, "sunrise-label");
  sunriseLabelEl.textContent = "Sunrise";

  const sunriseTimeEl = createParagraphEl();
  addClass(sunriseTimeEl, "sunrise-time");
  sunriseTimeEl.textContent = dataSummary.sunriseTime;

  sunriseDetailsContainer.append(sunriseIconEl, sunriseLabelEl, sunriseTimeEl);

  const sunsetDetailsContainer = createDivEl();
  addClass(sunsetDetailsContainer, "sun-cycle-details", "sunset-details");

  const sunsetIconEl = createImgEl();
  addClass(sunsetIconEl, "sun-cycle-icon");
  sunsetIconEl.src = "./assets/sunset-icon.svg";
  sunsetIconEl.alt = "Sunset Icon";

  const sunsetLabelEl = createBoldEl();
  addClass(sunsetLabelEl, "sunset-label");
  sunsetLabelEl.textContent = "Sunset";

  const sunsetTimeEl = createParagraphEl();
  addClass(sunsetTimeEl, "sunset-time");
  sunsetTimeEl.textContent = dataSummary.sunsetTime;

  sunsetDetailsContainer.append(sunsetIconEl, sunsetLabelEl, sunsetTimeEl);

  sunCycleDetailsContainer.append(
    sunriseDetailsContainer,
    sunsetDetailsContainer
  );

  return sunCycleDetailsContainer;
}

function createWeatherIconDetailsDom(dataSummary) {
  const weatherIconDetailsContainer = createDivEl();
  addClass(weatherIconDetailsContainer, "weather-icon-details");

  const weatherConditionIconEl = createImgEl();
  addClass(weatherConditionIconEl, "weather-condition-icon");
  weatherConditionIconEl.alt = dataSummary.weatherConditions + " " + "icon";
  weatherConditionIconEl.src = `./assets/condition-icons/${dataSummary.weatherConditionIcon}.svg`;

  const weatherConditionLabelEl = createBoldEl();
  addClass(weatherConditionLabelEl, "weather-condition-label");
  weatherConditionLabelEl.textContent = dataSummary.weatherConditions;

  weatherIconDetailsContainer.append(
    weatherConditionIconEl,
    weatherConditionLabelEl
  );

  return weatherIconDetailsContainer;
}

function createExtraWeatherDetailsDom(dataSummary) {
  const extraDetailsContainer = createDivEl();
  addClass(extraDetailsContainer, "extra-details-container");

  const humidityDetailsContainer = createDivEl();
  addClass(humidityDetailsContainer, "extra-details", "humidity-details");

  const humidityIconEl = createImgEl();
  addClass(humidityIconEl, "weather-details-icon", "humidity-icon");
  humidityIconEl.src = "./assets/humidity-icon.svg";
  humidityIconEl.alt = "Humidity icon";

  const humidityValueEl = createBoldEl();
  addClass(humidityValueEl, "weather-value", "humidity-value");
  humidityValueEl.textContent = dataSummary.humidity + "%";

  const humidityLabelEl = createParagraphEl();
  addClass(humidityLabelEl, "weather-label");
  humidityLabelEl.textContent = "Humidity";

  humidityDetailsContainer.append(
    humidityIconEl,
    humidityValueEl,
    humidityLabelEl
  );

  const uvDetailsContainer = createDivEl();
  addClass(uvDetailsContainer, "extra-details", "uv-details");

  const uvIconEl = createImgEl();
  addClass(uvIconEl, "weather-details-icon", "uv-icon");
  uvIconEl.src = "./assets/uv-icon.svg";
  uvIconEl.alt = "Uv index icon";

  const uvValueEl = createBoldEl();
  addClass(uvValueEl, "weather-value", "uv-value");
  uvValueEl.textContent = dataSummary.uvIndex;

  const uvLabelEl = createParagraphEl();
  addClass(uvLabelEl, "weather-label");
  uvLabelEl.textContent = "UV Index";

  uvDetailsContainer.append(uvIconEl, uvValueEl, uvLabelEl);

  const pressureDetailsContainer = createDivEl();
  addClass(pressureDetailsContainer, "extra-details", "pressure-details");

  const pressureIconEl = createImgEl();
  addClass(pressureIconEl, "weather-details-icon", "pressure-icon");
  pressureIconEl.src = "./assets/pressure-icon.svg";
  pressureIconEl.alt = "Pressure Icon";

  const pressureValueEl = createBoldEl();
  addClass(pressureValueEl, "weather-value", "pressure-value");
  pressureValueEl.textContent = dataSummary.pressure + "hPa";

  const pressureLabelEl = createParagraphEl();
  addClass(pressureLabelEl, "weather-label");
  pressureLabelEl.textContent = "Pressure";

  pressureDetailsContainer.append(
    pressureIconEl,
    pressureValueEl,
    pressureLabelEl
  );

  const windSpeedDetailsContainer = createDivEl();
  addClass(windSpeedDetailsContainer, "extra-details", "wind-speed-details");

  const windSpeedIconEl = createImgEl();
  addClass(windSpeedIconEl, "weather-details-icon", "wind-speed-icon");
  windSpeedIconEl.src = "./assets/wind-icon.svg";
  windSpeedIconEl.alt = "Wind speed icon";

  const windSpeedValueEl = createBoldEl();
  addClass(windSpeedValueEl, "weather-value", "wind-speed-value");
  windSpeedValueEl.textContent = dataSummary.windSpeed + "km/h";

  const windSpeedLabelEl = createParagraphEl();
  addClass(windSpeedLabelEl, "weather-label");
  windSpeedLabelEl.textContent = "Wind Speed";

  windSpeedDetailsContainer.append(
    windSpeedIconEl,
    windSpeedValueEl,
    windSpeedLabelEl
  );

  extraDetailsContainer.append(
    humidityDetailsContainer,
    uvDetailsContainer,
    pressureDetailsContainer,
    windSpeedDetailsContainer
  );

  return extraDetailsContainer;
}

function createWeatherDetailsDom(dataSummary) {
  if (!dataSummary) return;

  const weatherDetailsContainer = createDivEl();
  addClass(weatherDetailsContainer, "weather-details-container");

  const tempDetailsContainer = createTempDetailsDom(dataSummary);
  const sunCycleDetailsContainer = createSunCycleDetailsDom(dataSummary);
  const weatherIconDetailsContainer = createWeatherIconDetailsDom(dataSummary);
  const extraDetailsContainer = createExtraWeatherDetailsDom(dataSummary);

  weatherDetailsContainer.append(
    tempDetailsContainer,
    sunCycleDetailsContainer,
    weatherIconDetailsContainer,
    extraDetailsContainer
  );

  return weatherDetailsContainer;
}

function createFiveDayForecastDom(dataSummary) {
  if (!dataSummary) return;

  const fiveDayForecastContainer = createDivEl();
  addClass(fiveDayForecastContainer, "five-day-forecast-container");

  const fiveDayForecastHeader = createH1El();
  fiveDayForecastHeader.textContent = "5 Day Forecast";

  const fiveDayForecastDataContainer = createDivEl();
  addClass(fiveDayForecastDataContainer, "five-day-forecast-data");

  // Loop through the five day forecast data
  dataSummary.fiveDayForecast.forEach((forecast) => {
    // Create forecast container for each day
    const dayForecastContainer = createDivEl();
    addClass(dayForecastContainer, "day-forecast");

    // Icon for the day
    const dayForecastIcon = createImgEl();
    addClass(dayForecastIcon, "day-forecast-icon");
    dayForecastIcon.src = `./assets/condition-icons/${forecast.dayConditionIcon}.svg`;
    dayForecastIcon.icon = forecast.dayConditionIcon; // Use icon name as alt description
  
    // Temperature for the day
    const dayForecastTempValue = createBoldEl();
    addClass(dayForecastTempValue, "day-forecast-temp");
    dayForecastTempValue.textContent = `${forecast.dayTemp}°C`;

    // Date for the day
    const dayForecastFormattedDate = createBoldEl();
    addClass(dayForecastFormattedDate, "day-forecast-date");
    dayForecastFormattedDate.textContent = forecast.dayFormattedFullDate;

    // Append elements to the forecast container for each day
    dayForecastContainer.append(
      dayForecastIcon,
      dayForecastTempValue,
      dayForecastFormattedDate
    );

    // Append the day's forecast to the overall data container
    fiveDayForecastDataContainer.append(dayForecastContainer);
  });

  // Append everything to main container
  fiveDayForecastContainer.append(
    fiveDayForecastHeader,
    fiveDayForecastDataContainer
  );

  return fiveDayForecastContainer;
}

function createHourlyForecastDom(dataSummary) {
  if (!dataSummary) return;

  const hourlyForecastContainer = createDivEl();
  addClass(hourlyForecastContainer, "hourly-forecast-container");

  const hourlyForecastHeaderEl = createH1El();
  hourlyForecastHeaderEl.textContent = "Hourly Forecast";

  const hourlyForecastDataContainer = createDivEl();
  addClass(hourlyForecastDataContainer, "hourly-forecast-data");

  for (let i = 0; i < dataSummary.todayHourlyForecast.length; i++) {
    const hourForecast = dataSummary.todayHourlyForecast[i];

    // Create hour forecast container
    const hourForecastContainer = createDivEl();
    addClass(hourForecastContainer, "hour-forecast");

    // Time
    const hourValueEl = createBoldEl();
    addClass(hourValueEl, "hour-forecast-time");
    hourValueEl.textContent = hourForecast.hourTimeFormatted;

    // Condition icon
    const hourIconEl = createImgEl();
    addClass(hourIconEl, "hour-forecast-icon");
    hourIconEl.src = `./assets/condition-icons/${hourForecast.hourConditionIcon}.svg`;
    hourIconEl.alt = hourForecast.hourConditionIcon; // Use icon name as alt description

    // Temperature
    const hourTempValueEl = createBoldEl();
    addClass(hourTempValueEl, "hour-forecast-temp");
    hourTempValueEl.textContent = hourForecast.hourTemp + "°C";

    //Wind Speed Icon
    const windSpeedIconEl = createImgEl();
    addClass(windSpeedIconEl, "hour-forecast-wind-icon");
    windSpeedIconEl.src = "./assets/wind-icon.svg";
    windSpeedIconEl.alt = "Wind Speed Icon";

    // Wind Speed
    const hourWindSpeedValueEl = createBoldEl();
    addClass(hourWindSpeedValueEl, "hour-forecast-windspeed");
    hourWindSpeedValueEl.textContent = hourForecast.hourWindSpeed + "km/h";

    hourForecastContainer.append(
      hourValueEl,
      hourIconEl,
      hourTempValueEl,
      windSpeedIconEl,
      hourWindSpeedValueEl
    );

    hourlyForecastDataContainer.append(hourForecastContainer);
  }

  hourlyForecastContainer.append(
    hourlyForecastHeaderEl,
    hourlyForecastDataContainer
  );

  return hourlyForecastContainer;
}

// Function that combines creation of all weather data components
export function createWeatherForecastDom(dataSummary) {
  if (!dataSummary) return;

  const mainContentContainer = createDivEl();
  mainContentContainer.id = "main-content";

  const locationTimeDataDom = createLocationTimeDataDom(dataSummary);
  const weatherDetailsDom = createWeatherDetailsDom(dataSummary);
  const fiveDayForecastDom = createFiveDayForecastDom(dataSummary);
  const hourlyForecastDom = createHourlyForecastDom(dataSummary);

  return [
    locationTimeDataDom,
    weatherDetailsDom,
    fiveDayForecastDom,
    hourlyForecastDom,
  ];
}

// Reset forecast content
export function resetMainContent() {
  const mainContentContainer = document.querySelector("#main-content");
  mainContentContainer.innerHTML = "";
}
