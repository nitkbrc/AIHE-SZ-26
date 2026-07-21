(function () {
  "use strict";

  const data = window.SITE;
  const page = document.body.dataset.page || "home";

  if (!data) {
    console.error("Conference content could not be loaded.");
    return;
  }

  const $ = (selector) => document.querySelector(selector);
  const h = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const iconPaths = {
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    calendar:
      '<path d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    people:
      '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    academic:
      '<path d="m2 10 10-5 10 5-10 5L2 10Z"/><path d="M6 12.5V17c3 2.2 9 2.2 12 0v-4.5M22 10v6"/>',
    mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5m-4 0h8"/>',
    network:
      '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/><path d="m10.5 7.5-4 7.5m7-7.5 4 7.5M8 18h8"/>',
    spark:
      '<path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/>',
    book: '<path d="M3 5.5A3.5 3.5 0 0 1 6.5 2H11v18H6.5A3.5 3.5 0 0 0 3 23V5.5Zm18 0A3.5 3.5 0 0 0 17.5 2H13v18h4.5A3.5 3.5 0 0 1 21 23V5.5Z"/>',
    path: '<path d="M5 4v5a3 3 0 0 0 3 3h8a3 3 0 0 1 3 3v5"/><circle cx="5" cy="3" r="2"/><circle cx="19" cy="21" r="2"/><path d="m15 16 4 4 4-4"/>',
    flask:
      '<path d="M9 3h6m-5 0v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M7 16h10"/>',
    building:
      '<path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-5h6v5M9 10h.01M15 10h.01"/>',
    balance:
      '<path d="M12 3v18M5 6h14M5 6 2 12h6L5 6Zm14 0-3 6h6l-3-6ZM8 21h8"/>',
    bed: '<path d="M3 20v-9m18 9v-6a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2h16M7 11V8h4a3 3 0 0 1 3 3"/>',
    bus: '<rect x="4" y="3" width="16" height="17" rx="3"/><path d="M4 13h16M8 17h.01M16 17h.01M7 20v2m10-2v2"/>',
    food: '<path d="M7 3v8m-3-8v5a3 3 0 0 0 6 0V3M7 11v10M16 3v18m0-18c5 2 5 8 0 10"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone:
      '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    star: '<path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.9L12 3Z"/>',
    whatsapp:
      '<path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"/><path d="M9.2 8.4c-.4 0-.8.4-.8 1 0 2.9 3.3 6.2 6.2 6.2.6 0 1-.4 1-.8 0-.5-.9-1.3-1.5-1.4-.4-.1-.8.5-1.2.4-.9-.2-2.5-1.8-2.7-2.7-.1-.4.5-.8.4-1.2-.1-.6-.9-1.5-1.4-1.5Z"/>',
  };

  function icon(name, className = "") {
    const path = iconPaths[name] || iconPaths.star;
    return `<svg class="icon ${className}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  }

  function setHtml(selector, html) {
    const element = $(selector);
    if (element) element.innerHTML = html;
  }

  function brochureLink(label, className = "") {
    const classAttr = className ? ` class="${className}"` : "";
    if (data.brochure.available) {
      return `<a${classAttr} href="${h(data.brochure.url)}" target="_blank" rel="noopener">${label}</a>`;
    }
    return `<a${classAttr} href="#" data-brochure-pending role="button">${label}</a>`;
  }

  function setupBrochureNotice() {
    if (data.brochure.available) return;
    const messages = data.brochure.pendingMessage || [];
    const notice = document.createElement("div");
    notice.className = "brochure-notice";
    notice.hidden = true;
    notice.innerHTML = `
      <div class="brochure-notice__dialog" role="dialog" aria-modal="true" aria-labelledby="brochure-notice-title">
        <button class="brochure-notice__close" type="button" aria-label="Close">${icon("close")}</button>
        <h3 id="brochure-notice-title">Brochure coming soon</h3>
        ${messages.map((text) => `<p>${h(text)}</p>`).join("")}
      </div>`;
    document.body.appendChild(notice);

    const close = () => {
      notice.hidden = true;
    };

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-brochure-pending]");
      if (!trigger) return;
      event.preventDefault();
      notice.hidden = false;
    });
    notice.addEventListener("click", (event) => {
      if (event.target === notice) close();
    });
    notice.querySelector(".brochure-notice__close").addEventListener("click", close);
    document.addEventListener("keydown", (event) => {
      if (!notice.hidden && event.key === "Escape") close();
    });
  }

  function pageHref(href) {
    if (page === "home" && href.startsWith("index.html#")) {
      return href.slice("index.html".length);
    }
    if (page === "home" && href === "index.html") {
      return "#top";
    }
    return href;
  }

  function isNavActive(item) {
    if (page === "sponsors" && item.href === "sponsors.html") return true;
    if (page === "sponsorship" && item.href === "sponsorship.html") return true;
    if (page === "committees" && item.href === "committees.html") return true;
    if (page === "schedule" && item.href === "schedule.html") return true;
    if (page === "gallery" && item.href === "gallery.html") return true;
    if (page === "contact" && item.href === "contact.html") return true;
    if (page === "home" && (item.href === "index.html" || item.href === "#top")) {
      return true;
    }
    return false;
  }

  function avatar(person) {
    if (person.photo) {
      return `<img class="person-avatar" src="${h(person.photo)}" alt="${h(person.name)}" loading="lazy">`;
    }
    const initials = person.name
      .replace(/\b(Prof|Dr)\.?\s*/gi, "")
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0] || "")
      .join("")
      .toUpperCase();
    return `<span class="person-avatar person-avatar--initials" aria-hidden="true">${h(initials)}</span>`;
  }

  function sponsorInitials(name) {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0] || "")
      .join("")
      .toUpperCase();
  }

  function sponsorLogo(sponsor, className = "sponsor-logo") {
    if (sponsor.logo) {
      return `<img class="${className}" src="${h(sponsor.logo)}" alt="" loading="lazy">`;
    }
    return `<span class="${className} ${className}--placeholder" aria-hidden="true">${h(sponsorInitials(sponsor.name))}</span>`;
  }

  function platinumMedia(sponsor) {
    if (sponsor.video) {
      return `<div class="platinum-feature__media">
        <video controls preload="metadata" poster="${h(sponsor.image || "")}">
          <source src="${h(sponsor.video)}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>`;
    }
    if (sponsor.image) {
      return `<div class="platinum-feature__media">
        <img src="${h(sponsor.image)}" alt="${h(sponsor.mediaAlt || sponsor.name)}" loading="lazy">
      </div>`;
    }
    if (sponsor.logo) {
      return `<div class="platinum-feature__media platinum-feature__media--logo">
        <img src="${h(sponsor.logo)}" alt="${h(sponsor.mediaAlt || sponsor.name)}" loading="lazy">
      </div>`;
    }
    return `<div class="platinum-feature__media platinum-feature__media--placeholder" role="img" aria-label="${h(sponsor.mediaAlt || sponsor.name)}">
      <span class="platinum-feature__mark">${h(sponsorInitials(sponsor.name))}</span>
      <span class="platinum-feature__placeholder-label">${h(sponsor.name)}</span>
    </div>`;
  }

  function renderHeader() {
    const links = data.navigation
      .map((item) => {
        const active = isNavActive(item);
        return `<a class="site-nav__link${active ? " is-active" : ""}" href="${h(pageHref(item.href))}"${active ? ' aria-current="page"' : ""}>${h(item.label)}</a>`;
      })
      .join("");

    setHtml(
      "#site-header",
      `<header class="site-header">
        <div class="site-header__inner shell">
          <a class="brand" href="${page === "home" ? "#top" : "index.html"}" aria-label="${h(data.brand.short)} conference home">
            <span class="brand__marks">
              <img src="${h(data.brand.aiuLogo)}" alt="">
              <img src="${h(data.brand.nitkLogo)}" alt="">
            </span>
            <span class="brand__text"><strong>${h(data.brand.short)}</strong><span>${h(data.brand.name)}</span></span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
            <span class="sr-only">Open navigation</span>
            ${icon("menu", "nav-toggle__open")}${icon("close", "nav-toggle__close")}
          </button>
          <nav class="site-nav" id="site-navigation" aria-label="Main navigation">
            ${links}
            <a class="button button--small button--gold" href="${pageHref("index.html#register")}">${h(data.registration.label)}</a>
          </nav>
        </div>
      </header>`,
    );
  }

  function renderFooter() {
    const visitorCount =
      page === "home"
        ? `<span class="visitor-count" id="visitor-count" aria-live="polite">Visitors <strong id="visitor-count-value">…</strong></span>`
        : "";
    setHtml(
      "#site-footer",
      `<footer class="site-footer">
        <div class="shell site-footer__grid">
          <div class="footer-brand"><strong>${h(data.brand.short)}</strong><span>${h(data.footer.note)}</span></div>
          <div class="site-footer__meta">
            <a href="${pageHref("contact.html")}">Contact</a>
            ${brochureLink("Conference brochure")}
            ${visitorCount}
            <span>${h(data.footer.copyright)}</span>
          </div>
        </div>
      </footer>`,
    );
    if (page === "home") loadVisitorCount();
  }

  async function loadVisitorCount() {
    const value = $("#visitor-count-value");
    const wrap = $("#visitor-count");
    if (!value || !wrap) return;
    try {
      const response = await fetch(
        "https://api.counterapi.dev/v1/nitkbrc-aihe-sz-26/home/up",
      );
      if (!response.ok) throw new Error("Counter unavailable");
      const payload = await response.json();
      const count = Number(payload.count);
      if (!Number.isFinite(count)) throw new Error("Invalid count");
      value.textContent = count.toLocaleString("en-IN");
    } catch {
      wrap.hidden = true;
    }
  }

  function renderHero() {
    const nitkName = data.institutions.nitk.name;
    const aiuName = `${data.institutions.aiu.name} (AIU), New Delhi`;
    const heroImage =
      (data.event.heroImageByPage && data.event.heroImageByPage[page]) ||
      data.event.heroImage;
    const heroNotice = data.registration.heroNotice;
    const noticeText = h(heroNotice);
    const noticeSep = `<span class="hero__notice-sep" aria-hidden="true"></span>`;
    const noticeGroup = Array(3)
      .fill(`<span class="hero__notice-text">${noticeText}</span>`)
      .join(noticeSep);
    setHtml(
      "#hero-content",
      `<div class="hero__image" style="background-image:url('${h(heroImage)}')" role="img" aria-label="${h(data.event.heroAlt)}"></div>
       <div class="hero__veil" aria-hidden="true"></div>
       <div class="shell hero__inner">
        <div class="hero__top reveal">
          <img class="hero__logo" src="${h(data.brand.aiuLogo)}" alt="AIU">
          <div class="hero__intro">
            <div class="hero__institutes">
              <p>${h(aiuName)}</p>
              <p>&amp;</p>
              <p>${h(nitkName)}</p>
            </div>
            <p class="eyebrow eyebrow--light">${h(data.brand.heroLine)}</p>
          </div>
          <img class="hero__logo" src="${h(data.brand.nitkLogo)}" alt="NITK">
        </div>
        <div class="hero__copy reveal">
          <h1>
            <span class="hero__title-line">${h(data.event.title)} :</span>
            <span class="hero__title-line hero__title-line--secondary">${h(data.event.subtitle)}</span>
          </h1>
          <div class="event-meta">
            <span>${icon("calendar")}${h(data.event.date)} · ${h(data.event.day)}</span>
            <span>${icon("pin")}${h(data.event.venue)}</span>
          </div>
          <div class="button-row">
            <a class="button button--gold" href="${pageHref("index.html#register")}">${h(data.registration.label)} ${icon("arrow")}</a>
            ${brochureLink("Download brochure", "button button--ghost")}
          </div>
        </div>
       </div>
       ${
         heroNotice
           ? `<div class="hero__notice" role="region" aria-label="Registration deadline">
                <div class="hero__notice-track">
                  <div class="hero__notice-group">${noticeGroup}</div>
                  ${noticeSep}
                  <div class="hero__notice-group" aria-hidden="true">${noticeGroup}</div>
                </div>
              </div>`
           : ""
       }`,
    );
  }

  function renderAbout() {
    setHtml(
      "#about-content",
      `<div class="section-heading section-heading--center reveal"><p class="eyebrow">${h(data.brand.eyebrow)}</p><h2>${h(data.about.heading)}</h2></div>
       <div class="about__copy reveal">
        <p class="about__lead">${h(data.about.paragraphs[0])}</p>
        <div class="about__columns">${data.about.paragraphs.slice(1).map((text) => `<p>${h(text)}</p>`).join("")}</div>
       </div>`,
    );
  }

  function institutionBlock(key) {
    const item = data.institutions[key];
    if (!item) return "";
    const paragraphs = (item.paragraphs || [])
      .map((text) => `<p>${h(text)}</p>`)
      .join("");
    const reach = item.howToReach
      ? `<div class="institution-block__reach">
          <h3>${h(item.howToReach.heading)}</h3>
          <ul>
            ${item.howToReach.items
              .map((entry) => `<li><strong>${h(entry.mode)}:</strong> ${h(entry.text)}</li>`)
              .join("")}
          </ul>
          <a class="text-link" href="${h(item.howToReach.mapUrl)}" target="_blank" rel="noopener">${h(item.howToReach.mapLabel)} ${icon("pin")}</a>
        </div>`
      : "";
    return `<article class="institution-block reveal">
      <div class="institution-block__copy">
        <div class="institution-block__head">
          <img class="institution-block__badge" src="${h(item.logo)}" alt="" loading="lazy">
          <h2>${h(item.heading)}</h2>
        </div>
        <div class="institution-block__body">${paragraphs}</div>
        ${reach}
        <a class="text-link" href="${h(item.url)}" target="_blank" rel="noopener">Visit website ${icon("arrow")}</a>
      </div>
      <div class="institution-block__media">
        <a class="institution-block__qr" href="${h(item.url)}" target="_blank" rel="noopener">
          <img src="${h(item.qr)}" alt="QR code for ${h(item.shortName)} website">
          <span>Scan for website</span>
        </a>
      </div>
    </article>`;
  }

  function renderInstitutions() {
    setHtml(
      "#organisers-content",
      `<div class="section-heading section-heading--center reveal">
        <p class="eyebrow">Organisers</p>
        <h2>Organising Institutions</h2>
      </div>
      <div class="organisers-stack">
        ${institutionBlock("aiu")}
        ${institutionBlock("nitk")}
      </div>`,
    );
  }

  function renderThemes() {
    setHtml(
      "#themes-content",
      `<div class="section-heading section-heading--center reveal">
        <p class="eyebrow">Focus areas</p>
        <h2>Themes of the Conference</h2>
      </div>
      <div class="themes-grid">${data.themes
        .map(
          (theme) => `<article class="theme-card reveal">
            <span class="theme-card__number" aria-hidden="true">${h(theme.number)}</span>
            <span class="theme-card__icon" aria-hidden="true">${icon(theme.icon)}</span>
            <h3>${h(theme.title)}</h3>
          </article>`,
        )
        .join("")}</div>`,
    );
  }

  function renderSchedulePage() {
    const schedule = data.schedule;

    const tabs = [
      { id: "speakers", label: schedule.speakersHeading },
      { id: "programme", label: schedule.programmeHeading },
    ];

    setHtml(
      "#schedule-nav",
      `<div class="org-tabs reveal" role="tablist" aria-label="Conference schedule">${tabs
        .map(
          (tab, index) =>
            `<button type="button" class="org-tab${index === 0 ? " is-active" : ""}" role="tab" aria-selected="${index === 0}" data-org-tab="${h(tab.id)}">${h(tab.label)}</button>`,
        )
        .join("")}</div>`,
    );

    setHtml(
      "#schedule-content",
      `<div class="org-panel" data-org-panel="speakers">
        <div class="section-heading section-heading--center reveal">
          <p class="eyebrow">Speakers</p>
          <h2>${h(schedule.speakersHeading)}</h2>
        </div>
        <div class="schedule-programme reveal">
          <p class="schedule-programme__note">${h(schedule.speakersNote)}</p>
        </div>
      </div>
      <div class="org-panel" data-org-panel="programme" hidden>
        <div class="section-heading section-heading--center reveal">
          <p class="eyebrow">Agenda</p>
          <h2>${h(schedule.programmeHeading)}</h2>
        </div>
        <div class="schedule-programme reveal">
          <p class="schedule-programme__note">${h(schedule.programmeNote)}</p>
        </div>
      </div>`,
    );

    setupOrgTabs();
  }

  function renderSponsorship() {
    const heads = data.sponsorship.tiers
      .map(
        (tier) =>
          `<th scope="col"><strong>${h(tier.name)}</strong><span>${h(tier.contribution)}</span></th>`,
      )
      .join("");
    const rows = data.sponsorship.benefits
      .map(
        (benefit) =>
          `<tr><th scope="row">${h(benefit.label)}</th>${benefit.values
            .map((value) => {
              if (value === "Yes") {
                return `<td><span class="table-check"><span class="sr-only">Included</span>${icon("check")}</span></td>`;
              }
              if (value === "—") {
                return `<td><span class="table-dash" aria-hidden="true">—</span><span class="sr-only">Not included</span></td>`;
              }
              return `<td>${h(value)}</td>`;
            })
            .join("")}</tr>`,
      )
      .join("");
    const payment = data.sponsorship.payment;
    const contact = data.sponsorship.contact;

    const highlightIcons = ["people", "academic", "mic", "network", "spark"];
    const highlights = data.sponsorship.highlights
      .map(
        (item, index) =>
          `<li class="highlight-card reveal">
            <span class="highlight-card__icon">${icon(highlightIcons[index % highlightIcons.length])}</span>
            <p>${h(item)}</p>
          </li>`,
      )
      .join("");

    const tierCards = data.sponsorship.tiers
      .map((tier, index) => {
        const featured = index === 0;
        const perks = (tier.perks || [])
          .map((perk) => `<li>${icon("check")}<span>${h(perk)}</span></li>`)
          .join("");
        return `<article class="tier-card tier-card--${h(tier.name.toLowerCase())}${featured ? " tier-card--featured" : ""} reveal">
          ${tier.badge ? `<span class="tier-card__badge">${icon("star")}${h(tier.badge)}</span>` : ""}
          <p class="tier-card__name">${h(tier.name)}</p>
          <p class="tier-card__price">${h(tier.contribution)}</p>
          ${perks ? `<ul class="tier-card__perks">${perks}</ul>` : ""}
          <a class="button ${featured ? "button--gold" : "button--outline"}" href="#payment-details">Sponsor as ${h(tier.name)}</a>
        </article>`;
      })
      .join("");

    setHtml(
      "#sponsorship-content",
      `<div class="sponsorship-highlights">
        <div class="section-heading section-heading--center reveal">
          <p class="eyebrow">Why partner with us</p>
          <h2>${h(data.sponsorship.highlightsHeading)}</h2>
        </div>
        <ul class="highlight-cards">${highlights}</ul>
      </div>
      <div class="sponsorship__intro">
        <div class="section-heading section-heading--center reveal">
          <p class="eyebrow">Partnership tiers</p>
          <h2>${h(data.sponsorship.heading)}</h2>
        </div>
      </div>
      <div class="tier-cards">${tierCards}</div>
      <div class="benefits-compare reveal">
        <p class="benefits-compare__title">Full benefits comparison</p>
        <div class="table-wrap" tabindex="0" aria-label="Sponsorship categories and benefits">
          <table class="sponsorship-table"><thead><tr><th scope="col">Benefits</th>${heads}</tr></thead><tbody>${rows}</tbody></table>
        </div>
        <p class="table-note">* Subject to the release of the conference brochure. <br># Subject to delegate consent.</p>
      </div>
      <div class="sponsor-details">
        <article class="sponsor-detail reveal" id="payment-details">
          <span class="sponsor-detail__icon">${icon("building")}</span>
          <p class="eyebrow">Payment details</p><h3>${h(payment.bank)}</h3>
          <div class="sponsor-detail__body">
            <dl><div><dt>Name</dt><dd>${h(payment.name)}</dd></div><div><dt>Address</dt><dd>${h(payment.address)}</dd></div><div><dt>Account number</dt><dd>${h(payment.account)}</dd></div><div><dt>IFSC code</dt><dd>${h(payment.ifsc)}</dd></div></dl>
            ${payment.qr ? `<figure class="sponsor-detail__qr"><img src="${h(payment.qr)}" alt="QR code to pay into the NITK SBI account" loading="lazy"><figcaption>${h(payment.qrLabel || "Scan to pay")}</figcaption><p class="sponsor-detail__qr-meta">Merchant name: ${h(payment.qrMerchantName)}<br>UPI ID: ${h(payment.upiId)}</p></figure>` : ""}
          </div>
          <p class="sponsor-detail__note">Already made the payment? Let the sponsorship coordinator know.</p>
          <button type="button" class="button button--whatsapp" data-sponsor-whatsapp>${icon("whatsapp")}Share payment confirmation on WhatsApp</button>
        </article>
        <article class="sponsor-detail sponsor-detail--contact reveal">
          <span class="sponsor-detail__icon">${icon("mail")}</span>
          <p class="eyebrow">Contact for sponsorship</p>
          <div class="sponsor-contact__person">
            ${avatar(contact)}
            <div>
              <h3>${h(contact.name)}</h3>
              ${contact.role ? `<p class="sponsor-contact__role">${h(contact.role)}</p>` : ""}
              ${contact.department ? `<p class="sponsor-contact__dept">${h(contact.department)}</p>` : ""}
            </div>
          </div>
          <ul class="sponsor-contact__channels">
            <li>
              <a href="mailto:${h(contact.email)}?subject=${encodeURIComponent("Conference Sponsorship – Expression of Interest")}">
                <span class="sponsor-contact__channel-icon">${icon("mail")}</span>
                <span class="sponsor-contact__channel-text"><small>Email</small><strong>${h(contact.email)}</strong></span>
                ${icon("arrow")}
              </a>
            </li>
            <li>
              <a href="tel:${h(contact.phone.replaceAll("-", ""))}">
                <span class="sponsor-contact__channel-icon">${icon("phone")}</span>
                <span class="sponsor-contact__channel-text"><small>Phone</small><strong>${h(contact.phone)}</strong></span>
                ${icon("arrow")}
              </a>
            </li>
          </ul>
          <a class="text-link" href="${h(data.brochure.sponsorshipUrl)}" target="_blank">View sponsorship brochure ${icon("arrow")}</a>
        </article>
      </div>`,
    );
  }

  function setupSponsorWhatsApp() {
    const modal = document.createElement("div");
    modal.className = "wa-modal";
    modal.hidden = true;
    modal.innerHTML = `
      <div class="wa-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="wa-modal-title">
        <button class="wa-modal__close" type="button" aria-label="Close">${icon("close")}</button>
        <h3 id="wa-modal-title">Share payment confirmation</h3>
        <p>Enter the details below and your WhatsApp will open with a pre-filled message to the sponsorship coordinator.</p>
        <form class="wa-form" novalidate>
          <div class="wa-form__field">
            <label for="wa-mobile">Your mobile number</label>
            <input id="wa-mobile" name="mobile" type="tel" inputmode="numeric" autocomplete="tel-national" maxlength="10" placeholder="10-digit mobile number" required>
          </div>
          <div class="wa-form__field">
            <label for="wa-mobile-confirm">Re-enter mobile number (verification)</label>
            <input id="wa-mobile-confirm" name="mobileConfirm" type="tel" inputmode="numeric" maxlength="10" placeholder="Re-enter to verify" required>
          </div>
          <div class="wa-form__field">
            <label for="wa-transaction">Transaction no. (UTR / reference)</label>
            <input id="wa-transaction" name="transaction" type="text" maxlength="40" placeholder="e.g. UTR / transaction reference" required>
          </div>
          <div class="wa-form__field">
            <label for="wa-amount">Amount paid (INR)</label>
            <input id="wa-amount" name="amount" type="text" inputmode="decimal" maxlength="12" placeholder="e.g. 50000" required>
          </div>
          <div class="wa-form__field">
            <label for="wa-date">Date of transaction</label>
            <input id="wa-date" name="date" type="date" required>
          </div>
          <div class="wa-form__field">
            <label id="wa-captcha-label">Verification</label>
            <div class="wa-recaptcha" aria-labelledby="wa-captcha-label"></div>
          </div>
          <p class="wa-form__error" role="alert" hidden></p>
          <button type="submit" class="button button--whatsapp">${icon("whatsapp")}Open WhatsApp</button>
        </form>
      </div>`;
    document.body.appendChild(modal);

    const form = modal.querySelector(".wa-form");
    const errorBox = modal.querySelector(".wa-form__error");
    const mobileInput = modal.querySelector("#wa-mobile");
    const confirmInput = modal.querySelector("#wa-mobile-confirm");
    const transactionInput = modal.querySelector("#wa-transaction");
    const amountInput = modal.querySelector("#wa-amount");
    const dateInput = modal.querySelector("#wa-date");
    dateInput.max = new Date().toISOString().slice(0, 10);

    // Conference's reCAPTCHA v2 site keys (managed at
    // https://www.google.com/recaptcha/admin); a separate key is
    // registered for localhost development.
    const isLocalhost = ["localhost", "127.0.0.1"].includes(
      window.location.hostname
    );
    const RECAPTCHA_SITE_KEY = isLocalhost
      ? "6LcEx1stAAAAAO5rMTOa88t-IlkGkoUmrFbk4pvd"
      : "6Ldyx1stAAAAAELLdixiuSD8-lJs5kJwucHHP5-C";
    const captchaBox = modal.querySelector(".wa-recaptcha");
    let captchaWidgetId = null;

    const renderCaptcha = () => {
      if (captchaWidgetId !== null) return;
      if (!(window.grecaptcha && window.grecaptcha.render)) return;
      captchaWidgetId = window.grecaptcha.render(captchaBox, {
        sitekey: RECAPTCHA_SITE_KEY,
      });
    };
    const loadCaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.render) {
        renderCaptcha();
        return;
      }
      if (document.querySelector("script[data-wa-recaptcha]")) return;
      window.waRecaptchaOnLoad = renderCaptcha;
      const script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=waRecaptchaOnLoad&render=explicit";
      script.async = true;
      script.defer = true;
      script.setAttribute("data-wa-recaptcha", "true");
      document.head.appendChild(script);
    };

    const open = () => {
      modal.hidden = false;
      document.body.classList.add("lightbox-open");
      loadCaptcha();
      mobileInput.focus();
    };
    const close = () => {
      modal.hidden = true;
      document.body.classList.remove("lightbox-open");
      form.reset();
      if (captchaWidgetId !== null && window.grecaptcha) {
        window.grecaptcha.reset(captchaWidgetId);
      }
      errorBox.hidden = true;
    };
    const fail = (message, field) => {
      errorBox.textContent = message;
      errorBox.hidden = false;
      if (field) field.focus();
    };

    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-sponsor-whatsapp]")) open();
    });
    modal.querySelector(".wa-modal__close").addEventListener("click", close);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) close();
    });
    document.addEventListener("keydown", (event) => {
      if (!modal.hidden && event.key === "Escape") close();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      errorBox.hidden = true;

      const mobile = mobileInput.value.replace(/\D/g, "");
      const confirmMobile = confirmInput.value.replace(/\D/g, "");
      const transaction = transactionInput.value.trim();
      const amountRaw = amountInput.value.replace(/[,\s]/g, "");
      const amount = Number(amountRaw);
      const date = dateInput.value;

      if (!/^[6-9]\d{9}$/.test(mobile)) {
        fail("Please enter a valid 10-digit Indian mobile number.", mobileInput);
        return;
      }
      if (mobile !== confirmMobile) {
        fail("The two mobile numbers do not match. Please re-check.", confirmInput);
        return;
      }
      if (transaction.length < 4) {
        fail("Please enter a valid transaction / UTR reference number.", transactionInput);
        return;
      }
      if (!amountRaw || !Number.isFinite(amount) || amount <= 0) {
        fail("Please enter a valid amount paid (in INR).", amountInput);
        return;
      }
      if (!date) {
        fail("Please select the date of the transaction.", dateInput);
        return;
      }
      if (date > dateInput.max) {
        fail("The transaction date cannot be in the future.", dateInput);
        return;
      }
      const captchaResponse =
        captchaWidgetId !== null && window.grecaptcha
          ? window.grecaptcha.getResponse(captchaWidgetId)
          : "";
      if (!captchaResponse) {
        fail("Please tick the reCAPTCHA box to verify you are human.");
        return;
      }

      const prettyDate = new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const message = [
        "Sponsorship payment confirmation \u2013 AIU South Zone Conference on AI in Higher Education (NITK, Surathkal)",
        "",
        `Mobile number: ${mobile}`,
        `Amount paid: \u20B9${amount.toLocaleString("en-IN")}`,
        `Transaction no.: ${transaction}`,
        `Date of transaction: ${prettyDate}`,
      ].join("\n");

      const target = `https://wa.me/${window.atob("OTE5ODgwMjcwOTYx")}?text=${encodeURIComponent(message)}`;
      window.open(target, "_blank", "noopener");
      close();
    });
  }

  function renderSponsorshipPage() {
    renderSponsorship();
    setupSponsorWhatsApp();
  }

  function renderSponsorsPage() {
    const pageData = data.sponsorsPage;
    const sponsors = data.sponsors;

    const supporters = pageData.supporters;
    const supportersStrip =
      supporters && Array.isArray(supporters.items) && supporters.items.length
        ? `<div class="section-supporters reveal">
            <span class="section-supporters__label">${h(supporters.label)}</span>
            <div class="section-supporters__logos">${supporters.items
              .map(
                (item) =>
                  `<a class="section-supporters__item" href="${h(item.url)}" target="_blank" rel="noopener" title="${h(item.name)}">
                    <img src="${h(item.logo)}" alt="${h(item.name)}" loading="lazy">
                  </a>`,
              )
              .join("")}</div>
          </div>`
        : "";

    setHtml(
      "#organizers-content",
      `<div class="section-heading section-heading--center reveal">
        <h2>${h(pageData.heading)}</h2>
        <p class="section-intro">${h(pageData.introduction)}</p>
        <p class="section-notice">${h(pageData.sampleNotice)}</p>
      </div>
      ${supportersStrip}`,
    );

    const platinumSection = document.querySelector("#platinum-content")?.closest("section");
    if (!sponsors.platinum.length) {
      if (platinumSection) platinumSection.hidden = true;
    } else {
      setHtml(
        "#platinum-content",
        `<div class="section-heading section-heading--center reveal">
          <p class="eyebrow">Platinum sponsors</p>
          <h2>Featured partners</h2>
        </div>
        <div class="platinum-list">${sponsors.platinum
          .map(
            (sponsor, index) =>
              `<article class="platinum-feature reveal${index % 2 === 1 ? " platinum-feature--reverse" : ""}">
                ${platinumMedia(sponsor)}
                <div class="platinum-feature__body">
                  <p class="eyebrow">Platinum</p>
                  <h3>${h(sponsor.name)}</h3>
                  <p class="platinum-feature__tagline">${h(sponsor.tagline)}</p>
                  <p>${h(sponsor.description)}</p>
                  <a class="text-link" href="${h(sponsor.url)}" target="_blank" rel="noopener">Visit website ${icon("arrow")}</a>
                </div>
              </article>`,
          )
          .join("")}</div>`,
      );
    }

    function renderTier(selector, heading, items, cardClass) {
      const section = document.querySelector(selector)?.closest("section");
      if (!items.length) {
        if (section) section.hidden = true;
        return;
      }
      setHtml(
        selector,
        `<div class="section-heading section-heading--center reveal">
          <p class="eyebrow">${h(heading)}</p>
          <h2>${h(heading)}</h2>
        </div>
        <div class="sponsor-tier-grid sponsor-tier-grid--${cardClass}">${items
          .map(
            (sponsor) =>
              `<a class="sponsor-tier-card reveal" href="${h(sponsor.url)}" target="_blank" rel="noopener">
                ${sponsorLogo(sponsor)}
                <strong>${h(sponsor.name)}</strong>
                <span>${h(sponsor.tagline || "")}</span>
              </a>`,
          )
          .join("")}</div>`,
      );
    }

    renderTier("#gold-content", "Gold Sponsors", sponsors.gold, "gold");
    renderTier("#silver-content", "Silver Sponsors", sponsors.silver, "silver");
    renderTier(
      "#associate-content",
      "Associate Sponsors",
      sponsors.associate,
      "associate",
    );

    setHtml(
      "#partner-cta-content",
      `<div class="partner-cta__copy reveal">
        <span class="partner-cta__icon" aria-hidden="true">${icon("people")}</span>
        <h2>${h(pageData.cta.heading)}</h2>
        <p>${h(pageData.cta.text)}</p>
      </div>
      <a class="button button--gold reveal" href="${h(pageData.cta.href)}">${h(pageData.cta.buttonLabel)} ${icon("arrow")}</a>`,
    );
  }

  function renderRegistration() {
    const notes = (data.registration.notes || [])
      .map(
        (note, index) =>
          `<li><span class="registration-band__index">${index + 1}.</span><span>${h(note)
            .replaceAll("&lt;strong&gt;", "<strong>")
            .replaceAll("&lt;/strong&gt;", "</strong>")}</span></li>`,
      )
      .join("");
    setHtml(
      "#registration-content",
      `<div class="registration-band__main reveal">
        <h2>Registration</h2>
        <ol class="registration-band__list">${notes}</ol>
      </div>
      <aside class="registration-band__aside reveal">
        <div class="registration-band__card">
          <p class="registration-band__label">To Register</p>
          <a class="registration-band__qr" href="${h(data.registration.url)}" target="_blank" rel="noopener">
            <img src="${h(data.registration.qr)}" alt="QR code to register for the conference">
          </a>
          <a class="button button--gold registration-band__link" href="${h(data.registration.url)}" target="_blank" rel="noopener">${h(data.registration.label)} ${icon("arrow")}</a>
        </div>
        <p class="registration-band__brochure">
          Brochure:
          ${brochureLink("Download brochure")}
        </p>
      </aside>`,
    );
  }

  function personCard(person, { showContact = true, showProfile = true } = {}) {
    const links = [];
    if (showContact && person.email) {
      links.push(
        `<a href="mailto:${h(person.email)}">${icon("mail")}<span>${h(person.email)}</span></a>`,
      );
    }
    if (showContact && person.phone) {
      links.push(
        `<a href="tel:${h(person.phone.replaceAll("-", ""))}">${icon("phone")}<span>${h(person.phone)}</span></a>`,
      );
    }
    const subtitle = person.title || person.department || person.role || "";
    const profile =
      showProfile && person.profile
        ? `<a class="coordinator__profile" href="${h(person.profile)}" target="_blank" rel="noopener">Profile ${icon("arrow")}</a>`
        : "";
    return `<article class="coordinator reveal">${avatar(person)}<div><h3>${h(person.name)}</h3>${subtitle ? `<p>${h(subtitle)}</p>` : ""}${profile}${links.join("")}</div></article>`;
  }

  function personGrid(people, options) {
    return `<div class="coordinators-list">${people.map((person) => personCard(person, options)).join("")}</div>`;
  }

  function orgBlock(title, people, options) {
    if (!people.length) return "";
    return `<div class="org-block reveal">
      <h3 class="org-block__title">${h(title)}</h3>
      ${personGrid(people, options)}
    </div>`;
  }

  function enrichPerson(person) {
    const match = (data.coordinators || []).find(
      (coordinator) => coordinator.name === person.name,
    );
    if (!match) return person;
    return {
      ...match,
      ...person,
      email: person.email || match.email || "",
      phone: person.phone || match.phone || "",
      photo: person.photo || match.photo || "",
      profile: person.profile || match.profile || "",
      department: person.department || match.department || "",
      title: person.title || match.title || "",
    };
  }

  function orgSlug(name) {
    return String(name)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function renderCommitteePage() {
    const noContact = { showContact: false };
    const leadership = data.leadership || {};
    const committees = data.committees || [];

    const tabs = [
      { id: "organizing", label: "Organizing Committee" },
      ...committees.map((committee) => ({
        id: orgSlug(committee.name),
        label: committee.name,
      })),
    ];

    setHtml(
      "#org-nav",
      `<div class="org-tabs reveal" role="tablist" aria-label="Conference committees">${tabs
        .map(
          (tab, index) =>
            `<button type="button" class="org-tab${index === 0 ? " is-active" : ""}" role="tab" aria-selected="${index === 0}" data-org-tab="${h(tab.id)}">${h(tab.label)}</button>`,
        )
        .join("")}</div>`,
    );

    const leadershipBlocks = [
      orgBlock(
        "Chief Patron",
        leadership.chiefPatron ? [enrichPerson(leadership.chiefPatron)] : [],
        noContact,
      ),
      orgBlock(
        "Patrons",
        (leadership.patrons || []).map((patron) => enrichPerson(patron)),
        noContact,
      ),
      ...(leadership.convenors || []).map((person) =>
        orgBlock(person.role, [enrichPerson(person)], noContact),
      ),
    ].join("");

    setHtml(
      "#leadership-list",
      `<div class="org-panel" data-org-panel="organizing">${leadershipBlocks}</div>`,
    );

    setHtml(
      "#coordinators-list",
      `<div class="org-panel" data-org-panel="organizing">${orgBlock(
        "NITK Co-ordinators",
        data.coordinators || [],
        noContact,
      )}</div>`,
    );

    setHtml(
      "#committees-list",
      committees
        .map((committee) => {
          const people = [];
          if (committee.lead) {
            people.push(
              enrichPerson({
                name: committee.lead,
                role: "Lead",
              }),
            );
          }
          (committee.members || []).forEach((member) => {
            const person =
              typeof member === "string" ? { name: member } : member;
            people.push(enrichPerson(person));
          });
          return `<div class="org-panel" data-org-panel="${h(orgSlug(committee.name))}" hidden>${orgBlock(committee.name, people, noContact)}</div>`;
        })
        .join(""),
    );

    setupOrgTabs();
  }

  function setupOrgTabs() {
    const tabs = Array.from(document.querySelectorAll("[data-org-tab]"));
    const panels = Array.from(document.querySelectorAll("[data-org-panel]"));

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((button) => {
          const active = button === tab;
          button.classList.toggle("is-active", active);
          button.setAttribute("aria-selected", String(active));
        });
        panels.forEach((panel) => {
          const show = panel.dataset.orgPanel === tab.dataset.orgTab;
          panel.hidden = !show;
          if (show) {
            // Hidden panels never intersect the reveal observer, so force
            // their content visible when the tab is opened.
            panel
              .querySelectorAll(".reveal")
              .forEach((element) => element.classList.add("is-visible"));
          }
        });
      });
    });
  }

  function renderGalleryPage() {
    const gallery = data.gallery;
    const sections = gallery.sections || [];

    const tabsHtml = `<div class="org-tabs reveal" role="tablist" aria-label="Gallery sections">${sections
      .map(
        (section, index) =>
          `<button type="button" class="org-tab${index === 0 ? " is-active" : ""}" role="tab" aria-selected="${index === 0}" data-org-tab="${h(section.id)}">${h(section.tabLabel || section.title)}</button>`,
      )
      .join("")}</div>`;

    const sectionsHtml = sections
      .map(
        (section, sectionIndex) => `<div class="org-panel" data-org-panel="${h(section.id)}"${sectionIndex === 0 ? "" : " hidden"}><div class="gallery-section reveal" id="${h(section.id)}">
          <div class="section-heading section-heading--center">
            <p class="eyebrow">${h(section.eyebrow)}</p>
            <h2>${h(section.title)}</h2>
            <p>${h(section.description)}</p>
          </div>
          ${
            section.photos.length
              ? `<div class="photo-grid">
            ${section.photos
              .map(
                (photo, photoIndex) => `<button
                  type="button"
                  class="photo-tile${photo.size ? ` photo-tile--${h(photo.size)}` : ""}"
                  data-section="${sectionIndex}"
                  data-photo="${photoIndex}"
                  aria-label="View photo: ${h(photo.caption)}"
                >
                  <img src="${h(photo.src)}" alt="${h(photo.alt)}" loading="lazy">
                  <span class="photo-tile__caption">${h(photo.caption)}</span>
                </button>`,
              )
              .join("")}
          </div>`
              : `<p class="gallery-placeholder">${h(section.placeholder || "Photographs will be published here soon.")}</p>`
          }
          ${
            section.attribution
              ? `<p class="gallery-attribution">${h(section.attribution)}</p>`
              : ""
          }
        </div></div>`,
      )
      .join("");

    setHtml(
      "#gallery-content",
      `<div class="section-heading section-heading--center reveal">
        <p class="eyebrow">Photos</p>
        <h2>${h(gallery.heading)}</h2>
      </div>
      ${tabsHtml}
      ${sectionsHtml}`,
    );

    setupOrgTabs();
    setupGalleryLightbox(sections);
  }

  function setupGalleryLightbox(sections) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Photo viewer");
    lightbox.hidden = true;
    lightbox.innerHTML = `
      <button type="button" class="lightbox__close" aria-label="Close photo viewer">${icon("close")}</button>
      <button type="button" class="lightbox__nav lightbox__nav--prev" aria-label="Previous photo">${icon("arrow")}</button>
      <figure class="lightbox__figure">
        <img class="lightbox__image" src="" alt="">
        <figcaption class="lightbox__caption">
          <span class="lightbox__title"></span>
          <span class="lightbox__meta"></span>
        </figcaption>
      </figure>
      <button type="button" class="lightbox__nav lightbox__nav--next" aria-label="Next photo">${icon("arrow")}</button>`;
    document.body.appendChild(lightbox);

    const image = lightbox.querySelector(".lightbox__image");
    const title = lightbox.querySelector(".lightbox__title");
    const meta = lightbox.querySelector(".lightbox__meta");
    let current = { section: 0, photo: 0 };
    let lastFocus = null;

    function show(sectionIndex, photoIndex) {
      const photos = sections[sectionIndex].photos;
      const index = (photoIndex + photos.length) % photos.length;
      const photo = photos[index];
      current = { section: sectionIndex, photo: index };
      image.src = photo.src;
      image.alt = photo.alt;
      title.textContent = photo.caption;
      meta.textContent = `${index + 1} of ${photos.length}${
        photo.credit ? ` · Photo: ${photo.credit}` : ""
      }`;
    }

    function open(sectionIndex, photoIndex) {
      lastFocus = document.activeElement;
      show(sectionIndex, photoIndex);
      lightbox.hidden = false;
      document.body.classList.add("lightbox-open");
      lightbox.querySelector(".lightbox__close").focus();
    }

    function close() {
      lightbox.hidden = true;
      document.body.classList.remove("lightbox-open");
      if (lastFocus) lastFocus.focus();
    }

    document.querySelectorAll(".photo-tile").forEach((tile) => {
      tile.addEventListener("click", () => {
        open(Number(tile.dataset.section), Number(tile.dataset.photo));
      });
    });

    lightbox.querySelector(".lightbox__close").addEventListener("click", close);
    lightbox
      .querySelector(".lightbox__nav--prev")
      .addEventListener("click", () => show(current.section, current.photo - 1));
    lightbox
      .querySelector(".lightbox__nav--next")
      .addEventListener("click", () => show(current.section, current.photo + 1));
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) close();
    });
    document.addEventListener("keydown", (event) => {
      if (lightbox.hidden) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") show(current.section, current.photo - 1);
      if (event.key === "ArrowRight") show(current.section, current.photo + 1);
    });
  }

  function renderContactPage() {
    const pageData = data.contactPage;
    setHtml(
      "#contact-content",
      `<div class="section-heading section-heading--center reveal">
        <p class="eyebrow">Get in touch</p>
        <h2>${h(pageData.heading)}</h2>
        <p>${h(pageData.introduction)}</p>
      </div>
      <div class="coordinators-list reveal">${data.coordinators
        .map((person) => personCard(person, { showProfile: false }))
        .join("")}</div>`,
    );
  }

  renderHeader();
  renderFooter();
  renderHero();
  setupBrochureNotice();

  if (page === "home") {
    renderAbout();
    renderThemes();
    renderInstitutions();
    renderRegistration();
  } else if (page === "schedule") {
    renderSchedulePage();
  } else if (page === "sponsors") {
    renderSponsorsPage();
  } else if (page === "sponsorship") {
    renderSponsorshipPage();
  } else if (page === "committees") {
    renderCommitteePage();
  } else if (page === "gallery") {
    renderGalleryPage();
  } else if (page === "contact") {
    renderContactPage();
  }
})();
