import "./styles.css";

import { fetchWeatherData, getWeatherSummary } from "./weatherDataModule.js";

import {
  createSearchBar,
  createLocationTimeDataDom,
  createWeatherDetailsDom,
  createFiveDayForecastDom,
  createHourlyForecastDom,
  createWeatherForecastDom,
  createDivEl,
} from "./domCreationModule.js";

const docBody = document.querySelector("body");
const mainContent = docBody.querySelector("#main-content");
const searchBar = createSearchBar();
const searchInput = searchBar.querySelector(".input-search");

searchInput.addEventListener("keyup", async (event) => {
  if (event.key !== "Enter") return;
  const userInput = searchInput.value;
  if (!userInput) return;

  const locationData = await fetchWeatherData(userInput);
  const locationDataSummary = getWeatherSummary(locationData);

  docBody.append(createWeatherForecastDom(locationDataSummary));
});

docBody.append(searchBar);
