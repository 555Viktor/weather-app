// Import JS and CSS modules
import "./styles.css";

import { fetchWeatherData, getWeatherSummary } from "./weatherDataModule.js";

import {
  createDivEl,
  createSearchBar,
  createWeatherForecastDom,
  resetMainContent,
} from "./domCreationModule.js";

// Select body element
const docBody = document.querySelector("body");

// Create and append search bar to body
const searchBar = createSearchBar();
const searchInput = searchBar.querySelector(".input-search");
docBody.append(searchBar);

// Create and append main content container to body
const mainContentContainer = createDivEl();
mainContentContainer.id = "main-content";
docBody.append(mainContentContainer);

// Add search functionality
searchInput.addEventListener("keyup", async (event) => {
  if (event.key !== "Enter") return;
  const userInput = searchInput.value;
  if (!userInput) return;

  resetMainContent();

  const locationData = await fetchWeatherData(userInput);
  const locationDataSummary = getWeatherSummary(locationData);

  const locationDataDomEls = createWeatherForecastDom(locationDataSummary);

  locationDataDomEls.forEach((dataEl) => {
    mainContentContainer.append(dataEl);
  });
});
