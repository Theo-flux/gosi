import electionActive from "../../images/explorenav/noun-election-active.svg";
import electionInactive from "../../images/explorenav/noun-election-inactive.svg";

import demographyActive from "../../images/explorenav/noun-demography-active.svg";
import demographyInctive from "../../images/explorenav/noun-demography-inactive.svg";

import economicsActive from "../../images/explorenav/noun-economics-active.svg";
import economicsInactive from "../../images/explorenav/noun-economics-inactive.svg";

import serviceActive from "../../images/explorenav/noun-service-active.svg";
import serviceInactive from "../../images/explorenav/noun-service-inactive.svg";

import homeActive from "../../images/explorenav/noun-home-active.svg";
import homeInactive from "../../images/explorenav/noun-home-inactive.svg";

import educationActive from "../../images/explorenav/noun-education-active.svg";
import educationInactive from "../../images/explorenav/noun-education-inactive.svg";

import childrenActive from "../../images/explorenav/noun-children-active.svg";
import childrenInactive from "../../images/explorenav/noun-children-inactive.svg";

const data = [
  {
    is: "1",
    parent: "Election",
    icon: [electionInactive, electionActive],
    children: [
      "2011 General Election",
      "2015 General Election",
      "2019 General Election",
    ],
  },
  {
    id: "2",
    parent: "Demography",
    icon: [demographyInctive, demographyActive],
    children: ["Age", "Population", "Language"],
  },

  {
    id: "3",
    parent: "Service Delivery",
    icon: [serviceInactive, serviceActive],
    children: ["Water", "Electricity", "Toilet Facilities", "Refuse Disposal"],
  },

  {
    id: "4",
    parent: "Household",
    icon: [homeInactive, homeActive],
    children: ["Households", "Household Ownership"],
  },

  {
    id: "5",
    parent: "Children",
    icon: [childrenInactive, childrenActive],
    children: ["Child Population", "School Attendance"],
  },
];

const help = [
  {
    id: "1",
    icon: "ri-question-fill",
    name: "Home",
  },

  {
    id: "2",
    icon: "ri-question-fill",
    name: "Tutorial",
  },
];

const socials = [
  {
    id: "1",
    icon: "ri-twitter-fill",
    url: "https://twitter.com/dtiGlobal",
  },

  {
    id: "2",
    icon: "ri-facebook-fill",
    url: "https://www.facebook.com/DTInigeria/",
  },

  // {
  //     id: "3",
  //     icon: "ri-instagram-fill",
  //     url: ""
  // }
];

export { data, help, socials };
