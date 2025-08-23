import { Link,projectInfo } from "./types";




export const links: Link[]=[
    {
        nameEng: "Home",
        hash: "#"
    },
    {
        nameEng: "About",
        hash: "#about"
    },
    {
        nameEng: "Projects",
        hash: "#projects"
    },
    {
        nameEng: "Skills",
        hash: "#skills"
    },
    {
        nameEng: "Contact",
        hash: "#contact"
    }
];


export const projectData: projectInfo[] =[
    {
      title: "Ecommerce-Shopify",
      description:"Shop effortlessly with our responsive e-commerce website, designed for simplicity on any device.",
      tags:["Next.js","TypeScript","React-vite","Express.js","TailwindCss","MongoDB","Redux-TK","React-Query"],
      imageUrl: "/ecom.webp",
      Allimg: ["/ecom1.webp","/ecom2.webp","/ecom3.webp","/ecom4.webp","/ecom5.webp","/ecom6.webp","/ecom7.webp","/ecom8.webp","/ecom9.webp","/ecom10.webp","/ecom11.webp","/ecom12.webp"],
      Github:"https://github.com/salman-faris-pk/E-Commerce_FullStack",
      preview:"https://ecomerce-frontend-mu.vercel.app"
    },
    {
        title: "Resort-Booking",
        description:"Seamlessly responsive and designed for effortless booking, our website delivers a smooth and intuitive user experience",
        tags:["React-vite","Typrscript","TailwindCss","MongoDB","Express.js","stripe","Nodemailer","Cloudinary"],
        imageUrl: "/rm.webp",
        Allimg: ["/room1.webp","/room2.webp","/rm3.webp","/rm4.webp","/rm5.webp","/rm6.webp","/rm7.webp","/rm8.webp","/rm9.webp","/rm10.webp","/rm11.webp","/rm12.webp","/rm13.webp","/rm14.webp","/rm15.webp"],
        Github:"https://github.com/salman-faris-pk/restau_books-mern",
        preview:"https://restau-booking-mern.onrender.com"
      },
    {
        title: "Job-finder",
        description:"Find jobs fast with our sleek, responsive platform.Enjoy a smooth, intuitive experience built for success",
        tags:["React-vite","Typescript","TailwindCss","Nest js","MongoDB","prisma","passport auth","OAuth 2.0",],
        imageUrl: "/jf.webp",
        Allimg: ["/jf1.webp","/jf2.webp","/jf3.webp","/jf4.webp","/jf5.webp","/jf6.webp","/jf7.webp","/jf8.webp","/jf9.webp","/jf10.webp"],
        Github:"https://github.com/salman-faris-pk/job-finder-react-nest",
        preview:"https://job-finder-pk.netlify.app"
      },
      {
        title: "X-Twitter clone",
        description:"A platform to connect, share posts, like content, and follow others seamlessly across all devices, bringing users closer anytime, anywhere.",
        tags:["React-vite","React-query","MongoDB","TailwindCss","Express.js","cloudinary"],
        imageUrl: "/x.webp",
        Allimg: ["/x1.webp","/x2.webp","/x3.webp","/x4.webp","/x5.webp","/x6.webp","/x7.webp","/x8.webp","/x9.webp"],
        Github:"https://github.com/salman-faris-pk/Twitter_X_MERN_Project",
      },
];



export const SkillsDatas=[
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJs",
    "Next.js",
    "TypeScript",
    "Redux ToolKit",
    "Node js",
    "ExpressJs",
    "Nest js",
    "MongoDB",
    "TailwindCSS",
    "RTK-query",
    "Git",
    "GraphQL",
    "REST APIs",
    "Reddis",
    "Framer Motion",
    "Bootstrap",
    "Prisma",
    "mongoose",
    "MVC",
    "React-Query(Tanstack)",
    "socket.io",
    'shadcn/ui',
];