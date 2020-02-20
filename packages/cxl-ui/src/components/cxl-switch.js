import { customElement } from 'lit-element';
import { AbwSwitch } from '@aybolit/white-label';
import cxlSwitchStyles from '../styles/cxl-switch-css.js';

@customElement('cxl-switch')
export class CXLSwitch extends AbwSwitch {
  static get styles() {
    return [
      /* white-label styles */
      super.styles,
      cxlSwitchStyles
    ];
  }
}
