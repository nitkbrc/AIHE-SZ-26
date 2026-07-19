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
    heroAlt: "National Institute of Technology Karnataka (NITK), Surathkal",
    // Per-page hero background overrides (keyed by <body data-page="...">).
    heroImageByPage: {
      committees: "assets/gallery/nitk/nitk-main-building.jpg",
      schedule: "assets/gallery/nitk/nitk-campus-panorama.jpg",
      sponsorship: "assets/gallery/nitk/nitk-lighthouse.jpg",
    },
  },

  registration: {
    url: "https://forms.gle/9rFFwF7PahXsXrtEA",
    deadline: "20 August 2026",
    confirmationDate: "27 August 2026",
    label: "Register to attend",
    qr: "assets/images/QR-Google_Form.png",
    notes: [
      "<strong>Registration is free</strong>, except travel expenditure to the nearest Railway Station / Airport to NITK, Surathkal. Accommodation will be provided only for two nights.",
      "<strong>Last Date for the Registration</strong>: 20.08.2026 (Thursday) and the confirmation will be conveyed by email on or before 27.08.2026 (Thursday).",
    ],
  },

  brochure: {
    url: "assets/brochures/Brochure.pdf",
    sponsorshipUrl: "assets/images/Sponsor.png",
    available: false,
    pendingMessage: [
      "The conference brochure is currently being finalized and will be made available after the confirmation of our sponsors.",
      "Thank you for your patience and understanding.",
    ],
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
      "The conference aims to provide a vibrant platform for academicians, administrators, industry experts, and other stakeholders to deliberate on the strategic integration of AI in higher education. It seeks to encourage speakers and delegates to share best practices adopted in their institutions, industries, and professional careers, aligned with the conference's themes.",
      "The key observations, recommendations, and outcomes from each technical session's deliberations will be documented and consolidated as the conference's official outcome. The recommendations emanating from the conference will be submitted to the Association of Indian Universities (AIU) for onward transmission to the Ministry of Education for devising policies on AI.",
      "Therefore, the conference serves as an important platform for sharing best practices, and collectively shaping the future of AI-driven transformation in higher education in India.",
    ],
  },

  institutions: {
    nitk: {
      heading: "National Institute of Technology (NITK), Surathkal",
      shortName: "NITK, Surathkal",
      name: "National Institute of Technology Karnataka (NITK), Surathkal",
      paragraphs: [
        "National Institute of Technology Karnataka (NITK), Surathkal was established in 1960 as Karnataka Regional Engineering College (KREC). NITK is a top-ranked engineering institute in the state, ranked among the top 20 in India (NIRF, 2025) and 120th among universities in Southern Asia (QS, 2024).",
        "There are 14 departments in the Institute, offering 40 different academic programs, which lead to various degrees including B.Tech., M.Tech., M.Sc., M.B.A., and Ph.D. All the UG programs and most of the PG programs are accredited by the NBA, New Delhi. At present, 7,000 students are enrolled in NITK; one in four is a girl student.",
      ],
      url: "https://www.nitk.ac.in/",
      logo: "assets/logos/nitk-crest.png",
      qr: "assets/images/qr-code-nitk.png",
      howToReach: {
        heading: "How to Reach NITK, Surathkal",
        items: [
          {
            mode: "By Air",
            text: "Mangaluru International Airport (IXE) is about 20 km from the campus. Taxis and app-based cabs are readily available from the airport to NITK.",
          },
          {
            mode: "By Train",
            text: "Surathkal Railway Station is the nearest station, about 2 km from the campus. Mangaluru Central and Mangaluru Junction, the major railway stations, are about 20 km away.",
          },
          {
            mode: "By Road",
            text: "The campus is located on National Highway 66 (Mangaluru–Udupi highway), about 20 km north of Mangaluru city. Frequent buses ply between Mangaluru and Surathkal.",
          },
        ],
        mapLabel: "View NITK on Google Maps",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=NITK+Surathkal",
      },
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
    speakersNote: "Under Construction",
    programmeHeading: "Programme Schedule",
    programmeNote: "Under Construction",
  },

  leadership: {
    chiefPatron: {
      name: "Prof. Vinay Kumar Pathak",
      title: "President, AIU",
      photo: "assets/images/members/prof-vinay-pathak.jpg",
      profile: "https://www.aiu.ac.in/documents/index/Prof%20Vinay%20Kumer%20Pathak-Brief%20Profile.pdf",
    },
    patrons: [
      {
        name: "Dr. (Mrs) Pankaj Mittal",
        title: "Secretary General, AIU",
        photo: "assets/images/members/dr-pankaj-mittal.jpg",
        profile: "https://aiu.ac.in/wp-content/uploads/docs/2026/03/Updated-Breif-Profile-of-Dr-Mrs-Pankaj-Mittal.pdf",
      },
      {
        name: "Prof. B. Ravi",
        title: "Director, NITK",
        photo: "assets/images/members/prof-b-ravi.jpg",
        profile: "https://www.nitk.ac.in/director",
      },
    ],
    convenors: [
      {
        role: "AIU Convenor",
        name: "Dr. Amarendra Pani",
        title: "Joint Director, Research, AIU",
        photo: "assets/images/members/dr-amarendra-pani.jpg",
        profile: "https://independent.academia.edu/DRAMARENDRAPANI",
      },
    ],
  },

  coordinators: [
    {
      name: "Prof. Annappa B.",
      department: "CSE Dept., NITK, Surathkal",
      email: "annappa@nitk.edu.in",
      phone: "0824-2473426",
      photo: "assets/images/members/prof-annappa.jpg",
      profile: "https://cse.nitk.ac.in/faculty/annappa",
    },
    {
      name: "Prof. Pushparaj Shetty D.",
      department: "MACS Dept., NITK, Surathkal",
      email: "pushparaj@nitk.edu.in",
      phone: "0824-2473427",
      photo: "assets/images/members/prof-pushparaj-shetty.jpg",
      profile: "https://macs.nitk.ac.in/faculty/pushparaj-shetty-d",
    },
    {
      name: "Dr. B. R. Chandavarkar",
      department: "CSE Dept., NITK, Surathkal",
      email: "brc@nitk.edu.in",
      phone: "0824-2473408",
      photo: "assets/images/BRC-Photo.jpg",
      profile: "https://cse.nitk.ac.in/faculty/b-r-chandravarkar",
    },
    {
      name: "Dr. Jeny Rajan",
      department: "CSE Dept., NITK, Surathkal",
      email: "jenyrajan@nitk.edu.in",
      phone: "0824-2473440",
      photo: "assets/images/members/dr-jeny-rajan.jpg",
      profile: "https://cse.nitk.ac.in/faculty/jeny-rajan",
    },
    {
      name: "Dr. Anand Kumar M.",
      department: "IT Dept., NITK, Surathkal",
      email: "anandkumar@nitk.edu.in",
      phone: "0824-2473439",
      photo: "assets/images/members/dr-anand-kumar.jpg",
      profile: "https://infotech.nitk.ac.in/faculty/anand-kumar-m",
    },
    {
      name: "Mr. Kartik Acharya",
      department: "Research Division, AIU",
      email: "",
      phone: "8290579702",
      photo: "",
      profile: "https://aiu.ac.in/research/research-division/",
    },
  ],

  committees: [
    {
      icon: "book",
      name: "Technical Committee",
      lead: "Prof. Annappa B.",
      members: [
        {
          name: "Dr. Mohit P. Tahiliani",
          department: "CSE Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-mohit-tahiliani.jpg",
          profile: "https://cse.nitk.ac.in/faculty/mohit-p-tahiliani",
        },
        {
          name: "Dr. Jidesh P.",
          department: "MACS Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-jidesh-p.jpg",
          profile: "https://macs.nitk.ac.in/faculty/jidesh-p",
        },
        {
          name: "Dr. Geetha V.",
          department: "IT Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-geetha-v.jpg",
          profile: "https://infotech.nitk.ac.in/faculty/geetha-v",
        },
        {
          name: "Dr. Sowmya Kamath",
          department: "IT Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-sowmya-kamath.jpg",
          profile: "https://infotech.nitk.ac.in/faculty/sowmya-kamath-s",
        },
        {
          name: "Dr. Dinesh Naik",
          department: "IT Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-dinesh-naik.jpg",
          profile: "https://infotech.nitk.ac.in/faculty/dinesh-naik",
        },
      ],
      email: "annappa@nitk.edu.in",
      phone: "0824-2473426",
    },
    {
      icon: "bed",
      name: "Accommodation Committee",
      lead: "Prof. Pushparaj Shetty D.",
      members: [
        {
          name: "Dr. Abhilash M. H.",
          department: "CSE Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-abhilash-mh.jpg",
          profile: "https://cse.nitk.ac.in/faculty/abhilash-m-h",
        },
        {
          name: "Dr. Vamsi A.",
          department: "IT Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-vamsi-a.jpg",
          profile: "https://infotech.nitk.ac.in/faculty/vamshi",
        },
        {
          name: "Dr. Vidyadhar Upadhya",
          department: "MACS Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-vidyadhar-upadhya.jpg",
          profile: "https://macs.nitk.ac.in/faculty/vidyadhar-upadhya",
        },
      ],
      email: "pushparaj@nitk.edu.in",
      phone: "0824-2473427",
    },
    {
      icon: "bus",
      name: "Transportation Committee",
      lead: "Dr. B. R. Chandavarkar",
      members: [
        {
          name: "Dr. Shridhar Sanshi",
          department: "CSE Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-shridhar-sanshi.jpg",
          profile: "https://cse.nitk.ac.in/faculty/shridhar-sanshi",
        },
        {
          name: "Dr. Shrutilipi B.",
          department: "IT Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-shrutilipi-b.jpg",
          profile: "https://infotech.nitk.ac.in/faculty/shrutilipi-bhattacharjee",
        },
        {
          name: "Dr. Jerry W. Sangma",
          department: "MACS Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-jerry-w-sangma.jpg",
          profile: "https://macs.nitk.ac.in/faculty/jerry-w-sangma",
        },
      ],
      email: "brc@nitk.edu.in",
      phone: "0824-2473428",
    },
    {
      icon: "food",
      name: "Catering Committee",
      lead: "Dr. Anand Kumar M.",
      members: [
        {
          name: "Dr. Manjanna B.",
          department: "CSE Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-manjanna-b.jpg",
          profile: "https://cse.nitk.ac.in/faculty/manjanna-b",
        },
        {
          name: "Dr. Kiran M.",
          department: "IT Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-kiran-m.jpg",
          profile: "https://infotech.nitk.ac.in/faculty/kiran-m",
        },
        {
          name: "Dr. Jisna V. A.",
          department: "MACS Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-jisna-va.jpg",
          profile: "https://macs.nitk.ac.in/faculty/jisna-v",
        },
      ],
      email: "anandkumar@nitk.edu.in",
      phone: "0824-2473439",
    },
    {
      icon: "people",
      name: "Ceremonies Committee",
      lead: "Dr. Jeny Rajan",
      members: [
        {
          name: "Dr. Saumya Hegde",
          department: "CSE Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-saumya-hegde.jpg",
          profile: "https://cse.nitk.ac.in/faculty/saumya-hegde",
        },
        {
          name: "Dr. Bhawana Rudra",
          department: "IT Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-bhawana-rudra.jpg",
          profile: "https://infotech.nitk.ac.in/faculty/bhawana-rudra",
        },
        {
          name: "Dr. Janani T",
          department: "IT Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-janani-t.jpg",
          profile: "https://infotech.nitk.ac.in/faculty/janani-t",
        },
        {
          name: "Dr. Mahima",
          department: "MACS Dept., NITK, Surathkal",
          photo: "assets/images/members/dr-mahima.jpg",
          profile: "https://macs.nitk.ac.in/faculty/mahima",
        },
      ],
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
    cta: {
      heading: "Join as a Partner",
      text: "Align your brand with the forefront of AI research in higher education. Explore our partnership tiers and benefits.",
      buttonLabel: "Become a Sponsor",
      href: "sponsorship.html",
    },
  },

  // Confirmed sponsors only. Empty tiers stay hidden on the sponsors page.
  // Platinum: logo + description (up to 250 words) + video (set `video` to an
  //   mp4 path such as "assets/videos/sponsor.mp4"; `image` is used as the
  //   poster or as a fallback when there is no video yet).
  // Gold: logo + description only. Silver: logo only.
  sponsors: {
    platinum: [
      {
        name: "USDC Global",
        logo: "assets/images/usdc_global_logo.jpeg",
        url: "https://www.usdcglobal.com/",
        tagline: "Empowering universities to deliver quality online higher education",
        description:
          "USDC Global (United Skills Development Corporation) is a Bengaluru-based education technology company that partners with universities and higher education institutions to design, build, and deliver online degree and skill-development programs. Providing end-to-end digital infrastructure — from curriculum design and pedagogical tools to technology platforms and learner support — USDC enables institutions such as JAIN Online, Vignan Online, and Yenepoya Online to reach learners across the globe. With a growing community of learners and collaborations with global professional bodies, USDC is on a mission to make higher education innovative, accessible, and affordable.",
        video: "",
        image: "",
      },
    ],
    gold: [],
    silver: [],
    associate: [],
  },

  sponsorship: {
    highlightsHeading: "Conference Highlights",
    highlights: [
      "Expected participation of ~100 delegates from AIU member universities and premier institutions, including IISc, IITs, IISERs, and NITs across South India.",
      "Expected participation of Vice Chancellors, Directors, Registrars, Deans, Faculty Members, and Industry Experts.",
      "Panel discussions and keynote talks by eminent academicians, administrators, and industry leaders.",
      "Networking and collaboration opportunities with AIU member universities and higher educational institutions.",
      "Showcase of innovative AI solutions, emerging technologies, and educational innovations.",
    ],
    heading: "Sponsorship Categories and Benefits",
    introduction: "",
    tiers: [
      {
        name: "Platinum",
        contribution: "₹2 Lakh",
        badge: "Maximum visibility",
        perks: [
          "5-minute speaking opportunity on stage",
          "2 exhibition booths at a prime location",
          "Logo, 250-word profile & video on the website",
          "Contact details of delegates #",
        ],
      },
      {
        name: "Gold",
        contribution: "₹1 Lakh",
        perks: [
          "Stage branding & standee placement",
          "1 exhibition booth",
          "Logo & 250-word profile on the website",
        ],
      },
      {
        name: "Silver",
        contribution: "₹50,000",
        perks: [
          "Backdrop logo & registration page branding",
          "Logo on the conference website",
          "Delegate bag branding",
          "Promotional material in the delegate kit",
        ],
      },
    ],
    benefits: [
      { label: "Stage Branding", values: ["Yes", "—", "—"] },
      { label: "Backdrop Logo", values: ["Yes", "Yes", "Yes"] },
      { label: "Standee Placement", values: ["Yes", "Yes", "—"] },
      { label: "Website Advertisement", values: ["Company Logo, Profile (250 Words) & Video", "Company Logo, Profile (250 Words)", "Logo"] },
      { label: "Registration Page Branding", values: ["Yes", "Yes", "Yes"] },
      { label: "Email and Social Media Branding", values: ["Yes", "Yes", "—"] },
      { label: "Brochure Advertisement *", values: ["Yes", "Yes", "—"] },
      { label: "Delegate Bag Branding", values: ["Yes", "Yes", "Yes"] },
      { label: "Speaking Opportunity", values: ["5 min", "—", "—"] },
      { label: "Exhibition Booth", values: ["2, at Prime Location", "1", "—"] },
      { label: "Delegate Contact Details #", values: ["Yes", "—", "—"] },
      { label: "Promotional Material in Kit", values: ["Yes", "Yes", "Yes"] },
    ],
    payment: {
      name: "NITK, Surathkal",
      bank: "State Bank of India (SBI)",
      address: "NITK Campus, Srinivasa Nagar Post, Mangaluru – 575025",
      account: "37772503911",
      ifsc: "SBIN0002273",
      qr: "assets/images/qr-code-sbi.png",
      qrLabel: "Scan to pay",
      qrMerchantName: "03911",
      upiId: "xyz3911.948@sbi",
    },
    contact: {
      name: "Dr. B. R. Chandavarkar",
      role: "Sponsorship Coordinator",
      department: "CSE Dept., NITK, Surathkal",
      photo: "assets/images/BRC-Photo.jpg",
      email: "aihesz26@nitk.edu.in",
      phone: "0824-2473408",
    },
  },

  gallery: {
    heading: "Gallery",
    sections: [
      {
        id: "conference",
        tabLabel: "Conference",
        eyebrow: "The Event",
        title: "Conference Moments",
        description:
          "Highlights from the AIU South Zone Conference on the Strategic Integration of AI in Higher Education at NITK, Surathkal.",
        placeholder:
          "Photographs from the conference will be published here after the event on 18 September 2026.",
        photos: [],
      },
      {
        id: "aiu",
        tabLabel: "AIU",
        eyebrow: "The Association",
        title: "Association of Indian Universities",
        description:
          "Celebrating 100 years of the Association of Indian Universities (AIU) \u2014 glimpses from the 99th Annual Meet & Vice Chancellors\u2019 Conference, zonal Vice Chancellors\u2019 meets, and international collaborations.",
        attribution:
          "Photographs courtesy of the Association of Indian Universities (www.aiu.ac.in).",
        photos: [
          {
            src: "assets/gallery/aiu/aiu-south-zone-vc-meet.jpg",
            alt: "AIU South Zone Vice Chancellors\u2019 Meet 2025-26 at M S Ramaiah University of Applied Sciences, Bengaluru",
            caption: "AIU South Zone Vice Chancellors\u2019 Meet 2025\u201326, Bengaluru",
            credit: "AIU",
            size: "wide",
          },
          {
            src: "assets/gallery/aiu/aiu-99th-annual-meet-inauguration.jpg",
            alt: "Inauguration of the 99th AIU Annual Meet and National Conference of Vice Chancellors at Amity University, Noida",
            caption: "Inauguration of the 99th AIU Annual Meet & VCs\u2019 Conference",
            credit: "AIU",
            size: "wide",
          },
          {
            src: "assets/gallery/aiu/aiu-president-sg-address.jpg",
            alt: "Addresses by the AIU President and Secretary General at the 99th AIU Annual Meet",
            caption: "Addresses by the AIU President & Secretary General",
            credit: "AIU",
            size: "wide",
          },
          {
            src: "assets/gallery/aiu/aiu-coffee-table-book-release.jpg",
            alt: "Release of the AIU Coffee Table Book depicting 100 years of AIU",
            caption: "Release of the AIU Coffee Table Book \u2014 100 Years of AIU",
            credit: "AIU",
            size: "wide",
          },
          {
            src: "assets/gallery/aiu/aiu-centenary-postal-stamp.jpg",
            alt: "Release of the commemorative postage stamp marking 100 years of AIU",
            caption: "Commemorative Postage Stamp \u2014 100 Years of AIU",
            credit: "AIU",
            size: "wide",
          },
          {
            src: "assets/gallery/aiu/aiu-kansai-university-mou.jpg",
            alt: "Signing of an MoU between AIU and Kansai University, Japan",
            caption: "MoU with Kansai University \u2014 India\u2013Japan Collaboration",
            credit: "AIU",
            size: "wide",
          },
        ],
      },
      {
        id: "nitk-surathkal",
        eyebrow: "The Venue",
        title: "NITK, Surathkal",
        description:
          "Spread across 295 acres along the Arabian Sea coast, the National Institute of Technology Karnataka, Surathkal offers a scenic setting for the conference — from its iconic main building and lighthouse to its private beach.",
        attribution:
          "Photographs courtesy of NITK Surathkal and respective publishers.",
        photos: [
          {
            src: "assets/gallery/nitk/nitk-lighthouse.jpg",
            alt: "Surathkal lighthouse near the NITK campus",
            caption: "Surathkal Lighthouse",
            credit: "NITK Alumni Network",
            size: "featured",
          },
          {
            src: "assets/gallery/nitk/nitk-campus-official.jpg",
            alt: "View of the NITK Surathkal campus",
            caption: "NITK Surathkal Campus",
            credit: "NIT Karnataka, Surathkal",
          },
          {
            src: "assets/gallery/nitk/nitk-main-building.jpg",
            alt: "NITK Surathkal campus building",
            caption: "Around the Institute",
            credit: "The Times of India",
          },
          {
            src: "assets/gallery/nitk/nitk-campus-panorama.jpg",
            alt: "Panoramic view of the NITK Surathkal campus",
            caption: "Campus Panorama",
            credit: "College360",
            size: "wide",
          },
          {
            src: "assets/gallery/nitk/nitk-beach.jpg",
            alt: "NITK Beach along the Arabian Sea",
            caption: "NITK Beach",
            credit: "NITK Surathkal",
          },
          {
            src: "assets/gallery/nitk/nitk-alumni-campus.png",
            alt: "NITK Surathkal campus from the alumni gallery",
            caption: "Campus Views",
            credit: "NITK Alumni & Corporate Relations",
            size: "wide",
          },
          {
            src: "assets/gallery/nitk/nitk-campus-view.jpg",
            alt: "A view of the NITK Surathkal campus",
            caption: "Around the Campus",
            credit: "CollegeDekho",
          },
          {
            src: "assets/gallery/nitk/nitk-campus-gardens.jpg",
            alt: "Greenery on the NITK Surathkal campus",
            caption: "Campus Greenery",
            credit: "Aaj Tak",
          },
        ],
      },
    ],
  },

  contactPage: {
    heading: "Contact Us",
    introduction:
      "Reach the organising team for registration, travel, or programme queries.",
  },

  assistance: {
    heading: "Need assistance?",
    text: "Contact the organising team for registration, travel or programme queries.",
    email: "annappa@nitk.edu.in",
  },

  footer: {
    note: "South Zone Conference on AI in Higher Education",
    copyright: "© Copyright All Rights Reserved 2026, NITK Surathkal",
  },
};
