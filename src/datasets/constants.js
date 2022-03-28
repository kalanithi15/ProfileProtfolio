import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { CgBriefcase } from "react-icons/cg";
import { BiNews } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";
import {
  AiOutlineYoutube,
  AiOutlineBehance,
  AiFillGithub,
  AiOutlineFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

// Common
export const menuContent = [
  { icon: <BiHomeCircle />, isSelected: true },
  { icon: <BiUser />, isSelected: false },
  { icon: <CgBriefcase />, isSelected: false },
  { icon: <BiNews />, isSelected: false },
  { icon: <MdOutlineContactPage />, isSelected: false },
];

//HomePage
export const HomePageDetails = {
  profilePic: "img/dinesh.jpg",
  intro: "Hi, I'm ",
  name: "Dinesh Kumar Elangovan.",
  role: "A Full Stack Developer.",
  desc: "I'm a Full Stack Developer, I love to create beautiful and functional websites. Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia, libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!",
};

//About
export const AboutPageDetails = {
  title: "About",
  titlespan: "Me",
  titleBg: "my stats",
  subTitle1: "My Skills",
  subTitle2: "My Timeline",
  infoTitle: "Information About me",
  infoDesc1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, vero eos vel nemo eius voluptatem dicta tenetur modi.",
  infoDesc2:
    "La musica delectus dolore fugiat exercitationem a, ipsum quidem quo enim natus accusamus labore dolores nam. Unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non necessitatibus deleniti eum soluta.",
};

export const HighlightItems = [
  {
    mainItem: "650+",
    secondItem: "Projects ",
    thirdItem: "Completed",
  },
  {
    mainItem: "10+",
    secondItem: "Years of ",
    thirdItem: "experience",
  },
  {
    mainItem: "300+",
    secondItem: "Happy ",
    thirdItem: "Clients",
  },
  {
    mainItem: "400+",
    secondItem: "Customer ",
    thirdItem: "reviews",
  },
];

export const WorkExperience = [
  {
    icon: <CgBriefcase />,
    duration: "2010 - present",
    title: "Web Developer",
    employer: " - Vircrosoft",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasivero fugit.",
  },
  {
    icon: <CgBriefcase />,
    duration: "2008 - 2011",
    title: "Software Engineer",
    employer: " - Boogle, Inc.",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasivero fugit.",
  },
  {
    icon: <CgBriefcase />,
    duration: "2016 - 2017",
    title: "C++ Programmer",
    employer: " - Vircrosoft",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasivero fugit.",
  },
  {
    icon: <CgBriefcase />,
    duration: "2009 - 2013",
    title: "Business Degree",
    employer: " - Sussex University",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasivero fugit.",
  },
  {
    icon: <CgBriefcase />,
    duration: "2013 - 2016",
    title: "Computer Science Degree",
    employer: " - Brookes University",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasivero fugit.",
  },

  {
    icon: <CgBriefcase />,
    duration: "2017 - present",
    title: "3d Animation",
    employer: " - Brighton University",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasivero fugit.",
  },
];

export const BlogPageDetails = {
  title: "My",
  titlespan: "Blogs",
  titleBg: "my Blogs",
};

export const BlogContentData = [
  {
    img: "img/blog1.jpg",
    title: "How to Create Your Own Website",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. \nDoloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    img: "img/blog2.jpg",
    title: "How to Become an Expert in Web Design",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. \nDoloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    img: "img/blog3.jpg",
    title: "Become a Web Designer in 10 Days",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. \nDoloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    img: "img/port1.jpg",
    title: "Debbuging made easy with Web Inspector",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. \nDoloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    img: "img/port2.jpg",
    title: "Get started with Web Design and UI Design",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. \nDoloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    img: "img/port4.jpg",
    title: "This is what you need to know about Web Design",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. \nDoloribus natus voluptas, eos obcaecati recusandae amet?",
  },
];

export const PortFolioPageDetails = {
  title: "My",
  titlespan: "Portfolio",
  titleBg: "my work",
  subdesc:
    "Here is some of my work that I've done in various programming languages.",
};

export const PortfolioContent = [
  {
    img: "/img/port1.jpg",
    title: "Project Source",
    links: [<AiFillGithub />, <AiOutlineBehance />, <AiOutlineYoutube />],
  },
  {
    img: "/img/port2.jpg",
    title: "Project Source",
    links: [<AiFillGithub />, <AiOutlineBehance />, <AiOutlineYoutube />],
  },
  {
    img: "/img/port3.jpg",
    title: "Project Source",
    links: [<AiFillGithub />, <AiOutlineBehance />, <AiOutlineYoutube />],
  },
  {
    img: "/img/port4.jpg",
    title: "Project Source",
    links: [<AiFillGithub />, <AiOutlineBehance />, <AiOutlineYoutube />],
  },
  {
    img: "/img/port5.jpg",
    title: "Project Source",
    links: [<AiFillGithub />, <AiOutlineBehance />, <AiOutlineYoutube />],
  },
  {
    img: "/img/port6.jpg",
    title: "Project Source",
    links: [<AiFillGithub />, <AiOutlineBehance />, <AiOutlineYoutube />],
  },
  {
    img: "/img/port7.jpg",
    title: "Project Source",
    links: [<AiFillGithub />, <AiOutlineBehance />, <AiOutlineYoutube />],
  },
];

export const Skills = [
  { skill: "html5", progress: "80%" },
  { skill: "css3", progress: "95%" },
  { skill: "javascript", progress: "75%" },
  { skill: "ReactJs", progress: "75%" },
  { skill: "NodeJs", progress: "87%" },
  { skill: "Python", progress: "70%" },
];

//Contact Page
export const ContactData = [
  { icon: "", title: "Location", desc: ": London, united Kingdom" },
  { icon: "", title: "Email", desc: ": maclinzuniversal@gmail.com" },
  { icon: "", title: "Education", desc: ": Sussex University, East Sussex" },
  { icon: "", title: "Mobile Number", desc: ": 07522670617" },
  { icon: "", title: "Languages", desc: ": Afrikaans, English, Spanish" },
];

export const SocialLinkData = [
  { url: "www.facebook.com", target: "_blank", icon: <AiOutlineFacebook /> },
  { url: "#", target: "_blank", icon: <AiFillTwitterCircle /> },
  { url: "#", target: "_blank", icon: <AiFillGithub /> },
  { url: "#", target: "_blank", icon: <AiOutlineYoutube /> },
];
