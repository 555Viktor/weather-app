/* <div class="weather-details-container">
      <div class="temp-details-container">
          <b class="current-temp">
              24C
          </b>
          <p class="feels-like-label">Feels like: <b class="feels-like-temp">22°C</b></p>
      </div>

      <div class="sun-cycle-details-container">
          <div class="sun-cycle-details sunrise-details">
              <img src="./assets/sunrise-icon.svg" alt="" class="sun-cycle-icon">
              <b class="sunrise-label">Sunrise</b> 
              <p class="sunrise-time">06:37</p>       
          </div>

          <div class="sun-cycle-details sunset-details">
              <img src="./assets/sunset-icon.svg" alt="" class="sun-cycle-icon">
              <b class="sunset-label">Sunset</b>
              <p class="sunset-time">20:35</p>
          </div>
      </div>

      <div class="weather-icon-details">
          <img src="./assets/condition-icons/clear-day.svg" alt="" class="weather-condition-icon">
          <b class="weather-condition-label">Sunny</b>
      </div>

      <div class="extra-details-container">
          <div class="extra-details humidity-details">
              <img src="./assets/humidity-icon.svg" alt="Humidity Icon" class="weather-details-icon humidity-icon">
              <b class="weather-value humidity-value">Test</b>
              <p class="weather-label">Humidity</p>
          </div>

          <div class="extra-details uv-details">
              <img src="./assets/uv-icon.svg" alt="UV Icon" class="weather-details-icon uv-icon">
              <b class="weather-value uv-value">Test</b>
              <p class="weather-label">UV Index</p>
          </div>

          <div class="extra-details pressure-details">
              <img src="./assets/pressure-icon.svg" alt="Pressure Icon" class="weather-details-icon pressure-icon">
              <b class="weather-value pressure-value">Test</b>
              <p class="weather-label">Pressure</p>
          </div>

          <div class="extra-details wind-speed-details">
              <img src="./assets/wind-icon.svg" alt="Wind Speed Icon" class="weather-details-icon wind-speed-icon">
              <b class="weather-value wind-speed-value">Test</b>
              <p class="weather-label">Wind Speed</p>
          </div>
      </div>
    </div> 
*/

// Utility functions for DOM element creation
function addClass(element, ...classes) {
  if (!element) return;
  element.classList.add(...classes);
}

function createDivEl() {
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
// ------------------------------------------------
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

export function createLocationTimeData(dataSummary) {
  if (!dataSummary) return;

  const locationDataSummary = dataSummary;

  const timeDataContainer = createDivEl();
  addClass(timeDataContainer, "location-time-data-container");

  const locationNameHeader = createH1El();
  addClass(locationNameHeader, "location-name");
  locationNameHeader.textContent = locationDataSummary.locationName;

  const locationCurrentTimeEl = createBoldEl();
  addClass(locationCurrentTimeEl, "location-time");
  locationCurrentTimeEl.textContent = locationDataSummary.localTime;

  const locationCurrentDateEl = createParagraphEl();
  addClass(locationCurrentDateEl, "location-date");
  locationCurrentDateEl.textContent = locationDataSummary.formattedFullDate;

  timeDataContainer.append(
    locationNameHeader,
    locationCurrentTimeEl,
    locationCurrentDateEl
  );

  return timeDataContainer;
}

export function createWeatherDetailsDom(dataSummary) {
  if (!dataSummary) return;

  const weatherDetailsContainer = createDivEl();
  addClass(weatherDetailsContainer, "weather-details-container");

  // --------------------
  // Temp details

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

  // --------------------
  // Sun cycle details

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

  // --------------------
  // Weather icon details
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
  
  // --------------------
  // Extra weather details

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

  // --------------------
  weatherDetailsContainer.append(
    tempDetailsContainer,
    sunCycleDetailsContainer,
    weatherIconDetailsContainer,
    extraDetailsContainer
  );
  return weatherDetailsContainer;
}
