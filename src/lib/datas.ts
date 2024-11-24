import { Link,projectInfo } from "./types";




export const links: Link[]=[
    {
        nameEng: "Home",
        hash: "#home"
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
      title: "Ecommerce-shopping-Website",
      description:"Shop effortlessly with our responsive e-commerce website, designed for simplicity on any device.",
      tags:["Next.js","TypeScript","React-vite","Express.js","TailwindCss","MongoDB","Redux-TK","React-Query"],
      imageUrl: "/ecom.jpeg",
      Allimg: ["/ecom1.png","/ecom2.png","/ecom3.png","/ecom4.png","/ecom5.png","/ecom6.png","/ecom7.png","/ecom8.png","/ecom9.png","/ecom10.png","/ecom11.png","/ecom12.png"],
      link:"https://www.google.com"

    },
    {
        title: "Chat Me app",
        description:"Engage in real-time conversations with users across all devices, ensuring a responsive and seamless chatting experience.",
        tags:["React-vite","React-tk","TailwindCss","MongoDB","Express.js","Formik","socket.io"],
        imageUrl: "/chat.png",
        Allimg: ["/chat2.png","/chat2.png","/chat3.png","/chat4.png","/chat5.png","/chat6.png"],
        link:"https://www.google.com"
  
      },
      {
        title: "X-Twitter clone",
        description:"A platform to connect, share posts, like content, and follow others seamlessly across all devices, bringing users closer anytime, anywhere.",
        tags:["React-vite","React-query","MongoDB","TailwindCss","Express.js","cloudinary"],
        imageUrl: "/x.png",
        Allimg: ["/x1.png","/x2.png","/x3.png","/x4.png","/x5.png","/x6.png","/x7.png","/x8.png","/x9.png"],
        link:"https://www.google.com"
  
      },
      {
        title: "waste-management",
        description:"Report waste, schedule pickups, and earn rewards for your efforts in creating a cleaner and more sustainable community.",
        tags:["Next.js","Mongoose","TailwindCss","TypeScript","web3auth","firebase-storage","leaflet"],
        imageUrl: "/wastee.jpg",
        Allimg: ["/waste1.png","/waste2.png","/waste3.png","/waste4.png","/waste4.png","/waste5.png","/waste6.png","/waste7.png","/waste8.png","/waste9.png"],
        link:"https://www.google.com"
  
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
    "Node.js",
    "ExpressJs",
    "MongoDB",
    "TailwindCSS",
    "Git",
    "Framer Motion",
    "React-Query(Tanstack)",
    "socket.io",
    'shadcn/ui',
];