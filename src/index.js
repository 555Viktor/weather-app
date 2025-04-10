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
  resetMainContent
} from "./domCreationModule.js";

const docBody = document.querySelector("body");

const searchBar = createSearchBar();
const searchInput = searchBar.querySelector(".input-search");
docBody.append(searchBar);

const mainContentContainer = createDivEl();
mainContentContainer.id = "main-content";
docBody.append(mainContentContainer);

searchInput.addEventListener("keyup", async (event) => {
  if (event.key !== "Enter") return;
  const userInput = searchInput.value;
  if (!userInput) return;

  resetMainContent();

  const locationData = await fetchWeatherData(userInput);
  const locationDataSummary = getWeatherSummary(locationData);

  const locationDataDomEls = createWeatherForecastDom(locationDataSummary);

  locationDataDomEls.forEach(dataEl => {
    mainContentContainer.append(dataEl);
  })
});

