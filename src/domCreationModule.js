/**
        <div class="location-time-data-container">
            <h1 class="location-name">Athens</h1>
            <b class="location-time">09:03</b>
            <p class="location-date">Thursday, 31 Aug</p>
        </div>
 */

// Utility functions for DOM element creation
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

// Functions to create specific aspects of page
// Add functionality !
export function createSearchBar() {
  const searchBarContainer = createDivEl();
  searchBarContainer.classList.add("search-bar-container");

  const searchIcon = createImgEl();
  searchIcon.classList.add("search-icon");
  searchIcon.src = "./assets/search-icon.svg";

  const searchInput = createInputEl();
  const searchInputPlaceholder = "Search for you preferred location...";
  searchInput.classList.add("input-search");
  searchInput.placeholder = searchInputPlaceholder;

  searchBarContainer.append(searchIcon, searchInput);
  return searchBarContainer;
}

function createLocationTimeData() {
    
}