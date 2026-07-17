/**
 * Conference website content
 * --------------------------
 * This is the main file to edit when conference details change.
 * Add photos to assets/photos/ and reference them with paths such as
 * "assets/photos/speaker-name.jpg".
 */
window.SITE = {
  brand: {
    short: "AIU & NITK",
    name: "AI in Higher Education",
    eyebrow: "Jointly organised South Zone Conference",
    heroLine: "Jointly Organise South Zone Conference on",
    nitkLogo: "assets/logos/nitk-crest.png",
    aiuLogo: "assets/logos/aiu-mark.png",
  },

  event: {
    title:
      "Strategic Integration of Artificial Intelligence (AI) in Higher Education",
    subtitle: "Opportunities and Implications",
    date: "18 September 2026",
    day: "Friday",
    venue: "LHC-C Seminar Hall, NITK, Surathkal",
    heroImage: "assets/images/nitk-campus.jpg",
    heroAlt: "National Institute of Technology Karnataka, Surathkal",
  },

  registration: {
    url: "https://forms.gle/9rFFwF7PahXsXrtEA",
    deadline: "20 August 2026",
    confirmationDate: "29 August 2026",
    label: "Register to attend",
    qr: "assets/images/qr-code-registration.png",
    notes: [
      "<strong>Registration is free</strong>, except travel expenditure to the nearest Railway Station / Airport to NITK, Surathkal. Accommodation will be provided only for two nights.",
      "Last Date for the Registration: 20.08.2026 (Thursday) and the confirmation will be conveyed by email on or before 29.08.2026 (Friday).",
    ],
  },

  brochure: {
    url: "assets/brochures/Brochure.pdf",
    sponsorshipUrl: "assets/brochures/Brochure.pdf",
  },

  navigation: [
    { label: "Home", href: "index.html" },
    { label: "Committees", href: "committees.html" },
    { label: "Schedule", href: "schedule.html" },
    { label: "Sponsorship", href: "sponsorship.html" },
    { label: "Sponsors", href: "sponsors.html" },
    { label: "Gallery", href: "gallery.html" },
    { label: "Contact Us", href: "contact.html" },
  ],

  about: {
    heading: "About the Conference",
    paragraphs: [
      "This conference brings together academicians, administrators, industry experts, and other stakeholders to examine the strategic integration of Artificial Intelligence in higher education. Speakers and delegates will exchange institutional and professional practices aligned with the conference themes.",
      "Observations, recommendations, and outcomes from each technical session will be documented and consolidated as the official conference proceedings. These recommendations will be submitted to the Association of Indian Universities (AIU) for consideration and further action, as appropriate.",
      "Through structured deliberation and knowledge exchange, the conference seeks to inform policy and practice for AI-driven transformation in higher education in India.",
    ],
  },

  institutions: {
    nitk: {
      heading: "National Institute of Technology (NITK), Surathkal",
      shortName: "NITK, Surathkal",
      name: "National Institute of Technology Karnataka, Surathkal",
      paragraphs: [
        "National Institute of Technology Karnataka (NITK), Surathkal was established in 1960 as Karnataka Regional Engineering College (KREC). NITK is a top-ranked engineering institute in the state, ranked among the top 20 in India (NIRF, 2025) and 120th among universities in Southern Asia (QS, 2024).",
        "There are 14 departments in the Institute, offering 40 different academic programs, which lead to various degrees including B.Tech., M.Tech., M.Sc., M.B.A., and Ph.D. All the UG programs and most of the PG programs are accredited by the NBA, New Delhi. At present, 7,000 students are enrolled in NITK; one in four is a girl student.",
      ],
      url: "https://www.nitk.ac.in/",
      logo: "assets/logos/nitk-crest.png",
      qr: "assets/images/qr-code-nitk.png",
    },
    aiu: {
      heading: "Association of Indian Universities (AIU), New Delhi",
      shortName: "AIU, New Delhi",
      name: "Association of Indian Universities",
      paragraphs: [
        "Association of Indian Universities (AIU), the world's largest and one of the premier apex higher education institutions in the country, established in 1925, is a research-based policy advisory institution to the Government of India in the fields of Higher Education, Sports, Culture, and Internationalisation.",
        "At present, it has a membership of 1088 universities, including 19 international universities. Since its inception, it has been playing a vital role in shaping Indian higher education. As an apex institution, it facilitates cooperation and coordination among Indian universities, liaises between universities and the Government, and with national and international bodies of higher education in other countries, on matters of interest.",
        "AIU has successfully traversed this long journey of 99 years, growing continuously in strength and stature, carrying forward the legacy and glory of Indian Higher Education. Dr. Sarvepalli Radhakrishnan, Dr. Zakir Hussain, and Dr. Syama Prasad Mukherjee are among the stalwarts who served AIU as its presidents.",
      ],
      url: "https://aiu.ac.in/",
      logo: "assets/logos/aiu-mark.png",
      qr: "assets/images/qr-code-aiu.png",
    },
  },

  themes: [
    {
      number: "01",
      icon: "book",
      title: "AI-enabled teaching and learning",
    },
    {
      number: "02",
      icon: "path",
      title: "Curriculum transformation and future skills",
    },
    {
      number: "03",
      icon: "flask",
      title: "AI in research and innovation",
    },
    {
      number: "04",
      icon: "building",
      title: "Institutional governance and data-driven decision-making",
    },
    {
      number: "05",
      icon: "balance",
      title: "Ethical, social, and equity dimensions of AI",
    },
  ],

  schedule: {
    speakersHeading: "Technical Session Speakers",
    speakers: [
      { name: "Prof. KVG" },
      { name: "Prof. Ananatnarayan" },
      { name: "Prof. G. Ram Mohan Reddy" },
    ],
    programmeHeading: "Programme Schedule",
    programmeNote: "Under Construction",
  },

  leadership: {
    chiefPatron: {
      name: "Prof. Vinay Kumar Pathak",
      title: "President, AIU",
      photo: "assets/images/members/prof-vinay-pathak.jpg",
    },
    patrons: [
      {
        name: "Dr. (Mrs) Pankaj Mittal",
        title: "Secretary General, AIU",
        photo: "assets/images/members/dr-pankaj-mittal.jpg",
      },
      {
        name: "Prof. (Dr) B. Ravi",
        title: "Director, NITK",
      },
    ],
    convenors: [
      {
        role: "AIU Convenor",
        name: "Dr. Amarendra Pani",
        title: "Joint Director, Research, AIU",
      },
      {
        role: "NITK Convenor",
        name: "Dr. B. R. Chandavarkar",
        title: "HoD, Department of CSE, NITK",
      },
    ],
  },

  coordinators: [
    {
      name: "Prof. Annappa B.",
      department: "CSE Dept.",
      email: "annappa@nitk.edu.in",
      phone: "0824-2473426",
      photo: "",
    },
    {
      name: "Prof. Pushparaj Shetty D.",
      department: "MACS Dept.",
      email: "pushparaj@nitk.edu.in",
      phone: "0824-2473427",
      photo: "",
    },
    {
      name: "Dr. B. R. Chandavarkar",
      department: "CSE Dept.",
      email: "brc@nitk.edu.in",
      phone: "0824-2473408",
      photo: "assets/images/BRC-Photo.jpg",
    },
    {
      name: "Dr. Jeny Rajan",
      department: "CSE Dept.",
      email: "jenyrajan@nitk.edu.in",
      phone: "0824-2473440",
      photo: "",
    },
    {
      name: "Dr. Anand Kumar M.",
      department: "IT Dept.",
      email: "anandkumar@nitk.edu.in",
      phone: "0824-2473439",
      photo: "",
    },
    {
      name: "Mr. Kartik Acharya",
      department: "Research Division, AIU",
      email: "",
      phone: "8290579702",
      photo: "",
    },
  ],

  committees: [
    {
      icon: "book",
      name: "Technical Sessions Committee",
      lead: "Prof. Annappa B.",
      members: [
        "Dr. Mohit P. Tahiliani",
        "Dr. Jidesh P.",
        "Dr. Geetha V.",
        "Dr. Sowmya Kamath",
        "Dr. Dinesh Naik",
      ],
      email: "annappa@nitk.edu.in",
      phone: "0824-2473426",
    },
    {
      icon: "bed",
      name: "Accommodation Committee",
      lead: "Prof. Pushparaj Shetty D.",
      members: ["Dr. Abhilash M. H.", "Dr. Vamsi A."],
      email: "pushparaj@nitk.edu.in",
      phone: "0824-2473427",
    },
    {
      icon: "bus",
      name: "Transportation Committee",
      lead: "Dr. B. R. Chandavarkar",
      members: ["Dr. Shridhar Sanshi", "Dr. Shrutilipi B."],
      email: "brc@nitk.edu.in",
      phone: "0824-2473428",
    },
    {
      icon: "food",
      name: "Catering Committee",
      lead: "Dr. Anand Kumar M.",
      members: ["Dr. Manjanna B.", "Dr. Kiran M."],
      email: "anandkumar@nitk.edu.in",
      phone: "0824-2473439",
    },
    {
      icon: "people",
      name: "Ceremonies Committee",
      lead: "Dr. Jeny Rajan",
      members: ["Dr. Saumya Hegde", "Dr. Bhawana Rudra", "Dr. T. Janani"],
      email: "jenyrajan@nitk.edu.in",
      phone: "0824-2473440",
    },
  ],

  // Showcase partners and sponsors. Replace entries when sponsors are confirmed.
  sponsorsPage: {
    heading: "Our Partners & Sponsors",
    introduction:
      "Partners supporting the South Zone Conference on the strategic integration of Artificial Intelligence in Higher Education.",
    sampleNotice: "Sponsors to be announced.",
    organizersHeading: "Primary Organizers",
    organizers: [
      {
        name: "NITK Surathkal",
        role: "Host Institution",
        icon: "academic",
        logo: "assets/logos/nitk-crest.png",
        url: "https://www.nitk.ac.in/",
      },
      {
        name: "Association of Indian Universities",
        role: "Co-Organizer",
        icon: "building",
        logo: "assets/logos/aiu-mark.png",
        url: "https://aiu.ac.in/",
      },
    ],
    cta: {
      heading: "Join as a Partner",
      text: "Align your brand with the forefront of AI research in higher education. Explore our partnership tiers and benefits.",
      buttonLabel: "Become a Sponsor",
      href: "sponsorship.html",
    },
  },

  // Confirmed sponsors only. Empty tiers stay hidden on the sponsors page.
  sponsors: {
    platinum: [],
    gold: [],
    silver: [],
    associate: [],
  },

  sponsorship: {
    heading: "Sponsorship Categories and Benefits",
    introduction: "",
    tiers: [
      { name: "Platinum", contribution: "₹1.5 Lakh" },
      { name: "Gold", contribution: "₹1 Lakh" },
      { name: "Silver", contribution: "₹50,000" },
    ],
    benefits: [
      { label: "Stage Branding", values: ["Yes", "Yes", "—"] },
      { label: "Backdrop Logo", values: ["Yes", "Yes", "Yes"] },
      { label: "Standee Placement", values: ["Yes", "Yes", "—"] },
      { label: "Website Advertisement", values: ["Logo with 250 words Text & Video Content", "Logo with 250 words Text Content", "Logo"] },
      { label: "Registration Page Branding", values: ["Yes", "Yes", "Yes"] },
      { label: "Email and Social Media Branding", values: ["Yes", "Yes", "Yes"] },
      { label: "Brochure Advertisement *", values: ["Yes", "Yes", "—"] },
      { label: "Delegate Bag Branding", values: ["Yes", "Yes", "Yes"] },
      { label: "Speaking Opportunity", values: ["5 min", "—", "—"] },
      { label: "Exhibition Booth", values: ["2, at Prime Location", "1", "—"] },
      { label: "Delegate Contact Details #", values: ["100%", "50%", "—"] },
      { label: "Promotional Material in Kit", values: ["Yes", "Yes", "Yes"] },
    ],
    payment: {
      bank: "State Bank of India (SBI)",
      address: "NITK Campus, Srinivasa Nagar Post, Mangaluru – 575025",
      ifsc: "SBIN0002273",
      account: "37772503911",
    },
    contact: {
      name: "Dr. B. R. Chandavarkar",
      email: "head.cs@nitk.edu.in",
      phone: "0824-2473408",
    },
  },

  gallery: {
    heading: "Gallery",
    note: "Under Construction",
  },

  contactPage: {
    heading: "Contact Us",
    introduction:
      "Reach the organising team for registration, travel, programme, or sponsorship queries.",
  },

  assistance: {
    heading: "Need assistance?",
    text: "Contact the organising team for registration, travel or programme queries.",
    email: "annappa@nitk.edu.in",
  },

  footer: {
    note: "South Zone Conference on AI in Higher Education",
    copyright: "© 2026 NITK Surathkal & Association of Indian Universities.",
  },
};
