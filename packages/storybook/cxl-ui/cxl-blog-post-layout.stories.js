import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-blog-post-layout.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import blogPostData from './cxl-blog-post-layout.data.json';

export default {
  title: 'CXL UI'
};

export const CxlBlogLayout = () => {
  return html`
    <style>
      cxl-blog-layout[wide] .entry-title {
        margin-top: var(--lumo-space-m);
        font-size: var(--cxl-lumo-font-size-hero);
      }

      .entry-title {
        font-size: var(--lumo-font-size-xxl);
      }

      cxl-blog-layout[wide] .entry-header {
        padding: var(--lumo-space-xl) var(--lumo-space-xl) 0;
      }

      .entry-header {
        margin-bottom: var(--lumo-space-xl);
        padding-top: var(--lumo-space-l);
      }

      cxl-blog-layout[wide] .entry-content {
        margin: 0 auto;
        padding: 0 var(--lumo-space-xl);
      }

      .avatar {
        border-radius: 50%;
      }

      .author-image {
        float: left;
        margin-right: var(--cxl-wrap-padding);
      }

      .entry-author p {
        margin-top: 0;
        margin-bottom: 0;
      }

      .entry-author {
        border-bottom: 1px solid var(--lumo-contrast-50pct);
        padding: var(--lumo-space-l) 0;
      }

      .entry-content p,
      .entry-content ul,
      .entry-content ol,
      .entry-content figcaption {
        font-size: var(--lumo-font-size-l);
      }

      .blog-byline {
        font-size: var(--lumo-font-size-xl);
      }

      .category {
        color: var(--lumo-primary-color);
        font-size: var(--lumo-font-size-l);
      }

      #widget-webinar {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      #widget-video-course {
        background-color: var(--lumo-shade-10pct);
      }

      .widget {
        padding: var(--lumo-space-m);
        margin-bottom: var(--lumo-space-xl);
      }
    </style>
    <cxl-blog-layout id="container">
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
          </vaadin-tab> </vaadin-tabs
      ></cxl-marketing-nav>
      ${blogPostData.map(
        el => html`
          <article class="${el.cxl_hybrid_attr_post['@attributes'].class}" id="${
          el.cxl_hybrid_attr_post['@attributes'].id
        }" itemscope="${el.cxl_hybrid_attr_post['@attributes'].itemscope}" itemtype="${
          el.cxl_hybrid_attr_post['@attributes'].itemtype
        }" itemprop="${el.cxl_hybrid_attr_post['@attributes'].itemprop}">
            <div class="entry-header">
              <span class="entry-terms category"><strong><a href="#">${unsafeHTML(
                el.categories
              )}</a></strong></span>
              <h1 class="entry-title" itemprop="headline">
                ${unsafeHTML(el.title.rendered)}
              </h1>
              <div class="entry-byline">
                <p class="blog-byline">A value proposition is the #1 thing that determines whether people will bother reading more about your product or hit the back button. It’s also the main thing you need to test – if you get it right, it will be a huge boost.</p>
                <div class="entry-author" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
                  <p class="author-image">
                    <img alt='' src='https://secure.gravatar.com/avatar/f8d69258525dec38624a29eb3d570d8c'  class='avatar avatar-42 photo lazyload' height='42' width='42' itemprop="image" loading="lazy" />
                  </p>
                  <div class="wrap">
                    <p><strong>Peep Laja</strong></p>
                    <p>Founder of <a href="https://viralcontentbee.com/">Viral Content Bee</a> and Brand Manager at <a href="https://www.internetmarketingninjas.com/">Internet Marketing Ninjas.</a></p>
                  </div>
                </div>
              </div>
            </div>

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
    </cxl-blog-layout>
  `;
};

CxlBlogLayout.story = {
  name: 'cxl-blog-layout'
};
