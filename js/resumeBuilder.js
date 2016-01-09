var formattedName = HTMLheaderName.replace("%data%", "Edward Haigh");
$("#header").append([formattedName]);

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append([formattedRole]);

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
  "skills" : ["Javascript", " jQuery", " HTML5", " CSS3"],
  "bioPic": "http://imgur.com/Z7MyUlv.jpg"
};

var work = {
  "workEmployer": "Apex M-T",
  "workTitle": "Testing and Training Team",
  "workDates": "Sept 2014 - Present",
  "workLocation": "London",
}

var education = {
  "schoolName": "Exeter College",
  "schoolDegree": "Business Management",
  "schoolDates": "2010 - 2013",
  "schoolLocation": "Exeter",
}

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

var formattedWorkExperience = HTMLworkEmployer.replace("%data%", work.workEmployer);
$("#workExperience").prepend([formattedWorkExperience]);

var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.workTitle);
$("#workExperience").append([formattedWorkTitle]);

var formattedWorkDates = HTMLworkDates.replace("%data%", work.workDates);
$("#workExperience").append([formattedWorkDates]);

var formattedLocation = HTMLworkLocation.replace("%data%", work.workLocation);
$("#workExperience").append([formattedLocation]);
