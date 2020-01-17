import { registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import cxlVaadinContextMenuItemStyles from './styles/themes/vaadin-context-menu-item-css.js';
import cxlVaadinContextMenuListBoxStyles from './styles/themes/vaadin-context-menu-list-box-css.js';
import cxlVaadinOverlayStyles from './styles/themes/vaadin-overlay-css.js';
import cxlVaadinTabStyles from './styles/themes/vaadin-tab-css.js';
import cxlVaadinTabsStyles from './styles/themes/vaadin-tabs-css.js';
import cxlVaadinNumberFieldStyles from './styles/themes/vaadin-number-field-css.js';
import cxlVaadinComboBoxStyles from './styles/themes/vaadin-combo-box-css.js';
import cxlVaadinTextFieldStyles from './styles/themes/vaadin-text-field-css';

/* Mixins */
registerStyles('vaadin-context-menu-item', cxlVaadinContextMenuItemStyles, {
  moduleId: 'cxl-vaadin-context-menu-item-styles'
});
registerStyles('vaadin-context-menu-list-box', cxlVaadinContextMenuListBoxStyles, {
  moduleId: 'cxl-vaadin-context-menu-list-box-styles'
});
registerStyles('vaadin-overlay', cxlVaadinOverlayStyles, {
  moduleId: 'cxl-vaadin-overlay-styles'
});
registerStyles('vaadin-tab', cxlVaadinTabStyles, {
  moduleId: 'cxl-vaadin-tab-styles'
});
registerStyles('vaadin-tabs', cxlVaadinTabsStyles, {
  moduleId: 'cxl-vaadin-tabs-styles'
});
registerStyles('vaadin-number-field', cxlVaadinNumberFieldStyles, {
  moduleId: 'cxl-vaadin-number-field-styles'
});
registerStyles('vaadin-combo-box', cxlVaadinComboBoxStyles, {
  moduleId: 'cxl-vaadin-combo-box-styles'
});
registerStyles('vaadin-text-field', cxlVaadinTextFieldStyles, {
  moduleId: 'cxl-vaadin-text-field-styles'
});
