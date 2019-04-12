import '@vaadin/vaadin-lumo-styles/typography.js';
import styles from '../styles/lumo-typography-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<custom-style>
  <style>${styles}</style>
</custom-style>

<dom-module id="lumo-typography-edit">
  <template>
    <style>
      html {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size, var(--lumo-font-size-m));
        line-height: var(--lumo-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size, var(--lumo-font-size-m));
        line-height: var(--lumo-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      small,
      [theme~="font-size-s"] {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
      }
      [theme~="font-size-xs"] {
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 600;
        line-height: var(--lumo-line-height-xs);
        margin-top: 1.25em;
      }
      h1 {
        font-size: var(--lumo-font-size-xxxl);
        margin-bottom: 0.75em;
      }
      h2 {
        font-size: var(--lumo-font-size-xxl);
        margin-bottom: 0.5em;
      }
      h3 {
        font-size: var(--lumo-font-size-xl);
        margin-bottom: 0.5em;
      }
      h4 {
        font-size: var(--lumo-font-size-l);
        margin-bottom: 0.5em;
      }
      h5 {
        font-size: var(--lumo-font-size-m);
        margin-bottom: 0.25em;
      }
      h6 {
        font-size: var(--lumo-font-size-xs);
        margin-bottom: 0;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }
      p,
      blockquote {
        margin-top: 0.5em;
        margin-bottom: 0.75em;
      }
      a {
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      hr {
        display: block;
        align-self: stretch;
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
        background-color: var(--lumo-contrast-10pct);
      }
      blockquote {
        border-left: 2px solid var(--lumo-contrast-30pct);
      }
      b,
      strong {
        font-weight: 600;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);
