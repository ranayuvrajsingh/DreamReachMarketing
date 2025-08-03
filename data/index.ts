// export const navItems = [
//   { name: "About", link: "#about" },
//   { name: "Projects", link: "#projects" },
//   { name: "Testimonials", link: "#testimonials" },
//   { name: "Contact", link: "#contact" },
// ];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" }, // ✅ added
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];



export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We are very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack",
    description: "We constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a Online Business DM Us?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Loom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Loom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: [
      "/re.svg",
      "/nextjs.svg",
      "/tail.svg",
      "/ts.svg",
      "/stream.svg",
      "/c.svg",
    ],
    link: "https://loomcall.vercel.app/",
  },
  {
    id: 2,
    title: "Modern Stellar Styles",
    des: "Stellar Styles is a sleek web app with advanced search, secure payments, and a robust admin dashboard for managing inventory and orders. Full-stack for optimal performance and scalability",
    img: "/Ecoom.jpg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      "/nextjs.svg",
    ],
    link: "https://stellarstyles.vercel.app/",
  },
  {
    id: 3,
    title: "CityScope",
    des: "Cityscope is a web app offering tours, travel insights, city glimpses of Rajasthan, and daily news and articles by city. It features secure payments and scalability for optimal performance.",
    img: "CityScopeCrop.png",
    iconLists: [
      "/re.svg",
      "/nextjs.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/c.svg",
    ],
    link: "https://www.cityscope.media/",
  },
  {
    id: 4,
    title: "IShowSpeed Modern Reactjs",
    des: "iShowSpeed is a responsive web app showcasing car models. It offers a sleek, user-friendly design for browsing and purchasing vehicles, with secure payments and scalability.",
    img: "/iShowSpeed.png",
    iconLists: [
      "/nextjs.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/gsap.svg",
    ],
    link: "https://ishowspeed-ten.vercel.app/?limit=20",
  },
];

export const testimonials = [
  {
    quote:
      "DreamReach Marketing transformed our outdated website into a sleek, responsive platform that our customers love. Their attention to design detail and backend efficiency was commendable.",
    name: "Amit Khurana",
    title: "Co-founder, Vistara AgroTech Pvt. Ltd.",
  },
  {
    quote:
      "The team at DreamReach has an amazing grasp of digital branding. They understood our vision right from the start and executed it with clarity and creativity. Truly impressed by their professionalism.",
    name: "Radhika Sinha",
    title: "Founder & Creative Head, Kalakriti Studio",
  },
  {
    quote:
      "We approached DreamReach for SEO and performance optimization, and within weeks, we saw measurable improvements. Their strategy and communication style are top-notch.",
    name: "Saurabh Mehta",
    title: "Managing Director, FreshBasket Organics",
  },
  {
    quote:
      "Working with DreamReach was seamless from the first conversation. Their team is proactive, technically sound, and always open to feedback. Our internal dashboard has become way more efficient.",
    name: "Neha Iyer",
    title: "Operations Lead, TranquilStays Hospitality",
  },
  {
    quote:
      "What stood out most was their genuine passion for each project. From UX design to backend integration, DreamReach delivered with precision and creativity. Highly recommended.",
    name: "Aniket Sharma",
    title: "Product Manager, Prolance EdTech",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Experiences for Clients",
    desc: "As a team at DreamReach Marketing, we craft interactive and high-performance websites using React.js to meet diverse client needs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Scalable Backend Solutions",
    desc: "We architect robust Java and Spring Boot backends, powering reliable digital infrastructures across various industries.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Client-Centric Project Delivery",
    desc: "From strategy to deployment, our team leads full-stack project execution with a focus on business outcomes and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Creative Frontend Innovation",
    desc: "DreamReach’s frontend team designs intuitive, mobile-first UIs that reflect each brand’s personality and vision.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Search Engine Optimization (SEO)",
    desc: "We implement tailored SEO strategies to improve search engine rankings and drive qualified traffic to client websites.",
    className: "md:col-span-2",
    thumbnail: "/exp5.svg",
  },
  {
    id: 6,
    title: "UI/UX Design & Branding",
    desc: "Our designers build brand-focused experiences—from logo to layout—ensuring seamless and memorable user journeys.",
    className: "md:col-span-2",
    thumbnail: "/exp6.svg",
  },
  {
    id: 7,
    title: "Mobile & Progressive Web Apps",
    desc: "We develop fast, reliable, and engaging mobile apps and PWAs tailored to scale across platforms and devices.",
    className: "md:col-span-2",
    thumbnail: "/exp7.svg",
  },
  {
    id: 8,
    title: "CMS & Custom Dashboards",
    desc: "From WordPress to headless CMS to custom admin dashboards, we build systems that empower content creators and teams.",
    className: "md:col-span-2",
    thumbnail: "/exp8.svg",
  },
  {
    id: 9,
    title: "Cloud & DevOps Engineering",
    desc: "We deploy scalable cloud architectures with modern CI/CD pipelines, ensuring high uptime and maintainability.",
    className: "md:col-span-2",
    thumbnail: "/exp9.svg",
  },
  {
    id: 10,
    title: "Maintenance & Security",
    desc: "We provide ongoing website support, performance monitoring, and proactive security audits to keep digital platforms safe and sound.",
    className: "md:col-span-2",
    thumbnail: "/exp10.svg",
  },
  {
  id: 11,
  title: "Political Survey",
  desc: "We conduct in-depth political surveys to provide data-driven insights for parties and candidates, supporting effective decision-making and campaign strategy.",
  className: "md:col-span-1",
  thumbnail: "/exp11.svg", // replace with actual image if available
}

];


export const socialMedia = [
  {
    id: 1,
    img: "/insta.svg",
    link: "https://www.instagram.com/dreamreachmrktng?igsh=Y3ptdmk4YWIzaWM3",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "",
  // },
  // {
  //   id: 3,
  //   img: "/link.svg",
  //   link: "https://www.linkedin.com/in/ranayuvrajsingh/",
  // },
  // {
  //   id: 4,
  //   img: "/resume.svg",
  //   link: "https://drive.google.com/file/d/1pWfdNBRzGAYbSYUj1YatAmRMbwEc_IDS/view?usp=sharing",
  // },
  {
    id: 5,
    img: "/whatsapp.svg",
    link: "https://wa.me/918445847591?text=Hi%20Adshila%2C%20I%20am%20interested%20in%20your%20services. How can we collaborate?",
  },
];
