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
    "github": "edwardjlhaigh-uk",
    "location": "London",
  },
  "welcome message" : "Greetings!",
  "skills" : ["Javascript", "jQuery", "HTML5", "CSS3"],
  "bioPic": "images/fry.jpg"
};

var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
$("#header").append([formattedMobile]);

var formattedBioPic = HTMLbiopic.replace("%data%", bio.biopic);
$("#header").append([formattedBioPic]);
