import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles|Elements'
};

export const LinkVaadinButton = () => {
  const label = text('Label', 'Button');
  const url = text('URL', 'https://cxl.com/');
  const theme = text('Theme', '');
  const valuesObj = {
    secondary: 'secondary ',
    large: 'large ',
    small: 'small ',
    primary: 'primary '
  };
  const defaultValue = 'secondary ';
  const optionsObj = {
    display: 'multi-select'
  };
  const groupId = 'Theme variants';
  const value = options(theme, valuesObj, defaultValue, optionsObj, groupId);

  return html`
    <a href="${url}" class="vaadin-button" theme="${value}" target="_blank">${label}</a>
  `;
};

LinkVaadinButton.story = {
  name: '.vaadin-button'
};
