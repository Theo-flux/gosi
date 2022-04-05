import electionActive from "../../images/explorenav/noun-election-active.png";
import electionInactive from "../../images/explorenav/noun-election-inactive.png";

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
        icon: [electionActive, electionInactive],
        children: ["2015 General Election", "2019 General Election"]
    },

    {
        id: "2",
        parent: "Demography",
        icon: [demographyActive, demographyInctive],
        children: ["Age", "Population", "Language", "Migration", "Citizenship"]
    },

    {
        id: "3",
        parent: "Economics",
        icon: [economicsActive, economicsInactive],
        children: ["Employment", "Annual Income", "Internet Access"]
    },

    {
        id: "4",
        parent: "Service Delivery",
        icon: [serviceActive, serviceInactive],
        children: ["Water", "Electricity", "Toilet Facilities", "Refuse Disposal"]
    },

    {
        id: "5",
        parent: "Household",
        icon: [homeActive, homeInactive],
        children: ["Houseolds", "Houseold Ownership", "Houseold Income", "House Goods"]
    },

    {
        id: "6",
        parent: "Education",
        icon: [educationActive, educationInactive],
        children: ["Education Level"]
    },

    {
        id: "7",
        parent: "Children",
        icon: [childrenActive, childrenInactive],
        children: ["Child Population", "Parents", "School Attendance", "Employment of 15-17 years"]
    }
]

export {data};