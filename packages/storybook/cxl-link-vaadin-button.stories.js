import '@conversionxl/cxl-lumo-styles';
import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles'
};

export const LinkVaadinButton = () => {
  const label = text('Label', 'Button');

  return html`
    <div><a href class="vaadin-button">${label}</a></div>
    <div><a href class="vaadin-button" theme="large">${label}</a></div>
    <div><a href class="vaadin-button" theme="small">${label}</a></div>
    <div><a href class="vaadin-button" theme="primary">${label}</a></div>
  `;
};

LinkVaadinButton.story = {
  name: 'cxl-vaadin-button'
};
