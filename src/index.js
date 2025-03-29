import './styles.css';
import {createSearchBar} from './domCreationModule.js';

const searchBar = createSearchBar();
document.querySelector('body').append(searchBar)