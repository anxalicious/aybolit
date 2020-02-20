import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-switch.js';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles|Elements'
};

export const CxlSwitch = () => {
  const label = text('Label', 'Dark mode');

  return html`
    <cxl-switch checked>${label}</cxl-switch>
  `;
};

CxlSwitch.story = {
  name: '<cxl-switch>'
};
