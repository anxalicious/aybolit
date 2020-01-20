import { LitElement, html, customElement, property } from 'lit-element';
import cxlPricingTableStyles from '../styles/cxl-institute-pricing-table-css.js';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-ordered-layout';
import '@polymer/iron-pages/iron-pages.js';

@customElement('cxl-pricing-table')
export class CXLPricingTable extends LitElement {
  static get styles() {
    return [cxlPricingTableStyles];
  }

  static get properties() {
    return {
      page: { type: Number }
    };
  }

  constructor() {
    super();
    this.page = 0;
  }

  @property()
  tab1 = 'Personal';

  @property()
  tab2 = 'Teams';

  @property()
  tab3 = 'Enterprise';

  render() {
    return html`
      <div class="grey-bg">
        <div class="wrap-narrow">
          <h1>
            <span class="red">Double</span> your<br />
            business
          </h1>
          <p>
            <span class="red"><iron-icon icon="lumo:angle-right" class="size-s"></iron-icon></span>
            Guaranteed return on time spent or money back.
          </p>
          <p>
            <span class="red"><iron-icon icon="lumo:angle-right" class="size-s"></iron-icon></span>
            All plans come with a 7-day refund perion. No contracts, cancel any time.
          </p>
        </div>
      </div>
      <div class="wrap-narrow">
        <vaadin-tabs
          ?selected="${this.page}"
          @selected-changed="${e => {
            this.page = e.detail.value;
          }}"
        >
          <vaadin-tab>Personal</vaadin-tab>
          <vaadin-tab>Teams</vaadin-tab>
          <vaadin-tab>Enterprise</vaadin-tab>
        </vaadin-tabs>

        <iron-pages selected="${this.page}">
          <page>
            <vaadin-horizontal-layout class="data-box"> </vaadin-horizontal-layout>

            <vaadin-horizontal-layout>
              <div class="box">
                <p class="small">Save $534 annually</p>
                <h3>Personal <span class="red">All-Access</span></h3>
                <p>Best for empowering long-term growth strategies.</p>
                <span class="big bold">$111</span>
                <p class="bold">
                  per team member<br />
                  per month
                </p>
                <hr />
                <p class="bold">$2670/year, billed annually</p>
                <vaadin-button theme="primary">Sign up now</vaadin-button>
                <p class="bold">
                  <span class="red"
                    ><iron-icon icon="lumo:angle-right" class="size-s"></iron-icon
                  ></span>
                  50+ online courses
                </p>
                <p class="bold">
                  <span class="red"
                    ><iron-icon icon="lumo:angle-right" class="size-s"></iron-icon
                  ></span>
                  Personal statistics
                </p>
                <p class="bold">
                  <span class="red"
                    ><iron-icon icon="lumo:angle-right" class="size-s"></iron-icon
                  ></span>
                  Earn certificates
                </p>
                <p class="bold">
                  <span class="red"
                    ><iron-icon icon="lumo:angle-right" class="size-s"></iron-icon
                  ></span>
                  Single user
                </p>
              </div>
              <div class="box inactive">
                <h3>Only this training</h3>
                <p>Best for specific tasks.</p>
                <span class="big bold">$745</span>
                <p>per team member</p>
                <p></p>
                <hr />
                <p>$1490, billed once</p>
                <vaadin-button theme="tertiary">Sign up now</vaadin-button>
                <p>
                  <span class="red"
                    ><iron-icon icon="lumo:angle-right" class="size-s"></iron-icon
                  ></span>
                  Get instant access to just this world class training
                </p>
                <p>
                  <span class="red"
                    ><iron-icon icon="lumo:angle-right" class="size-s"></iron-icon
                  ></span>
                  Lifetime access
                </p>
              </div>
            </vaadin-horizontal-layout>
          </page>

          <page>
            <vaadin-horizontal-layout class="data-box">
              <div class="block">Team size:</div>
            </vaadin-horizontal-layout>

            <vaadin-horizontal-layout>
              <div class="box">
                <h3><span class="red">All-Access</span> for teams</h3>
                <p>Best for empowering long-term growth strategies.</p>
                <span class="big">$111</span>
                <p>per team member</p>
                <p>per month</p>
                <hr />
                <p>$2670/year, billed annually</p>
                <vaadin-button theme="primary">Sign up now</vaadin-button>
                <p>
                  <span class="red"
                    ><iron-icon icon="lumo:angle-right" class="size-s"></iron-icon
                  ></span>
                  Earn certificates
                </p>
                <p>
                  <span class="red"
                    ><iron-icon icon="lumo:angle-right" class="size-s"></iron-icon
                  ></span>
                  Single user
                </p>
              </div>
              <div class="box inactive">
                <h3>Only this training</h3>
                <p>Best for specific tasks.</p>
                <span class="big">$745</span>
                <p>per team member</p>
                <hr />
                <p>$1490, billed once</p>
                <vaadin-button theme="primary">Sign up now</vaadin-button>
                <p>
                  <span class="red"
                    ><iron-icon icon="lumo:angle-right" class="size-s"></iron-icon
                  ></span>
                  Get instant access to just this world class training
                </p>
                <p>
                  <span class="red"
                    ><iron-icon icon="lumo:angle-right" class="size-s"></iron-icon
                  ></span>
                  Lifetime access
                </p>
              </div>
            </vaadin-horizontal-layout>
          </page>
          <page>
            <h3>Enterprise</h3>
            <vaadin-horizontal-layout>
              <div class="block">Team size: <size-field></size-field></div>
            </vaadin-horizontal-layout>
          </page>
        </iron-pages>
      </div>
    `;
  }
}
