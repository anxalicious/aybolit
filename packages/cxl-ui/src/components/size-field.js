import { LitElement, html, customElement } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-number-field.js';

@customElement('size-field')
export class SizeField extends LitElement {
  render() {
    return html`
      <vaadin-number-field
        theme="cxl-institute-pricing-table"
        class="field"
        value="3"
        min="3"
        max="15"
        has-controls
      ></vaadin-number-field>
    `;
  }
}
