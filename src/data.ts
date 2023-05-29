import Card1 from './assets/card1.png'
import Card2 from './assets/card2.png'
import Card3 from './assets/card3.png'
import Card4 from './assets/card4.png'
import Card5 from './assets/card5.png'
import Card6 from './assets/card6.jpg'
import Card7 from './assets/card7.png'
import Card8 from './assets/card8.png'
const menu = [
  {
    id: 1,
    name: "Office",
    navLink: "/",
  },
  {
    id: 2,
    name: "Windows",
    navLink: "/",
  },
  {
    id: 3,
    name: "Surface",
    navLink: "/",
  },
  {
    id: 4,
    name: "Xbox",
    navLink: "/",
  },
  {
    id: 5,
    name: "Deals",
    navLink: "/",
  },
  {
    id: 6,
    name: "Support",
    navLink: "/",
  },
];

const card_top = [
  {
    id: 1,
    imageUrl: Card1,
    title: "New Surface Pro",
    desc: "See how Katie Sowers, Asset. Coach for the 49ers,uses Surface Pro 7 to put her plans into play.",
    navLink: "/",
    navLinkName: "LEARN MORE",
  },
  {
    id: 2,
    imageUrl: Card2,
    title: "New Surface Laptop 3",
    desc: " Express Yourself Powerfully with a thin, light, and elegant design,faster performance, and up to 11.5 hours battery life.",
    navLink: "/",
    navLinkName: "LEARN MORE",
  },
  {
    id: 3,
    imageUrl: Card3,
    title: "Save $150 + free controller",
    desc: "Buy an Xbox One X console and double your fun with a free select extra controller. Starting at $349",
    navLink: "/",
    navLinkName: "LEARN MORE",
  },
  {
    id: 4,
    imageUrl: Card4,
    title: "The new Microsoft Edge",
    desc: " Expect more. World class performance, with more privacy, more productivity, and more value.",
    navLink: "/",
    navLinkName: "LEARN MORE",
  },
];

const card_bottom = [
  {
    id: 1,
    imageUrl: Card5,
    title: "New Surface Pro",
    desc: "See how Katie Sowers, Asset. Coach for the 49ers,uses Surface Pro 7 to put her plans into play.",
    navLink: "/",
    navLinkName: "LEARN MORE",
  },
  {
    id: 2,
    imageUrl: Card6,
    title: "New Surface Pro",
    desc: "See how Katie Sowers, Asset. Coach for the 49ers,uses Surface Pro 7 to put her plans into play.",
    navLink: "/",
    navLinkName: "LEARN MORE",
  },
  {
    id: 3,
    imageUrl: Card7,
    title: "New Surface Pro",
    desc: "See how Katie Sowers, Asset. Coach for the 49ers,uses Surface Pro 7 to put her plans into play.",
    navLink: "/",
    navLinkName: "LEARN MORE",
  },
  {
    id: 4,
    imageUrl: Card8,
    title: "New Surface Pro",
    desc: "See how Katie Sowers, Asset. Coach for the 49ers,uses Surface Pro 7 to put her plans into play.",
    navLink: "/",
    navLinkName: "LEARN MORE",
  },
];

const linkItems=[
  {
    id:1,
    title:"What's New",
    linkUrl:'/',
    link1:'Surface Pro X',
    link2:'Surface Laptop',
    link3:'Surface Pro 7',
    link4:'Windows 10 apps',
    link5:'Office apps',
  },
  {
    id:2,
    title:"Microsoft Store",
    linkUrl:'/',
    link1:'Account Profile',
    link2:'Download Center',
    link3:'Microsoft Store Support',
    link4:'Retums',
    link5:'Older tracking',
  },
  {
    id:3,
    title:"Education",
    linkUrl:'/',
    link1:'Microsoft in education',
    link2:'Office for students',
    link3:'Office 365 for schools',
    link4:'Deals for students',
    link5:'Microsoft Azure',
  },
  {
    id:4,
    title:"Enterprice",
    linkUrl:'/',
    link1:'Azure',
    link2:'App Source',
    link3:'Automotive',
    link4:'Govemment',
    link5:'Healthcare',
  },
  {
    id:5,
    title:"Developer",
    linkUrl:'/',
    link1:'Visual Studio',
    link2:'Windows Dev Center',
    link3:'Developer Network',
    link4:'Tech Net',
    link5:'Microsoft Developer',
  },
  {
    id:6,
    title:"Company",
    linkUrl:'/',
    link1:'Careers',
    link2:'About Microsoft',
    link3:'Company news',
    link4:'privacy at Microsoft',
    link5:'Inverstore',
  },
]

export const getMenu = () => {
  return menu;
};

export const getCard = (position: string) => {
  if (position === "top") return card_top;
  else if(position==="bottom") return card_bottom
};

export const getLinkItems=()=>{
  return linkItems
}
