// Personal Info

var bio = {
  "name" : "Edward Haigh",
  "role" : "Web Developer",
  "contacts" : {
    "mobile": "07341 662673",
    "email": "edward@starlinghaigh.com",
    "twitter": "@edwhai",
    "github": "edwardjlhaigh-uk",
    "location": "London",
  },
  "welcomeMsg" : "Hello world!",
  "skills" : ["Javascript", " jQuery", " JSON", " HTML5", " CSS3"],
  "bioPic": "http://imgur.com/Z7MyUlv.jpg"
};

// Work Objects (JSON Checked)

var work = {
  "apex": {
  "Employer": "Apex M-T",
  "Title": "Testing and Training Team",
  "Dates": "Sept 2014 - Present " },
  "nexus": {
  "Employer": "Nexus Open Systems",
  "Title": "Systems Technician",
  "Dates": "Febuary 2014 - August 2014" },
};

// Project Objects (JSON checked)

var projects = {
  "#": {
    "projectTitle": "",
    "projectDates": "",
    "projectDescription": "",
    "projectImage": ""
  },
}

// Education Objects (JSON checked)

var education = {
  "javascriptBasics": {
    "onlineTitle": "Javascript Basics",
    "onlineSchool": "Udacity",
    "onlineDates": "January 2016",
    "onlineURL": "#"
  },
  "machineLearning": {
    "onlineTitle": "Machine Learning",
    "onlineSchool": "Stanfordx",
    "onlineDates": "January 2016 - April 2016",
    "onlineURL": "https://www.coursera.org/learn/machine-learning"
  },
  "introCompSci":{
    "onlineTitle": "Introduction to Computer Science and Programming using Python",
    "onlineSchool": "MITx",
    "onlineDates": "January 2016 - April 2016",
    "onlineURL": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-6"
  },
  "college": {
  "schoolName": "Exeter College",
  "schoolDegree": "Business Management",
  "schoolDates": "2010 - 2013 " },
};

// Heading and Contacts

var formattedName = HTMLheaderName.replace("%data%", "Edward Haigh");
$("#header").append([formattedName]);
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append([formattedRole]);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append([formattedWelcomeMsg]);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append([formattedSkills]);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append([formattedMobile]);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append([formattedEmail]);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append([formattedGithub]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header").append([formattedTwitter]);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append([formattedLocation]);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend([formattedBioPic]);

// Apex

var formattedWorkExperience = HTMLworkEmployer.replace("%data%", work.apex.Employer);
$("#workExperience").append([formattedWorkExperience]);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.apex.Title);
$("#workExperience").append([formattedWorkTitle]);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.apex.Dates);
$("#workExperience").append([formattedWorkDates]);

// Nexus

var formattedWorkExperience = HTMLworkEmployer.replace("%data%", work.nexus.Employer);
$("#workExperience").append([formattedWorkExperience]);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.nexus.Title);
$("#workExperience").append([formattedWorkTitle]);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.nexus.Dates);
$("#workExperience").append([formattedWorkDates]);

// Exeter College

var formattedSchoolName = HTMLschoolName.replace("%data%", education.college.schoolName);
$("#education").append([formattedSchoolName]);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.college.schoolDegree);
$("#education").append([formattedSchoolDegree]);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.college.schoolDates);
$("#education").append([formattedSchoolDates]);

// Javascript Basics MOOC

var formattedSchoolName = HTMLonlineTitle.replace("%data%", education.javascriptBasics.onlineTitle);
$("#education").append([formattedSchoolName]);
var formattedSchoolDegree = HTMLonlineSchool.replace("%data%", education.javascriptBasics.onlineSchool);
$("#education").append([formattedSchoolDegree]);
var formattedSchoolDates = HTMLonlineDates.replace("%data%", education.javascriptBasics.onlineDates);
$("#education").append([formattedSchoolDates]);
var formattedSchoolLocation = HTMLonlineURL.replace("%data%", education.javascriptBasics.onlineURL);
$("#education").append([formattedSchoolLocation]);

// Machine Learning MOOC

var formattedSchoolName = HTMLonlineTitle.replace("%data%", education.machineLearning.onlineTitle);
$("#education").append([formattedSchoolName]);
var formattedSchoolDegree = HTMLonlineSchool.replace("%data%", education.machineLearning.onlineSchool);
$("#education").append([formattedSchoolDegree]);
var formattedSchoolDates = HTMLonlineDates.replace("%data%", education.machineLearning.onlineDates);
$("#education").append([formattedSchoolDates]);
var formattedSchoolLocation = HTMLonlineURL.replace("%data%", education.machineLearning.onlineURL);
$("#education").append([formattedSchoolLocation]);

// Introduction to Comp Sci MOOC

var formattedSchoolName = HTMLonlineTitle.replace("%data%", education.introCompSci.onlineTitle);
$("#education").append([formattedSchoolName]);
var formattedSchoolDegree = HTMLonlineSchool.replace("%data%", education.introCompSci.onlineSchool);
$("#education").append([formattedSchoolDegree]);
var formattedSchoolDates = HTMLonlineDates.replace("%data%", education.introCompSci.onlineDates);
$("#education").append([formattedSchoolDates]);
var formattedSchoolLocation = HTMLonlineURL.replace("%data%", education.introCompSci.onlineURL);
$("#education").append([formattedSchoolLocation]);
