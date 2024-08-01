import logoSvg from "../Asset/images/download.svg";
import courseraAp from "../Asset/images/courserap.png";
import Herobanner from "../Asset/images/Herobanner.png";
import img1 from "../Asset/images/img1.png";
import img2 from "../Asset/images/img2.png";
import img3 from "../Asset/images/img3.png";
import img4 from "../Asset/images/img4.png";
import img5 from "../Asset/images/img5.png";
import img6 from "../Asset/images/img6.jpeg";
import img7 from "../Asset/images/img7.jpeg";
import img8 from "../Asset/images/img8.png";
import img9 from "../Asset/images/img9.png";
import img10 from "../Asset/images/img10.png";
import img11 from "../Asset/images/img11.png";
import img12 from "../Asset/images/img12.png";
import img13 from "../Asset/images/img13.png";
import img14 from "../Asset/images/img14.png";
import img15 from "../Asset/images/img15.png";
import img16 from "../Asset/images/img16.png";
import img17 from "../Asset/images/img17.png";
import img18 from "../Asset/images/img18.png";
import img19 from "../Asset/images/img19.jpeg";
import img20 from "../Asset/images/img20.png";
import img21 from "../Asset/images/img21.jpeg";
import Courseslogo from "../Asset/images/courseraplus-logo.png";

export const navbar_json = {
  tab: [
    "For Individuals",
    "For Business",
    "For Universities",
    "For Government",
  ],
};

export const navbar2_json = {
  brand: {
    href: "#home",
    logoSrc: logoSvg,
    altText: "Coursera",
  },
  dropdown: {
    title: "Explore",
    items: [
      { href: "#take-courses", text: "Take free courses" },
      { href: "#earn-degree", text: "Earn A degree" },
      { href: "#earn-certificate", text: "Earn a Certificate" },
      { href: "#find-career", text: "Find Your New Career" },
    ],
  },
  links: [
    { href: "#online-degrees", text: "Online Degrees" },
    { href: "#find-career", text: "Find Your New Career" },
    { href: "#login", text: "Login" },
  ],
  button: {
    variant: "outline-primary",
    text: "Join for free",
  },
};

export const heroComponent = {
  hero: {
    courseraplus: {
      src: courseraAp,
      altText: "Coursera Logo",
    },
    herobanner: {
      src: Herobanner,
      altText: "Hero Banner",
    },
    heading:
      "Unlimited access to 7,000+ world-class courses, hands-on projects, and job-ready certificate programs all included in your subscription.",
    button: {
      text: "Start 7-Day Free Trial",
      className: "btn btn-primary hero-button mt-3",
    },
    subtext: {
      text: "or $33329/year with 14-day money-back guarantee",
      className: "hero-subtext mt-3 ms-0",
    },
  },
};

export const heroSubSection = {
  heroSubSection: {
    heading:
      "Learn from 325+ leading universities and companies with Coursera Plus",
    images: [
      {
        src: img1,
        alt: "University of Illinois at Urbana-Champaign",
      },
      {
        src: img2,
        alt: "Duke University",
      },
      {
        src: img3,
        alt: "Google",
      },
      {
        src: img4,
        alt: "University of Michigan",
      },
      {
        src: img5,
        alt: "IBM",
      },
      {
        src: img6,
        alt: "Vanderbilt",
      },
      {
        src: img7,
        alt: "Johns Hopkins University",
      },
    ],
  },
};

export const courSeraPlus = {
  courseraPlus: {
    heading: "Invest in your career with Coursera Plus",
    description:
      "Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top instructors from leading universities and companies.",
    features: [
      {
        src: img8,
        alt: "Learn anything",
        title: "Learn anything",
        description:
          "Explore any interest or trending topic, take prerequisites, and advance your skills",
      },
      {
        src: img9,
        alt: "Save money",
        title: "Save money",
        description:
          "Spend less money on your learning if you plan to take multiple courses this year",
      },
      {
        src: img10,
        alt: "Flexible learning",
        title: "Flexible learning",
        description:
          "Learn at your own pace, move between multiple courses, or switch to a different course",
      },
      {
        src: img11,
        alt: "Unlimited certificates",
        title: "Unlimited certificates",
        description:
          "Earn a certificate for every learning program that you complete at no additional cost",
      },
    ],
  },
};

