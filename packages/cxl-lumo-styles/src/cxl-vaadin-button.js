import styles from './styles/cxl-vaadin-button-css.js';

const $template = document.createElement('template');
$template.innerHTML = `
  <custom-style>
    <style id="cxl-lumo-styles-cxl-button">${styles}</style>
  </custom-style>
`;
document.head.appendChild($template.content);
