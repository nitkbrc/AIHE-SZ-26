/**
 * Conference website content
 * --------------------------
 * This is the main file to edit when conference details change.
 * Add photos to assets/photos/ and reference them with paths such as
 * "assets/photos/speaker-name.jpg".
 */
window.SITE = {
  brand: {
    short: "NITK & AIU",
    name: "AI in Higher Education",
    eyebrow: "Jointly organised South Zone Conference",
    nitkLogo: "assets/logos/nitk-crest.png",
    aiuLogo: "assets/logos/aiu-mark.png",
  },

  event: {
    title:
      "Strategic Integration of Artificial Intelligence in Higher Education",
    subtitle: "Opportunities and Implications",
    date: "18 September 2026",
    day: "Friday",
    venue: "LHC-C Seminar Hall, NITK, Surathkal",
    heroImage: "assets/images/nitk-campus.jpg",
    heroAlt: "National Institute of Technology Karnataka, Surathkal",
  },

  registration: {
    url: "https://forms.gle/QPVo4YW914ZMDg359",
    deadline: "20 August 2026",
    label: "Register to attend",
  },

  brochure: {
    url: "assets/brochures/conference-brochure.jpeg",
    sponsorshipUrl: "assets/brochures/sponsorship-brochure.jpeg",
  },

  navigation: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Themes", href: "#themes" },
    { label: "Speakers", href: "#speakers" },
    { label: "Sponsorship", href: "#sponsorship" },
    { label: "Committees", href: "committees.html" },
  ],

  about: {
    heading: "A shared forum for AI-led higher education",
    paragraphs: [
      "The conference brings together academicians, administrators, industry experts and other stakeholders to deliberate on the strategic integration of Artificial Intelligence in higher education.",
      "Technical sessions will capture key observations and recommendations for submission to the Association of Indian Universities, while creating space for dialogue, best-practice sharing and collaboration.",
    ],
  },

  institutions: {
    nitk: {
      shortName: "NITK, Surathkal",
      name: "National Institute of Technology Karnataka, Surathkal",
      description:
        "Established in 1960, NITK is a top-ranked engineering institute and an Institute of National Importance located on the Arabian Sea coast near Mangaluru.",
      url: "https://www.nitk.ac.in/",
      logo: "assets/logos/nitk-crest.png",
    },
    aiu: {
      shortName: "AIU, New Delhi",
      name: "Association of Indian Universities",
      description:
        "AIU is the apex higher-education association representing Indian and international universities and promoting cooperation in teaching, research and academic exchange.",
      url: "https://aiu.ac.in/",
      logo: "assets/logos/aiu-mark.png",
    },
  },

  highlights: [
    {
      icon: "people",
      value: "~100",
      title: "Delegates",
      text: "From AIU member universities, including IIT and NIT institutions across South India.",
    },
    {
      icon: "academic",
      value: "Leadership",
      title: "Higher education leaders",
      text: "Vice Chancellors, Directors, Registrars, Deans, faculty, industry experts and decision-makers.",
    },
    {
      icon: "mic",
      value: "Ideas",
      title: "Panel discussions",
      text: "Focused sessions and keynote talks led by eminent delegates.",
    },
    {
      icon: "network",
      value: "Connect",
      title: "Collaboration",
      text: "Networking opportunities among AIU member universities.",
    },
    {
      icon: "spark",
      value: "Future",
      title: "AI showcase",
      text: "Innovative AI solutions and educational technologies.",
    },
  ],

  themes: [
    {
      number: "01",
      icon: "book",
      title: "AI-enabled teaching and learning",
      description:
        "Reimagining pedagogy, learning support and student outcomes through responsible AI.",
    },
    {
      number: "02",
      icon: "path",
      title: "Curriculum transformation and future skills",
      description:
        "Preparing programmes and learners for rapidly changing professional contexts.",
    },
    {
      number: "03",
      icon: "flask",
      title: "AI in research and innovation",
      description:
        "Accelerating discovery and supporting meaningful interdisciplinary research.",
    },
    {
      number: "04",
      icon: "building",
      title: "Institutional governance and data-driven decisions",
      description:
        "Using evidence and automation to strengthen transparent institutional processes.",
    },
    {
      number: "05",
      icon: "balance",
      title: "Ethical, social and equity dimensions of AI",
      description:
        "Addressing fairness, access, accountability and the human impact of AI adoption.",
    },
  ],

  // Add confirmed speakers here. The section remains hidden while this list is empty.
  // Example:
  // { name: "Dr. Example Name", role: "Keynote Speaker", organisation: "University", photo: "assets/photos/example.jpg" }
  speakers: [],

  coordinators: [
    {
      name: "Prof. Annappa B.",
      department: "Department of Computer Science & Engineering",
      email: "annappa@nitk.edu.in",
      phone: "0824-2473426",
      photo: "",
    },
    {
      name: "Prof. Pushparaj Shetty D.",
      department: "Department of Mathematical and Computational Sciences",
      email: "pushparaj@nitk.edu.in",
      phone: "0824-2473427",
      photo: "",
    },
    {
      name: "Dr. B. R. Chandavarkar",
      department: "Department of Computer Science & Engineering",
      email: "brc@nitk.edu.in",
      phone: "0824-2473408",
      photo: "",
    },
    {
      name: "Dr. Jeny Rajan",
      department: "Department of Information Technology",
      email: "jenyrajan@nitk.edu.in",
      phone: "0824-2473440",
      photo: "",
    },
    {
      name: "Dr. Anand Kumar M.",
      department: "Department of Information Technology",
      email: "anandkumar@nitk.edu.in",
      phone: "0824-2473439",
      photo: "",
    },
  ],

  committees: [
    {
      icon: "book",
      name: "Technical Sessions Committee",
      description:
        "Responsible for inviting select speakers, organising talks and coordinating technical sessions.",
      lead: "Prof. Annappa B.",
      members: [
        "Dr. Mohit P. Tahliani",
        "Dr. Jidesh P.",
        "Dr. Dinesh Naik",
      ],
      email: "annappa@nitk.edu.in",
      phone: "0824-2473426",
    },
    {
      icon: "bed",
      name: "Accommodation Committee",
      description:
        "Managing guest boarding, local stays and support arrangements for delegates.",
      lead: "Prof. Pushparaj Shetty D.",
      members: ["Dr. Abhilash M. H."],
      email: "pushparaj@nitk.edu.in",
      phone: "0824-2473427",
    },
    {
      icon: "bus",
      name: "Transportation Committee",
      description:
        "Coordinating travel support, local transport and arrival assistance.",
      lead: "Dr. B. R. Chandavarkar",
      members: ["Dr. Shridhar Sanshi"],
      email: "brc@nitk.edu.in",
      phone: "0824-2473428",
    },
    {
      icon: "food",
      name: "Catering Committee",
      description:
        "Overseeing delegate meals, refreshments and food-service coordination.",
      lead: "Dr. Anand Kumar M.",
      members: ["Dr. Manjanana B."],
      email: "anandkumar@nitk.edu.in",
      phone: "0824-2473439",
    },
    {
      icon: "people",
      name: "Ceremonies Committee",
      description:
        "Planning inaugural and valedictory functions, protocol and ceremonial proceedings.",
      lead: "Dr. Jeny Rajan",
      members: ["Dr. Saumya Hegde"],
      email: "jenyrajan@nitk.edu.in",
      phone: "0824-2473440",
    },
  ],

  sponsorship: {
    heading: "Partner with the future of AI in higher education",
    introduction:
      "Support a focused gathering of university leaders, educators, researchers and technology partners.",
    tiers: [
      { name: "Platinum", contribution: "₹1.5 lakh" },
      { name: "Gold", contribution: "₹1 lakh" },
      { name: "Silver", contribution: "₹50,000" },
      { name: "Associate", contribution: "₹25,000" },
    ],
    benefits: [
      { label: "Stage branding", values: ["Yes", "Yes", "—", "—"] },
      { label: "Backdrop logo", values: ["Yes", "Yes", "Yes", "—"] },
      { label: "Standee placement", values: ["Yes", "Yes", "—", "—"] },
      { label: "Exclusive website logo", values: ["Yes", "—", "—", "—"] },
      { label: "Registration page branding", values: ["Yes", "Yes", "Yes", "Yes"] },
      { label: "Email and social media branding", values: ["Yes", "Yes", "Yes", "—"] },
      { label: "Brochure advertisement", values: ["Yes", "Yes", "Yes", "Yes"] },
      { label: "Delegate bag branding", values: ["Yes", "Yes", "Yes", "Yes"] },
      { label: "Speaking or keynote opportunity", values: ["10 min", "8 min", "—", "—"] },
      { label: "Exhibition booth", values: ["2 prime", "1", "—", "—"] },
      { label: "Delegate contact details", values: ["100%", "50%", "—", "—"] },
      { label: "Promotional material in kit", values: ["Yes", "Yes", "Yes", "—"] },
    ],
    payment: {
      bank: "State Bank of India (SBI)",
      address: "NITK Campus, Srinivasa Nagar Post, Mangaluru – 575025",
      ifsc: "SBIN0002273",
      account: "37772503911",
    },
    contact: {
      name: "Dr. B. R. Chandavarkar",
      email: "brc@nitk.edu.in",
      phone: "0824-2473408",
    },
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
