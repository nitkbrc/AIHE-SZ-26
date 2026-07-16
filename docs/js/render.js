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
  };

  function icon(name, className = "") {
    const path = iconPaths[name] || iconPaths.star;
    return `<svg class="icon ${className}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  }

  function setHtml(selector, html) {
    const element = $(selector);
    if (element) element.innerHTML = html;
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
              <img src="${h(data.brand.nitkLogo)}" alt="">
              <img src="${h(data.brand.aiuLogo)}" alt="">
            </span>
            <span class="brand__text"><strong>${h(data.brand.short)}</strong><span>${h(data.brand.name)}</span></span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
            <span class="sr-only">Open navigation</span>
            ${icon("menu", "nav-toggle__open")}${icon("close", "nav-toggle__close")}
          </button>
          <nav class="site-nav" id="site-navigation" aria-label="Main navigation">
            ${links}
            <a class="button button--small button--gold" href="${h(data.registration.url)}" target="_blank" rel="noopener">${h(data.registration.label)}</a>
          </nav>
        </div>
      </header>`,
    );
  }

  function renderFooter() {
    setHtml(
      "#site-footer",
      `<footer class="site-footer">
        <div class="shell site-footer__grid">
          <div class="footer-brand"><strong>${h(data.brand.short)}</strong><span>${h(data.footer.note)}</span></div>
          <div class="site-footer__meta">
            <a href="mailto:${h(data.assistance.email)}">Contact</a>
            <a href="${h(data.brochure.url)}" target="_blank">Conference brochure</a>
            <span>${h(data.footer.copyright)}</span>
          </div>
        </div>
      </footer>`,
    );
  }

  function renderHero() {
    const nitkName = data.institutions.nitk.name;
    const aiuName = `${data.institutions.aiu.name} (AIU)`;
    setHtml(
      "#hero-content",
      `<div class="hero__image" style="background-image:url('${h(data.event.heroImage)}')" role="img" aria-label="${h(data.event.heroAlt)}"></div>
       <div class="hero__veil" aria-hidden="true"></div>
       <div class="shell hero__inner">
        <div class="hero__top reveal">
          <img class="hero__logo" src="${h(data.brand.nitkLogo)}" alt="NITK">
          <div class="hero__intro">
            <div class="hero__institutes">
              <p>${h(nitkName)}</p>
              <p>${h(aiuName)}</p>
            </div>
            <p class="eyebrow eyebrow--light">${h(data.brand.heroLine)}</p>
          </div>
          <img class="hero__logo" src="${h(data.brand.aiuLogo)}" alt="AIU">
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
            <a class="button button--gold" href="${h(data.registration.url)}" target="_blank" rel="noopener">${h(data.registration.label)} ${icon("arrow")}</a>
            <a class="button button--ghost" href="${h(data.brochure.url)}" target="_blank">Download brochure</a>
          </div>
        </div>
       </div>`,
    );
  }

  function renderAbout() {
    setHtml(
      "#about-content",
      `<div class="section-heading reveal"><p class="eyebrow">${h(data.brand.eyebrow)}</p><h2>${h(data.about.heading)}</h2></div>
       <div class="about__copy reveal">${data.about.paragraphs.map((text) => `<p>${h(text)}</p>`).join("")}</div>`,
    );
  }

  function renderInstitutionBlock(key, selector) {
    const item = data.institutions[key];
    if (!item) return;
    const paragraphs = (item.paragraphs || [])
      .map((text) => `<p>${h(text)}</p>`)
      .join("");
    setHtml(
      selector,
      `<article class="institution-block reveal">
        <div class="institution-block__copy">
          <div class="section-heading">
            <p class="eyebrow">Organising institution</p>
            <h2>${h(item.heading)}</h2>
          </div>
          <div class="institution-block__body">${paragraphs}</div>
          <a class="text-link" href="${h(item.url)}" target="_blank" rel="noopener">Visit website ${icon("arrow")}</a>
        </div>
        <div class="institution-block__media">
          <a class="institution-block__qr" href="${h(item.url)}" target="_blank" rel="noopener">
            <img src="${h(item.qr)}" alt="QR code for ${h(item.shortName)} website">
            <span>Scan for website</span>
          </a>
        </div>
      </article>`,
    );
  }

  function renderInstitutions() {
    renderInstitutionBlock("nitk", "#nitk-content");
    renderInstitutionBlock("aiu", "#aiu-content");
  }

  function renderThemes() {
    setHtml(
      "#themes-content",
      `<div class="section-heading reveal">
        <h2>Themes of the Conference</h2>
      </div>
      <ul class="themes-list reveal">${data.themes
        .map((theme) => `<li>${h(theme.title)}</li>`)
        .join("")}</ul>`,
    );
  }

  function renderSchedulePage() {
    const schedule = data.schedule;
    const hero = schedule.pageHero;
    setHtml(
      "#schedule-hero-content",
      `<div class="page-hero__copy reveal">
        <p class="eyebrow eyebrow--light">${h(hero.eyebrow)}</p>
        <h1>${h(hero.title)}</h1>
        <p>${h(hero.text)}</p>
      </div>`,
    );

    setHtml(
      "#schedule-speakers-content",
      `<div class="section-heading section-heading--center reveal">
        <p class="eyebrow">Speakers</p>
        <h2>${h(schedule.speakersHeading)}</h2>
      </div>
      <div class="speakers-grid">${schedule.speakers
        .map(
          (speaker) =>
            `<article class="speaker reveal">${avatar(speaker)}<h3>${h(speaker.name)}</h3></article>`,
        )
        .join("")}</div>`,
    );

    setHtml(
      "#schedule-programme-content",
      `<div class="section-heading section-heading--center reveal">
        <p class="eyebrow">Agenda</p>
        <h2>${h(schedule.programmeHeading)}</h2>
      </div>
      <div class="schedule-programme reveal">
        <p class="schedule-programme__note">${h(schedule.programmeNote)}</p>
      </div>`,
    );
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
            .map(
              (value) =>
                `<td>${value === "Yes" ? `<span class="table-check"><span class="sr-only">Included</span>${icon("check")}</span>` : h(value)}</td>`,
            )
            .join("")}</tr>`,
      )
      .join("");
    const payment = data.sponsorship.payment;
    const contact = data.sponsorship.contact;

    setHtml(
      "#sponsorship-content",
      `<div class="sponsorship__intro">
        <div class="section-heading reveal"><h2>${h(data.sponsorship.heading)}</h2></div>
      </div>
      <div class="table-wrap reveal" tabindex="0" aria-label="Sponsorship categories and benefits">
        <table class="sponsorship-table"><thead><tr><th scope="col">Benefits</th>${heads}</tr></thead><tbody>${rows}</tbody></table>
      </div>
      <p class="table-note">Advertisement material and payment must be submitted before the conference brochure is released. Benefits are subject to delegate consent and applicable privacy policy.</p>
      <div class="sponsor-details">
        <article class="sponsor-detail reveal">
          <p class="eyebrow">Payment details</p><h3>${h(payment.bank)}</h3>
          <dl><div><dt>Address</dt><dd>${h(payment.address)}</dd></div><div><dt>IFSC code</dt><dd>${h(payment.ifsc)}</dd></div><div><dt>Account number</dt><dd>${h(payment.account)}</dd></div></dl>
        </article>
        <article class="sponsor-detail sponsor-detail--contact reveal">
          <p class="eyebrow">Contact for sponsorship</p><h3>${h(contact.name)}</h3>
          <a href="mailto:${h(contact.email)}">${icon("mail")}${h(contact.email)}</a>
          <a href="tel:${h(contact.phone.replaceAll("-", ""))}">${icon("phone")}${h(contact.phone)}</a>
          <a class="text-link" href="${h(data.brochure.sponsorshipUrl)}" target="_blank">View sponsorship brochure ${icon("arrow")}</a>
        </article>
      </div>`,
    );
  }

  function renderSponsorshipPage() {
    const hero = data.sponsorship.pageHero;
    setHtml(
      "#sponsorship-hero-content",
      `<div class="page-hero__copy reveal">
        <p class="eyebrow eyebrow--light">${h(hero.eyebrow)}</p>
        <h1>${h(hero.title)}</h1>
        <p>${h(hero.text)}</p>
      </div>
      <div class="page-hero__actions reveal">
        <a class="button button--gold" href="#sponsorship">View tiers ${icon("arrow")}</a>
        <a class="button button--ghost" href="${h(data.brochure.sponsorshipUrl)}" target="_blank">Sponsorship brochure</a>
      </div>`,
    );
    renderSponsorship();
  }

  function renderSponsorsPage() {
    const pageData = data.sponsorsPage;
    const sponsors = data.sponsors;

    setHtml(
      "#sponsors-hero-content",
      `<div class="page-hero__copy reveal">
        <p class="eyebrow eyebrow--light">Partners &amp; sponsors</p>
        <h1>${h(pageData.heading)}</h1>
        <p>${h(pageData.introduction)}</p>
        <p class="page-hero__notice">${h(pageData.sampleNotice)}</p>
      </div>`,
    );

    setHtml(
      "#organizers-content",
      `<div class="section-heading section-heading--center reveal">
        <p class="eyebrow">${h(pageData.organizersHeading)}</p>
        <h2>Institutions driving the dialogue</h2>
      </div>
      <div class="organizer-cards">${pageData.organizers
        .map(
          (org) =>
            `<a class="organizer-card reveal" href="${h(org.url)}" target="_blank" rel="noopener">
              <span class="organizer-card__icon">${org.logo ? `<img src="${h(org.logo)}" alt="">` : icon(org.icon)}</span>
              <strong>${h(org.name)}</strong>
              <span class="organizer-card__role">${h(org.role)}</span>
            </a>`,
        )
        .join("")}</div>`,
    );

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
          `<li><span class="registration-band__index">${index + 1}.</span><span>${h(note)}</span></li>`,
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
          <a href="${h(data.brochure.url)}" target="_blank" rel="noopener">Download brochure</a>
        </p>
      </aside>`,
    );
  }

  function renderCommitteePage() {
    setHtml(
      "#committee-hero-content",
      `<img class="committee-hero__logo reveal" src="${h(data.brand.nitkLogo)}" alt="NITK">
      <div class="committee-hero__copy reveal">
        <p class="eyebrow eyebrow--light">${h(data.brand.eyebrow)}</p>
        <h1>Committees</h1>
        <p>Faculty teams coordinating the South Zone Conference programme and arrangements.</p>
      </div>
      <img class="committee-hero__logo reveal" src="${h(data.brand.aiuLogo)}" alt="AIU">`,
    );

    setHtml(
      "#committees-list",
      data.committees
        .map((committee) => {
          const people = [];
          if (committee.lead) people.push(`<strong>${h(committee.lead)}</strong>`);
          if (committee.title) people.push(`<span>${h(committee.title)}</span>`);
          (committee.members || []).forEach((member) => {
            people.push(`<span>${h(member)}</span>`);
          });
          const contact = [];
          if (committee.email) {
            contact.push(
              `<a href="mailto:${h(committee.email)}">${icon("mail")}<span>${h(committee.email)}</span></a>`,
            );
          }
          if (committee.phone) {
            contact.push(
              `<a href="tel:${h(committee.phone.replaceAll("-", ""))}">${icon("phone")}<span>${h(committee.phone)}</span></a>`,
            );
          }
          return `<article class="committee-card reveal">
              <span class="committee-card__icon">${icon(committee.icon)}</span>
              <div class="committee-card__body">
                <h3>${h(committee.name)}</h3>
                ${people.length ? `<div class="committee-card__people">${people.join("")}</div>` : ""}
              </div>
              ${contact.length ? `<div class="committee-card__contact">${contact.join("")}</div>` : ""}
            </article>`;
        })
        .join(""),
    );

    setHtml(
      "#coordinators-list",
      data.coordinators
        .map(
          (person) =>
            `<article class="coordinator reveal">${avatar(person)}<div><h3>${h(person.name)}</h3><p>${h(person.department)}</p><a href="mailto:${h(person.email)}">${icon("mail")}${h(person.email)}</a></div></article>`,
        )
        .join(""),
    );

    const institutions = Object.values(data.institutions)
      .map((item) => {
        const summary = (item.paragraphs || []).join(" ");
        return `<article class="sidebar-block"><img src="${h(item.logo)}" alt=""><div><h3>About ${h(item.shortName)}</h3><p>${h(summary)}</p><a class="text-link" href="${h(item.url)}" target="_blank" rel="noopener">Learn more ${icon("arrow")}</a></div></article>`;
      })
      .join("");
    setHtml(
      "#committee-sidebar",
      `${institutions}<article class="sidebar-block sidebar-block--help"><span class="sidebar-block__icon">${icon("mail")}</span><div><h3>${h(data.assistance.heading)}</h3><p>${h(data.assistance.text)}</p><a href="mailto:${h(data.assistance.email)}">${h(data.assistance.email)}</a></div></article>`,
    );
  }

  renderHeader();
  renderFooter();

  if (page === "home") {
    renderHero();
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
  } else {
    renderCommitteePage();
  }
})();
