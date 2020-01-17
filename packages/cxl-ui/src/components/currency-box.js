import { LitElement, html, customElement } from 'lit-element';
import '@vaadin/vaadin-combo-box';

@customElement('currency-box')
export class CurrencyBox extends LitElement {
  render() {
    return html`
      <vaadin-combo-box
        placeholder="USD"
        theme="cxl-institute-pricing-table align-center"
      ></vaadin-combo-box>
    `;
  }
}
