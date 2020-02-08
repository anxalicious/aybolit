import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-institute-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';

export default {
  title: 'CXL UI'
};

export const CxlInstituteLayout = () => {
  return html`
    <style>
        .entry-title {
          font-size: var(--lumo-font-size-xxl);
          margin-top: var(--lumo-space-m);
        }

        #sensei-course-progress .widget-title {
          color: inherit;
          margin-top: var(--lumo-space-m);
        }

        #sensei-course-progress ul {
          list-style: none;
          padding-left: unset;
        }

        cxl-institute-layout[wide] .entry-content {
          margin: 0 auto;
          padding: 0 var(--lumo-space-l);
          max-width: var(--cxl-content-width);
        }


        cxl-institute-layout .entry-media {
          background-color: var(--lumo-shade);

          /* Full screen width, while padded. */
          margin: var(--lumo-space-m) calc(var(--cxl-wrap-padding) * -1);
        }

        cxl-institute-layout[wide] iframe {
          height: 400px;
        }
    </style>

    <cxl-institute-layout id="container">
      <cxl-marketing-nav slot="header">
        <vaadin-tabs
          id="menu-primary-items"
          class="menu-items"
          orientation="vertical"
          selected="-1"
          theme="cxl-marketing-nav"
        >
          <vaadin-tab class="menu-item menu-item-logo menu-item-wide" theme="cxl-marketing-nav">
            <a href="https://conversionxl.com"
              ><iron-icon icon="cxl:logo" style="width: var(--lumo-icon-size-xl, 48px);"></iron-icon
            ></a>
          </vaadin-tab>
        </vaadin-tabs
      ></cxl-marketing-nav>

      <section id="sensei-course-progress" slot="sidebar">
        <header>
          <h3 class="widget-title font-light">Lessons</h3>
        </header>
        <ul>
          <li>What is the customer value optimization model?</li>
          <li>Step 1: determine market fit</li>
          <li>Step 2: creating a lead magnet</li>
          <li>Examples of lead magnets</li>
          <li>Step 3: trip wire</li>
          <li>Examples of trip wires</li>
          <li>Step 4: incorporating profit maximizers</li>
          <li>Step 5: the return path</li>
        </ul>
      </section>

      <article class="entry author-sensei-teacher post-3923 course type-course status-publish has-post-thumbnail category-general category-video-courses-30-min-or-less tag-marketing tag-optimization post membership-content access-granted user-status-active" itemscope="itemscope" itemtype="https://schema.org/CreativeWork" id="post-3923">
        <header class="entry-header">
          <h1 class="entry-title">Customer value optimization</h1>
          <div class="entry-byline">
            <span class="progress statement course-completion-rate">Completed 4 lessons of 8 in total</span>
            <vaadin-progress-bar value="0.50">Completed 4 lessons of 8 in total</vaadin-progress-bar>
            <section class="course-meta course-enrolment">
              <div class="status in-progress">In Progress</div>
            </section>
          </div>
        </header>

        <div class="entry-media">
          <iframe src="https://player.vimeo.com/video/321840987" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" frameborder="0" width="100%"></iframe>
        </div>

        <div class="entry-content" itemprop="text">
          <p><strong>Total time:</strong> 18 min</p>
          <p> Too many websites pour all of their time, money, and energy into acquiring leads. But without a dependable strategy to convert this traffic to paying customers, all this effort would be in vain.<br> In this video course, Justin Rondeau introduces Digital Marketer’s Customer Value Optimization Model. This is an original 5-step framework which has&nbsp;been consistently proven&nbsp;to convert prospects across a range of industries, from&nbsp;e-commerce to b2b.</p>
          <span id="more-3923"></span>
          <p>Throughout the course, Rondeau will detail and give examples for each of these 5 steps:</p>
          <ol>
            <li>Determining market fit</li>
            <li>Generating leads</li>
            <li>Turning lead into a buyer</li>
            <li>Turning that buyer into a multiple purchaser</li>
            <li>Re-engaging lost customers</li>
          </ol>
          <h2 id="about-your-instructor">About your instructor<a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#about-your-instructor" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a></h2>

          <div class="pure-g-2 pure-g">
            <div class="column column-1 column-span-1 column-push-0 pure-u-md-1-2 column-first pure-u-1" style="">
              <div class="wrap">
                <p>Justin Rondeau is the Director of Optimization at Digital Marketer and runs all of the optimization efforts and split tests at DM and is active among our other properties.</p>
                <p>A top-rated domestic and international speaker, Rondeau has spent his entire career working on optimization campaigns and has helped train some of the leading optimization teams at Fortune 500 companies.</p>
                <p>Rondeau has run hundreds of tests for both B2B and eCommerce brands and has analyzed 3,000+ tests across virtually every industry.</p>
              </div>
            </div>

            <div class="column column-2 column-span-1 column-push-0 pure-u-md-1-2 column-last pure-u-1" style=""><div class="wrap">
              <p><a href="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2016/04/rondeau-portrait.jpg" data-featherlight="image"><img loading="lazy" class="alignnone size-medium wp-image-3934" src="//conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2016/04/rondeau-portrait-426x426.jpg" alt="rondeau portrait" width="426" height="426"></a></p>
            </div>
          </div>
        </div>

        <h2 id="overview-video">Overview video<a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#overview-video" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a></h2>
      </article>
    </cxl-institute-layout>
`;
};

CxlInstituteLayout.story = {
  name: 'cxl-institute-layout'
};
