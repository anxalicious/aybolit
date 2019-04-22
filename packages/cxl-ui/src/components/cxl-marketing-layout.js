import { LitElement, html } from 'lit-element';
// import '@conversionxl/cxl-lumo-styles';
import cxlMarketingLayoutStyles from '../styles/cxl-marketing-layout-css.js';

export class CxlMarketingLayout extends LitElement {
  static get styles() {
    return cxlMarketingLayoutStyles;
  }

  render() {
    return html`
      <header class="app-header">
        <a class="skip-link screen-reader-text" href="#main">Skip to content</a>

        <slot name="nav">
          <nav class="menu menu--marketing-header">
            <h3 class="menu__title screen-reader-text">CXL marketing header</h3>

            <ul class="menu__items">
              <li id="menu-item-h-1" class="menu__item">
                <a class="menu__link" href="#">Item 1</a>
              </li>
              <li id="menu-item-h-2" class="menu__item">
                <a class="menu__link" href="#">Item 2</a>

                <ul class="menu__sub-menu">
                  <li id="menu-item-h-2-1" class="menu__item">
                    <a class="menu__link" href="#">Sub-menu item 1</a>
                  </li>
                </ul>
              </li>
              <li id="menu-item-h-3" class="menu__item">
                <a class="menu__link" href="#">Item 3</a>
              </li>
            </ul>
          </nav>
        </slot>
      </header>

      <main id="main" class="app-main">
        <slot name="content">
          <article id="post-1" class="entry entry--1 entry--type-page">
            <header class="entry__header">
              <h1 class="entry__title">CXL marketing layout</h1>
            </header>
            <div class="entry__content">
              <p>This is content.</p>
            </div>
          </article>
        </slot>
      </main>

      <footer class="app-footer">
        <slot name="nav">
          <nav class="menu menu--footer">
            <h3 class="menu__title screen-reader-text">CXL marketing footer</h3>

            <ul class="menu__items">
              <li id="menu-item-f-1" class="menu__item">
                <a class="menu__link" href="#">Item 1</a>
              </li>
              <li id="menu-item-f-2" class="menu__item">
                <a class="menu__link" href="#">Item 2</a>

                <ul class="menu__sub-menu">
                  <li id="menu-item-f-2-1" class="menu__item">
                    <a class="menu__link" href="#">Sub-menu item 1</a>
                  </li>
                </ul>
              </li>
              <li id="menu-item-f-3" class="menu__item">
                <a class="menu__link" href="#">Item 3</a>
              </li>
            </ul>
          </nav>
        </slot>
      </footer>
    `;
  }
}

customElements.define('cxl-marketing-layout', CxlMarketingLayout);
