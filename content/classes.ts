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
  categories: string[];
};

export const potteryClasses: PotteryClass[] = [
  {
    slug: "private-pottery-class",
    title: "Private Pottery Experience (Single Session)",
    cardDescription: "A 2.5-hour private session tailored to your level, with dedicated guidance in wheel-throwing or hand-building.",
    image: "/media/2026/02/20230503_111500.webp",
    imageAlt: "A private pottery lesson at the wheel",
    priceLabel: "Price per person",
    price: "£100",
    duration: "1 session × 2.5 hours",
    heading: "The Private Pottery Session",
    intro: [
      "Enjoy a hands-on, 2.5-hour immersion into the art of ceramics. Whether you are looking for dedicated one-to-one tuition or a creative date for two, this experience is flexible and beginner-friendly.",
      "Choose between the rhythmic focus of wheel-throwing or the tactile nature of hand-building. You will receive professional guidance in a calm, creative studio environment.",
    ],
    highlights: [],
    includedTitle: "What’s Included",
    included: [
      "Welcome and studio tour with tea, coffee and biscuits.",
      "A technical demonstration followed by supervised practice.",
      "Creation of 2–3 pieces in your chosen method.",
      "Professional trimming, glazing and kiln firing by Anat. Pieces are ready for collection in approximately four weeks.",
      "All clay, underglazes, studio glazes and firing costs.",
    ],
    idealFor: "Adults at beginner level, anyone refining their technique, or those looking for a creative day out. Flexible booking is available for individuals, couples or small groups of up to four. Wheel sessions are recommended for adults and older teens aged 14+.",
    categories: ["1:1", "Single session", "Throwing", "Hand-building"],
  },
  {
    slug: "pottery-for-2",
    title: "Pottery for 2",
    cardDescription: "A private pottery experience for two. Learn the basics of wheel-throwing side by side and create together.",
    image: "/media/2026/02/pottery42Lesson.webp",
    imageAlt: "Two people learning pottery together",
    priceLabel: "Price for two",
    originalPrice: "£200",
    price: "£180",
    duration: "1 session × 2.5 hours",
    heading: "The Pottery Session for Two",
    intro: [
      "A tailored 2.5-hour immersion into ceramics designed especially for two. Perfect for couples, friends or family members who want to share a creative experience side by side.",
      "Whether discovering the wheel for the first time or refining existing skills, the studio provides a calm, inspiring space to create together.",
    ],
    highlights: [],
    includedTitle: "What’s Included",
    included: [
      "Welcome and studio tour with tea, coffee and biscuits.",
      "A technical demonstration followed by supervised practice on the potter’s wheel.",
      "Creation of 1–2 pieces each, focusing on foundational forms such as bowls or cups.",
      "Professional trimming, glazing and kiln firing.",
      "All clay, underglazes, studio glazes and firing costs.",
    ],
    idealFor: "Pairs of adults looking for a creative date, a meaningful shared activity or a unique gift experience.",
    categories: ["For two", "Single session", "Throwing"],
  },
  {
    slug: "a-throwing-journey-for-adults",
    title: "Throwing Journey for Adults (4-Week Private Course)",
    cardDescription: "A deeper journey through throwing, trimming, decoration and glazing, with private guidance throughout.",
    image: "/media/2026/02/wheel-throwing-course.webp",
    imageAlt: "Hands centering porcelain on a pottery wheel",
    priceLabel: "Price per person",
    originalPrice: "£400",
    price: "£320",
    duration: "4 sessions × 2.5 hours",
    heading: "A Throwing Journey for Adults",
    intro: [
      "This one-to-one four-week course is a complete introduction to pottery. Move from raw clay to finished pieces while learning every step of the process on the potter’s wheel, at your own pace.",
    ],
    sectionTitle: "The Course Syllabus",
    highlights: [
      "Session 1 — Foundations & Throwing: clay preparation, wedging, centering, pulling walls and shaping initial forms.",
      "Session 2 — Trimming & Refined Form: foot rings, surface manipulation, carving, texture and handles.",
      "Session 3 — Surface Decoration: underglazes and painting techniques to personalise each piece.",
      "Session 4 — Glazing & Finishing: glaze application and preparation for the final kiln firing.",
    ],
    includedTitle: "What’s Included",
    included: [
      "Ten hours of private one-to-one tuition across four sessions.",
      "All clay, underglazes, premium studio glazes and professional kiln firings.",
      "Tea, coffee and biscuits during every session.",
    ],
    idealFor: "Adults seeking a fuller creative journey and the time and guidance to master the complete pottery cycle from start to finish.",
    categories: ["1:1", "Four weeks", "Throwing"],
  },
  {
    slug: "4-week-hand-building-basics-adults",
    title: "Hand-Building Journey (4-Week Private Course)",
    cardDescription: "Learn pinching, coiling and slab-building, then decorate and glaze a collection of your own pieces.",
    image: "/media/2026/02/handbuilding-course.webp",
    imageAlt: "Hands shaping clay using hand-building techniques",
    priceLabel: "Price per person",
    originalPrice: "£400",
    price: "£320",
    duration: "4 sessions × 2.5 hours",
    heading: "A Hand-Building Journey",
    intro: [
      "This one-to-one four-week course is a relaxed introduction to shaping clay by hand. Learn pinching, coiling and slab-building as you move from raw clay to a final glazed collection.",
    ],
    sectionTitle: "The Course Syllabus",
    highlights: [
      "Session 1 — Pinching & Coiling: foundational ways of making pottery and creating organic, functional forms.",
      "Session 2 — Slab Building: roll and join flat sheets of clay to build structured or geometric shapes.",
      "Session 3 — Refinement & Underglaze: refine your pieces and add colour and personal designs.",
      "Session 4 — Glazing & Finishing: apply final glazes and prepare your collection for kiln firing.",
    ],
    includedTitle: "What’s Included",
    included: [
      "Ten hours of private one-to-one tuition across four sessions.",
      "High-quality clay, underglazes, studio glazes and all kiln firings.",
      "Tea, coffee and biscuits during every session.",
    ],
    idealFor: "Adults seeking a fuller creative journey and the time and guidance to master handmade pottery from start to finish.",
    categories: ["1:1", "Four weeks", "Hand-building"],
  },
  {
    slug: "gift-vouchers",
    title: "Gift Vouchers",
    cardDescription: "Give the gift of creativity, redeemable against private tuition, courses or handmade ceramics from the studio.",
    image: "/media/2026/02/gift-voucher-for-website.webp",
    imageAlt: "Anat Handmade Pottery gift voucher",
    priceLabel: "Voucher value",
    price: "From £50",
    duration: "Valid for 12 months",
    heading: "The Perfect Creative Gift",
    intro: [
      "Treat someone special to a hands-on studio experience. A pottery gift voucher is an invitation to slow down, get creative and explore the art of clay.",
    ],
    sectionTitle: "How It Works",
    highlights: [
      "Choose a voucher for a specific class or a custom monetary value.",
      "Receive a beautiful digital voucher by email to print or forward to the recipient.",
      "The recipient contacts Anat to book a session at a time that works for them.",
    ],
    includedTitle: "What Can It Be Used For?",
    included: [
      "Private one-to-one wheel-throwing tuition.",
      "The popular Pottery for 2 experience.",
      "A four-week throwing or hand-building course.",
      "Finished handmade ceramics purchased directly from the studio.",
    ],
    idealFor: "Birthdays, anniversaries, weddings or simply encouraging a creative friend to try something new.",
    categories: ["Gift", "Flexible"],
  },
];

export const classBySlug = new Map(potteryClasses.map((item) => [item.slug, item]));