export const productCardCollection = {
  productCardCollection: {
    heading: "See what you can learn with Coursera Plus",
    cards: [
      {
        title: "Google AI Essentials",
        imgSrc: img12,
        altText: "Google AI Essentials",
        link: "https://www.youtube.com/@WebXLearner",
        level: "Beginner",
        type: "Course",
      },
      {
        title: "Python For Essential",
        imgSrc: img13,
        altText: "Python For Essential",
        link: "https://www.youtube.com/@WebXLearner",
        level: "Beginner",
        type: "Specialization",
      },
      {
        title: "Prompt Engineering",
        imgSrc: img14,
        altText: "Prompt Engineering",
        link: "https://www.youtube.com/@WebXLearner",
        level: "Beginner",
        type: "To Expert",
      },
      {
        title: "IBM Data Science",
        imgSrc: img15,
        altText: "IBM Data Science",
        link: "https://www.youtube.com/@WebXLearner",
        level: "Beginner",
        type: "Professional Certificate",
      },
      {
        title: "Navigation Generated AI",
        imgSrc: img16,
        altText: "Navigation Generated AI",
        link: "https://www.youtube.com/@WebXLearner",
        level: "Beginner",
        type: "To Expert",
      },
      {
        title: "Excel Skill For Business",
        imgSrc: img17,
        altText: "Excel Skill For Business",
        link: "https://www.youtube.com/@WebXLearner",
        level: "Beginner",
        type: "Friendly",
      },
      {
        title: "Google IT Support",
        imgSrc: img18,
        altText: "Google IT Support",
        link: "https://www.youtube.com/@WebXLearner",
        level: "Beginner",
        type: "Professional Certificate",
      },
    ],
    button: {
      text: "Show more",
    },
  },
};

export const searchComponent = {
  searchComponent: {
    searchTitle: "Search the 7,000+ courses in Coursera Plus",
    inputPlaceholder: "e.g. Machine Learning",
    popularDomainsTitle: "Popular",
    domains: [
      "Business",
      "Computer Science",
      "Data Science",
      "Health",
      "Information Technology",
      "Arts and Humanities",
    ],
  },
};

export const testimonials = {
  testimonials: {
    heading: "Join thousands of Coursera Plus learners achieving their goals",
    description:
      "77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more.",
    cards: [
      {
        imgSrc: img19,
        altText: "Learner Abigail P.",
        quote:
          "I have a full-time job and 3 kids. I needed the flexibility offered by Coursera Plus in order to achieve my goals. I learned business statistics and analysis to apply to my job, but my Coursera Plus subscription motivated me to keep learning. I have a new career goal to pivot into data analysis and data science. I'm learning Python now!",
        author: "Abigail P. | United States",
      },
      {
        imgSrc: img20,
        altText: "Learner Shi Jie F.",
        quote:
          "Coursera Plus keeps me motivated to learn. With each course, I'm getting more value out of my subscription. I can focus on life sciences—my main specialty—but also pursue other interests like society and religion. I can access almost anything with Coursera Plus!",
        author: "Shi Jie F. | Singapore",
      },
      {
        imgSrc: img21,
        altText: "Learner Inés K.",
        quote:
          "I really appreciate the flexibility I get with Coursera Plus. I can try any course and switch to another one for no additional cost. This motivates me to learn even more—at one point I was taking three courses at the same time!",
        author: "Inés K. | France",
      },
    ],
    source: "Source: Coursera Learner Outcomes Survey 2023",
  },
};

export const priceComparison = {
  heading: "Choose the plan that's right for you or your team's goals",
  buttons: [
    {
      id: "individual",
      label: "For Individuals",
    },
    {
      id: "team",
      label: "For Teams",
    },
  ],
};

export const pricingPlans = {
  
    "plans": [
      {
        "title": "Single learning program",
        "description": "Learn a single topic or skill and earn a credential",
        "priceRange": "₹4,093 – ₹6,599",
        "pricePeriod": "/month",
        "features": [
          "Access all courses within the learning program",
          "Earn a certificate upon completion"
        ]
      },
      {
        "title": "Coursera Plus Monthly",
        "description": "Complete multiple courses and earn credentials in the short term",
        "price": "₹4,928",
        "pricePeriod": "/month",
        "highlight": "Most popular",
        "features": [
          "Access 7,000+ courses and Specializations from 170+ leading companies and universities",
          "Earn unlimited certificates",
          "Learn job-relevant skills and tools with 1,000+ applied projects and hands-on labs from industry experts",
          "Choose from more than 15 Professional Certificate programs from industry leaders like Google, Facebook, and more"
        ],
        "cta": {
          "text": "Start 7-day free trial",
          "color": "primary"
        },
        "cancelPolicy": "Cancel anytime"
      },
      {
        "title": "Coursera Plus Annual",
        "description": "Combine flexibility and savings with long-term learning goals",
        "price": "₹33,329/year",
        "highlight": "Everything included in the monthly plan, plus:",
        "features": [
          "Save when you pay up front for the year",
          "Enjoy maximum flexibility to achieve work/life balance and learn at your own pace"
        ],
        "cta": {
          "text": "Try Coursera Plus Annual",
          "color": "secondary"
        },
        "moneyBackGuarantee": "14-day money-back guarantee"
      }
    ]
  }

  export const teamPricing = {
    
      "mainContainerClass": "mainConatinerteam d-flex",
      "contentTeamClass": "content-team w-50",
      "heading": {
        "text": "Accelerate team performance",
        "class": "fs-2"
      },
      "description": {
        "text": "Help employees master new skills and reach their goals with access to world-class learning programs from Coursera for Teams.",
        "class": "text-center w-75 fs-5"
      },
      "card": {
        "containerClass": "col-md-4",
        "cardClass": "card seconddiv border border-primary text-center w-100",
        "cardBodyClass": "card-body",
        "title": {
          "text": "Courses For Team",
          "class": "card-title mt-3 fs-3"
        },
        "subtitle": "For 5-125 Users",
        "pricing": {
          "amount": "$319",
          "billingPeriod": "Year",
          "perUser": "Per user for 12 months"
        },
        "button": {
          "text": "Get Started",
          "class": "btn btn-primary w-75 ms-2 mt-2"
        },
        "guarantee": "14-day money-back guarantee",
        "features": [
          "Upskill 5 to 125 employees",
          "Unlimited access to 8,500 learning opportunities",
          "Program setup and launch tools",
          "Analytics and benchmarking dashboard"
        ],
        "icon": {
          "ariaHidden": true,
          "fill": "none",
          "focusable": false,
          "height": 16,
          "viewBox": "0 0 16 16",
          "width": 16,
          "class": ""
        }
      }
    }
    
  
  


