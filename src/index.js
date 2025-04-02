import "./styles.css";

import { fetchWeatherData, getWeatherSummary } from "./weatherDataModule.js";

import {
  createSearchBar,
  createLocationTimeData,
  createWeatherDetailsDom,
} from "./domCreationModule.js";

const docBody = document.querySelector("body");
const mainContent = docBody.querySelector("#main-content");
const searchBar = createSearchBar();
const searchInput = searchBar.querySelector(".input-search");
const timeData = createLocationTimeData();

searchInput.addEventListener("keyup", async (event) => {
  if (event.key !== "Enter") return;
  const userInput = searchInput.value;
  if (!userInput) return;

  const locationData = await fetchWeatherData(userInput);
  const locationDataSummary = getWeatherSummary(locationData);

  mainContent.append(createLocationTimeData(locationDataSummary));
  mainContent.append(createWeatherDetailsDom(locationDataSummary));
});

docBody.append(searchBar);
