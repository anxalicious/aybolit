import { RangeElement } from '@aybolit/core';
import abuRangeStyles from './styles/abu-range-css.js';

export class AbuRange extends RangeElement {
  static get is() {
    return 'abu-range';
  }

  static get version() {
    return '0.0.0';
  }

  static get styles() {
    return [super.styles, abuRangeStyles];
  }
}

customElements.define(AbuRange.is, AbuRange);