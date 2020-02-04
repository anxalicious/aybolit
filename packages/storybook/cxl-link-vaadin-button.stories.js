import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles|Elements'
};

export const LinkVaadinButton = () => {
  const label = text('Label', 'Button');

  return html`
    <p><a href class="vaadin-button">${label}</a></p>
    <p><a href class="vaadin-button" theme="large">${label}</a></p>
    <p><a href class="vaadin-button" theme="small">${label}</a></p>
    <p><a href class="vaadin-button" theme="primary">${label}</a></p>
  `;
};

LinkVaadinButton.story = {
  name: '.vaadin-button'
};
