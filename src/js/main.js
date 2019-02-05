'use strict';

import PhonesPage from './phones/phones-page.js';

let currentPage = new PhonesPage({
  element: document.querySelector('[data-page-container]'),
  url: 'https://andrew2033.github.io/emarket/src/',
});
