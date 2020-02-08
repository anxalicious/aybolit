/**
 * @todo store [opened] state.
 * @todo implement primary action button.
 * @todo #sensei-course-progress content model.
 */
import { LitElement, html, customElement, property, query } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import cxlInstituteLayoutStyles from '../styles/cxl-institute-layout-css.js';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-context-menu/src/vaadin-device-detector.js';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-progress-bar';

@customElement('cxl-institute-layout')
export class CxlInstituteLayout extends LitElement {
  @query('aside')
  asideElement;

  // vaadin-device-detector.
  @property({ type: Boolean, reflect: true })
  wide;

  static get styles() {
    return [cxlInstituteLayoutStyles];
  }

  render() {
    return html`
      <header role="banner" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
        <slot name="header"></slot>
      </header>

      <div id="main">
        <aside
          role="complementary"
          aria-label="Primary sidebar"
          itemscope="itemscope"
          itemtype="https://schema.org/WPSideBar"
          opened
        >
          <slot name="sidebar"></slot>
        </aside>

        <main role="main" itemprop="mainContentOfPage">
          <vaadin-button
            aria-label="Toggle sidebar"
            theme="contrast icon"
            @click="${() => this.asideElement.toggleAttribute('opened')}"
          >
            <iron-icon icon="lumo:angle-right"></iron-icon>
          </vaadin-button>
          <slot></slot>
        </main>
      </div>

      <footer role="contentinfo" itemscope="itemscope" itemtype="https://schema.org/WPFooter">
        <slot name="footer"></slot>
      </footer>

      <vaadin-device-detector
        @wide-changed="${e => {
          const { wide } = e.target;

          Promise.resolve().then(() => {
            this.wide = wide;
          });
        }}"
      ></vaadin-device-detector>
    `;
  }
}
