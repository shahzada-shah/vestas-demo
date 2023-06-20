import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { UisBolt, UisCog, UisChartLine } from "@iconscout/react-unicons-solid";

import Features1Img from "./assets/img/features-1.png";
import Features2Img from "./assets/img/features-2.png";
import TurbineImg1 from "./assets/img/turbine1.png";
import TurbineImg2 from "./assets/img/turbine2.png";
import TurbineImg3 from "./assets/img/turbine3.png";
import TurbineImg4 from "./assets/img/turbine4.png";

export const navigation = [
  {
    name: "Products",
    href: "products",
  },
  {
    name: "Services",
    href: "services",
  },
  {
    name: "Development",
    href: "development",
  },
  {
    name: "Careers",
    href: "careers",
  },
];

export const hero = {
  title: "Renewable Energy Leader",
  subtitle:
    "Vestas is a market leader in the North American wind industry with nearly 45,000 MW installed and 40,000+ MW under service in the U.S. and Canada. ",
  buttonText: "Learn More",
  buttonText1: "Careers",
};

export const stats = [
  {
    value: "45,000 MW",
    text: "Turbines Installed",
  },
  {
    value: "40,000 MW",
    text: "Turbines Under Service",
  },
  {
    value: "+5,000",
    text: "Employees In The U.S. & Canada",
  },
  {
    value: "$1.6 billion",
    text: "Spent On U.S. Supply Chain",
  },
];

export const features = {
  image: <Features1Img />,
  title: "Wind Turbine Portfolio",
  subtitle:
    "Vestas offers a range of products across three wind turbine platforms. The EnVentus™, 4 MW and 2 MW platforms provides an extensive portfolio of wind turbines which are each suited to specific conditions and requirements of your wind project.",
  buttonText: "Show Now",
  items: [
    {
      icon: <UisBolt />,
      title: "Onshore and offshore",
      subtitle:
        "With Vestas as your supplier and business partner, you are basing your investment on documented processes: More than 40 years experience, insights and knowledge of wind.",
    },
    {
      icon: <UisCog />,
      title: "Operations & Maintenance",
      subtitle:
        "We provide a range of different offerings, such as service and training, and work in close collaboration with our customers to help them find the optimum solution for operating their wind power plant.",
    },
    {
      icon: <UisChartLine />,
      title: "Plant & Energy Solutions",
      subtitle:
        "Vestas offers you a wide range of options and solutions to support you in every step of your value chain.",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "Wind Turbine Services",
    subtitle:
      "Vestas now service more than 55,000 wind turbines and more than 10,000 dedicated service technicians across 74 countries work committedly to maintain and support the biggest wind turbine fleet in the world. ",
    subTitle2:
      "With more than 140 GW under service, Vestas helps remove over a hundred million tonnes of CO2 every year from the atmosphere by providing reliable, sustainable, and cost-effective renewable energy, meeting global energy.",
  },
};

export const OffShoreTurbines = {
  title: "Offshore Wind Turbines",
  subtitle:
    "Vestas offshore turbine platforms are designed with maximum reliability, ease of installation and servicing, and world-class performance in mind.",
  link: "Learn more",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: "V236-15.0 MW™",
      image: <TurbineImg1 />,
    },
    {
      name: "V174-9.5 MW™",
      image: <TurbineImg2 />,
    },
    {
      name: "V164-10.0 MW™",
      image: <TurbineImg3 />,
    },
    {
      name: "V164-9.5 MW™",
      image: <TurbineImg4 />,
    },
  ],
};

export const newsletter = {
  title: "Wind. It means the world to us.™",
  subtitle: "Stay Connected With Vestas Updates",
  placeholder: "Enter your email address",
  buttonText: "Sign Up",
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoFacebook />,
      href: "#",
    },
  ],
};