export const faqComponent = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      id: 1,
      question:
        "Can I try Coursera Plus first, to make sure it's right for me?",
      answer:
        "Yes! We have two options, depending on which payment plan you choose...",
      isOpen: false,
    },
    {
      id: 2,
      question: "What is Included in Coursera Plus?",
      answer:
        "With your Coursera Plus subscription, you get unlimited access...",
      isOpen: false,
    },
    {
      id: 3,
      question: "Will I save Money with Coursera Plus?",
      answer: "Yes. If you're taking more than 1 course regularly...",
      isOpen: false,
    },
    {
      id: 4,
      question: "How can I cancel my Coursera Plus subscription?",
      answer:
        "You can cancel your Coursera Plus subscription anytime through...",
      isOpen: false,
    },
    {
      id: 5,
      question: "Are there any exclusions in Coursera Plus?",
      answer:
        "Yes, some courses and programs are excluded from Coursera Plus...",
      isOpen: false,
    },
    {
      id: 6,
      question: "What happens if I complete a course during the trial period?",
      answer:
        "If you complete a course during the trial period and then decide to...",
      isOpen: false,
    },
    {
      id: 7,
      question: "Is there a limit on the number of courses I can enroll in?",
      answer:
        "No, with Coursera Plus, you can enroll in as many included courses...",
      isOpen: false,
    },
  ],
};


export const subsCription = {
  
    "logoSrc": Courseslogo,
    "description": "Unlimited access to 7,000+ world-class courses, hands-on projects, and job-ready certificate programs—all included in your subscription",
    "price": "₹4,928/month, cancel anytime",
    "trialButtonText": "Start 7-day Free Trial",
    "annualPrice": "or ₹33,329/year with 14-day money-back guarantee"
  
  
}

export const footer = {
  
    "sections": [
      {
        "title": "Get Started with AI",
        "links": [
          "DLAI AI For Everyone Course",
          "DLAI Deep Learning Specialization",
          "DLAI GenAI with LLMs Course",
          "Google AI Essentials",
          "Google Cloud Introduction to Generative AI Course",
          "IBM AI Product Manager Professional Certificate",
          "Stanford Machine Learning Specialization",
          "Vanderbilt Prompt Engineering for ChatGPT Course",
          "All Artificial Intelligence Courses"
        ]
      },
      {
        "title": "Popular Career Certificates",
        "links": [
          "Google Cybersecurity Professional Certificate",
          "Google Data Analytics Professional Certificate",
          "Google Digital Marketing Professional Certificate",
          "Google Project Management Professional Certificate",
          "Google UX Design Professional Certificate",
          "IBM Data Science Professional Certificate",
          "Microsoft Power BI Data Analyst Professional Certificate",
          "All Career Certificates"
        ]
      },
      {
        "title": "Popular Subjects",
        "links": [
          "Cybersecurity",
          "Data Analytics",
          "Digital Marketing",
          "Generative AI",
          "Project Management",
          "Python",
          "All Courses"
        ]
      },
      {
        "title": "Links",
        "links": [
          "Popular Resources",
          "How to Become a Data Analyst",
          "How to Get a PMP Certification",
          "Popular Cybersecurity Certifications",
          "Popular Data Analytics Certifications",
          "Popular IT Certifications",
          "Popular Machine Learning Certifications",
          "Popular SQL Certifications",
          "Career Insights & Advice Hub"
        ]
      }
    ],
    "socialLinks": [
      { "icon": "faFacebookF", "color": "#3b5998", "href": "#!" },
      { "icon": "faTwitter", "color": "#55acee", "href": "#!" },
      { "icon": "faGoogle", "color": "#dd4b39", "href": "#!" },
      { "icon": "faInstagram", "color": "#ac2bac", "href": "#!" },
      { "icon": "faLinkedinIn", "color": "#0082ca", "href": "#!" },
      { "icon": "faGithub", "color": "#333333", "href": "#!" }
    ],
    "footerText": "© 2024 Coursera Inc. All rights reserved",
    "footerLink": { "text": "All rights reserved", "href": "www.google.com" }
  }
  

