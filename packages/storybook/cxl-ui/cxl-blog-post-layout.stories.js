import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-blog-post-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import blogPostData from './cxl-blog-post-layout.data.json';

export default {
  title: 'CXL UI'
};

export const CxlBlogPostLayout = () => {
  return html`
    <cxl-blog-post-layout id="container">
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
          <vaadin-tab
            theme="cxl-marketing-nav"
            id="menu-item-1820277"
            class="menu-item-split-nav menu-item-wide menu-item-search menu-item menu-item-type-custom menu-item-object-custom menu-item-1820277 menu-item-depth-0"
            aria-selected="false"
            role="tab"
            orientation="horizontal"
            tabindex="0"
          >
            <a>Search <iron-icon icon="lumo:search"></iron-icon></a>
          </vaadin-tab> </vaadin-tabs
      ></cxl-marketing-nav>

      ${blogPostData.map(
        el => html`
          <article class="entry ${el.cxl_hybrid_attr_post['@attributes'].class}" id="${
          el.cxl_hybrid_attr_post['@attributes'].id
        }" itemscope="${el.cxl_hybrid_attr_post['@attributes'].itemscope}" itemtype="${
          el.cxl_hybrid_attr_post['@attributes'].itemtype
        }" itemprop="${el.cxl_hybrid_attr_post['@attributes'].itemprop}">
            <header class="entry-header">
              <label class="category"><strong><a href="#">${unsafeHTML(
                el.categories
              )}</a></strong></label>
              <h1 class="entry-title" itemprop="headline">
                ${unsafeHTML(el.title.rendered)}
              </h1>
              <div class="entry-byline">
                <p class="blog-byline">A value proposition is the #1 thing that determines whether people will bother reading more about your product or hit the back button. It’s also the main thing you need to test – if you get it right, it will be a huge boost.</p>
                <div class="entry-author" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
                  <p class="author-image">
                    <img alt='' src='https://secure.gravatar.com/avatar/f8d69258525dec38624a29eb3d570d8c'  class='avatar avatar-42 photo lazyload' height='42' width='42' itemprop="image" loading="lazy" />
                  </p>
                  <div>
                    <span><strong>Peep Laja</strong></span>
                    <span>Founder of <a href="https://viralcontentbee.com/">Viral Content Bee</a>.</span>
                  </div>
                </div>
              </div>
              </header>

            <div class="entry-content" itemprop="articleBody" slot="main">
            <article class="${el.cxl_hybrid_attr_post['@attributes'].class}" id="${
          el.cxl_hybrid_attr_post['@attributes'].id
        }" itemscope="${el.cxl_hybrid_attr_post['@attributes'].itemscope}" itemtype="${
          el.cxl_hybrid_attr_post['@attributes'].itemtype
        }" itemprop="${el.cxl_hybrid_attr_post['@attributes'].itemprop}">
              <div class="excerpt">
                ${unsafeHTML(el.excerpt.rendered)}
              </div>
              ${unsafeHTML(el.content.rendered)}
            </div>
          </article>
          <section id="widget-webinar" class="widget" slot="sidebar">
            <span>Upcoming webinar:</span>
            <header>
              <h3 class="widget-title">Close bigger B2B deals<br> faster with Account<br> Based Marketing</h3>
            </header>
            <p>Steve Watt, ABM Leader & Adviser</p>
            <p>Friday, Nov. 30, 2020, 11am CST</p>
            <a href="#" class="vaadin-button" theme="primary large">Save my spot</a>
          </section>

          <section id="widget-video-course" class="widget" slot="sidebar">
            <span>Video course:</span>
            <header>
              <h3 class="widget-title">Research-driven<br> conversion<br> optimization</h3>
            </header>
            <p>"This course has tought me"</p>
            <p>Dana Robertson, Microsoft</p>
            <a href="#" class="vaadin-button" theme="primary large">Get the free video course</a>
          </section>
        `
      )}
    </cxl-blog-post-layout>
  `;
};

CxlBlogPostLayout.story = {
  name: 'cxl-blog-post-layout'
};
