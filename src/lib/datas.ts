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
      imageUrl: "/ecom.jpeg",
      Allimg: ["/ecom1.png","/ecom2.png","/ecom3.png","/ecom4.png","/ecom5.png","/ecom6.png","/ecom7.png","/ecom8.png","/ecom9.png","/ecom10.png","/ecom11.png","/ecom12.png"],
      Github:"https://github.com/salman-faris-pk/E-Commerce_FullStack",
      preview:"https://ecomerce-frontend-mu.vercel.app"
    },
    {
        title: "Resort-Booking",
        description:"Seamlessly responsive and designed for effortless booking, our website delivers a smooth and intuitive user experience",
        tags:["React-vite","Typrscript","TailwindCss","MongoDB","Express.js","stripe","Nodemailer","Cloudinary"],
        imageUrl: "/rm.png",
        Allimg: ["/room1.png","/room2.png","/rm3.png","/rm4.png","/rm5.png","/rm6.png","/rm7.png","/rm8.png","/rm9.png","/rm10.png","/rm11.png","/rm12.png","/rm13.png","/rm14.png","/rm15.png"],
        Github:"https://github.com/salman-faris-pk/restau_books-mern",
        preview:"https://restau-booking-mern.onrender.com"
      },
    {
        title: "Job-finder",
        description:"Find jobs fast with our sleek, responsive platform.Enjoy a smooth, intuitive experience built for success",
        tags:["React-vite","Typescript","TailwindCss","Nest js","MongoDB","prisma","passport auth","OAuth 2.0",],
        imageUrl: "/jf.jpg",
        Allimg: ["/jf1.png","/jf2.png","/jf3.png","/jf4.png","/jf5.png","/jf6.png","/jf7.png","/jf8.png","/jf9.png","/jf10.png"],
        Github:"https://github.com/salman-faris-pk/job-finder-react-nest",
        preview:"https://job-finder-pk.netlify.app"
      },
      {
        title: "X-Twitter clone",
        description:"A platform to connect, share posts, like content, and follow others seamlessly across all devices, bringing users closer anytime, anywhere.",
        tags:["React-vite","React-query","MongoDB","TailwindCss","Express.js","cloudinary"],
        imageUrl: "/x.png",
        Allimg: ["/x1.png","/x2.png","/x3.png","/x4.png","/x5.png","/x6.png","/x7.png","/x8.png","/x9.png"],
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