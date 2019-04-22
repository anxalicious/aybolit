import '@conversionxl/cxl-ui';
import { storiesOf } from '@storybook/polymer';
// import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('CXL UI', module)
  // .addDecorator(withKnobs)
  .add('<cxl-institute-layout>', () => {
    // const label = text('Label', 'Button');
    return html`
      <cxl-institute-layout></cxl-institute-layout>
    `;
  });
