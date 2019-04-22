import { LitElement, html } from 'lit-element';
// import '@conversionxl/cxl-lumo-styles';
import cxlInstituteLayoutStyles from '../styles/cxl-institute-layout-css.js';

export class CxlInstituteLayout extends LitElement {
  static get styles() {
    return cxlInstituteLayoutStyles;
  }

  render() {
    return html`
      <header class="app-header">
        <a class="skip-link screen-reader-text" href="#main">Skip to content</a>

        <slot name="nav">
          <nav class="menu menu--app-header">
            <h3 class="menu__title screen-reader-text">Institute icon nav</h3>

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
        <slot name="sidebar">
          <aside class="sidebar sidebar--app">
            <h3 class="sidebar__title screen-reader-text">Institute sidebar</h3>

            <section id="section-1" class="widget widget--meta">
              <h3 class="widget__title">Meta</h3>

              <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
              </ul>
            </section>
          </aside>
        </slot>
        <slot name="content">
          <article id="post-1" class="entry entry--1 entry--type-page">
            <header class="entry__header">
              <h1 class="entry__title">CXL Institute layout</h1>
            </header>
            <div class="entry__content">
              <p>This is content.</p>
            </div>
          </article>
        </slot>
      </main>
    `;
  }
}

customElements.define('cxl-institute-layout', CxlInstituteLayout);
