import '@vaadin/vaadin-lumo-styles/typography';
import lumoTypography from '../styles/typography-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<custom-style>
  <style include="lumo-typography">${lumoTypography}</style>
</custom-style>`;

document.head.appendChild($template.content);