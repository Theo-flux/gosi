import electionActive from "../../images/explorenav/noun-election-active.svg";
import electionInactive from "../../images/explorenav/noun-election-inactive.svg";

import demographyActive from "../../images/explorenav/noun-demography-active.png";
import demographyInctive from "../../images/explorenav/noun-demography-inactive.png";

import economicsActive from "../../images/explorenav/noun-economics-active.png";
import economicsInactive from "../../images/explorenav/noun-economics-inactive.png";

import serviceActive from "../../images/explorenav/noun-service-active.png";
import serviceInactive from "../../images/explorenav/noun-service-inactive.png";

import homeActive from "../../images/explorenav/noun-home-active.png";
import homeInactive from "../../images/explorenav/noun-home-inactive.png";

import educationActive from "../../images/explorenav/noun-education-active.png";
import educationInactive from "../../images/explorenav/noun-education-inactive.png";

import childrenActive from "../../images/explorenav/noun-children-active.png";
import childrenInactive from "../../images/explorenav/noun-children-inactive.png";

const data = [
    {
        id: "1",
        parent: "Election",
        icon: [electionInactive, electionActive],
        children: ["2015 General Election", "2019 General Election"]
    },

    {
        id: "2",
        parent: "Demography",
        icon: [demographyInctive, demographyActive],
        children: ["Age", "Population", "Language", "Migration", "Citizenship"]
    },

    {
        id: "3",
        parent: "Economics",
        icon: [economicsInactive, economicsActive],
        children: ["Employment", "Annual Income", "Internet Access"]
    },

    {
        id: "4",
        parent: "Service Delivery",
        icon: [serviceInactive, serviceActive],
        children: ["Water", "Electricity", "Toilet Facilities", "Refuse Disposal"]
    },

    {
        id: "5",
        parent: "Household",
        icon: [homeInactive, homeActive],
        children: ["Houseolds", "Houseold Ownership", "Houseold Income", "House Goods"]
    },

    {
        id: "6",
        parent: "Education",
        icon: [educationInactive, educationActive],
        children: ["Education Level"]
    },

    {
        id: "7",
        parent: "Children",
        icon: [childrenInactive, childrenActive],
        children: ["Child Population", "Parents", "School Attendance", "Employment of 15-17 years"]
    }
]

const help = [
    {
        id: "1",
        icon: "ri-question-fill",
        name: "Home"
    },

    {
        id: "2",
        icon: "ri-question-fill",
        name: "Tutorial"
    }
]

const socials = [
    {
        id: "1",
        icon: "ri-twitter-fill",
    },

    {
        id: "2",
        icon: "ri-facebook-fill",
    },

    {
        id: "3",
        icon: "ri-instagram-fill",
    },

    {
        id: "4",
        icon: "ri-youtube-fill",
    }

]

export {data, help, socials};