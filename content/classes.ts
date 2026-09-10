export type PotteryClass = {
  slug: string;
  title: string;
  cardDescription: string;
  image: string;
  imageAlt: string;
  priceLabel: string;
  price: string;
  originalPrice?: string;
  duration: string;
  heading: string;
  intro: string[];
  sectionTitle?: string;
  highlights: string[];
  includedTitle: string;
  included: string[];
  idealFor: string;
  idealForDetails?: {
    intro: string;
    booking: string;
    ageGuidance: string;
  };
  categories: string[];
  waitingList?: boolean;
};

export const potteryClasses: PotteryClass[] = [
  {
    slug: "private-pottery-class",
    title: "Private Pottery Experience (Single Session)",
    cardDescription: "A 2.5-hour 1:1 private session completely tailored to your skill level. Perfect for any level, you’ll receive dedicated guidance on either throwing or hand-building. We’ll focus on what you want to learn, and your finished pieces will be glazed and fired after class.",
    image: "/media/2026/02/20230503_111500.webp",
    imageAlt: "A private pottery lesson at the wheel",
    priceLabel: "Price per person",
    price: "£100",
    duration: "1 Session x 2.5 Hours",
    heading: "The Private Pottery Session",
    intro: [
      "Enjoy a hands-on, 2.5-hour pottery experience, with the studio and my full attention entirely to yourself. This private one-to-one session is tailored to you, whether you’re trying pottery for the first time or looking to develop your existing skills.",
      "Choose between the rhythmic focus of wheel-throwing or the tactile nature of hand-building. I’ll guide you through the process at your own pace, helping you explore techniques and create your own unique pieces in a calm and welcoming studio environment.",
    ],
    highlights: [],
    includedTitle: "What’s Included",
    included: [
      "Welcome and studio tour with tea, coffee and biscuits.",
      "A technical demonstration followed by supervised practice.",
      "Creation of 2–3 pieces in your chosen method.",
      "Professional trimming, glazing and kiln firing by Anat. Pieces are ready for collection in approximately four weeks.",
      "All Materials included: All clay, underglazes, studio glazes and firing costs.",
    ],
    idealFor: "",
    idealForDetails: {
      intro: "This experience is designed for beginners, those looking to refine their pottery technique, or anyone seeking a creative day out and a unique gift experience.",
      booking: "Can be booked for Individuals, Couples, or Small Groups of up to 4 people.",
      ageGuidance: "Wheel-throwing sessions use professional pottery wheels and are therefore recommended for adults and older teens (14+).",
    },
    categories: ["1:1", "Single session", "Throwing", "Hand-building"],
  },
  {
    slug: "pottery-for-2",
    title: "Pottery for 2",
    cardDescription: "A 2.5-hour private pottery session for two, designed for all skill levels. Learn the basics of wheel-throwing side by side, with hands-on guidance throughout. Your finished pieces will be glazed and fired after class.",
    image: "/media/2026/02/pottery42Lesson.webp",
    imageAlt: "Two people learning pottery together",
    priceLabel: "Price for two",
    originalPrice: "£200",
    price: "£180",
    duration: "1 Session x 2.5 Hours",
    heading: "The Pottery Session for Two",
    intro: [
      "A hands-on tailored 2.5-hour immersion into the art of ceramics designed especially for two. Perfect for couples, friends, or family members who want to share a creative experience side-by-side. Whether discovering the wheel for the first time or refining existing skills, the studio provides a calm, inspiring space to create together.",
    ],
    highlights: [],
    includedTitle: "What’s Included",
    included: [
      "Welcome and studio tour with tea, coffee, and biscuits.",
      "A technical demonstration followed by supervised practice on the potter’s wheel.",
      "Creation of 1–2 pieces each focusing on foundational forms like bowls or cups.",
      "Full Finishing: Professional trimming, glazing, and kiln firing.",
      "All Materials included: clay, underglazes, studio glazes, and all firing costs.",
    ],
    idealFor: "This experience is designed for pairs of adults looking for a creative date, a meaningful shared activity, or a unique gift experience.",
    categories: ["For two", "Single session", "Throwing"],
  },
  {
    slug: "a-throwing-journey-for-adults",
    title: "Throwing Journey for Adults (4-Week Private Course)",
    cardDescription: "A deeper dive into the full process of wheel throwing, trimming, decorating, and glazing. Four sessions of 2.5 hours each, with personal 1:1 guidance throughout.",
    image: "/media/2026/02/wheel-throwing-course.webp",
    imageAlt: "Hands centering porcelain on a pottery wheel",
    priceLabel: "Price per person",
    originalPrice: "£400",
    price: "£320",
    duration: "4 Sessions x 2.5 Hours",
    heading: "A Throwing Journey for Adults",
    intro: [
      "This one-to-one four-week course is a complete introduction to the world of pottery. You will move from raw clay to finished pieces while learning every step of the process on the potter’s wheel. With private, individual instruction, you can develop your skills at your own pace in a calm studio environment.",
    ],
    sectionTitle: "The Course Syllabus",
    highlights: [
      "Session 1 — Foundations & Throwing: An introduction to clay preparation and wedging, followed by foundational wheel-throwing techniques including centering, pulling walls, and shaping initial forms.",
      "Session 2 — Trimming & Refined Form: Refining leather-hard pieces by trimming foot rings and exploring surface manipulation through carving, texture, or the attachment of handles.",
      "Session 3 — Surface Decoration: An exploration of ceramic underglazes and specialized painting techniques to personalize each piece.",
      "Session 4 — Glazing & Finishing: Technical instruction on glaze application to prepare bisque-fired work for the final kiln firing.",
    ],
    includedTitle: "What’s Included",
    included: [
      "Private 1:1 Tuition: 10 hours of individual teaching across four dedicated sessions.",
      "Full Materials & Firing: All clay, underglazes, premium studio glazes, and professional kiln firings included.",
      "Hospitality: Tea, coffee, and biscuits provided during every session.",
    ],
    idealFor: "This experience is designed for adults seeking a fuller creative journey, providing the time and guidance needed to master the complete pottery cycle from start to finish.",
    categories: ["1:1", "Four weeks", "Throwing"],
  },
  {
    slug: "4-week-hand-building-basics-adults",
    title: "Hand-Building Journey (4-Week Private Course)",
    cardDescription: "A four-week private course moving from raw clay to finished pottery. Master the fundamentals of pinching, coiling, and slab-building to create, decorate and glaze your own unique collection – guided at your own pace.",
    image: "/media/2026/02/handbuilding-course.webp",
    imageAlt: "Hands shaping clay using hand-building techniques",
    priceLabel: "Price per person",
    originalPrice: "£400",
    price: "£320",
    duration: "4 Sessions x 2.5 Hours",
    heading: "A Hand-Building Journey",
    intro: [
      "This one-to-one four-week course is a relaxed introduction to the art of shaping clay by hand. You will learn the core techniques of pinching, coiling, and slab-building to create your own unique vessels. This course offers the time to move through the entire process, from raw clay to a final glazed collection, in a calm and creative environment.",
    ],
    sectionTitle: "The Course Syllabus",
    highlights: [
      "Session 1 — Pinching & Coiling: Learn the foundational ways of making pottery. We will focus on tactile techniques to create organic, functional forms.",
      "Session 2 — Slab Building: Learn how to roll and join flat sheets of clay to build more structured or geometric shapes.",
      "Session 3 — Refinement & Underglaze: Refine your pieces and add decorative details. You will use underglazes to add colour and personal designs to your work.",
      "Session 4 — Glazing & Finishing: Learn the technical side of glazing your bisque-fired pieces. You will apply the final glazes to your collection, preparing them for the final kiln firing.",
    ],
    includedTitle: "What’s Included",
    included: [
      "Private 1:1 Tuition: 10 total hours of individual teaching over four sessions.",
      "Full Materials & Firing: High-quality clay, a variety of underglazes and glazes, and all kiln firings included.",
      "Hospitality: Tea, coffee, and biscuits during every lesson.",
    ],
    idealFor: "This experience is designed for adults seeking a fuller creative journey, providing the time and guidance needed to master handmade pottery from start to finish.",
    categories: ["1:1", "Four weeks", "Hand-building"],
  },
  {
    slug: "gift-vouchers",
    title: "Gift Vouchers",
    cardDescription: "Give the gift of creativity. Gift vouchers are the perfect present for friends or loved ones, redeemable against any private tuition, course, or handmade ceramics from the studio.",
    image: "/media/2026/02/gift-voucher-for-website.webp",
    imageAlt: "Anat Handmade Pottery gift voucher",
    priceLabel: "Voucher value",
    price: "Starting From £50",
    duration: "Valid for 12 Months",
    heading: "The Perfect Creative Gift",
    intro: [
      "Treat someone special to a hands-on experience in the studio. A pottery gift voucher is an invitation to slow down, get creative, and explore the art of clay. Whether they are a complete beginner or an experienced potter, a voucher gives them the freedom to choose the class or ceramic piece that suits them best.",
    ],
    sectionTitle: "How It Works",
    highlights: [
      "Vouchers are flexible and can be purchased for a specific class (like a Private Session or a 4-Week Course) or for a set monetary value.",
      "Choose your value: Purchase a voucher for a specific class or a custom amount.",
      "Receive your voucher: You will receive a beautiful digital voucher via email to print at home or forward to the recipient.",
      "Book easily: The recipient simply contacts me to book their session at a time that works for them.",
    ],
    includedTitle: "What Can It Be Used For?",
    included: [
      "Private Tuition: One-to-one wheel throwing lessons.",
      "Couples Sessions: The popular Pottery for 2 experience.",
      "Courses: Towards the 4-week Throwing/Handbuilding Journey course.",
      "Shop Purchases: Can be used to purchase finished handmade ceramics directly from the studio (not eligible on the Etsy shop).",
    ],
    idealFor: "A unique and thoughtful gift for birthdays, anniversaries, weddings, or simply to encourage a creative friend to try something new.",
    categories: ["Gift", "Flexible"],
  },
  {
    slug: "friday-morning-guided-project-sessions",
    title: "Friday Morning Class - Guided Project Sessions",
    cardDescription: "A relaxed weekly pottery class for up to four people. Bring your own project ideas and receive practical guidance as you develop your skills in a small, supportive studio group.",
    image: "/media/2026/02/weekly-class-2.webp",
    imageAlt: "Pottery students working on guided projects in the studio",
    priceLabel: "Price per session",
    price: "£60",
    duration: "Every Friday, 10:00am–12:30pm",
    heading: "Friday Morning Guided Project Sessions",
    intro: [
      "These weekly Friday morning sessions are for people who would like regular time in the studio to make, learn and develop their own pottery projects with Anat’s guidance.",
      "The group is kept to a maximum of four people, allowing plenty of individual support while sharing a relaxed and creative studio atmosphere.",
    ],
    sectionTitle: "How It Works",
    highlights: [
      "Classes run every Friday morning from 10:00am to 12:30pm.",
      "Each session costs £60 and is paid in advance according to the number of Fridays in that month.",
      "If you miss a session, a make-up session will be arranged.",
      "Places are limited to four people per group.",
    ],
    includedTitle: "What’s Included",
    included: [
      "Guidance tailored to your individual pottery project and experience level.",
      "A small, supportive group setting with a maximum of four people.",
      "Studio time every Friday morning from 10:00am to 12:30pm.",
    ],
    idealFor: "Adults who would enjoy an ongoing, guided pottery practice and the encouragement of a small creative group.",
    categories: ["Group", "Ongoing sessions"],
    waitingList: true,
  },
];

export const classBySlug = new Map(potteryClasses.map((item) => [item.slug, item]));
